import "./TaskComponent.css";

function TaskComponent(inputs) {
    return (
        <div className="task-container">
            <div className="description-area">
                <h1 className="task-title">{inputs.name}</h1>
                <div className="task-description">
                    {inputs.description}
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