import _ from 'lodash';
import './style.css';
import { addNewTask } from './modules/crud';

// Declare HTML elements
const mainInput = document.getElementById('add');
const listOfTasks = document.querySelector('.list');

// Add event listener to input field
mainInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && mainInput.value) {
    addNewTask(mainInput.value);
    mainInput.value = null;
  }
});

export { listOfTasks };
