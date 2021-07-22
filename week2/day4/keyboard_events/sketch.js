let myXPos = 100;
let myYPos = 100;

// p5 functions
// stup - runs once
// draw - 'over and over' -- loops
// mouseClicked - runs when clicking
// keyPressed - runs when a key is pressed

function setup() {
    createCanvas(500, 500);
    noStroke();
  
    rectMode(CENTER); // makes the center of rectangles the focus
}
  
function draw() {
    background(0);

    fill(255, 0, 0); // r, g, b --> 255 for red
    rect(myXPos, myYPos, 50, 50);

    //alternative to key pressed
    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }
}

// alternate way of getting key pressed

// function keyPressed() {
//     if(keyCode === LEFT_ARROW) {
//         myXPos -= 3;
//     } 
//     if(keyCode === RIGHT_ARROW) {
//         myXPos += 3;
//     }
//     if(keyCode === UP_ARROW) {
//         myYPos -= 3;
//     }
//     if(keyCode === DOWN_ARROW) {
//         myYPos += 3;
//     }
// }