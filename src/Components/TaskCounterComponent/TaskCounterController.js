import { TaskCounterView } from "./TaskCounterView";

function TaskCounterController({completedTask, totalTask}) {
    return (
        <TaskCounterView completedTask={completedTask} totalTask={totalTask}></TaskCounterView>
    );
};

export { TaskCounterController };