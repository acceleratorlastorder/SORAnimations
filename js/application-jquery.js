$(document).ready(function() {
    $('#startButton').click(function() {
        mobgenerator();
        $("#glasspane").fadeTo("slow", 0, function() {
            $(this).remove();
        });
        clickevent();
    });
});
clickevent = function() {

    $('#canvas div:nth-child(2)').on('click', 'span', function() {
        $(this).remove();
        randomrespawn(0);
    });
    $('#canvas div:first').on('click', 'span', function() {
        $(this).remove();
        randomrespawn(1);
        score -= 1;
    });
}

let score = 0;
var gamemode = 20;

mobgenerator = function() {
    for (var i = 0; i < gamemode; i++) {
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
            console.log("goodLeaves created");
        } else {
            $('#canvas div:first').append('<span></span>');
            console.log("fallingLeaves created");
        }
    } else if (x == 0) {
        if (random < 0.25) {
            $('#canvas div:first').append('<span></span>');
            console.log("fallingLeaves created");
        } else {
            $('#canvas div:nth-child(2)').append('<span></span>');
            console.log("goodLeaves created");
        }
    } else {
        console.log("unexpected value, please just play the game instead of trying weird things on it :)");
    }

}
