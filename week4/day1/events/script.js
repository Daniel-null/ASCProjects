// STEP 1: GETTING THOSE ELEMENTS
let firstButton = document.querySelector("#first");
let secondButton = document.querySelector("#second");
let thirdButton = document.querySelector("#third");
let body = document.querySelector("body");
let header = document.querySelector("h3");
// STEP 2: ADDING THOSE EVENTS!!!
// 💡 TIP: FUNCTION TYPES
// Named Functions: function name() {}
// Anonymous Functions: function () {}
// FIRST BUTTON: On Click
firstButton.onclick = function () {
    header.innerHTML = "The background is red. You clicked on the button once."
    body.style.backgroundColor = "firebrick";
}
// SECOND BUTTON: On Double Click
secondButton.ondblclick = function () {
    header.innerHTML = "The background is green. You clicked on the button twice."
    body.style.backgroundColor = "rgb(32, 143, 100)";
}
// THIRD BUTTON: On Mouse Hover
thirdButton.onmouseover = function () {
    header.innerHTML = "The background is blue. You hovered over the button!";
    body.style.backgroundColor = "#0053a8";
}