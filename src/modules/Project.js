import Task from "./Task";

function Project(){
    let projectName = '';
    let projectTaskList = [];

    const addTask = (name, date)=>{
        const task = Task();
        task.setTaskDetails(name, date);
        projectTaskList.push(task);
    }
}