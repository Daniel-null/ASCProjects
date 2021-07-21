//initialization
//star off with a state
let state = 1;
let message = 'State #1'
function setup() {
    //sets up the canvas and size
    createCanvas(500, 500);
    //sets background color to white
    background(0, 0, 0);
}

function draw() {
    if (state == 1) {
        console.log("this if is running")
        background(255, 0, 0)
    } 
    else if (state == 2) {
        background(0, 255, 0);
    }
    else if (state == 3) {
        background(0, 0, 255);
    }

    fill(255); //white
    textSize(50); // size 
    text(message, 15, 60);
}

function mouseClicked() {
    if (state == 1) {
        state = 2;
        message = 'state #2';
    }
    else if (state == 2) {
        state = 3;
        message = 'state #3'
    }
    else if (state == 3) {
        state = 1;
        message = 'state #1'
    }
}