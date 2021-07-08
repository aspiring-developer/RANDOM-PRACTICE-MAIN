const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listener
loadEventListener();

// Load all event listener
function loadEventListener() {
  // Add task event
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('The input is required!');
    return;
  }
  // Create li element (ul is already in the html file // li will be appended there)
  const li = document.createElement('li');
  // Add class to li
  li.className = 'collection-item';
  // Create text node and Append text node to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class to the link
  link.className = 'delete-item secondary-content';
  // Add icon html (x) for delete
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to the ul
  taskList.appendChild(li);
  console.log(li);
  taskInput.value = '';
  //e.preventDefault();
}