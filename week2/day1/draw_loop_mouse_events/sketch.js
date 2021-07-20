function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
}

function draw() {
    ellipse(mouseX, mouseY, 25, 25)
    // let r = random(0, 255);
    // let g = random(0, 255);
    // let b = random(0, 255);
    // fill(r, g, b);

    // let xPos = random(0, 500);
    // let yPos = random(0, 500);
    // ellipse(xPos, yPos, 25, 25);
}
//p5 hs a secret variable called mouseX and mouseY which tracks the location of the mouse
function mouseClicked() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);

    //ellipse(250, 250, 100, 100);
}