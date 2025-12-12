import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import './style.css';
import { timeline } from './timeline/timeline.js';
import "./regleEncyclo.js"; // Kelyane 
import bouton from './modules/bouton.js' // Elliot
// ---------[ Kelyane ]---------------------------------------------------------------------------------------------------------------------/
const cercles = document.getElementById("cercles");

//doit s'executer une fois lors du premier render
//timeline(cercles)


// ---[ Brandon ]---------------------------------------------------------------------------------------------------------------------------/
// Slider
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: "1",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// -----[ Elliot Savaria ]-----------------------------------------------------------------------------------------------------------------\\
//         V V V V V V

let body = document.getElementById("Canvas_Master")






window.addEventListener("resize", (e) => {
    c.width = (body.offsetWidth * 0.9);
    c.height = 600
})



// variable
let Pl_Position = -13750 ;
document.addEventListener("keydown", keypress)
let Mouse_x
let Mouse_y
let holding = false


// image
   const img1 = new Image();
   img1.src = 'src/images/logoBigBang.png'
   const img2 = new Image();
   img2.src = 'src/images/DinoLogo.png'
   const img3 = new Image();
   img3.src = 'src/images/asteroidLogo.png'
   const img4 = new Image();
   img4.src = 'src/images/AntiquitéLogo.png'
   const img5 = new Image();
   img5.src = 'src/images/ChateauxLogo.png'
      const img6 = new Image();
   img6.src = 'src/images/titanicLogo.png'
      const img7 = new Image();
   img7.src = 'src/images/WW1Logo.jpg'
      const img8 = new Image();
   img8.src = 'src/images/WW2Logo.jpg'
      const img9 = new Image();
   img9.src = 'src/images/ColdWarLogo.jpg'
      const img10 = new Image();
   img10.src = 'src/images/CovidLogo.png'

// initialisation canvas 

let c = document.getElementById("Canvas_Timeline");
let ctx = c.getContext("2d");
c.width = (window.innerWidth*0.9)
// bouton
const bouton1 = new bouton(150, 475 , 0 , ctx,body);
const bouton2 = new bouton(150, 475, 1 , ctx, body);


function Update_Timeline(){
// gradian
let grad1=ctx.createLinearGradient(0+Pl_Position,0, 20000+Pl_Position,0)
grad1.addColorStop(0.03, "black");
grad1.addColorStop(0.1, "#3ef044");
grad1.addColorStop(0.20, "#8f0e0e");
grad1.addColorStop(0.23, "#8f0e0e");
grad1.addColorStop(0.3, "white");
grad1.addColorStop(0.32, "white");
grad1.addColorStop(0.4, "grey");
grad1.addColorStop(0.42, "grey");
grad1.addColorStop(0.5, "#40B6EB");
grad1.addColorStop(0.52, "#40B6EB");
grad1.addColorStop(0.59, "#622A2A");
grad1.addColorStop(0.62, "#622A2A");
grad1.addColorStop(0.7, "blue");
grad1.addColorStop(0.8, "red");
grad1.addColorStop(0.9, "red");
grad1.addColorStop(0.99, "black");

// fond

ctx.fillStyle = "white"
ctx.fillRect(-10000+Pl_Position,0,120000000000,10000000)

ctx.fillStyle = grad1
ctx.fillRect(0+Pl_Position,0,20025,800)
ctx.fillStyle = "white"



// big bang
ctx.drawImage(img1,100+Pl_Position,50,350,350)

ctx.font = "48px serif"
ctx.fillText('Big Bang',185+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 13,8 milliards d'années av. J.-C. - ",90+Pl_Position,550,500)
// dino
ctx.drawImage(img2,2000+Pl_Position,50,350,350)

ctx.font = "48px serif"
ctx.fillText('Apparition des dinosaures',1950+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 230 à 245 millions d'années av. J.-C. - ",1950+Pl_Position,550,500)
// asteroide
ctx.drawImage(img3,4000+Pl_Position,50,500,500)

ctx.font = "48px serif"
ctx.fillText('Extinction des dinosaures',3950+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 66 millions d'années av. J.-C. - ",4000+Pl_Position,550,500)
// antiquité
ctx.fillStyle = "black"
ctx.drawImage(img4,6000+Pl_Position,50,350,350)

ctx.font = "48px serif"
ctx.fillText('Antiquité',6100+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 3500 av. J.-C. a 476 apr. J.-C - ",6000+Pl_Position,550,500)
ctx.fillStyle = "white"
//  Moyen Âge

ctx.drawImage(img5,8000+Pl_Position,50,350,350)

ctx.font = "48px serif"
ctx.fillText('Moyen Âge',8062+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 476 a 1492 - ",8085+Pl_Position,550,500)

// naufrage du titanic


ctx.drawImage(img6,10000+Pl_Position,50,350,350)
ctx.font = "48px serif"
ctx.fillText('Naufrage du titanic',10055+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 1912 - ",10125+Pl_Position,550,500)

// WW1

ctx.drawImage(img7,12000+Pl_Position,30,300,400)
ctx.font = "48px serif"
ctx.fillText('Première Guerre mondiale',11905+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 1914 à 1918 - ",12050+Pl_Position,550,500)

// WW2
ctx.drawImage(img8,14000+Pl_Position,30,300,400)

ctx.font = "48px serif"
ctx.fillText('Seconde Guerre mondiale',13910+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 1939 à 1945 - ",14050+Pl_Position,550,500)

// Cold War
ctx.drawImage(img9,16000+Pl_Position,30,300,400)

ctx.font = "48px serif"
ctx.fillText('La guerre froide',15995+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 1947 à 1991 - ",16050+Pl_Position,550,500)

// covid
ctx.drawImage(img10,18000+Pl_Position,50,350,350)
ctx.font = "48px serif"
ctx.fillText('La pandémie de Covid-19',17950+Pl_Position,475,500)
ctx.font = "30px serif"
ctx.fillText("- 2020 à 2023 - ",18080+Pl_Position,550,500)


//controle

bouton1.draw()
bouton2.draw()
clic( )
}



// controle avec A et D 
function keypress(i){
console.log(i.code)


if (i.code == "KeyD" ) {
Pl_Position = Pl_Position-100
if(Pl_Position<-18100){Pl_Position=-18100}
}

else if (i.code == "KeyA" ) {
Pl_Position = Pl_Position+100
if(Pl_Position>0){Pl_Position=0}
}

}


// Cliker avec la souris
document.addEventListener("mousedown", () => { holding = true}) 
document.addEventListener("mouseup", () => {holding = false}) 

function clic(){

if ( holding == true) {
    if(Mouse_x > 30 && Mouse_x < 135 && Mouse_y > 485 && Mouse_y < 590  ){Pl_Position = Pl_Position+10}
    else if(Mouse_x > (body.offsetWidth*0.9)-125 && Mouse_x < (body.offsetWidth*0.9)-25 && Mouse_y > 485 && Mouse_y < 590  ){Pl_Position = Pl_Position-10}
    if(Pl_Position<-18100){Pl_Position=-18100}
    if(Pl_Position>0){Pl_Position=0}
}
}

// interval d'update
setInterval(Update_Timeline, 10)


// Position de la souris
    document.getElementById("Canvas_Timeline").addEventListener('mousemove', function(event) {
        let rect = c.getBoundingClientRect()
          Mouse_x = event.clientX - rect.left;
          Mouse_y = event.clientY - rect.top;
        console.log(Mouse_x,Mouse_y)
         return
        
    })

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------//













