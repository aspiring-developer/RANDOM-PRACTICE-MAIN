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
  link.innerHTML = '<i class="fa fa-remove delete-me secondary-content"></i>';
  li.appendChild(link);
  taskListEl.appendChild(li);

  //>>>>>>>>>>>>>>> LS ADD FEATURE
function addToLocalStorage(task) {
  let tasks;
  if(!localStorage.getItem('tasks')) {
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
addToLocalStorage(taskInputEl.value);
  //<<<<<<<<<<<<<<

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
  let allTasks = document.querySelectorAll('.collection-item');
  taskListEl.remove(allTasks);
}

// FILTER TASKS
filterEl.addEventListener('keyup', filterTasks);
function filterTasks() {
  let userTyped = filterEl.value;
  console.log(filterEl.value)
  let taskInList = document.querySelectorAll('.collection-item');
  taskInList.forEach(function (eachTask) {
    let textInEachTask = eachTask.textContent;
    if (textInEachTask.indexOf(userTyped) != -1) {
      eachTask.style.display = 'block';
    } else {
      eachTask.style.display = 'none';
    }
  })
}