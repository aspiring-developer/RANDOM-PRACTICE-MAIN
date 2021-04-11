const taskFormEl = document.querySelector('#task-form');
const taskInputEl = document.querySelector('#task');
const filterEl = document.querySelector('#filter');
const taskListEl = document.querySelector('.collection');

taskFormEl.addEventListener('submit', addTask);

// ADD FEATURE
function addTask(e) {
  e.preventDefault();
  const li = document.createElement('li');
  li.className = 'collection-item';
  const liText = document.createTextNode(taskInputEl.value);
  li.appendChild(liText);

  const link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove secondary-content delete-icon"></i>';
  li.appendChild(link);

  taskListEl.appendChild(li);
}

// DELETE FEATURE


