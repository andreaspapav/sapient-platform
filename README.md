<h1>SAPIENT Platform - The intelligent way of monitoring CCTVs</h1>

<h3>CCTV ANALYSIS FOR CAMDEN COUNCIL</h3>

The area of Camden its well known for its high levels of criminal activity. The project assigned to our team is related with the CCTV monitoring of the whole Camden Borough. Our client is the Camden Council and they have asked us to develop a software that will use AI(Artificial Intelligence) as well as ML(Machine Learning) to monitor all their CCTVs in order to notice any anti-social behaviour captured by the cameras. 

Our solution is to build three different types of image recognitions, which are Posture, Face and Item. And then, we will apply machine learning to them in order to train the machine to recognise the behaviour and the appearance of objects. After that, we will integrate them into a web application in order to show that the combination of machine learning and image recognitions that we built is truely functional. Finally, we will train the neural network and make it smarter and more accurate over time. 

Our achievement is a web application allowing the machine to perform the image recognition (posture, face and item) on the image, video and live video uploaded by users.

<h2>Key Features</h2>

<h3>Posture Recognition API</h3>
Developed a posture recognition which can recognise any amount of humans in the frame and the postures of sitting, standing and laying.

<h3>Face Recognition API</h3>
Added the face recognition api as it could be used to seperate each person captured in the video footage as an individual. Its used in order to track down people moving in the same area over time as it can be considered suspicious behaviour. In the future it can be used with association to the police database in order to track down wanted fugitives.

<h3>Object Recognition API</h3>
The most important feature in the web application, used to recognize objects in the video footage. Any dangerous or suspicious objects, knife or guns, will be flagged and notify the users in order to pay attention on the specific camera.

<h2>Deployment Manual for AzureVM Integration</h2>

This session has 4 sections to deploy:
```
1.AzureVM
2.Linux Server Configuration
3.Posture Recognition Installation
4.Face/Item Recognition Installation
```
<h3>AzureVM</h3>
Login to the Azure Dashboard, and deploy a ubuntu virtual machine. In details, please make sure the following:

```
1.open the port for ssh, http and https
2.GPU family virtual machine
3.Attaching an additional block storage disk to the VM
```

<h3>Linux Server Configuration</h3>
After you start running the Ubuntu virtual machine, make sure you first refresh the apt-get repository, and then install the followings:

```
1.php
2.Anaconda
3.swig
4.apache2
5.essential-tools
6.ffmpeg
```

After the installation, perform the followings:

```
1.git clone out 'sapient-platform' repository
2.setting the default directory of the apache to be '/var/www/sapient/Web'
3.sudo chown www-data:www-data /var/www/
4.sudo chmod 755 -R /var/www/
5.adding your current user to www-data group
```

<h3>Posture Recognition</h3>
The following is the installation guide:

```
1.conda create -n posture python=3.6 pip
2.source activate posture
3.pip install -r requirements.txt (inside the tf-pose-estimation directory)
4.pip install tensorflow
5.pip install opencv-python pandas sklearn numpy
6.cd tf_pose/pafprocess
7.swig -python -c++ pafprocess.i && python setup.py build_ext --inplace
```

<h3>Face & Item Recognition</h3>
The following is the installation guide:

```
1.source activate posture
2.pip install -r requirements.txt
3.pip install google-cloud-vision
4.export GOOGLE_APPLICATION_CREDENTIALS="/var/www/sapient/FaceItem/service-account-file.json"
```
<h2>Deployment Manual for Local Integration Using Flask</h2>

Install all the requirements found in the 'requirements_pip.txt' on your system or virtual env then pull our Flask Implementation version repository, https://github.com/jasonshaoshun/OpenCV_Web . Installation instructions can be found on the README file of this repository.

<h2>Demo Video</h2>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=sTBpBowPHQA
" target="_blank"><img src="http://img.youtube.com/vi/sTBpBowPHQA/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="720" height="480" border="10" /></a>

This is our video demo created in order to demonstrate the feautres of our software to our client.
