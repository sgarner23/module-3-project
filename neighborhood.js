const pic = document.querySelector(".ogden-picture");
const btn = document.querySelector(".pick")

function changePic(event) {
  pic.src =
    "https://cdn.shopify.com/s/files/1/1199/7718/files/Ogden_Made_Script_Logo_Horizontal_2020_FINAL_Black.psd_2000x.png?v=1582244834";
}

pic.addEventListener("mouseover", changePic);

function pickFood (event) {
  let foodArr = ["Roosters", "El Matador", "Tona"];
  let indexTracker = Math.floor(Math.random() * foodArr.length);

  alert(`Go eat at ${foodArr[indexTracker]}`);

}

btn.addEventListener('click', pickFood);


