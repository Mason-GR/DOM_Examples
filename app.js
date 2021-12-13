// BOX ANIMATION LEFT TO RIGHT
// let timer = setInterval(move, 100);

// // Boxes starting position
// let boxPosition = 0;
// // Select the box by it's ID
// let box = document.getElementById("box");

// function move() {
//   if (boxPosition >= 175) {
//     clearInterval(timer);
//   } else {
//     boxPosition += 1; // Imcreases the boxPosition value by 1
//     box.style.left = boxPosition + "px";
//     // Updates box's position from the left of the container
//   }
// }

// BOX ANIMATION CIRCULAR

let x = 0;
let y = 0;
let box2 = document.querySelector("#box-2");
let container3 = document.querySelector("#container-3");

let timer2 = setInterval(move, 50);

function move() {
  if (x == container3.clientWidth) {
    clearInterval(timer2);
    return;
  }
  box2.style.left = ++x + "px";
}

move();

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

let modal2 = document.getElementsByClassName("modal2")[0];

document
  .getElementsByClassName("open")[0]
  .addEventListener("click", function () {
    modal2.style.display = "flex";
  });

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    modal2.style.display = "none";
  });

// FLASH ALERT

let btn2 = document.querySelector("#btn-2");
let alert = document.querySelector(".alert");
let alertMsg = document.querySelector(".alert-msg");

btn2.addEventListener("click", flashAlert);

function flashAlert() {
  alert.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  alert.style.display = "block";
  alertMsg.textContent =
    "Hooray! Flash alert has been triggered for 3 seconds!";

  setTimeout(function () {
    alert.style.display = "none";
  }, 3000);
}

function randomRGB() {
  return Math.round(Math.random() * 255);
}
