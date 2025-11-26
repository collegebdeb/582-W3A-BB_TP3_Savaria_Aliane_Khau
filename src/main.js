import './style.css';
import { timeline } from './timeline/timeline.js';

const cercles = document.getElementById("cercles");
//doit s'executer une fois lors du premier render
timeline(cercles)