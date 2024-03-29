// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const update = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Add task" value={task} onChange={(event) => setTask(event.target.value)} />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={update}>Add</button>
      </div>
    </div>
  );
}

export default TaskInput;
