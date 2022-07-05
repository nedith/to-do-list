import _ from 'lodash';
import './style.css';

const tasks = [
 {
 description: 'Clean the house',
 completed: true,
 index: 1,
 },
 {
 description: 'Prepare breakfast',
 completed: false,
 index: 2,
 },
 {
 description: 'Study',
 completed: true,
 index: 3,
 },
];

const populate = () => {
 const list = document.querySelector('.list');
 for(let i=0; i<tasks.length; i +=1) {
  const li = document.createElement('li');
  li.classList.add('list-content');
  li.innerHTML = `
  <div class =list-div>
  <input type = "checkbox">
  <h3>${tasks[i].description}</h3>
  </div>
  <div class="icon">
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>`;
  list.appendChild(li)
 }
};
populate();