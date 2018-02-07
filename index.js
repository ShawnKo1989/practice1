var imgchar = document.getElementById("img1");
var num = 0;
var num2 = 0;
var height = 100;
document.getElementById("button4").addEventListener("click", function() {
  num = num + 7;
  document.getElementById("img1").style.left = num+"px";
});
document.getElementById("button3").addEventListener("click", function() {
  num = num - 7;
  document.getElementById("img1").style.left = num+"px";
});
document.getElementById("button1").addEventListener("click", function() {
  num2 = num2 + 7;
  document.getElementById("img1").style.bottom = num2+"px";
});
document.getElementById("button2").addEventListener("click", function() {
  num2 = num2 - 7;
  document.getElementById("img1").style.bottom = num2+"px";
});
document.getElementById("positive").addEventListener("click", function() {
  height = height + 1;
  document.getElementById("img1").style.height = height+"%";
});
document.getElementById("negative").addEventListener("click", function() {
  height = height - 1;
  document.getElementById("img1").style.height = height+"%";
});
document.getElementById("button6").addEventListener("click", function() {
  imgchar.src = "pics/ava1.png";
});
document.getElementById("button7").addEventListener("click", function() {
  imgchar.src = "pics/ava2.png";
});
document.getElementById("callmenu").addEventListener("click", function() {
  document.getElementById("menu").style.right = 20 + "px";
  document.getElementById("callmenu").style.opacity = 0;
});
document.getElementById("button5").addEventListener("click", function() {
  document.getElementById("menu").style.right = -75 + "px";
  document.getElementById("callmenu").style.opacity = 1;
});
document.getElementById("img1").addEventListener("click", function() {
  document.getElementById("button1").style.opacity = 0;
  document.getElementById("button2").style.opacity = 0;
  document.getElementById("button3").style.opacity = 0;
  document.getElementById("button4").style.opacity = 0;
  document.getElementById("button5").style.opacity = 0;
  document.getElementById("button6").style.opacity = 0;
  document.getElementById("button7").style.opacity = 0;
  document.getElementById("positive").style.opacity = 0;
  document.getElementById("negative").style.opacity = 0;
});

document.getElementById("header").addEventListener("click", function() {
  document.getElementById("button1").style.opacity = 1;
  document.getElementById("button2").style.opacity = 1;
  document.getElementById("button3").style.opacity = 1;
  document.getElementById("button4").style.opacity = 1;
  document.getElementById("button5").style.opacity = 1;
  document.getElementById("button6").style.opacity = 1;
  document.getElementById("button7").style.opacity = 1;
  document.getElementById("positive").style.opacity = 1;
  document.getElementById("negative").style.opacity = 1;
});
