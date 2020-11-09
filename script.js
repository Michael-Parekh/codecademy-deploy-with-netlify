const clapButton = document.getElementById("button-clap");
let isClicked = false;

clapButton.addEventListener("click", switchBackground);

function switchBackground() {
  if (isClicked == false) {
    document.body.classList.add("secondary");
    isClicked = true;
  } else if (isClicked == true) {
    document.body.classList.remove("secondary");
    isClicked = false;
  }
}