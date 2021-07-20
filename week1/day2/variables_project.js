let x;
x = 1;

console.log('the value of x is ', x)

let newvar = 'All Star Code!';
console.log(newvar);

let var1 = 20;
let var2 = 30;
let var3 = 'ABC';
let var4 = 'def';
let var5 = '20';
let var6 = '30';

let answer1 = var1 + var2;
let answer2 = var3 + var4;
let answer3 = var5 + var6;

console.log(answer1, answer2, answer3);

let num1 = 5;
let num2 =3;
num1 = 10;

let sum = num1 + num2;
console.log('sum: ', sum)

const luckynumber = 8;
//can't reassin variables declared with const
//luckynumber = 2;

console.log(luckynumber);


//task 2- fixing redundancy


// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
let rtickets = 4;
let ftickets = 2;

const priceR = 45;
const priceF = 75

let cost = priceR * rtickets + priceF * ftickets
console.log('Cost:', cost);
 
// We're reselling the tickets for 50% above the original price
let sellingP =  cost * 1.5
console.log('Selling price:', sellingP);
 
// But StubHub, the online ticket selling platform, charges a 20% seller fee
let sellerfee = sellingP * 0.2
console.log('Seller fee:', sellerfee);
 
// Our total profit:
let profit = sellingP - cost - sellerfee
console.log('Profit:', profit);



//extra credit problem solving 
x = 4;
let y = 5;
const z = -3;

y = y + z; // will = 2
x = x * y - 2; // x will = 6
x = y ** (-z); //x will = 8
y = y - 1; //y be 1