let btnClicked = false;

const body = document.getElementsByTagName("body")[0];

const btnGreen = document.getElementById("green");
const btnRed = document.getElementById("red");
const btnBlue = document.getElementById("blue");
const btnRandom = document.getElementById("random");

// Green
btnGreen.addEventListener("click", function () {
  body.style.color = "#e2ffde";
  body.style.backgroundColor = "green";
});

// Red
btnRed.addEventListener("click", function () {
  body.style.color = "#ffe2de";
  body.style.backgroundColor = "red";
});

// Blue
btnBlue.addEventListener("click", function () {
  body.style.color = "#deebff";
  body.style.backgroundColor = "blue";
});

// Random
btnRandom.addEventListener("click", function () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const colour = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = colour;

  console.log(colour);
});
