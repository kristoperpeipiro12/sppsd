let slideImages = document.querySelectorAll("img");

let counter = 0;

const autoSliding = () => {
  setInterval(() => {
    slideImages[counter].style.animation = "next1 1s ease-in forwards";
    if (counter >= slideImages.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    slideImages[counter].style.animation = "next2 1s ease-in forwards";
  }, 5000);
};

autoSliding();

let goToDashboard = document.getElementById("masuk");

goToDashboard.onclick = function () {
  window.location.href = "index.html";
};
