<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Sapient - AI Recognition Software</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="css/image_upload.css" rel="stylesheet">

</head>

<body>
  <!--Loading Animation For Analyse Button-->
  <img src="img/loadingicon.gif" class="loadingicon" id="loadingicon">

  <img src="img/image_upload/image_upload_background.jpeg" class="background_image">

  <a href="index.html"><img src="img/image_upload/home.png" class="home_btn"></a>

  <img src="img/image_upload/help_btn.png" class="help_btn" data-toggle="popover" data-content="1. Click choose file to select the file to be uploaded. <br/> 2.Click upload.<br/> 3.Click analyse." data-placement="left" data-trigger="hover" data-html="true">

  <form method="post" enctype="multipart/form-data">
    <label class="button_default"><img src="img/image_upload/image_upload_choosefile.png" class="choosefile_btn"><input type="file" style="display: none;" name="fileToUpload" id="fileToUpload"></label>
    <label class="button_default"><img src="img/image_upload/image_upload_upload.png" class="upload_btn"><input type="submit" id="button" name="button" style="display: none;"></label>
  </form>

  <?php

  include 'php/image_upload_functions.php';

  if(array_key_exists('button',$_POST)){
  uploadphoto();
  unset($_POST[0]);
  }

  ?>

  <!-- USE THIS NAME TO TRIGGER PHP analysebutton-->
  <form method="post">
    <label class="button_default"><img src="img/image_upload/image_upload_analyse.png" class="analyse_btn" onclick="startanimation();"><input type="submit" id="analysebutton" name="analysebutton" style="display: none;"></label>
  </form>

  <?php
  if(array_key_exists('analysebutton', $_POST)){
  analyse();
  }

  function analyse(){
  $posture_output = shell_exec('/var/www/anaconda3/envs/posture/bin/python /var/www/sapient/Posture/featureExtraction/tf-pose-estimation/single_image.py --image=/var/www/file.jpg');

  $item_output = shell_exec('export GOOGLE_APPLICATION_CREDENTIALS="/var/www/sapient/FaceItem/service-account-file.json" && /var/www/anaconda3/envs/posture/bin/python /var/www/sapient/FaceItem/src/object_detection.py');


  echo '<div class="output_text">Posture Recognition:</br>'.$posture_output.'</br></br>Item Recognition:</br>'.$item_output.'</div>';
  #echo '<div class="item_output">'.$item_output.'</div>';
  }
  ?>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/loadinganimation.js"></script>
  <script>
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});
</script>
<img src="img/background_loading.jpg" class="loadingbg" id="loadingbg">

</body>

</html>
