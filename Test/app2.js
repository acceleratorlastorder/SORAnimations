var canvas;
var context;

// Size of the histogram
var width = 300, height=300;
// The origin, bottom left corner, relative to the origin in the canvas
var x = 50, y = 350;

// Data to be visualized
var values = [8, 10, 2, 20];

// Patterns for histogram
   var patterns = {
        pattern0: 'http://cdn2.digitalartsonline.co.uk/images/features/1675/intro.jpg',
        pattern1: 'http://farm3.static.flickr.com/2319/2486384418_8c031fec76_o.jpg',
        pattern2: 'http://pshero.com/assets/tutorials/0062/final.jpg',
        pattern3: 'http://4.bp.blogspot.com/_Rqs7w7m37B4/TETj5rD_QmI/AAAAAAAAADk/qRiwoTO-zKk/s1600/symmetry:assymetry+repeatable+pattern.jpg'
      };

function loadImages(sources, callback) {
  var images = {};
  var loadedImages = 0;
  var numImages = 0;

  // get num of sources
  for(var src in sources) {
    numImages++;
  }

  for(var src in sources) {
    images[src] = new Image();
    images[src].onload = function() {
        if(++loadedImages >= numImages) {
           callback(images);
         } // if
     }; // function
     images[src].src = sources[src];
  } // for
} // function

//init function called by a body onload event.
function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

      loadImages(patterns, function(images) {
         // x, y is the bottom left position of the chart
         makeHistogramMultipleImages(x, y, width, height,
                                     values, images);
      });
}

// returns the max from the elements of the values array.
function getMax(values) {
    var maxValue = 0;

    for (i=0; i<values.length; i++) {
        if (maxValue < values[i])
            maxValue = values[i];
    }
  return maxValue;
}




function drawAxis(width, height,  values, maxValue) {
	  // remember: we have the origin of the coordinate system at bottom left
	  // Y values above will be negative

    context.strokeStyle = "black"; //We draw in black the outline.
    context.fillStyle = "black"; //We fill in black.

    //We define the vertical step unit. Is it 10 ? 20 ? 100 ? 1000 ? Depending on the
    // max unit value, we decide how the steps will be for the ticks
    var unit = 1;
    while (maxValue / (unit*10) > 1) {
        unit *= 10;
    }

   //We define the highest vertical step.
    var yMaxOnAxis = parseInt(maxValue) / unit;

    // Everything is in a path, all drawing orders will be drawn by a final call
    // to context.stroke() at the end of the function.
    context.beginPath(); //Begin a new path.

    // Draw the axis' lines
    context.moveTo(0, 0); //We place the cursor to origin.
    context.lineTo(0, -height); //We draw the vertical line.
    context.moveTo(0, 0); //We place the cursor to origin.
    context.lineTo(width, 0); //We draw the horizontal line.


    // ticks/labels on the vertical line
    context.textAlign = "left";

    for (i=0; i <= yMaxOnAxis; i++) {
        // move to the next graduation. the y value is negative due to
        // the change of the origin by a call to translate(x,y) in the drawHistogram
        // function.
        context.moveTo(0, -height / yMaxOnAxis * i );

        // draw an horizontal line, 5 pixels long, on the left of the axis
        context.lineTo(-5, -height / yMaxOnAxis * i );

        // write the graduation value, 25 pixels on the left of the axis
        context.fillText(i*unit, -25, -height / yMaxOnAxis * i );
    }

    // Ticks/labels on the horizontal line
    var counter = 0;
    // text centered below the tick
    context.textAlign = "center";


    // graduation on the horizontal line.
    var rectanglesWidth = width / values.length;

    for (i=0; i <= values.length; i++) {
    	  // Move to the next horizontal position of the tick
        context.moveTo(i*rectanglesWidth , 0);
        // draw a vertical line 5 pixels long: the tick
        context.lineTo(i*rectanglesWidth , 5);
        // write tick label  15 pixels below the tick
        context.fillText(i, i*rectanglesWidth , 15);
        counter++;
    }
    // Draw everything in the path
    context.stroke();

}


    // MakeHistogram building a bar plot. x, y is the bottom left position of the
// histogram. Easier to reason with this coordonate system
function makeHistogramMultipleImages(x, y, width, height, values,images ) {

    // Compute the max of the values array
    var maxValue = getMax(values);

    // step in pixels between two horizontal values for bar plot.
    var rectWidth = width / parseFloat(values.length);

    // step in pixels between two vertical values for bar plot.
    var vStep = -height / parseFloat(maxValue);

    // Michel Buffa : all the drawing must be done inside the onload function,
    context.save();
    // Change the origin at bottom left. If we draw "above", Y values will be negative.
        // y=0 is the horizontal line at bottom
    context.translate(x, y);


    context.strokeStyle = 'red';

    // Draw the histogram rectangles
    for(i=0; i < values.length; i++) {
       // Create pattern with pattern1, pattern2, etc.
      var patternName = "pattern"+i;
    var pattAceitunas = context.createPattern(images[patternName] , "repeat");
    context.fillStyle = pattAceitunas;

      //We draw a filled red rectangle to represent the current value.
      context.fillRect(i * rectWidth, 0,
          rectWidth, vStep * values[i]);
      //We draw the outline of rectangle.
      context.strokeRect(i * rectWidth, 0,
          rectWidth, vStep * values[i]);
    }
    // draw the axis, must be also in the onload function.
    drawAxis(width, height, values, maxValue);
    context.restore();
}
