const ready = function () {
  var exemple = document.getElementById('exemple');
  var contexte = exemple.getContext('2d');
  contexte.fillStyle = "rgba(0,0,255,0.5)";
  contexte.strokeRect(10, 80, 500, 500);
  contexte.strokeRect(10, 80, 50, 50);
}
document.addEventListener("DOMContentLoaded", ready);
