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

  storeInLS(taskInputEl.value);

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
  removeFromLS();
}

// FILTER FEATURE
filterEl.addEventListener('keyup', filterTask);
function filterTask() {
  let typedValue = filterEl.value;
  let taskInTaskList = document.querySelectorAll('.collection-item');
  taskInTaskList.forEach(function (eachTask) {
    let textInEachTask = eachTask.textContent;
    if (textInEachTask.indexOf(typedValue) !== -1) {
      eachTask.style.display = 'block';
    } else {
      eachTask.style.display = 'none';
    }
  })
}

//************* LOCAL STORAGE FEATURE
// STORE IN LOCAL STORAGE
function storeInLS(task) {
  let tasks;
  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// CLEAR LOCAL STORAGE
function removeFromLS() {
  if (localStorage.getItem('tasks')) {
    localStorage.clear();
  }
}

// GET TASK LIST FROM LOCAL STORAGE AND PRINT ON DOM
document.addEventListener('DOMContentLoaded', getTask);
function getTask() {
  let tasks;
  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (eachTask) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.append(document.createTextNode(eachTask));
    const link = document.createElement('a');
    link.innerHTML = '<i class="fa fa-remove delete-me secondary-content"></i>';
    li.appendChild(link);
    taskListEl.appendChild(li);
  })
}

// DELETE FROM LOCAL STORAGE
document.addEventListener('click', deleteTask);
function deleteTask(e) {
  if (e.target.classList.contains('delete-me')) {
    e.target.parentElement.parentElement.remove();
  }

  //let typedValue = filterEl.value;
  //let taskInTaskList = document.querySelectorAll('.collection-item');
  //taskInTaskList.forEach(function (eachTask) {
  //  let textInEachTask = eachTask.textContent;

  let tasks;
  if (!localStorage.getItem('tasks')) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (eachTask, index) {
if(e.textContent === eachTask) {
  tasks.splice(index, 1);
}
  })
}