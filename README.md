# Interactive-Mouse-Events-for-Box-and-Button
This project demonstrates how to use JavaScript to handle mouse events for a box and a button. The box changes color and text content based on different mouse interactions, while the button triggers changes in the box when clicked or hovered over.

## Description
This project showcases the use of JavaScript to handle various mouse events for a box and a button. The box changes its background color and text content based on different mouse interactions, providing a dynamic and interactive user experience.

## Features
- **Click Event**: Changes the box's background color to tomato and updates the text to "OUCH!😣".
- **Mouseover Event**: Changes the box's background color to light blue and updates the text to "Don't do it😠".
- **Mouseout Event**: Changes the box's background color to light green and updates the text to "Click me!😊".

## Usage
1. Clone the repository.
2. Open the `index.html` file in your browser.
3. Interact with the box and button to see the changes.

## Code Example
```javascript
// Mouse Event for Box
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

// Mouse events for Button
const myButton = document.getElementById('myButton');

myButton.addEventListener("click", changeColor);

myButton.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Don't do it😠";
});

myButton.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me!😊";
});
