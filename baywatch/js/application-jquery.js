

$(document).ready(function() {

  $('#startButton').click(function() {
    $('#canvas div:nth-child(2)').addClass('goodLeaves');
    $('#canvas div:first').addClass('fallingLeaves');

    $('#canvas div').click(function() {
        $(this).hide();
    });


  });

});
