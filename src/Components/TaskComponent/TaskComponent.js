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
            <div className="actions">
                <div className="action">
                    En Progreso
                    <label className="check-container">
                        <input type="checkbox" />
                        <span className="checkmark" onClick={() => task.onProgress(task.id)}></span>
                    </label>
                </div>
                <div className="action">
                    Completada
                    <label className="check-container">
                        <input type="checkbox" />
                        <span className="checkmark" onClick={() => task.onComplete(task.id)}></span>
                    </label>
                </div>
                <div className="action">
                    Eliminar
                    <label className="check-container">
                        <input type="checkbox" />
                        <span className="checkmark delete" onClick={() => task.onDelete(task.id)}></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export { TaskComponent };