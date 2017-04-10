<!-- JAVASCRIPT -->

<!-- fade effect for page -->

window.onload = function () {
    document.body.className = "";
  }


  <!--SCRIPT FOR THE SAME HEIGHT OF MAP AND LINKS SECTION :D-->

var mapSection = document.getElementsByClassName("map-section")[0].clientHeight;
document.getElementsByClassName('links-section')[0].style.height = mapSection + "px";

window.addEventListener('resize', checkSize);
function checkSize() {
  var mapSection = document.getElementsByClassName("map-section")[0].clientHeight;
  document.getElementsByClassName('links-section')[0].style.height = mapSection + "px";
}


<!--FOR HOVER EFFECTS ON COUNTRIES-->


//POLAND
var plText = document.getElementById("pl_text");
plText.addEventListener("mouseover", plHov);
plText.addEventListener("mouseout", plHovOut);

var plPic = document.getElementById("pl");
plPic.addEventListener("mouseover", plHov);
plPic.addEventListener("mouseout", plHovOut);

function plHov() {
  var poland = document.getElementById("pl");
  poland.style.fill = "#ba9d84";
}
function plHovOut() {
  var poland = document.getElementById("pl");
  poland.style.fill = "rgba(255, 255, 255, 0.8)";
}

//MALTA

var mtText = document.getElementById("mt_text");
mtText.addEventListener("mouseover", mtHov);
mtText.addEventListener("mouseout", mtHovOut);

var mtPic = document.getElementById("mt");
mtPic.addEventListener("mouseover", mtHov);
mtPic.addEventListener("mouseout", mtHovOut);

function mtHov() {
  var malta = document.getElementById("mt");
  malta.style.fill = "#ba9d84";
}
function mtHovOut() {
  var malta = document.getElementById("mt");
  malta.style.fill = "rgba(255, 255, 255, 0.8)";
}

//ITALY

var itText = document.getElementById("it_text");
itText.addEventListener("mouseover", itHov);
itText.addEventListener("mouseout", itHovOut);

var itPic = document.getElementById("it");
itPic.addEventListener("mouseover", itHov);
itPic.addEventListener("mouseout", itHovOut);

function itHov() {
  var italy = document.getElementById("it");
  italy.style.fill = "#ba9d84";
}
function itHovOut() {
  var italy = document.getElementById("it");
  italy.style.fill = "rgba(255, 255, 255, 0.8)";
}


//NORWAY

var noText = document.getElementById("no_text");
noText.addEventListener("mouseover", noHov);
noText.addEventListener("mouseout", noHovOut);

var noPic = document.getElementById("no");
noPic.addEventListener("mouseover", noHov);
noPic.addEventListener("mouseout", noHovOut);

function noHov() {
  var norway = document.getElementById("no");
  norway.style.fill = "#ba9d84";
}
function noHovOut() {
  var norway = document.getElementById("no");
  norway.style.fill = "rgba(255, 255, 255, 0.8)";
}


