var click = 0; 
var count = document.getElementById("clicks");
function displayClicks(){
  count.innerHTML = click;
}
function click(){
  click += 1;
  displayClicks()
}
