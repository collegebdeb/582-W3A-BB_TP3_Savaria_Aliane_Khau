const textRegle = document.querySelector(".boutonRegle");
textRegle.addEventListener("click", ouvrirFermerRegle);

let ouvrirRegle = false;
const linkRegle = document.querySelector("#instruction_ID");

function ouvrirFermerRegle () {
    console.log("test");
    if (ouvrirRegle == false) {
        linkRegle.style.display = "block";
        ouvrirRegle = true;
    }
    else {
        linkRegle.style.display = "none" ;
        ouvrirRegle = false;
    }
};

const textEncyclo = document.querySelector(".boutonEncyclo");
textEncyclo.addEventListener("click", ouvrirFermerEncyclo);

let ouvrirEncyclo = false;
const linkEncyclo = document.querySelector("#savoir_ID");

function ouvrirFermerEncyclo () {
    console.log("test");
    if (ouvrirEncyclo == false) {
        linkEncyclo.style.display = "block";
        ouvrirEncyclo = true;
    }
    else {
        linkEncyclo.style.display = "none" ;
        ouvrirEncyclo = false;
    }
};