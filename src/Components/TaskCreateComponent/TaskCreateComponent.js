import './TaskCreateComponent.css';


function TaskCreateComponent() {

    const onClickButton = () => {
        alert("Se ha creado una nueva tarea");
    }

    return (
        <div className="new-task-section">
            <span>Crear una nueva</span>
            <h1>Tarea</h1>
            <div className="task-name-form">
                <label>Nombre de la tarea</label>
                <input type="text" className='task-input' name="taskName" id="taskName" placeholder="Lanzar un cohete a la luna" />
                <button className="btn-primary" onClick={onClickButton}>
                    Crear tarea
                </button>
            </div>
        </div>
    );
}

export { TaskCreateComponent };