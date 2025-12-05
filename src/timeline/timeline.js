//chaque iteration de ma boucle va venir rajouter un child a cercles
// Kelyan Aliane//
export const timeline = (cercles) =>{
    for (let i = 0; i < 10; i++) {
        let element = document.createElement('div')
        element.classList.add('cercle')
        cercles.appendChild(element);
    }

}


// Sélectionne tous les éléments.
const elements = document.querySelectorAll(".cercle");

// Détecte le défilement de la page
document.addEventListener("scroll", ()=>{
    //Vérifie chacun des éléments
    elements.forEach((elem)=>{
        
        //Récupère la position X de l'élément
        const pos = elem.getBoundingClientRect().x;
        //Récupère le centre de l'écran
        const milieu = window.innerWidth / 2;

        //Ajoute la classe "actif" sur l'élément s'il est dans la zone identifiée.
        if(pos > milieu - 100 && pos < milieu + 100) {
            elem.classList.add("actif");
        } else {
            elem.classList.remove("actif");
        }
    });
});


