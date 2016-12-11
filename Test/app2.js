var myImage = new Image();
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100,300,50,0,2*Math.PI);
  ctx.arc(100,300,45,0,2*Math.PI);
  ctx.stroke();
  ctx.drawImage(myImage, 0, 0);


  closePath()

  myImage.src = "lel.png";
  var img = new Image();
  img.onload = function () {
      this.canvas.drawImage(img, 300, 300);// this is line 14
  };
  img.src = "images/logo.jpg";
