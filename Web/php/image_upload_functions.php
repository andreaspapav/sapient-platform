<?php

function uploadphoto()
	{

		$target_dir = "/var/www/";
		$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
		$new_file = $target_dir . "file.jpg";
		$uploadOk = 1;
		$result = "file.jpg";
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		// Check if image file is a actual image or fake image
		if(isset($_POST["submit"])) {
		    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
		    if($check !== false) {
		        echo "File is an image - " . $check["mime"] . ".";
		        $uploadOk = 1;
		    } else {
		        echo "File is not an image. Try a different file!";
		        $uploadOk = 0;
		    }
		}

		// Allow certain file formats
		if($imageFileType != "jpg") {
		    echo "Sorry, only JPG image files are allowed.";
		    $uploadOk = 0;
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
		    echo "Sorry, your file was not uploaded.";
		// if everything is ok, try to upload file
		} else {
		    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $new_file)) {
		    	displayImage($result,44,78,9.5,2,1);
		    } else {
		        echo "Sorry, there was an error uploading your file.";
		    }
		}
	}

function displayImage($name,$width,$height,$top,$left,$pos){
	    $path = "/var/www/" . $name;
	    if(getimagesize($path)[0] < getimagesize($path)[1]*($width/$height)){$scaler = "width";}else{$scaler = "height";}
	    echo '<div style="border: 0px solid black; width: '.$width.'vw ; height: '.$height.'vh ; position: absolute; top: '.$top.'%; left:'.$left.'%; resize: both;">
	            <img id="uploaded_image" style= "max-width: 100%; max-height: 100%;"
	              border="0" src="data:image/jpg;base64,'.base64_encode( file_get_contents($path) ).'">
		</div>';
	}

?>
