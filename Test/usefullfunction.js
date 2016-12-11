function adjustPosition(circle) {
   if (circle.x + circle.velocityX + circle.radius > context.canvas.width ||
       circle.x + circle.velocityX - circle.radius < 0)
      circle.velocityX = -circle.velocityX;

   if (circle.y + circle.velocityY + circle.radius > context.canvas.height ||
       circle.y + circle.velocityY - circle.radius  < 0)
      circle.velocityY= -circle.velocityY;

   circle.x += circle.velocityX;
   circle.y += circle.velocityY;
}
