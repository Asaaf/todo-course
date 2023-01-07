import { TaskCreateView } from "./TaskCreateView";

function TaskCreateController() {

    const createTask = () => {
        alert("Se ha creado una nueva tarea");
    }

    return (
        <TaskCreateView createTask={createTask}></TaskCreateView>
    );
}

export { TaskCreateController };