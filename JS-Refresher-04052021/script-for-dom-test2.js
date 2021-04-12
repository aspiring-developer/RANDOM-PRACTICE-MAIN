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
  li.appendChild(document.createTextNode(taskInputEl.value));
  const link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove delete-me secondary-content"></i>'
  li.appendChild(link);
  taskListEl.appendChild(li);

  storeTaskInLocalStorage(taskInputEl.value);

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

// CLEAR TASK FEATURE
clearTasksEl.addEventListener('click', clearTask);
function clearTask() {
  taskListEl.remove();
}

// FILTER TASK FEATURE
filterEl.addEventListener('keyup', filterTask);
function filterTask() {
  let typedText = filterEl.value;
  let tasksInList = document.querySelectorAll('.collection-item');
  tasksInList.forEach(function (eachTask) {
    let textInEachTask = eachTask.textContent;
    if (textInEachTask.indexOf(typedText) != -1) {
      eachTask.style.display = 'block';
    } else {
      eachTask.style.display = 'none';
    }
  })
}

// STORE IN LS
function storeTaskInLocalStorage(item) {
  let tasks;
  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(item);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// CALLING FROM LS
document.addEventListener('DOMContentLoaded', getTasksFromLS);
function getTasksFromLS() {
  let tasks;
  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function (eachItem) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(eachItem));
    const link = document.createElement('a');
    link.innerHTML = '<i class="fa fa-remove delete-me secondary-content"></i>'
    li.appendChild(link);
    taskListEl.appendChild(li);
  })
}
