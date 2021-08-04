// step 1 refrence to out elements
let addButton = document.querySelector("#add-button");
let deleteButton = document.querySelector("#delete-button");
let clearButton = document.querySelector("#clear-button");
let images = document.querySelector("#images")

// step 2 create the events
addButton.onclick = function() {
    // create image
    let newImage = document.createElement("img");
    // newImage.src to add a src to out img element
    newImage.src = "images/charmander.png";
    console.dir(newImage);

    // adding image to our page
    // .appendChild adds a child to the parent element
    //prepend adds to the beggining
    images.appendChild(newImage);
}

//deleting images
deleteButton.onclick = function() {
    let lastImage = images.lastElementChild;
    images.removeChild(lastImage)
}

//clears all images
clearButton.onclick = function() {
    images.innerHTML = '';
}