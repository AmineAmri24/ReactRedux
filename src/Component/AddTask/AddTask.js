import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/actions/actions';


const AddTask = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleadd = (e) => {
    e.preventDefault()
    if(text) {
      dispatch(addTask({id: Math.random(), text, isDone : false}));
      setText("")

    } else{
      alert("cannot add an empty task");
    }
  };
  return (
    <div>
      <h2> Add Task</h2>
      <Form onSubmit={handleadd}>
        <Form.Label>Add Task</Form.Label>
        <Form.Control type="text" placeholder="Enter task" value={text} onchange={(e) => setText (e.target.value)}/>

      <Button variant="primary" type="submit" onClick={handleadd}>
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default AddTask;
