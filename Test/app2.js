

var context = document.getElementById('canvas').getContext('2d'),
    startButton = document.getElementById('startButton'),
    glasspane = document.getElementById('glasspane'),
    paused = true,
    circles_target = [];
    circles_ennemies = [];


context.lineWidth = 0.5;
context.font = '32pt Ariel';

for (var i=0; i < 30; ++i) {
   circles_target[i] = {
       x: 100,
       y: 100,
       velocityX: 7*Math.random(),
       velocityY: 6*Math.random(),
       radius: 50*Math.random(),
       color: 'rgba(255, 0, 0, 1)'};
}

for (var i=0; i < 5; ++i) {
   circles_ennemies[i] = {
       x: 100,
       y: 100,
       velocityX: 4*Math.random(),
       velocityY: 4*Math.random(),
       radius: 10,
       color: ' rgba(0, 255, 255, 0.9)' };
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

setInterval(function() {
   if (!paused) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);


      circles_target.forEach(function(circle) {
         context.beginPath();
         context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2, false);
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
}, 1500 / 60);

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

function drawGrid(context, color, stepx, stepy) {
   context.strokeStyle = color;
   context.lineWidth = 0.5;

   for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
   }

   for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
   }
}
