import './App.css';
import React from 'react';
import { TaskCreateComponent } from '../TaskCreateComponent/TaskCreateComponent';
import { TaskListComponent } from '../TaskListComponent/TaskListComponent';
import { TaskSearchComponent } from '../TaskSearchComponent/TaskSearchComponent';
import { TaskCounterComponent } from '../TaskCounterComponent/TaskCounterComponent';

function App() {
  return (
    <div className='todo-container'>
      <TaskCreateComponent />
      <div className='todo-list-section'>
        <TaskSearchComponent />
        <TaskCounterComponent />
        <TaskListComponent />
      </div>
    </div>
  );
}

export default App;
