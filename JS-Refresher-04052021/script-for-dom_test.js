const taskFormEl = document.querySelector('#task-form');
const inputFieldEl = document.querySelector('.input-field');
const taskEl = document.querySelector('#task');
const taskTitleEL = document.querySelector('#task-title');
const filterEl = document.querySelector('#filter');
const collectionEl = document.querySelector('.collection');

taskFormEl.addEventListener('submit', createTask);

function createTask(e) {
  e.preventDefault();
  // create li and add class to it
  const li = document.createElement('li');
  li.className = 'create-task';
  // create text node for li and append
  li.appendChild(document.createTextNode(taskEl.value));
  // create anchor element
  const link = document.createElement('a');
  // add css class to link
  link.classList = 'each-item';
  // add icon to anchor
  link.innerHTML = '<i class="fa fa-remove secondary-content"></i>';
  // append anchor to li
  li.appendChild(link);

  // append li to ul
  collectionEl.appendChild(li);
  console.log(collectionEl);
}


