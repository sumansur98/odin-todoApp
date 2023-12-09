import Task from "./Task";

function Project(){
    let projectName = '';
    let projectTaskList = [];

    const createProject = (name)=>{
        projectName = name;
    }

    const addTask = (name, date)=>{
        const task = Task();
        task.setTaskDetails(name, date);
        projectTaskList.push(task);
    }

    return {createProject, addTask};
}

export default Project;