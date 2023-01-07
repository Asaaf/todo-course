import { TaskView } from "./TaskView.js";

function TaskController(task) {
    return (
        <TaskView task={task}></TaskView>
    );
}

export { TaskController };