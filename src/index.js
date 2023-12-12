import './style.css'

function Task(){
    let taskName = "";
    let taskDueDate = null;

    const getTaskDetails = ()=>{
        return {taskName, taskDueDate}
    }

    const setTaskDetails = (name, date)=>{
        taskName = name;
        taskDueDate = date;
    }

    return {getTaskDetails, setTaskDetails};
}

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

function Storage(){
    let allListData = {};

    const getAllData = ()=>{
        let existingStorage = localStorage.getItem('todoData');
        if(existingStorage){
            allListData = existingStorage;
        }
    }

    
}
