let num = process.argv[2];

while (num != 0) {
    console.log(num);
    num--;
}

for(let i = process.argv[3]; i != 0; i--) {
    console.log(i)
}

const students = ['Kristopher', 'Jayden', 'Joshua', 'Henry', 'Matthew', 'Brandon'];
for(let e = 0; e < 6; e++) {
    console.log(students[e])
}

let randec = Math.random()
let rannum = Math.floor(randec*11)

let randec2 = Math.random()
let rannum2 = Math.floor(randec2*11)
while (rannum != rannum2) {
    randec = Math.random()
    rannum = Math.floor(randec*11)

    randec2 = Math.random()
    rannum2 = Math.floor(randec2*11)
    
    console.log('1st random number: ', rannum, ' 2nd random number: ', rannum2);
}
console.log('Same random number! End loop');