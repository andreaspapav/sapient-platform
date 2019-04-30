# class ItemRecognition:
#     def __init__ (self, path):
#         print("sucess")
#         self.path = path
    
#     def localize_objects(self):
#         from google.cloud import vision
#         client = vision.ImageAnnotatorClient()

#         with open(self.path, 'rb') as image_file:
#             content = image_file.read()
#         image = vision.types.Image(content=content)

#         objects = client.object_localization(
#             image=image).localized_object_annotations

#         print('Number of objects found: {}'.format(len(objects)))
#         for object_ in objects:
#             print('\n{} (confidence: {})'.format(object_.name, object_.score))
#             print('Normalized bounding polygon vertices: ')
#             for vertex in object_.bounding_poly.normalized_vertices:
#                 print(' - ({}, {})'.format(vertex.x, vertex.y))

# class ItemRecognition:
#     def __init__ (self, path):
#         print("sucess")
#         self.path = path
    
#     def localize_objects(self):
#         f= open("output.txt","a+")
#         from google.cloud import vision
#         client = vision.ImageAnnotatorClient()

#         with open(self.path, 'rb') as image_file:
#             content = image_file.read()
#         image = vision.types.Image(content=content)

#         objects = client.object_localization(
#             image=image).localized_object_annotations

#         f.write('Number of objects found: {}\n\n\n'.format(len(objects)))
#         for object_ in objects:
#             f.write('{} (confidence: {})\n'.format(object_.name, object_.score))
#             f.write('Normalized bounding polygon vertices:\n')
#             for vertex in object_.bounding_poly.normalized_vertices:
#                 f.write(' - ({}, {})\n'.format(vertex.x, vertex.y))
#         f.close()

class ItemRecognition:
    def __init__ (self, path):
#        print("sucess")
        self.path = path
    
    def localize_objects(self):
#        f= open("output.txt","a+")
        from google.cloud import vision
        client = vision.ImageAnnotatorClient()

        with open(self.path, 'rb') as image_file:
            content = image_file.read()
        image = vision.types.Image(content=content)

        objects = client.object_localization(
            image=image).localized_object_annotations

#        f.write('Number of objects found: {}\n\n\n'.format(len(objects)))
        for object_ in objects:
#            f.write('The object detected is {} with confidence rate of {}\n'.format(object_.name, round(object_.score,2)))
            print('The object detected is {} with confidence rate of {}\n'.format(object_.name, round(object_.score,2)))
#        f.close()
