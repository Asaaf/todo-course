import './TaskListComponent.css';
import { TaskComponent } from "../TaskComponent/TaskComponent";

 
function TaskListComponent({taskList}) {
    return (
        <div className='task-list-components'>
            {taskList.map(task => (
                <TaskComponent
                    key={task.id}
                    name={task.name}
                    description={task.description}
                    status={task.status}
                />
            ))}
        </div>
    );
}

export { TaskListComponent };