import './TaskCreateComponent.css';


function TaskCreateComponent() {
    return (
        <div className="new-task-section">
            <span>Crear una nueva</span>
            <h1>Tarea</h1>
            <div className="task-name-form">
                <label>Nombre de la tarea</label>
                <input type="text" className='task-input' name="taskName" id="taskName" placeholder="Lanzar un cohete a la luna" />
                <button className="btn-primary">Crear tarea</button>
            </div>
        </div>
    );
}

export { TaskCreateComponent };