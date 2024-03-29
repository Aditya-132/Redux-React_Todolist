// actions.js
import { ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETED } from './actionTypes';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (index) => ({
  type: REMOVE_TASK,
  payload: index,
});

export const toggleCompleted = (index) => ({
  type: TOGGLE_COMPLETED,
  payload: index,
});
