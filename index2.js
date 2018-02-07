var pics_2 = "";
var num3 = 0;
var num4 = 0;

document.getElementById("img2").addEventListener("click", function() {
  document.getElementById("hat").style.display = "block";
  pics_2 = "hat";
});
document.getElementById("img3").addEventListener("click", function() {
  document.getElementById("shirt").style.display = "block";
  pics_2 = "shirt";
});
document.getElementById("img4").addEventListener("click", function() {
  document.getElementById("bow").style.display = "block";
  pics_2 = "bow";
});
document.getElementById("button10").addEventListener("click", function() {
  num3 = num3 + 7;
  document.getElementById("pics_2").style.left = num3+"px";
});
document.getElementById("button11").addEventListener("click", function() {
  num3 = num3 - 7;
  document.getElementById("pics_2").style.left = num3+"px";
});
document.getElementById("button8").addEventListener("click", function() {
  num4 = num4 + 7;
  document.getElementById("pics_2").style.bottom = num4+"px";
});
document.getElementById("button9").addEventListener("click", function() {
  num4 = num4 - 7;
  document.getElementById("pics_2").style.bottom = num4+"px";
});
