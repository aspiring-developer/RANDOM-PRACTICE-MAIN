const taskFormEl = document.querySelector('#task-form');
const taskEl = document.querySelector('#task');
const filterEl = document.querySelector('#filter');
const collectionEl = document.querySelector('.collection');

taskFormEl.addEventListener('submit', addTask);

// ADD TASKS
function addTask(e) {
  // create li element
  e.preventDefault();
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.textContent = taskEl.value;
  const link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove delete-icon"></i>';
  link.className = 'secondary-content delete-me';

  li.appendChild(link);

  collectionEl.appendChild(li);
  console.log(li);
}

// DELETE A TASK
taskEl.addEventListener('click', deleteTask);
function deleteTask(e) {
  //console.log(e.target.classList + " <--e.target.classList");

  if (e.target.classList.contains('delete-icon')) {
    console.log((e.target.classList.contains('delete-icon')));
    e.target.parentElement.parentElement.remove();
  }
}

