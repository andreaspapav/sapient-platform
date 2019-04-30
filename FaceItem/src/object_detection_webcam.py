from object_detection_request import *



detection = ItemRecognition("/var/www/sapient/Web/uploads/webcam.jpg")
detection.localize_objects()
