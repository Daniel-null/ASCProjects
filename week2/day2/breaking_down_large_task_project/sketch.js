function setup() {
    //sets up the canvas and size
    createCanvas(500, 500);
    //sets background color to white
    background(0, 0, 0);
}

function draw() {
    background(0, 0, 0);
    square(mouseX, 100, 50);
    square(mouseX, 200, 50);
    square(mouseX, 300, 50);
}

function mouseClicked() {
    let r = random (0, 255);
    let g = random (0, 255);
    let b = random (0, 255);
    fill(r, g, b)
}