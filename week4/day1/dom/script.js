// let text = 'your computer is getting hacked!';
// window.alert(text)

//getting a refrence to first element
let firstHeader = document.querySelector('h1');

console.log('HTML Element');
console.log(firstHeader);

console.log('JavaScript DOM node');
console.dir(firstHeader)

// first element: changing styles
firstHeader.style.backgroundColor = 'rgb(255, 255, 0)';
firstHeader.style.fontSize ='50px';
firstHeader.style.color = 'red';

//second element:
let secondHeader = document.querySelector('#second');

secondHeader.style.backgroundColor = 'rgb(58, 224, 154)'
secondHeader.style.textDecoration = 'underline wavy'

//third element
let thirdHeader = document.querySelector('#third');

thirdHeader.style.backgroundColor = '#5050AA';

//forth element
let classTextElements =document.querySelectorAll('.text')

console.log('Looping through class .text element array:');
for (let i =0; i < classTextElements.length; i++) {
    console.log(classTextElements[i]);
    classTextElements[i].style.backgroundColor = 'black'
}
console.log('loop ended')