let timer = setInterval(move, 100);

// Boxes starting position
let boxPosition = 0;
// Select the box by it's ID
let box = document.getElementById("box");

function move() {
  if (boxPosition >= 175) {
    clearInterval(timer);
  } else {
    boxPosition += 1; // Imcreases the boxPosition value by 1
    box.style.left = boxPosition + "px";
    // Updates box's position from the left of the container
  }
}

let input = document.getElementById("message");
// selecting by ID's
let title = document.getElementById("title");

input.addEventListener("keyup", function (event) {
  title.textContent = event.target.value;
}); // assigning a listener to change text on typing with a function

let modal = document.getElementsByClassName("modal")[0];

setTimeout(function () {
  modal.style.display = "flex";
}, 5000);

document
  .getElementsByClassName("modal-btn")[0]
  .addEventListener("click", function () {
    modal.style.display = "none";
  });
