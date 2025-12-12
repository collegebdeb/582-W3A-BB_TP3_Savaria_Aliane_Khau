const textRegle = document.querySelector(".boutonRegle");
textRegle.addEventListener("click", ouvrirFermerRegle);

let ouvrirRegle = false;
const linkRegle = document.querySelector("#instruction_ID");

// Ouvrir et fermer les règles
function ouvrirFermerRegle () {
    linkEncyclo.style.display = "none";
    linkRegle.style.display = (ouvrirRegle = !ouvrirRegle) ? "block" : "none";
};

const textEncyclo = document.querySelector(".boutonEncyclo");
textEncyclo.addEventListener("click", ouvrirFermerEncyclo);

// Ouvrir et fermer l'encyclopédie
let ouvrirEncyclo = false;
const linkEncyclo = document.querySelector("#savoir_ID");

function ouvrirFermerEncyclo () {
    linkRegle.style.display = "none";
    linkEncyclo.style.display = (ouvrirEncyclo = !ouvrirEncyclo) ? "block" : "none";
};

// Menu deroulant
const burger = document.querySelector(".burger");
const menuNav = document.querySelector(".menuNav");

burger.addEventListener("click", () => {
  menuNav.classList.toggle("showMenu");
  linkRegle.style.display = "none";
  linkEncyclo.style.display = "none";
});