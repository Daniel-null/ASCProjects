let num = 0;

//you can break while loops by just saying break

//while loops

while(num < 5) {
    console.log(num, 'google');
    num++; // num = num + 1
    if(num ==3) {
        break;
    }
}

const people = ['Emamoke', 'Kenneth', 'Aboubacar', 'Henry'];

//for loops
for (let num2 = 0; num2 < 4; num2++) {
    console.log(num2, people[num2]);
}


console.log('rest of code ...');