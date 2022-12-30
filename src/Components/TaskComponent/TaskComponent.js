import "./TaskComponent.css";

function TaskComponent(task) {
    return (
        <div className="task-container">
            <div className="description-area">
                <div className="title-area">
                    <h1 className="task-title">{task.name}</h1>
                    <div className={`status ${task.status}`}>
                        {task.status == 'unfilled' ? 'Sin completar' : task.status == 'in-progress' ? 'En progreso' : task.status == 'completed' ? 'Completada' : ''}
                    </div>
                </div>
                <div className="task-description">
                    <p className="text-block">{task.description}</p>
                </div>
            </div>
            <label className="check-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </div>
    );
}

export { TaskComponent };