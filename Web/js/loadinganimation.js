function startanimation(){
  const animate_loadingicon =  document.getElementById('loadingicon');
  const animate_loadingbg =  document.getElementById('loadingbg');
  animate_loadingicon.classList.remove('animated', 'fadeOut');
  animate_loadingbg.classList.remove('animated','fadeOut');
  animate_loadingicon.classList.add('animated', 'fadeIn');
  animate_loadingbg.classList.add('animated','fadeIn');
  document.getElementById('loadingicon').style.visibility = "visible";
  document.getElementById('loadingbg').style.visibility = "visible";
}

// function stopanimation(){
//     document.getElementById("loadingicon").style.visibility = "hidden";
//     document.getElementById("loadingbg").style.visibility = "hidden";
// }
