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

    $('#canvas div:nth-child(3)').on('click', 'span', function() {
        $(this).remove();
        randomrespawn(0);
        score++;
    });

    $('#canvas div:nth-child(2)').on('click', 'span', function() {
        $(this).remove();
        randomrespawn(1);
        score++;
    });


    $('#canvas div:first').on('click', 'span', function() {
        $(this).remove();
        randomrespawn(2);
        score++;
    });


}

let score = 0;
var gamemode = 20;

mobgenerator = function() {
    for (var i = 0; i < gamemode; i++) {
        $('#canvas div:nth-child(2)').append('<span></span>');
        $('#canvas div:nth-child(3)').append('<span></span>');
        $('#canvas div:first').append('<span></span>');
    }
    $('#canvas div:nth-child(2)').addClass('kebab-galette');
    $('#canvas div:nth-child(3)').addClass('kebab-sandwich');
    $('#canvas div:first').addClass('kebab-brochette');
}

randomrespawn = function(x) {
    let random = Math.random();
    if (x == 0) {
        if (random < 0.10) {
            $('#canvas div:first').append('<span></span>');
            $('#canvas div:nth-child(2)').append('<span></span>');
            console.log("woooo some news kebab created");


        } else {
            $('#canvas div:nth-child(3)').append('<span></span>');
            console.log("another kebab created");
        }
    } else if (x == 1) {
        if (random < 0.10) {
            $('#canvas div:first').append('<span></span>');
            $('#canvas div:nth-child(3)').append('<span></span>');
            console.log("woooo some news kebab created");
        } else {
            $('#canvas div:nth-child(2)').append('<span></span>');
            console.log("another kebab created");
        }
    } else if (x == 2) {
        if (random < 0.10) {
            $('#canvas div:nth-child(2)').append('<span></span>');
            $('#canvas div:nth-child(3)').append('<span></span>');
            console.log("woooo some news kebab created");
        } else {
            $('#canvas div:first').append('<span></span>');
            console.log("another kebab created");
        }
    } else {
        console.log("unexpected value, please just play the game instead of trying weird things on it :)");
    }

}
