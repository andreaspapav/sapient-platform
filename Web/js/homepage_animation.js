var item = document.getElementById("itemAbstract").style.visibility = "hidden";
var post = document.getElementById("postAbstract").style.visibility = "hidden";
var face = document.getElementById("faceAbstract").style.visibility = "hidden";

function pressme(){
  
}

function animate_Forward(){
  document.getElementById("checkbox_Trigger").checked = false;
  document.getElementById("startbtn").style.visibility = "hidden";
  document.getElementById("logo").style.visibility = "hidden";
  document.getElementById("homebtn").style.visibility = "visible";
  document.getElementById("itemAbstract").style.visibility = "hidden";
  document.getElementById("itemTrigger").style.visibility = "hidden";
  document.getElementById("postAbstract").style.visibility = "hidden";
  document.getElementById("postTrigger").style.visibility = "hidden";
  document.getElementById("faceAbstract").style.visibility = "hidden";
  document.getElementById("faceTrigger").style.visibility = "hidden";

  const animate_imgbtn =  document.getElementById('imagebtn');
  const animate_imgtext =  document.getElementById('imagetext');
  animate_imgbtn.classList.add('animated', 'zoomIn');
  animate_imgtext.classList.add('animated','zoomIn');

  const animate_videobtn =  document.getElementById('videobtn');
  const animate_videotext =  document.getElementById('videotext');
  animate_videobtn.classList.add('animated', 'zoomIn');
  animate_videotext.classList.add('animated','zoomIn');

  const animate_livebtn =  document.getElementById('livebtn');
  const animate_livetext =  document.getElementById('livetext');
  animate_livebtn.classList.add('animated', 'zoomIn');
  animate_livetext.classList.add('animated','zoomIn');

}

function animate_Backwards(){
  document.getElementById("checkbox_Trigger").checked = true;
  document.getElementById("startbtn").style.visibility = "visible";
  document.getElementById("homebtn").style.visibility = "hidden";
  document.getElementById("itemTrigger").style.visibility = "visible";
  document.getElementById("postTrigger").style.visibility = "visible";
  document.getElementById("faceTrigger").style.visibility = "visible";

  const animate_imgbtn =  document.getElementById('imagebtn');
  const animate_imgtext =  document.getElementById('imagetext');
  animate_imgbtn.classList.remove('animated', 'zoomIn');
  animate_imgtext.classList.remove('animated','zoomIn');

  const animate_videobtn =  document.getElementById('videobtn');
  const animate_videotext =  document.getElementById('videotext');
  animate_videobtn.classList.remove('animated', 'zoomIn');
  animate_videotext.classList.remove('animated','zoomIn');

  const animate_livebtn =  document.getElementById('livebtn');
  const animate_livetext =  document.getElementById('livetext');
  animate_livebtn.classList.remove('animated', 'zoomIn');
  animate_livetext.classList.remove('animated','zoomIn');

  setTimeout(function(){
    const animate_logo = document.getElementById('logo');
    animate_logo.style.visibility = "visible";
    animate_logo.classList.add('animated','jackInTheBox');

  },500);
}

function showRecognition(name,animationIn,animationOut){
    const animate_abstract =  document.getElementById(name);
    animate_abstract.style.visibility = "visible";
    animate_abstract.classList.remove('animated', animationOut);
    animate_abstract.classList.add('animated', animationIn);
}

function hideRecognition(name,animationIn,animationOut){
    const animate_abstract =  document.getElementById(name);
    animate_abstract.style.visibility = "visible";
    animate_abstract.classList.remove('animated', animationIn);
    animate_abstract.classList.add('animated', animationOut);
}

function growbutton(element_name1,element_name2){
  document.getElementById(element_name1).style.width = "23%";
  document.getElementById(element_name2).style.width = "23%";

}

function shrinkbutton(element_name1,element_name2){
  document.getElementById(element_name1).style.width = "20%";
  document.getElementById(element_name2).style.width = "20%";

}


//Image Button Details(back side) animations
function grow_image_frame(element_name1,text,btn){
  if(document.getElementById('videobtn_details').style.height == "45%"){
    shrink_video_frame('videobtn_details','videotext','videobtn');
  }
  if (document.getElementById('livebtn_details').style.height == "45%") {
    shrink_live_frame('livebtn_details','livetext','livebtn');
  }
  document.getElementById(text).style.visibility = "hidden";
  document.getElementById(btn).style.visibility = "hidden";
  document.getElementById(element_name1).style.visibility = "visible";
  document.getElementById(element_name1).style.width = "30%";
  document.getElementById(element_name1).style.height = "45%";
  document.getElementById(element_name1).style.top = "20%";
  document.getElementById(element_name1).style.left = "5%";
  setTimeout(function(){
      document.getElementById('image_title').style.visibility = "visible";
      const animate_imgtitle =  document.getElementById('image_title');
      animate_imgtitle.classList.remove('animated', 'zoomOut','faster');
      animate_imgtitle.classList.add('animated', 'zoomIn','faster');
      document.getElementById('upload_icon').style.visibility = "visible";
      document.getElementById('webcam_icon').style.visibility = "visible";
      const animate_upload_icon =  document.getElementById('upload_icon');
      animate_upload_icon.classList.remove('animated', 'zoomOut','faster');
      animate_upload_icon.classList.add('animated', 'zoomIn','faster');
      const animate_webcam_icon =  document.getElementById('webcam_icon');
      animate_webcam_icon.classList.remove('animated', 'zoomOut','faster');
      animate_webcam_icon.classList.add('animated', 'zoomIn','faster');
  },700);
}

function shrink_image_frame(element_name1,text,btn){
  const animate_imgtitle =  document.getElementById('image_title');
  animate_imgtitle.classList.remove('animated', 'zoomIn','faster');
  animate_imgtitle.classList.add('animated', 'zoomOut','faster');
  const animate_upload_icon =  document.getElementById('upload_icon');
  animate_upload_icon.classList.remove('animated', 'zoomIn','faster');
  animate_upload_icon.classList.add('animated', 'zoomOut','faster');
  const animate_webcam_icon =  document.getElementById('webcam_icon');
  animate_webcam_icon.classList.remove('animated', 'zoomIn','faster');
  animate_webcam_icon.classList.add('animated', 'zoomOut','faster');
  document.getElementById(element_name1).style.top = "40%";
  document.getElementById(element_name1).style.left = "15.6%";
  document.getElementById(element_name1).style.height = "23%";
  document.getElementById(element_name1).style.width = "18.3%";

  setTimeout(function () {
    delayed(element_name1,text,btn);
    animate_upload_icon.style.visibility = "hidden";
    animate_webcam_icon.style.visibility = "hidden";
  }, 850);
}

//Video Button Details(back side) animations
function grow_video_frame(element_name1,text,btn){
  if(document.getElementById('imagebtn_details').style.height == "45%"){
    shrink_image_frame('imagebtn_details','imagetext','imagebtn');
  }
  if (document.getElementById('livebtn_details').style.height == "45%") {
    shrink_live_frame('livebtn_details','livetext','livebtn');
  }
  document.getElementById(text).style.visibility = "hidden";
  document.getElementById(btn).style.visibility = "hidden";
  document.getElementById(element_name1).style.visibility = "visible";
  document.getElementById(element_name1).style.width = "30%";
  document.getElementById(element_name1).style.height = "45%";
  document.getElementById(element_name1).style.top = "20%";
  document.getElementById(element_name1).style.left = "35%";
  setTimeout(function(){
      const animate_videotitle =  document.getElementById('video_title');
      animate_videotitle.style.visibility = "visible";
      animate_videotitle.classList.remove('animated', 'zoomOut','faster');
      animate_videotitle.classList.add('animated', 'zoomIn','faster');
      document.getElementById('video_icon').style.visibility = "visible";
      const animate_video_icon =  document.getElementById('video_icon');
      animate_video_icon.classList.remove('animated', 'zoomOut','faster');
      animate_video_icon.classList.add('animated', 'zoomIn','faster');

  },700);
}

function shrink_video_frame(element_name1,text,btn){
  document.getElementById(element_name1).style.top = "40%";
  document.getElementById(element_name1).style.left = "40.6%";
  document.getElementById(element_name1).style.height = "23%";
  document.getElementById(element_name1).style.width = "18.3%";

  const animate_videotitle =  document.getElementById('video_title');
  animate_videotitle.classList.remove('animated', 'zoomIn','faster');
  animate_videotitle.classList.add('animated', 'zoomOut','faster');
  const animate_video_icon =  document.getElementById('video_icon');
  animate_video_icon.classList.remove('animated', 'zoomIn','faster');
  animate_video_icon.classList.add('animated', 'zoomOut','faster');
  setTimeout(function () {
    delayed(element_name1,text,btn);
    animate_video_icon.style.visibility = "hidden";
  }, 850);
}

//Live Video Button Details(back side) animations
function grow_live_frame(element_name1,text,btn){
  if(document.getElementById('videobtn_details').style.height == "45%"){
    shrink_video_frame('videobtn_details','videotext','videobtn');
  }
  if (document.getElementById('imagebtn_details').style.height == "45%") {
    shrink_image_frame('imagebtn_details','imagetext','imagebtn');
  }
  document.getElementById(text).style.visibility = "hidden";
  document.getElementById(btn).style.visibility = "hidden";
  document.getElementById(element_name1).style.visibility = "visible";
  document.getElementById(element_name1).style.width = "30%";
  document.getElementById(element_name1).style.height = "45%";
  document.getElementById(element_name1).style.top = "20%";
  document.getElementById(element_name1).style.left = "65.6%";
  $('#webcam_icon').popover('disable');
  $('#upload_icon').popover('disable');
}

function shrink_live_frame(element_name1,text,btn){
  document.getElementById(element_name1).style.top = "40%";
  document.getElementById(element_name1).style.left = "65.6%";
  document.getElementById(element_name1).style.height = "23%";
  document.getElementById(element_name1).style.width = "18.3%";
  setTimeout(function () {delayed(element_name1,text,btn);}, 800);
}


function delayed(element_name1,text,btn){
  document.getElementById(element_name1).style.visibility = "hidden";
  document.getElementById(text).style.visibility = "visible";
  document.getElementById(btn).style.visibility = "visible";
}
