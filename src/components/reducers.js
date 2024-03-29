// reducers.js
import { ADD_TASK, REMOVE_TASK, TOGGLE_COMPLETED } from './actionTypes';

const initialState = {
  tasks: loadTasksFromLocalStorage() || [],
};

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('todoList');
  return storedTasks ? JSON.parse(storedTasks) : null;
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('todoList', JSON.stringify(tasks));
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, { task: action.payload, completed: false }];
      saveTasksToLocalStorage(newTasks);
      return {
        ...state,
        tasks: newTasks,
      };
    case REMOVE_TASK:
      const updatedTasks = state.tasks.filter((_, index) => index !== action.payload);
      saveTasksToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    case TOGGLE_COMPLETED:
      const toggledTasks = state.tasks.map((task, index) =>
        index === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveTasksToLocalStorage(toggledTasks);
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default reducer;
