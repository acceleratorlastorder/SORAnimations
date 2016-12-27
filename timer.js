let timercanvas = document.getElementById('timer'),
    contexttimer = timercanvas.getContext('2d'),
    FONT_HEIGHT = 10,
    MARGIN = 35,
    HAND_TRUNCATION = timercanvas.width / 25,
    HOUR_HAND_TRUNCATION = timercanvas.width / 10,
    NUMERAL_SPACING = 20,
    RADIUS = timercanvas.width / 2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING;

// Functions.....................................................

function start() {
    timer(), loop = setInterval(drawClock, 500);
}

function drawCircle() {
    contexttimer.beginPath();
    contexttimer.arc(timercanvas.width / 2, timercanvas.height / 2,
        RADIUS, 0, Math.PI * 2, true);
    contexttimer.stroke();
}

function drawNumerals() {
    let numerals = [15, 30, 45, 60],
        angle = 0,
        numeralWidth = 0;

    numerals.forEach(function(numeral) {
        angle = Math.PI / 6 * (numeral - 3);
        numeralWidth = contexttimer.measureText(numeral).width;
        contexttimer.fillText(numeral,
            timercanvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2,
            timercanvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3);
    });
}

function drawCenter() {
    contexttimer.beginPath();
    contexttimer.arc(timercanvas.width / 2, timer.height / 2, 5, 0, Math.PI * 2, true);
    contexttimer.fill();
}

function drawHand(loc, isHour) {
    let angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
        handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION :
        RADIUS - HAND_TRUNCATION;

    contexttimer.moveTo(timercanvas.width / 2, timercanvas.height / 2);
    contexttimer.lineTo(timercanvas.width / 2 + Math.cos(angle) * handRadius,
        timercanvas.height / 2 + Math.sin(angle) * handRadius);
    contexttimer.stroke();
}

function drawHands() {
    sec = time;
    sec = sec > timeDifficulty ? sec - timeDifficulty : sec;
    drawHand(sec, false, 4);
}

function drawClock() {
    contexttimer.clearRect(0, 0, timercanvas.width, timercanvas.height);
    drawCircle();
    drawCenter();
    drawHands();
    drawNumerals();
}

contexttimer.font = FONT_HEIGHT + 'px Arial';

difficulty = 1;
switch (difficulty) {
    case 1:
        timeDifficulty = 60;
        break;
    case 2:
        timeDifficulty = 30;
        break;
    case 3:
        timeDifficulty = 10;
        break;
    default:
        timeDifficulty = 666;
        console.log("pourquoi tu exécute ce bloc");
}
let time = 0;
let result = "fini";

function timer() {
    time++;
    if (time >= timeDifficulty) {
        console.log(time);
        time = 0;
        return console.log(result), result;
    }
    else {
        console.log(time);
        setTimeout(timer, 1000);
    }
}
