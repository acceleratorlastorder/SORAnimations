

$(document).ready(function() {

  $('#startButton').click(function() {
    $('#canvas div:nth-child(2)').addClass('kebab-galette');
    $('#canvas div:nth-child(3)').addClass('kebab-sandwich');
    $('#canvas div:first').addClass('kebab-brochette');

    $('span').click(function() {
        $(this).hide();
    });


  });

});
