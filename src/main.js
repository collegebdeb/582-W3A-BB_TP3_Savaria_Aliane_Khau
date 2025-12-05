import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import './style.css';
import { timeline } from './timeline/timeline.js';
import "./regleEncyclo.js";

const cercles = document.getElementById("cercles");



//doit s'executer une fois lors du premier render
//timeline(cercles)


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



window.addEventListener("resize", (e) => {
    c.width = (window.innerWidth*0.9);
    c.height = 600
})



// variable
let Pl_Position = -13000 ;
document.addEventListener("keydown", keypress)


// initialisation canvas 

let c = document.getElementById("Canvas_Timeline");
let ctx = c.getContext("2d");
c.width = (window.innerWidth*0.9)

// initialisation gradian



function Update_Timeline(){

let grad1=ctx.createLinearGradient(0+Pl_Position,0, 16500+Pl_Position,0)
grad1.addColorStop(0, "blue");
grad1.addColorStop(0.135, "red");
grad1.addColorStop(0.255, "blue");
grad1.addColorStop(0.38, "red");
grad1.addColorStop(0.5, "blue");
grad1.addColorStop(0.625, "red");
grad1.addColorStop(0.745, "blue");
grad1.addColorStop(0.865, "red");
grad1.addColorStop(1, "blue");

TextTrigger()
ctx.fillStyle = "white"
ctx.fillRect(-10000+Pl_Position,0,120000000000,10000000)

ctx.fillStyle = grad1
ctx.fillRect(0+Pl_Position,0,16500,800)


//

// cube bleu
ctx.fillStyle = "blue"
ctx.fillRect(100+Pl_Position,50,500,500)
// cube jaune
ctx.fillStyle = "yellow"
ctx.fillRect(2000+Pl_Position,50,500,500)
// cube vert
ctx.fillStyle = "green"
ctx.fillRect(4000+Pl_Position,50,500,500)
// cube mauve
ctx.fillStyle = "purple"
ctx.fillRect(6000+Pl_Position,50,500,500)
// cube rouge
ctx.fillStyle = "red"
ctx.fillRect(8000+Pl_Position,50,500,500)
// cube cyan
ctx.fillStyle = "aqua"
ctx.fillRect(10000+Pl_Position,50,500,500)
// cube orange
ctx.fillStyle = "orange"
ctx.fillRect(12000+Pl_Position,50,500,500)
// cube magenta
ctx.fillStyle = "magenta"
ctx.fillRect(14000+Pl_Position,50,500,500)

}




function keypress(i){
console.log(i.code)


if (i.code == "KeyA" ) {
Pl_Position = Pl_Position-100
if(Pl_Position<-14000){Pl_Position=-14000}
}

else if (i.code == "KeyD" ) {
Pl_Position = Pl_Position+100
if(Pl_Position>0){Pl_Position=0}
}

else if (i.code == "KeyE" ) {
console.log(Pl_Position)
}









}

setInterval(Update_Timeline, 10)
//               0          1         2 
// Trigger [ [position , message , switch] ]
let Trigger = [[2500,"jaune",false],[250,"Bleu",false],[-2000,"Vert",false]]

function TextTrigger(){ 
    console.log()
    for(let i=0 ; i < Trigger.length ; i++) {
        
        if(Trigger[i][0]+Pl_Position > 0 && Trigger[i][0]+Pl_Position < (window.innerWidth*0.9) && Trigger[i][2] == false){ 
            console.log(Trigger[i][1]);
            Trigger[i][2] = true;
        }      
    }
}

function gradian(){
console.log("test")

}