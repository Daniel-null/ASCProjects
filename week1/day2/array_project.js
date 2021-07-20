let letters = ['A', 'B', 'C', 'D', 'E'];

console.log(letters[1]);
console.log(letters[3]);
console.log(letters[5]);

let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

console.log(days[0]);
console.log(days[6]);
console.log(days.length);
console.log(days[days.length]);
console.log(days[days.length - 1]);

let myArray = ['Do', 'Re', 'Mi', 'Fa', 'So'];

console.log(myArray);

myArray.length = 2;
console.log(myArray);

myArray.length = 0;
console.log(myArray);

let scores = [85, 93, 65, 65, 92, 81, 93];
scores.sort();
console.log(scores);

let myArray2 = ['a', 'b', 'c', 'd'];

myArray2.reverse();
console.log(myArray2);
myArray2.reverse();

myArray2.push(1, 2);
console.log(myArray2);
myArray2.pop();
myArray2.pop();

myArray2.pop();
console.log(myArray2);
myArray2.push('d');

myArray2.splice(1, 1);
myArray2.push('e');
console.log(myArray2)

let myArray3 = ['a', 'b', 'c', 'd'];
myArray3.push('e', 'f');
myArray3.reverse();
console.log(myArray3);

let myArray4 = ['Hi', 90, '90', [1, 2, 3, 4], ':p'];
console.log(myArray4[3]);
console.log(myArray4[3][1]);