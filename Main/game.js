document.addEventListener("DOMContentLoaded", function() {

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const Parts = {
        Path: "./Resources/Images/Game/path.png",
        Wall: "./Resources/Images/Game/wall.png",
        Start: "./Resources/Images/Game/wall.png",
        Goal: "./Resources/Images/Game/goal.png"
    }

    const maze = [
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Goal, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Path, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall],
        [Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Start, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall, Parts.Wall]
    ];
    

    var gridSize = 10;
    var cellSize = canvas.width / gridSize;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let image = new Image();
            image.src = maze[i][j];

            context.drawImage(image, i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
});