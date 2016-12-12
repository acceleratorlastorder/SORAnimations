function adjustPosition(circle) {
    if (circle.x + circle.velocityX + circle.radius > context.canvas.width ||
        circle.x + circle.velocityX - circle.radius < 0)
        circle.velocityX = -circle.velocityX;

    if (circle.y + circle.velocityY + circle.radius > context.canvas.height ||
        circle.y + circle.velocityY - circle.radius < 0)
        circle.velocityY = -circle.velocityY;

    circle.x += circle.velocityX;
    circle.y += circle.velocityY;
}

for (var i = 0; i < 100; ++i) {
    circles[i] = {
        x: 100,
        y: 100,
        velocityX: 3 * Math.random(),
        velocityY: 3 * Math.random(),
        radius: 50 * Math.random(),
        color: 'rgba(' + (Math.random() * 255).toFixed(0) + ', ' +
            (Math.random() * 255).toFixed(0) + ', ' +
            (Math.random() * 255).toFixed(0) + ', 1.0)'
    };
}
