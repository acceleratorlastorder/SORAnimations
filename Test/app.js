const ready = function () {
  var c = document.getElementById("exemple");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(200,500,50,0,2*Math.PI);
  ctx.arc(200,500,45,0,2*Math.PI);
  ctx.stroke();

  closePath()
}

document.addEventListener("DOMContentLoaded", ready);
