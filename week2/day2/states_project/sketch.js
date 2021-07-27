let i = 0;

function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}

function draw() {
    fill(0, 0, 0);
    rect(0, 0, 200, 200);

    fill(255, 255, 255)
    textSize(50)
    text('clear \ncanvas', 25, 75)

    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random(120, 180);
    fill (r, g, b, opacity);
    noStroke();

    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);

    let offSetX2 = random(-25, 25);
    let offSetY2 = random(-25, 25);

    let offSetX3 = random(-25, 25);
    let offSetY3 = random(-25, 25);
    
    i++
    if (i <= 360) {
        ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
    }
    else if (i >= 360  && i <= 720) {
        square(mouseX + offSetX, mouseY + offSetY, size);
    }
    else if (i >= 720 && i <= 1080) {
        triangle(mouseX + offSetX, mouseY + offSetY, mouseX + offSetX2, mouseY + offSetY2, mouseX + offSetX3, mouseY + offSetY3);
    }
    else {
        i = 0;
    }
}

function mouseClicked() {
    if (mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200) {
        background(255, 255, 255);    
    }
}