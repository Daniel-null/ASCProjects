let stores = ['target', 'walmart', 'K-mart', 'Best Buy', 'Wallgreens', 'B&H'];
console.log(stores);

let firstElemenet = stores[0];
let thirdElement = stores[2];
console.log(firstElemenet);
console.log(thirdElement);

let mixarray = ['Target', true, 100, ['red', 'money', 'convinient' ]]
console.log(mixarray);
//calls specfic element from the array inside the array
console.log(mixarray[3][1]);

//replaces value of the array
mixarray[2] = 200;

console.log(mixarray)
//this is how we get the length of the array
console.log('length of mixarray:', mixarray.length);

//we can add an element to the end of an array
mixarray.push('walmart');
console.log(mixarray);

//.pop is used to remove the element
mixarray.pop();
console.log(mixarray);

//.reverse reverses the array
mixarray.reverse();
console.log(mixarray);

//tells you what index the target element is in the array
console.log(mixarray.indexOf('Target'));

//if the return value does not exist itll just return -1