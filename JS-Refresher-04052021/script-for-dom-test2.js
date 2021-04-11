const taskFormEl = document.querySelector('#task-form');
const taskInputEl = document.querySelector('#task');
const filterEl = document.querySelector('#filter');
const taskListEl = document.querySelector('.collection');
const clearBtnEl = document.querySelector('.clear-tasks');

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

  taskInputEl.value = '';
  taskInputEl.focus();
}

// DELETE FEATURE
taskListEl.addEventListener('click', deleteTask);
function deleteTask(e) {
  if (e.target.classList.contains('delete-icon')) {
    e.target.parentElement.parentElement.remove();
  }
}

// CLEAR FEATURE
clearBtnEl.addEventListener('click', clearTask);
function clearTask() {
  taskListEl.remove();
}

// FILTER FEATURE
filterEl.addEventListener('keyup', filterTask);
function filterTask(e) {
  let userInputText = e.target.value;
  console.log(userInputText);
  let taskItemInList = document.querySelectorAll('.collection-item');
  taskItemInList.forEach(function (eachItem) {
    if (eachItem.firstChild.textContent.indexOf(userInputText) !== -1) {
      eachItem.style.display = 'block';
    } else {
      eachItem.style.display = 'none';
    }
  })






}

