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
  link.innerHTML = '<i class="fa fa-remove secondary-content delete-me"></i>';
  li.appendChild(link);
  taskListEl.appendChild(li);

  taskInputEl.value = '';
  taskInputEl.focus();
}

// DELETE FEATURE
taskListEl.addEventListener('click', deleteTask);
function deleteTask(e) {
  if (e.target.classList.contains('delete-me')) {
    e.target.parentElement.parentElement.remove();
  }
}

// CLEAR FEATURE
clearTasksEl.addEventListener('click', clearTasks);
function clearTasks() {
  taskListEl.remove();
}

// FILTER FEATURE
filterEl.addEventListener('keyup', filterTask);
function filterTask() {
let searchingText = filterEl.value;
let taskInList = document.querySelectorAll('.collection-item');
taskInList.forEach(function(eachItem) {
  let eachItemText = eachItem.textContent;
  if(eachItemText.indexOf(searchingText) !== -1) {
    eachItem.style.display = 'block';
  } else {
    eachItem.style.display = 'none';
  }
})
}
