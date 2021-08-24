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
