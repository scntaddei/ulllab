function shorthandBezierTo(ctx, x, y, cp1x, cp1y, cp2x, cp2y) {
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
}

// Example usage:
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50); // Start point
shorthandBezierTo(ctx, 200, 100, 150, 75, 150, 75); // Draw a curve to (200, 100)
ctx.lineWidth = 3;
ctx.strokeStyle = 'blue';
ctx.stroke();
