clicks = 0;
function displayClicks(){
  document.getElementById("clicks").innerText = "Clicks: " + clicks;
}
function click(){
  clicks += 1;
}
