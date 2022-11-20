import './ToDoListComponent.css';
import { TaskComponent } from "../TaskComponent/TaskComponent";

const taskList = [
    { id: 1, name: "Tarea 01", description: "Descripción de la tarea número 01", state: "Completada" },
    { id: 2, name: "Tarea 02", description: "Descripción de la tarea número 02", state: "Completada" },
    { id: 3, name: "Tarea 03", description: "Descripción de la tarea número 03", state: "Completada" },
    { id: 4, name: "Tarea 04", description: "Descripción de la tarea número 04", state: "Completada" },
    { id: 5, name: "Tarea 05", description: "Descripción de la tarea número 05", state: "Completada" },
    { id: 6, name: "Tarea 06", description: "Descripción de la tarea número 06", state: "Completada" },
]
function ToDoListComponent() {
    return (
        <div className='task-list-components'>
            {taskList.map(task => (
                <TaskComponent key={task.id} name={task.name} description={task.description} state={task.state} />
            ))}
        </div>
    );
}

export { ToDoListComponent };