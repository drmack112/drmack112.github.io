/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementsByClassName("openbtn")[0].style.visibility = 'hidden';
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementsByClassName("openbtn")[0].style.visibility = 'visible';
  document.body.style.backgroundColor = "white";
}