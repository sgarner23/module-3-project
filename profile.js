const favColor = document.querySelector("#color");
const favPlace = document.querySelector("#place");
const favRitual = document.querySelector("#ritual");

function alertColor(event) {
  alert("BLUE!")
}

favColor.addEventListener("click", alertColor);

function alertPlace(event) {
  alert("Costa Rica!");
}

favPlace.addEventListener("click", alertPlace);

function alertRitual(event) {
  alert("Going to the gym!");
}

favRitual.addEventListener("click", alertRitual);
