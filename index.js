const btn = document.getElementById("closeBtn");
// bollean pour la pop up
let playOne = true;

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.style.height = "90px";
  } else {
    navbar.style.height = "60px";
  }
  // pour récuperer la valuer du scroll en focntion de la  taille de l'ecran en %
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollValue > 0.5) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = " translateX( 0px)";
  }

  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = " none";
    playOne = false;
  }
});

btn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = " translateX( 500px)";
});
