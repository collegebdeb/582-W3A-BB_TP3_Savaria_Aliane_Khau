const textRegle = document.querySelector(".boutonRegle");
textRegle.addEventListener("click", ouvrirFermerRegle);

let ouvrirRegle = false;
const linkRegle = document.querySelector("#instruction_ID");

function ouvrirFermerRegle () {
    linkEncyclo.style.display = "none";
    linkRegle.style.display = (ouvrirRegle = !ouvrirRegle) ? "block" : "none";
};

const textEncyclo = document.querySelector(".boutonEncyclo");
textEncyclo.addEventListener("click", ouvrirFermerEncyclo);

let ouvrirEncyclo = false;
const linkEncyclo = document.querySelector("#savoir_ID");

function ouvrirFermerEncyclo () {
    linkRegle.style.display = "none";
    linkEncyclo.style.display = (ouvrirEncyclo = !ouvrirEncyclo) ? "block" : "none";
};