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

export default Task;