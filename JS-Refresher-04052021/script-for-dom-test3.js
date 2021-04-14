const formEl = document.getElementById('task-form');
const taskInputEl = document.getElementById('task');
const taskListEl = document.querySelector('.collection');
const clearTasksEl = document.querySelector('.clear-tasks');
const filterEl = document.getElementById('filter');

// ADD FEATURE
formEl.addEventListener('submit', addTask);
function addTask(e) {
  e.preventDefault();
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.append(document.createTextNode(taskInputEl.value));
  const link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove delete-me secondary-content"></i>';
  li.appendChild(link);
  taskListEl.appendChild(li);

  taskInputEl.value = '';
  taskInputEl.focus();
}

// DELETE FEATURE
document.addEventListener('click', deleteTask);
function deleteTask(e) {
  if (e.target.classList.contains('delete-me')) {
    e.target.parentElement.parentElement.remove();
  }
}

// CLEAR FEATURE
clearTasksEl.addEventListener('click', clearTask);
function clearTask() {
  taskListEl.remove();
}






//************* LOCAL STORAGE FEATURE
  // STORE IN LOCAL STORAGE

