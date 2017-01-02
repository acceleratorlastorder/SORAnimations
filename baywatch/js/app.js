
var context = document.getElementById('canvas').getContext('2d'),
    startButton = document.getElementById('startButton'),
    glasspane = document.getElementById('glasspane'),
    paused = true,
    circles_target = [],
    circles_ennemies = [];

    canvas.addEventListener("ennemiesTouched", touchEnnemies, false );

function touchEnnemies(event){
  event.preventDefault();

  canvas_x = event.circles_ennemies[i].pageX;
  canvas_y = event.circles_ennemies[i].pageY;
};

context.lineWidth = 0.5;
context.font = '32pt Ariel';

for (var i=0; i < 50; ++i) {
   circles_ennemies[i] = {
       x: 100,
       y: 100,
       velocityX: 10*Math.random(),
       velocityY: 10*Math.random(),
       radius: 50*Math.random(),
       color: 'rgba(255, 0, 0, 1)',
    };
}

for (var i=0; i < 5; ++i) {
   circles_target[i] = {
       x: 100,
       y: 100,
       velocityX: 8*Math.random(),
       velocityY: 6*Math.random(),
       radius: 15,
       color: 'rgba(0, 255, 255, 0.9)'
    };
}

startButton.onclick = function(e) {
   e.preventDefault();
   e.stopPropagation();
   paused = ! paused;
   startButton.innerText = paused ? 'Start' : 'Stop';
};

glasspane.onmousedown = function(e) {
   e.preventDefault();
   e.stopPropagation();
}

context.canvas.onmousedown = function(e) {
    e.preventDefault();
    e.stopPropagation();
};

document.addEventListener.onclick = function(circles_ennemies) {
  if (onclick(circ))
    alert("perdu");
};

setInterval(function() {
   if (!paused) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      circles_target.forEach(function(circle) {
         context.beginPath();
         context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*3, false);
         context.fillStyle = circle.color;
         context.fill();
         adjustPosition(circle);
      });

      circles_ennemies.forEach(function(circle) {
         context.beginPath();
         context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2, false);
         context.fillStyle = circle.color;
         context.fill();
         adjustPosition(circle);
      });
   }
}, 1000 / 60);

function adjustPosition(circle) {
   if (circle.x + circle.velocityX + circle.radius > context.canvas.width ||
       circle.x + circle.velocityX - circle.radius < 0)
      circle.velocityX = -circle.velocityX;

   if (circle.y + circle.velocityY + circle.radius > context.canvas.height ||
       circle.y + circle.velocityY - circle.radius  < 0)
      circle.velocityY= -circle.velocityY;

   circle.x += circle.velocityX;
   circle.y += circle.velocityY;
}
