//random generates a random number

let randDecimal = Math.random();
//Math.random(); -> generates a random decimal
//between 0(inclusive) and 1(exclusive)
console.log('RandDec: ', randDecimal*5);
//if we multi by a whole number ->generate
// a decimal between 0(nclsuive) and 5(exclusive)

let randNum = Math.floor(randDecimal * 5)

console.log('randNum:', randNum);

let userGuess =  process.argv[2];

let score = 0;

if (userGuess == 'A') {
    console.log('Wrong answer :(');
    score -= 1;
}
else if (userGuess == 'B') {
    console.log('Wrong answer :(');
    score -= 1;
}
else if (userGuess == 'C') {
    console.log('RIGHT ANSWER! WOHOO!!!');
    score += 5;
}
else if (userGuess == 'D') {
    console.log('Bad bad bad...');
    score -= 50;
}
else if (userGuess == 'I.KNOW.THE.SECRET') {
    console.log('Welcome to NIRVANA');
    score += 1000000;
}
else if (userGuess == null) {
    console.log('Empty response... Bad user');
}
else {
    console.log('Invalid response...');
}

console.log(score);