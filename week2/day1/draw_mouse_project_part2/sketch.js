function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
}

function draw() {
    let r = random(1, 255);
    let g = random(1, 255);
    let b = random(1, 255);

    stroke(r, g, b);
    strokeWeight(5)
    line(mouseX, mouseY, 250, 250);
}

function mouseClicked() {

}