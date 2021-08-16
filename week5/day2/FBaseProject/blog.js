//forms
let title = document.querySelector('#title');
let message = document.querySelector('#message');
let name = document.querySelector('#name');

// post button
let submit = document.querySelector('#Post');

// Set database object REFERENCE here:
let database = firebase.database().ref();

submit.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let titleData = title.value;
    let messageData  = message.value;
    let usernameData = name.value;
    
    name.value = "";
    message.value  = "";

    let userMessage = document.createElement('p');
    userMessage.innerHTML = usernameData + ': ' + messageData + ': ' + titleData;

    // Update database here
    let value = {
        TITLE: titleData,
        MESSAGE: messageData,
        NAME: usernameData
    }

    database.push(value)
}
