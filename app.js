let timer = setInterval(move, 100);

let boxPosition = 0;

let box = document.getElementById("box");

function move() {
  if (boxPosition >= 175) {
    clearInterval(timer);
  } else {
    boxPosition += 1;
    box.style.left = boxPosition + "px";
  }
}
