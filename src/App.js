import React from 'react';
import './App.css';
import AddTask from './Component/AddTask/AddTask';
import ToDoList from './Component/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <ToDoList/>
    
    </div>
  );
};

export default App;
