from object_detection_request import *



detection = ItemRecognition("/var/www/file.jpg")
detection.localize_objects()

#image_id = 0

#while (image_id < 1):
#    	detection = ItemRecognition("analysis/%d.png" %image_id)
#    	detection.localize_objects()
#    	image_id+=1
