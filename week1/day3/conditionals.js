//if (6 != 6) {
//    console.log('la di dum')
//}

let userGuess = process.argv[2];
// ^ assume input is a number
let answer = 5;
let score = 0;

if(userGuess == answer) {
    console.log("congradulations you're right");
    score += 5;
    //^short for score = score + 5
}
else if(userGuess < answer) {
    console.log('too low');
    score -= 1;
    //^short for score = score -1;
}
else{
    console.log('too high');
    score -= 1;
    //^short for score = score - 1;
}

console.log('final score: ', score);