const formEl = document.getElementById('task-form');
const taskInputEl = document.getElementById('task');
const taskListEl = document.querySelector('.collection');
const clearTasksEl = document.querySelector('.clear-tasks');
const filterEl = document.getElementById('filter');


formEl.addEventListener('submit', addTask);

// ADD FEATURE
function addTask(e) {
  e.preventDefault();
  const li = document.createElement('li');
  li.className = 'collection-item';
  liText = document.createTextNode(taskInputEl.value);
  //console.log(liText);

  li.appendChild(liText);

  const link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove secondary-content delete-me"></i>';
  li.appendChild(link);
  taskListEl.appendChild(li);
  //console.log(li)

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
filterEl.addEventListener('keyup', filterTasks);
function filterTasks(e) {
  let searchingText = filterEl.value;
  let taskItems = document.querySelectorAll('.collection-item');
  taskItems.forEach(function (eachItem) {
    console.log(eachItem.firstChild.textContent)
if(searchingText.indexOf(eachItem.firstChild.textContent) !== -1) {
  eachItem.firstChild.style.display = 'block';
  //console.log("FOUND!!!");
} else {
  eachItem.style.display = 'none';

  //console.log("NOT FOUND!!!");
}
  })
}