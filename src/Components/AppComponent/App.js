import './App.css';
import React from 'react';
import { ToDoCreateComponent } from '../ToDoCreateComponent/ToDoCreateComponent';
import { ToDoListComponent } from '../ToDoListComponent/ToDoListComponent';
import { ToDoSearchComponent } from '../ToDoSearchComponent/ToDoSearchComponent';

function App() {
  return (
    <div className='todo-container'>
      <ToDoCreateComponent />
      <div className='todo-list-section'>
        <ToDoSearchComponent />
        <ToDoListComponent />
      </div>
    </div>
  );
}

export default App;
