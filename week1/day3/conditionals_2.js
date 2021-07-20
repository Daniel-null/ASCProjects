// or -> ||    AND -> &&

//using or (||) operator
if (4 > 0 || 3 > 0) {
    console.log('true or true');
}

if ('string' == 'string' || 3 < 1) {
    console.log('true or false');
}

if (100 == 20 || 'up' == 'down') {
    console.log('false or false');
}

//using and (&&) operator
if (4 > 0 && 3 > 0) {
    console.log('true or true');
}

if ('string' == 'string' && 3 < 1) {
    console.log('true or false');
}

if (100 == 20 && 'up' == 'down') {
    console.log('false or false');
}

//with a or operator only one conditional has to be true while
//with an and operator both(or multiple) condtionals need to be true