import React from 'react';
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import Task from './Component/Task/Task';
import ToDoList from './Component/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <ToDoList/>
      <Task/>
    </div>
  );
};

export default App;
