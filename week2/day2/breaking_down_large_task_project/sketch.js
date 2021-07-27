let r = 255;
let g = 0;
let b = 0;

let r1 = 0;
let g1 = 255;
let b1 = 0;

let r2 = 0;
let g2 = 0;
let b2 = 255;

function setup() {
    //sets up the canvas and size
    createCanvas(500, 500);
    //sets background color to white
    background(0, 0, 0);
}

function draw() {
    background(0, 0, 0);
    fill(r, g, b)
    square(mouseX, 100, 50);
    fill(r1, g1, b1)
    square(mouseX, 200, 50);
    fill(r2, g2, b2)
    square(mouseX, 300, 50);
}

function mouseClicked() {
    r = random (0, 255);
    g = random (0, 255);
    b = random (0, 255);

    r1 = random (0, 255);
    g1 = random (0, 255);
    b1 = random (0, 255);

    r2 = random (0, 255);
    g2 = random (0, 255);
    b2 = random (0, 255);
}