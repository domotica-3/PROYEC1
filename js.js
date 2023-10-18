function animateGears() {
  var gears = document.querySelectorAll(".gear");
  for (var i = 0; i < gears.length; i++) {
    gears[i].style.transform = "rotate(" + (i * 360 / gears.length) + "deg)";
  }
}

window.onload = animateGears;
