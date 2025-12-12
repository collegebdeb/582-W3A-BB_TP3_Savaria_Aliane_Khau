// Kelyan Aliane le nombre de cercles dans la timeline
export const timeline = (cercles) =>{
    for (let i = 0; i < 10; i++) {
        let element = document.createElement('div')
        element.classList.add('cercle')
        cercles.appendChild(element);
    }
}

// Agrandissement des cercles dans la timeline
const elements = document.querySelectorAll(".cercle");
document.addEventListener("scroll", ()=>{
    elements.forEach((elem)=>{
        const pos = elem.getBoundingClientRect().x;
        const milieu = window.innerWidth / 2;
        if(pos > milieu - 400 && pos < milieu + 400) {
            elem.classList.add("actif");
        } else {
            elem.classList.remove("actif");
        }
    });
});


