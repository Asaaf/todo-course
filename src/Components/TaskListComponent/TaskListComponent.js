import './TaskListComponent.css';
import { TaskComponent } from "../TaskComponent/TaskComponent";


function TaskListComponent({ taskList, setTask }) {

    const setTaskStatus = (id, status) => {
        const index = taskList.findIndex(task => task.id == id);
        const newList = [...taskList];
        newList[index].status = status;
        setTask(newList);
    }

    const deleteTask = (id) => {
        const index = taskList.findIndex(task => task.id == id);
        const newList = [...taskList];
        taskList.splice(index, 1);
        setTask(newList);
    }

    return (
        <div className='task-list-components'>
            {taskList.map(task => (
                <TaskComponent
                    key={task.id}
                    name={task.name}
                    description={task.description}
                    status={task.status}
                    onProgress={() => setTaskStatus(task.id, "in-progress")}
                    onComplete={() => setTaskStatus(task.id, "completed")}
                    onDelete={() => deleteTask(task.id)}
                />
            ))}
        </div>
    );
}

export { TaskListComponent };