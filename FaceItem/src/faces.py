import time
import sys
import os
import numpy as np
import cv2
import pickle

from object_detection_request import *
from google.cloud import vision


image_dir = os.path.join("/var/www/sapient/FaceItem/src/analysis")

# face recognition engine
face_cascade = cv2.CascadeClassifier('/var/www/sapient/FaceItem/src/cascades/data/haarcascade_frontalface_alt2.xml')
eye_cascade = cv2.CascadeClassifier('/var/www/sapient/FaceItem/src/cascades/data/haarcascade_eye.xml')
smile_cascade = cv2.CascadeClassifier('/var/www/sapient/FaceItem/src/cascades/data/haarcascade_smile.xml')

# face information of the people
recognizer = cv2.face.LBPHFaceRecognizer_create()
recognizer.read("/var/www/sapient/FaceItem/src/recognizers/face-trainner.yml")

# pairing names of the people with the face-trainner.yml
labels = {"person_name": 1}
with open("/var/www/sapient/FaceItem/src/pickles/face-labels.pickle", 'rb') as f:
    og_labels = pickle.load(f)
    labels = {v:k for k,v in og_labels.items()}



cap = cv2.VideoCapture('/var/www/input.mp4')
# cap = cv2.VideoCapture(0)

image_id = 0

#f= open("output.txt","a+")

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)
# analyse the live stream and store it in the static folder only works for the Chrome and firefox
fourcc = cv2.VideoWriter_fourcc(*'mjpg')
out = cv2.VideoWriter('/var/www/output.avi', fourcc, 20.0, (width, height))


font = cv2.FONT_HERSHEY_SIMPLEX
stroke = 2


# while(True):
while(cap.isOpened()):

    # change the live frame to gray for recognition
    ret, frame = cap.read()
    try:
        gray  = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    except Exception:
        out.release()
        sys.exit("face/item video finished!")

    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.5, minNeighbors=5)
    for (x, y, w, h) in faces:

        
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = frame[y:y+h, x:x+w]
        
        # outline the faces within the frame
        color = (255, 0, 0)
        end_cord_x = x + w
        end_cord_y = y + h
        cv2.rectangle(frame, (x, y), (end_cord_x, end_cord_y), color, stroke)

        # if the confidence rate is high enough, put the name in blue onto the frame
        id_, conf = recognizer.predict(roi_gray)
        if conf>=2:
            name = labels[id_]
            color = (255, 255, 255)

            cv2.putText(frame, name, (x,y), font, 1, color, stroke, cv2.LINE_AA)

    # process the image recognition every five frames
    if image_id % 5 == 0:
        cv2.imwrite(os.path.join(image_dir, "%d.png" %image_id), frame)

        color = (123, 222, 0)

        client = vision.ImageAnnotatorClient()

        with open(os.path.join(image_dir, "%d.png" %image_id), 'rb') as image_file:
            content = image_file.read()
        image = vision.types.Image(content=content)

        objects = client.object_localization(image=image).localized_object_annotations

        # Item recognition returns the objects
        for object_ in objects:
            pts = []
            count = 0

            # the positions of the points of the item outlines which is in the form (num, num)
            for vertex in object_.bounding_poly.normalized_vertices:
                if count == 3:
                    cv2.putText(frame, '{}'.format(object_.name), (int(vertex.x * 1280), int(vertex.y * 720 + 28)), font, 1, color, stroke, cv2.LINE_AA)
                # f.write(' - ({}, {})\n'.format(vertex.x, vertex.y))
                pts.append([vertex.x*1280, vertex.y*720])
                count +=1
            a = np.asarray(pts, np.int32)
            a = a.reshape((-1,1,2))
            # put the outlines of the objects onto the frame
            cv2.polylines(frame,[a],True,(0,255,255))

        # smiling detection
        # subitems = smile_cascade.detectMultiScale(roi_gray)
        # for (ex,ey,ew,eh) in subitems:
        #   cv2.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)

        cv2.imwrite(os.path.join(image_dir, "test%d.png" %image_id), frame)
        #print("sucess")

    image_id += 1

    if cv2.waitKey(20) & 0xFF == ord('q'):
        break

    out.write(frame)

# close and save video writing on, close the video capturing
out.release()
cap.release()

