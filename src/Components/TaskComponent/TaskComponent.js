import "./TaskComponent.css";

function TaskComponent(inputs) {
    return (
        <div className="task-container">
            <h1 className="task-title">{inputs.name}</h1>
            <div className="task-description">
                {inputs.description}
            </div>
        </div>
    );
}

export { TaskComponent };