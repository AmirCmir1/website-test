clicks = 0;
function displayClicks(){
  document.getElementById("clicks").value = "Clicks: " + clicks;
}
function click(){
  clicks += 1;
}
