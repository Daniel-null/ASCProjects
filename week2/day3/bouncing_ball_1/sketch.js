let xPos = 25;
let direction = 1;
let speed = 3;

function setup() {
   createCanvas(500, 500);
   background(0);
}
 
function draw() {
   background(0);
 
   fill(0, 255, 0);
   ellipse(xPos, 250, 50, 50);
 
   xPos += speed * direction;

   if(xPos > 475 || xPos < 25) {
       direction *= -1;
   }
    //if (xPos > 525) {
    //  xPos = -25;
    //}
}
