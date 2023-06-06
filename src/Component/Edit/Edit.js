import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/actions/actions';

const Edit = ({task}) => {
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState(task.text);
    const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    dispatch(editTask(task.id, newTask));
    handleClose();
  };

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="email" placeholder="Edit Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;