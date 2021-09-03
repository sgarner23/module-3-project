console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form submitted sucessfully!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

function alertCompliment(event) {
  alert("You are a wonderful person!");
}

let picture = document.querySelector("img");
picture.addEventListener("mouseover", alertCompliment);
