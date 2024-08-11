/*
//Mouse Event for Box
const myBox = document.getElementById('myBox');

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!😣";
}

myBox.addEventListener("click", changeColor);
myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Don't do it😠";
});

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me!😊";
});
*/
//----------------------------------------------
//Mouse events for Button
const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

function changeColor(event){
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!😣";
}

myButton.addEventListener("click", changeColor);

myButton.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Don't do it😠";
});

myButton.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me!😊";
});