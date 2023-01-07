import { TaskListView } from "./TaskListView";


function TaskListController({ taskList, setTask }) {

    const setTaskStatus = (id, status) => {
        const index = taskList.findIndex(task => task.id === id);
        const newList = [...taskList];
        newList[index].status = status;
        setTask(newList);
    }

    const deleteTask = (id) => {
        if (window.confirm('¿Está seguro que desea eliminar la tarea?')) {
            const index = taskList.findIndex(task => task.id === id);
            const newList = [...taskList];
            newList.splice(index, 1);
            setTask(newList);
        }
    }

    return (
        <TaskListView taskList={taskList} setTaskStatus={setTaskStatus} deleteTask={deleteTask}></TaskListView>
    );
}

export { TaskListController };