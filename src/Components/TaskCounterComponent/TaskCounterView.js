import './TaskCounterView.css';

function TaskCounterView({completedTask, totalTask}) {
    return (
        <div className='task-counter'>Haz completado {completedTask} de {totalTask} tareas</div>
    );
};

export { TaskCounterView };