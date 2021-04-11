const taskFormEl = document.querySelector('#task-form');
const taskEl = document.querySelector('#task');
const filterEl = document.querySelector('#filter');
const collectionEl = document.querySelector('.collection');
const clearTasksEl = document.querySelector('.clear-tasks');

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

  taskEl.value = '';
  taskEl.focus();
}

// DELETE A TASK
collectionEl.addEventListener('click', deleteTask);
function deleteTask(e) {
  if (e.target.classList.contains('delete-icon')) {
    e.target.parentElement.parentElement.remove();
  }
}

// CLEAR TASKS
clearTasksEl.addEventListener('click', clearTasks);
function clearTasks(e) {
  collectionEl.innerHTML = '';
}

// FILTER TASK
filterEl.addEventListener('keyup', filterTask);
function filterTask() {
  let userTypedTexts = filterEl.value;
  let allTasks = document.querySelectorAll('.collection-item');
  allTasks.forEach(function (eachTask) {
    let item = eachTask.firstChild.textContent;
    if (item.indexOf(userTypedTexts) !== -1) {
      eachTask.style.display = 'block';
      console.log(eachTask)
    } else {
      eachTask.style.display = 'none';
    }
  })
}
