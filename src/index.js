import Task from "./modules/Task";
import Project from "./modules/Project";
import './style.css'

console.log('check');
const task = Task();
task.setTaskDetails('task1','date')
console.log(task.getTaskDetails());
