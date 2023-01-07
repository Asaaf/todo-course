import './AppView.css';
import React from 'react';
import { TaskCreateController } from '../TaskCreateComponent/TaskCreateController';
import { TaskListController } from '../TaskListComponent/TaskListController';
import { TaskSearchController } from '../TaskSearchComponent/TaskSearchController';
import { TaskCounterController} from '../TaskCounterComponent/TaskCounterController';


function AppView({ searchValue, setSearchValue, completedTask, totalTask, taskList, setTask }) {
  return (
    <div className='todo-container'>
      <TaskCreateController />
      <div className='todo-list-section'>
        <TaskSearchController searchValue={searchValue} setSearchValue={setSearchValue} />
        <TaskCounterController completedTask={completedTask} totalTask={totalTask} />
        <TaskListController taskList={taskList} setTask={setTask} />
      </div>
    </div>
  );
}

export { AppView };
