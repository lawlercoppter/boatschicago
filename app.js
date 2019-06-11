const full_button = document.getElementsByClassName("flickity-button-icon");
const carousel_img = document.getElementsByClassName("cell-image");

full_button.addEventListener("click", function() {
  fullScreenImage();
});

function fullScreenImage() {
  carousel_img.setAttribute("style", "max-width: 900px");
  console.log("the potato is in");
}
