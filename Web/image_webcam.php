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
  <link href="css/image_webcam.css" rel="stylesheet">

</head>

<body>
  <!--Loading Animation For Analyse Button-->
  <img src="img/loadingicon.gif" class="loadingicon" id="loadingicon">
  
  <img src="img/image_upload/image_upload_background.jpeg" class="background_image">


  <a href="index.html"><img src="img/image_upload/home.png" class="home_btn"></a>

  <img src="img/image_upload/help_btn.png" class="help_btn" data-toggle="popover" data-content="1. Click choose file to select the file to be uploaded. <br/> 2.Click upload.<br/> 3.Click analyse." data-placement="left" data-trigger="hover" data-html="true">

  <div class="container">
    <video id="videocanvas" class="videoComponent" autoplay="true" style="">

    </video>
  </div>

  <canvas id="snapshot" class="snapshot" width="500" height="375"></canvas>
  <label class="btn btn-default screenshotbtn"><img src="img/video_upload/sreenshot_btn.png" class="screenshot_btn"><button onclick="snap()" style="display: none;"></button></label>

  <label class="btn btn-default resetbtn"><img src="img/video_upload/reset_btn.png" class="reset_btn"><button onclick="resset()" style="display: none;"></button>
  </label>

<!-- USE THIS NAME TO TRIGGER PHP analysebutton-->
<form method="post">
  <label class="button_default"><img src="img/image_upload/image_upload_analyse.png" class="analyse_btn" onclick="startanimation();"><input type="submit" id="analysebutton" name="analysebutton" style="display: none;"></label>
</form>

  <?php
      if(array_key_exists('analysebutton', $_POST)){
        analyse();
      }

      function analyse(){
          $posture_output = shell_exec('/var/www/anaconda3/envs/posture/bin/python /var/www/sapient/Posture/featureExtraction/tf-pose-estimation/single_image.py --image=/var/www/sapient/Web/uploads/webcam.jpg');

          $item_output = shell_exec('export GOOGLE_APPLICATION_CREDENTIALS="/var/www/sapient/FaceItem/service-account-file.json" && /var/www/anaconda3/envs/posture/bin/python /var/www/sapient/FaceItem/src/object_detection_webcam.py');

         echo '<div class="output_text">Posture Recognition:</br>'.$posture_output.'</br></br>Item Recognition:</br>'.$item_output.'</div>';
         #echo '<div class="item_output">'.$item_output.'</div>';
      }
    ?>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/webcam.js"></script>
  <script src="js/snapshot.js"></script>
  <script src="js/loadinganimation.js"></script>
  <script>
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});
</script>
<img src="img/background_loading.jpg" class="loadingbg" id="loadingbg">


</body>

</html>
