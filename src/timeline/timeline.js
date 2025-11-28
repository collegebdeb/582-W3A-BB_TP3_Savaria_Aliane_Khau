//chaque iteration de ma boucle va venir rajouter un child a cercles
// Kelyan Aliane//
export const timeline = (cercles) =>{
    for (let i = 0; i < 10; i++) {
        let element = document.createElement('div')
        element.classList.add('cercle')
        cercles.appendChild(element);
    }

}


