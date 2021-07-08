const taskFormEl = document.querySelector('#task-form');
const inputFieldEl = document.querySelector('.input-field');
const taskEl = document.querySelector('#task');
const filterEl = document.querySelector('#filter');
const taskListEl = document.querySelector('.collection');
const clearTasksEl = document.querySelector('.clear-tasks');

taskFormEl.addEventListener('submit', addTask);

// ADD TASK LIST
function addTask(e) {
  e.preventDefault();
  // create li
  let li = document.createElement('li');
  // add css to li
  // li.classList.add('collection-item'); OR
  li.className = 'collection-item';
  // get the user input value in li
  let userInput = document.createTextNode(taskEl.value);
  li.appendChild(userInput);
  // add anchor element
  let link = document.createElement('a');
  link.className = 'secondary-content delete-item'
  link.innerHTML = '<i class="fa fa-remove deleteMe"></i>';
  li.appendChild(link);

  console.log(li)

  // add li to ul
  taskListEl.appendChild(li);
}

// DELETE A TASK // targeting the ul (taskListEl) because it needed event delegation
taskListEl.addEventListener('click', deleteTask);
function deleteTask(e) {
  if (e.target.classList.contains('deleteMe')) {
    console.log(e.target);
    if (confirm("Are you sure to delete it?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// CLEAR TASKS
clearTasksEl.addEventListener('click', clearTask);
function clearTask() {
  while (taskListEl.firstChild) {
    taskListEl.removeChild(taskListEl.firstChild);
  }
}

// FILTER TASK ITEM
filterEl.addEventListener('keyup', filterItem)
function filterItem(e) {
  let searchingText = e.target.value.toLowerCase();
  console.log(searchingText);
  document.querySelectorAll('.collection-item').forEach(function (eachTask) {
    let item = eachTask.firstChild.textContent;
    console.log(eachTask.firstChild.textContent + " <--eachTask")
    if (item.toLowerCase().indexOf(searchingText) !== -1) {
      eachTask.style.display = 'block';
    } else {
      eachTask.style.display = 'none';
    }
  })
}

