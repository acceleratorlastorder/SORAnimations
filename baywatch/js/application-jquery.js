$(document).ready(function() {

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
        $('#canvas div:nth-child(2)').append('span');
        $('#canvas div:first').append('span');

    }
    $('#canvas div:nth-child(2)').addClass('goodLeaves');
    $('#canvas div:first').addClass('fallingLeaves');
}



randomrespawn = function(x) {
    if (x == 1) {
        console.log("salut");
    } else {
        console.log("lel");
    }

}
