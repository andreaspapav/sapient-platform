import time
import os
import numpy as np
import cv2
import pickle

from object_detection_request import *


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
image_dir = os.path.join(BASE_DIR, "analysis")

face_cascade = cv2.CascadeClassifier('cascades/data/haarcascade_frontalface_alt2.xml')
eye_cascade = cv2.CascadeClassifier('cascades/data/haarcascade_eye.xml')
smile_cascade = cv2.CascadeClassifier('cascades/data/haarcascade_smile.xml')

recognizer = cv2.face.LBPHFaceRecognizer_create()
recognizer.read("./recognizers/face-trainner.yml")

labels = {"person_name": 1}
with open("pickles/face-labels.pickle", 'rb') as f:
	og_labels = pickle.load(f)
	labels = {v:k for k,v in og_labels.items()}



# cap = cv2.VideoCapture(0)
cap = cv2.VideoCapture('output.mp4')

image_id = 0

##############################################################################
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)

# print("cv2.CAP_PROP_FRAME_WIDTH is" + str(cv2.CAP_PROP_FRAME_HEIGHT));

# Define the codec and create VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'mp4v') # Be sure to use the lower case
out = cv2.VideoWriter('example.mp4', fourcc, 20.0, (width, height))
##############################################################################

while(cap.isOpened()):
    ret, frame = cap.read()
    gray  = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.5, minNeighbors=5)
    for (x, y, w, h) in faces:
    	roi_gray = gray[y:y+h, x:x+w] #(ycord_start, ycord_end)
    	roi_color = frame[y:y+h, x:x+w]
		
    	color = (255, 0, 0) #BGR 0-255 
    	stroke = 2
    	end_cord_x = x + w
    	end_cord_y = y + h
    	cv2.rectangle(frame, (x, y), (end_cord_x, end_cord_y), color, stroke)

    	cv2.imwrite(os.path.join(image_dir, "%d.png" %image_id), frame)
        
    	id_, conf = recognizer.predict(roi_gray)
    	if conf>=2:
    		font = cv2.FONT_HERSHEY_SIMPLEX
    		name = labels[id_]
    		color = (255, 255, 255)
    		stroke = 2

    		cv2.putText(frame, name, (x,y), font, 1, color, stroke, cv2.LINE_AA)
    		cv2.imwrite(os.path.join(image_dir, "%d.png" %image_id), frame)

    	# detection = ItemRecognition("analysis/%d.png" %image_id)
    	# detection.localize_objects()
    	time.sleep(0)
    	image_id += 1


    cv2.imshow('frame',frame)
    out.write(frame)
    
cap.release()
cv2.destroyAllWindows()
