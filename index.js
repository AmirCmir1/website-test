var clicks = 0; 
var count = document.getElementById("clicks");
function displayClicks(){
  count.innerHTML = clicks;
}
function click(){
  clicks += 1;
  displayClicks()
}
