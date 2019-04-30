<?php

function uploadvideo()
	{
		$target_dir = "/var/www/";
		$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
		$new_file = $target_dir . "input.mp4";
		$uploadOk = 1;
		$result = "input.mp4";
		$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
		// Check if image file is a actual image or fake image

		// Allow certain file formats
		if($imageFileType != "mp4") {
		    echo "Sorry, only MP4 video files are allowed.";
		    $uploadOk = 0;
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
		    echo "Sorry, your file was not uploaded.";
		// if everything is ok, try to upload file
		} else {
		    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $new_file)) {

		    } else {
		        echo "Sorry, there was an error uploading your file.";
		    }
		}
	}

	function printvideo(){
		$path = "/var/www/output.mp4";
		echo '<video class="output_video" controls autoplay>
					<source src="data:video/mp4;base64,'.base64_encode(file_get_contents($path)).'" type="video/mp4">
					</video>';

		#echo '<object data="../output.avi" width="360" height="250"> <param name="src" value="../output.avi" /> </object>
#';
	}
?>
