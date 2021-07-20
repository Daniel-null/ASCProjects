let usersGrade = process.argv[2]

if (usersGrade >= 90){
    console.log('Congrats! Keep it up!');
}
else if (usersGrade >= 80){
    console.log('Good Work. Keep it up.');
}
else if (usersGrade >= 70){
    console.log('Please try harder');
}
else if (usersGrade >= 60){
    console.log('Please try harder');
}
else {
    console.log('Come see me')
}