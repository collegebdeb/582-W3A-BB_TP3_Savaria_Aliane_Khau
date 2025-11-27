import './style.css';
import { timeline } from './timeline/timeline.js';

const cercles = document.getElementById("cercles");
//doit s'executer une fois lors du premier render
timeline(cercles)









// variable
let Pl_Position = 125 ;
let Yellow_Cube_App = false


document.addEventListener("keydown", keypress)


// initialisation canvas 

let c = document.getElementById("Canvas_Timeline");
let ctx = c.getContext("2d");



function Update_Timeline(){
console.log(Pl_Position)
ctx.fillStyle = "Red"
ctx.fillRect(0,0,800,10000000)




// cube bleu
ctx.fillStyle = "blue"
ctx.fillRect(0+Pl_Position,0,50,50)
// cube jaune
ctx.fillStyle = "yellow"
ctx.fillRect(250+Pl_Position,0,50,50)
// cube vert
ctx.fillStyle = "green"
ctx.fillRect(-250+Pl_Position,0,50,50)



if(250+Pl_Position > 0 && 250+Pl_Position < 300){console.log("cube jaune"); }
}




function keypress(i){
console.log(i.code)


if (i.code == "KeyA" ) {
Pl_Position = Pl_Position-5

}

else if (i.code == "KeyD" ) {
Pl_Position = Pl_Position+5

}










}

setInterval(Update_Timeline, 10)