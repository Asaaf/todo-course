import './TaskListComponent.css';
import { TaskComponent } from "../TaskComponent/TaskComponent";


function TaskListComponent({ taskList, setTask }) {

    const completeTask = (id) => {
        const index = taskList.findIndex(task => task.id == id);
        const newList = [...taskList];
        newList[index].status = "completed";
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
                    onComplete={() => completeTask(task.id)}
                />
            ))}
        </div>
    );
}

export { TaskListComponent };