// TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleCompleted } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const taskOut = (index) => {
    dispatch(removeTask(index));
  };

  const toggleComplete = (index) => {
    dispatch(toggleCompleted(index));
  };

  return (
    <ul className="list-group">
      {tasks.map((item, index) => (
        <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${item.completed ? 'list-group-item-success' : ''}`}>
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.task}</span>
          <div>
            <button className="btn btn-danger mr-2" onClick={() => taskOut(index)}>Delete</button>
            <button className="btn btn-primary" onClick={() => toggleComplete(index)}>
              {item.completed ? 'Undo' : 'Completed'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
