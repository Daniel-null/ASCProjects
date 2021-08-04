// step 1: getting refrence to the elements 
let userInput = document.querySelector('#input')
let addTask = document.querySelector('#submit-button');

let list = document.querySelector('#todo-list');

// step 2: create the events
addTask.onclick = function(event) {
    event.preventDefault(); //prevents page refresh

    let newTask = document.createElement('li');
    newTask.innerHTML = userInput.value;

    list.prepend(newTask);

    
}