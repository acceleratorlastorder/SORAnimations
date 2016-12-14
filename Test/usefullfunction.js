function adjustPosition(circle) {
    if (circle.x + circle.velocityX + circle.radius > context.canvas.width ||
        circle.x + circle.velocityX - circle.radius < 0)
        circle.velocityX = -circle.velocityX;

    if (circle.y + circle.velocityY + circle.radius > context.canvas.height ||
        circle.y + circle.velocityY - circle.radius < 0)
        circle.velocityY = -circle.velocityY;

    circle.x += circle.velocityX;
    circle.y += circle.velocityY;
}

for (var i = 0; i < 100; ++i) {
    circles[i] = {
        x: 100,
        y: 100,
        velocityX: 3 * Math.random(),
        velocityY: 3 * Math.random(),
        radius: 50 * Math.random(),
        color: 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
            (Math.random() * 255).toFixed(0) + ', ' +
            (Math.random() * 255).toFixed(0) + ', 1.0)'
    };
}
/*

this.context = canvas.getContext('2d');
this.gameName = gameName;
this.sprites = [];
this.keyListeners = [];

// High scores

this.HIGH_SCORES_SUFFIX = '_highscores';
*/
// High scores................................................................

  // Returns an array of high scores from local storage.

  getHighScores: function () {
     var key = this.gameName + this.HIGH_SCORES_SUFFIX,
         highScoresString = localStorage[key];

     if (highScoresString == undefined) {
        localStorage[key] = JSON.stringify([]);
     }
     return JSON.parse(localStorage[key]);
  },

  // Sets the high score in local storage.

  setHighScore: function (highScore) {
     var key = this.gameName + this.HIGH_SCORES_SUFFIX,
         highScoresString = localStorage[key];

     highScores.unshift(highScore);
     localStorage[key] = JSON.stringify(highScores);
  },

  // Removes the high scores from local storage.

  clearHighScores: function () {
     localStorage[this.gameName + this.HIGH_SCORES_SUFFIX] = JSON.stringify([]);
  },
