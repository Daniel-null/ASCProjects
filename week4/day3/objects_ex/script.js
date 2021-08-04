// Ball class to make Ball instance objects (objects that have all the same properties/methods)
class Ball {
    constructor(x, y, radius, color) {
        //Makes our objects using parameters
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {

        // Draw the ball
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
    }

}

//Creting a Ball object with the Ball class
let ballOne = new Ball(100, 100, 50, 'red');
console.dir(ballOne);
console.log(ballOne.x);
console.log(ballOne.color)


//Creating a Ball object from sratch using object literal notation
let ballTwo = {

    //Key:value properties
    x: 200,
    y: 200,
    radius: 50,
    color: 'blue',
    z: 56,

    //methods
    toString: function () {
        console.log(this);
        return 'x: ' + this.x + ' y: ' + this.y + ' z: ' + this.z;
    },

    print: function () {
        console.log(this);
        return 'x: ' + this.x + ' y: ' + this.y + ' z: ' + this.z;
    }
}

//Reading Ball 2 info
console.dir(ballTwo);
console.log("Ball Two X coord", ballTwo.x);
console.log(ballTwo.print());

/*console.log(this.x);
console.dir(this);*/

//Creating a new Ball object with arrays and nested objects!
let ball3 = {
    list: [1, 2, 3, 4], //Acess this using ball3.list[index], or ball3.list

    info: { //Acess this using ball3.info.property (such as, ball3.info.name), or to access whole thing, use ball3.info
        name: 'John',
        age: 25
    },

    //Method which returns ball name
    print: function () {
        return this.info.name;
    }
}

//Logging Ball 3 info!
console.dir(ball3);
console.log(ball3.list[3]);
console.log("Ball info", ball3.info.name);
console.log(ball3.print());


//Ball4 object using bracket notation to access properties!
let ball4 = {
    x: 100,
    y: 400,
    z: 70,
    "ball name": "Aboubacar",

    toString: function () {
        return this["x"] + " " + this["y"] + " " + this["z"] + this["ball name"];
    }
}

console.dir(ball4)
console.log(ball4.toString())

let instructor = {
    name: 'Bryan',
    age: 18,
    occupation: 'Teaching fellow'
}

for (let i = 0; i < 50; i++) {
    instructor.age++;
    console.log(instructor.age);
}

instructor.location = 'New York';
instructor.favGame = 'League of Legends';
instructor.location = 'Florida'

console.dir(instructor);

delete instructor.favGame;
console.dir(instructor);