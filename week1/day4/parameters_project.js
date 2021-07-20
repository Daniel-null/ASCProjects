function evenOrOdd(num) {
    if (num % 2 != 0) {
        console.log(num, ' is odd');
    }
    else {
        console.log(num, ' is even');
    }
}

evenOrOdd(7);
evenOrOdd(6872);
evenOrOdd(-5);
evenOrOdd(0);

function divisor(num1, num2) {
    if (num1 % num2 == 0) {
        console.log(num1, 'is divisble by', num2);
    }
    else {
        console.log(num1, 'is NOT divisible by', num2);
    }
}

divisor(9, 3);
divisor(27, 5);
divisor(10001, 10);
divisor(598, 13);

function distanceCalculator(name1, x1, y1, name2, x2, y2) {
    let d = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    console.log(name1, 'and ', name2, 'are ', d, 'meter(s) apart');
}

distanceCalculator("Michael", 3.28, 2.26, "Anthony", 3.92, 3);
distanceCalculator("you", 0, 0, "I", 0, 0);

function arrayHandler(array) {
    for(let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            console.log(array[i]);
        }
    }
}

arrayHandler([1, "a", 2, "b", 3, "c"]);
arrayHandler(['H', 'E', 'L', false, true, 1, 2, 55, 'L', 'O']);
arrayHandler(['string numbers', '1', '2', '3']);