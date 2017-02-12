$(document).ready(function() {
let score = 0;
    $('#startButton').click(function() {
        mobgenerator();

        $('#canvas div:nth-child(2)').on('click', 'span', function() {
            $(this).remove();
            randomrespawn(0);
        });
        $('#canvas div:first').on('click', 'span', function() {
            $(this).remove();
            randomrespawn(1);
        });

    });
});

mobgenerator = function() {
    for (var i = 0; i < 10; i++) {
        $('#canvas div:nth-child(2)').append('<span></span>');
        $('#canvas div:first').append('<span></span>');
    }
    $('#canvas div:nth-child(2)').addClass('goodLeaves');
    $('#canvas div:first').addClass('fallingLeaves');
}

randomrespawn = function(x) {
  let random = Math.random();
    if (x == 1) {
      if (random < 0.25) {
        $('#canvas div:nth-child(2)').append('<span></span>');
        console.log("blond created");
      }
      else {
        $('#canvas div:first').append('<span></span>');
        console.log("shark created");
      }
    }
   else if (x == 0) {
     if (random < 0.25) {
       $('#canvas div:first').append('<span></span>');
       console.log("shark created");
     }
     else {
       $('#canvas div:nth-child(2)').append('<span></span>');
       console.log("blond created");
     }
   }
    else {
        console.log("unexpected value, please just play the game instead of trying weird things on it :)");
    }

}
