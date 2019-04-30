var canvas = document.querySelector('.snapshot');
canvas.width = 500;
canvas.height = 375;
var content = canvas.getContext('2d');



function snap() {

			content.drawImage(video, 0, 0, canvas.width, canvas.height);
			var data = canvas.toDataURL('image/jpg');
			$.post("save.php", {imageData : data});
			document.getElementById('videocanvas').style.display = "none";
			document.getElementById('snapshot').style.display = "initial";



}

function resset() {
			document.getElementById('videocanvas').style.display = "initial";
			document.getElementById('snapshot').style.display = "none";
}
