
  //Global variables
  var myImage = new Image(); // Create a new blank image.

  // Load the image and display it.
  function displayImage() {

    // Get the canvas element.
    canvas = document.getElementById("myCanvas");

    // Make sure you got it.
    if (canvas.getContext) {

      // Specify 2d canvas type.
      ctx = canvas.getContext("2d");

      // When the image is loaded, draw it.
      myImage.onload = function() {

        // Load the image into the context.
        ctx.drawImage(myImage, 0, 0);

        // Get and modify the image data.
        changeImage();
      }

      // Define the source of the image.
      myImage.src = "http://samples.msdn.microsoft.com/workshop/samples/canvas/kestral.png";
    }
  }

  function changeImage() {

    ctx.strokeStyle = "white";
    ctx.lineWidth = "100";
    ctx.beginPath();
    ctx.arc(100, 100, 150, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
  }
