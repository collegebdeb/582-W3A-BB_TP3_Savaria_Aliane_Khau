import './style.css';
import { timeline } from './timeline/timeline.js';

const cercles = document.getElementById("cercles");



//doit s'executer une fois lors du premier render
timeline(cercles)





window.addEventListener("resize", (e) => {
    c.width = (window.innerWidth*0.9);
})



// variable
let Pl_Position = 0 ;
document.addEventListener("keydown", keypress)


// initialisation canvas 

let c = document.getElementById("Canvas_Timeline");
let ctx = c.getContext("2d");
c.width = (window.innerWidth*0.9)





function Update_Timeline(){
TextTrigger()
ctx.fillStyle = "white"
ctx.fillRect(-10000+Pl_Position,0,120000000000,10000000)


//

// cube bleu
ctx.fillStyle = "blue"
ctx.fillRect(0+Pl_Position,50,500,500)
// cube jaune
ctx.fillStyle = "yellow"
ctx.fillRect(2000+Pl_Position,50,500,500)
// cube vert
ctx.fillStyle = "green"
ctx.fillRect(-2000+Pl_Position,50,500,500)



}




function keypress(i){
console.log(i.code)


if (i.code == "KeyA" ) {
Pl_Position = Pl_Position-10
}

else if (i.code == "KeyD" ) {
Pl_Position = Pl_Position+10
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