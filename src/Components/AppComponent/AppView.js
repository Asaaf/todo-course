import './App.css';
import React from 'react';
import { TaskCreateComponent } from '../TaskCreateComponent/TaskCreateComponent';
import { TaskListComponent } from '../TaskListComponent/TaskListComponent';
import { TaskSearchComponent } from '../TaskSearchComponent/TaskSearchComponent';
import { TaskCounterComponent } from '../TaskCounterComponent/TaskCounterComponent';


function AppView({ searchValue, setSearchValue, completedTask, totalTask, taskList, setTask }) {
  return (
    <div className='todo-container'>
      <TaskCreateComponent />
      <div className='todo-list-section'>
        <TaskSearchComponent searchValue={searchValue} setSearchValue={setSearchValue} />
        <TaskCounterComponent completedTask={completedTask} totalTask={totalTask} />
        <TaskListComponent taskList={taskList} setTask={setTask} />
      </div>
    </div>
  );
}

export { AppView };
