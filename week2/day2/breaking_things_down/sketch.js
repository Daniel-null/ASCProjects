function setup() {
    //sets up the canvas and size
    createCanvas(500, 500);
    //sets background color to white
    background(255, 255, 255);

    frameRate(120);
}

function draw() {
    //randomly sellect collor using rgb
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    //sets the opacity
    let opacity = random(120, 180)
    //makes the collor of the ellipses random
    fill(r, g, b, opacity);
    //removes border
    noStroke();
    //randomizes size of circle
    let size = random(5, 35);
    //randomizes postion of the circles by a factor of -25 to 25
    let offsetX = random(-25, 25);
    let offsetY = random(-25, 25);
    //tracks mouse movment
    ellipse(mouseX + offsetX, mouseY + offsetY, size, size);
}

function mouseClicked() {
    background(255, 255, 255)

}