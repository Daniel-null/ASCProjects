// container for all the blog post
let container = document.querySelector('#blogPost');

let database = firebase.database().ref();


database.on('child_added', function(childData) {
    let messageData = childData.val();
    console.log(messageData);

    // create message element (paragraph)
    let displayMessage =  document.createElement('p');
    displayMessage.innerHTML = messageData.TITLE + ' ' + messageData.NAME + ': ' + messageData.MESSAGE;

    // append element to page
    container.append(displayMessage)
})
