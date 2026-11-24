var click = 0; 
var count = document.getElementById("clicks");
function displayClicks(){
  count.innerHTML = click;
}
function incrementClicks(){
  click += 1;
  displayClicks()
}
