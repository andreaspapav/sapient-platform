import numpy as np
import cv2

cap = cv2.VideoCapture(0)

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) + 0.5)
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) + 0.5)

fourcc = cv2.VideoWriter_fourcc(*'avc1')
out = cv2.VideoWriter('true.mp4', fourcc, 20.0, (width, height))

while(cap.isOpened()):
    ret, frame = cap.read()
    if ret == True:
        out.write(frame)

        cv2.imshow('frame',frame)
        if (cv2.waitKey(1) & 0xFF) == ord('q'):
            break
    else:
        break


cap.release()
cv2.destroyAllWindows()