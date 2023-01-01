import './TaskCounterComponent.css';

function TaskCounterComponent({completedTask, totalTask}) {
    return (
        <div className='task-counter'>Haz completado {completedTask} de {totalTask} tareas</div>
    );
};

export { TaskCounterComponent };