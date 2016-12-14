<<<<<<< HEAD

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNCATION = canvas.width/25,
    HOUR_HAND_TRUNCATION = canvas.width/10,
    NUMERAL_SPACING = 20,
    RADIUS = canvas.width/2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING;

// Functions.....................................................

function drawCircle() {
   context.beginPath();
   context.arc(canvas.width/2, canvas.height/2,
               RADIUS, 0, Math.PI*2, true);
   context.stroke();
}

function drawNumerals() {
   var numerals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
       angle = 0,
       numeralWidth = 0;

   numerals.forEach(function(numeral) {
      angle = Math.PI/12 * (numeral-6);
      numeralWidth = context.measureText(numeral).width;
      context.fillText(numeral,
         canvas.width/2  + Math.cos(angle)*(HAND_RADIUS) - numeralWidth/2,
         canvas.height/2 + Math.sin(angle)*(HAND_RADIUS) + FONT_HEIGHT/3);
   });
}

function drawCenter() {
   context.beginPath();
   context.arc(canvas.width/2, canvas.height/2, 5, 0, Math.PI*2, true);
   context.fill();
}

function drawHand(loc, isHour) {
   var angle = (Math.PI*2) * (loc/60) - Math.PI/2,
       handRadius = isHour ? RADIUS - HAND_TRUNCATION-HOUR_HAND_TRUNCATION
                           : RADIUS - HAND_TRUNCATION;

   context.moveTo(canvas.width/2, canvas.height/2);
   context.lineTo(canvas.width/2  + Math.cos(angle)*handRadius,
                  canvas.height/2 + Math.sin(angle)*handRadius);
   context.stroke();
}

function drawHands() {
   var date = new Date,
       hour = date.getHours();
   hour = hour > 12 ? hour - 12 : hour;
   drawHand(hour*5 + (date.getMinutes()/60)*5, true, 0.5);
   drawHand(date.getMinutes(), false, 0.5);
   drawHand(date.getSeconds(), false, 0.2);
}

function drawClock() {
   context.clearRect(0,0,canvas.width,canvas.height);

   drawCircle();
   drawCenter();
   drawHands();
   drawNumerals();
}

// Initialization................................................

context.font = FONT_HEIGHT + 'px Arial';
loop = setInterval(drawClock, 1000);
=======
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
>>>>>>> update
