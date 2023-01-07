import './TaskListView.css';
import { TaskController } from "../TaskComponent/TaskController";


function TaskListView({ taskList, setTaskStatus, deleteTask }) {

    return (
        <div className='task-list-components'>
            {taskList.map(task => (
                <TaskController
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

export { TaskListView };