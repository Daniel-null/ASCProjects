//in javascript you can give permaters to functions just like python
//this parameter acts liek a avriable that can only be used in the variable
//the way we pass it is when we call the function we put the value of the 
//parameter in the parenthesis
function pokedex(name, generation, type) {
    console.log(name, 'charamander is a generation', generation, type + '-type pokemon')
}
//you could also pass more than one parameter using the ,
let generation = 3
pokedex('treecko', generation, 'grass');
//                   ^^^^^
//you could also pass a variable as a parameter as shown
//if no parameter is passed itll say undefined