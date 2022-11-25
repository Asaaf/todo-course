import './TaskListComponent.css';
import { TaskComponent } from "../TaskComponent/TaskComponent";

 
const taskList = [
    { id: 1, name: "Tarea 01", description: "Descripción de la tarea número 01", status: "unfilled" },
    { id: 2, name: "Tarea 02", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorem beatae modi unde. Obcaecati laboriosam doloribus itaque ullam repudiandae vitae perspiciatis temporibus officiis. Officia possimus eaque cupiditate et dignissimos inventore?", status: "completed" },
    { id: 3, name: "Tarea 03", description: "Descripción de la tarea número 03", status: "in-progress" },
    { id: 4, name: "Tarea 04", description: "Descripción de la tarea número 04", status: "unfilled" },
    { id: 5, name: "Tarea 05", description: "Descripción de la tarea número 05", status: "unfilled" },
    { id: 6, name: "Tarea 06", description: "Descripción de la tarea número 06", status: "unfilled" },
]
function TaskListComponent() {
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