import Task from "./modules/Task";

console.log('check');
const task = Task();
task.setTaskDetails('task1','date')
console.log(task.getTaskDetails());