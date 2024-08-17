function getContext(canvas) {
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new Error("The parameter must be a canvas element.");
    }

    // Get the 2D rendering context
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error("Unable to get 2D context from canvas.");
    }

    // Perform drawing operations
    context.fillStyle = 'blue';        // Set fill color to blue
    context.fillRect(10, 10, 100, 100); // Draw a filled rectangle

    context.strokeStyle = 'red';       // Set stroke color to red
    context.lineWidth = 5;             // Set line width
    context.strokeRect(10, 10, 100, 100); // Draw a rectangle outline

    context.beginPath();               // Start a new path
    context.arc(60, 60, 50, 0, Math.PI * 2); // Draw a circle
    context.closePath();               // Close the path
    context.stroke();                  // Outline the path

    return context;
}

// Usage example
const canvas = document.getElementById('myCanvas');
if (canvas) {
    try {
        const context = getContext(canvas);
        console.log("2D context obtained and drawing performed.");
    } catch (e) {
        console.error(e.message);
    }
} else {
    console.error("Canvas element with id 'myCanvas' not found.");
}
