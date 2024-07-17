document.getElementById('add-task').addEventListener('click', function() {
  const taskText = document.getElementById('new-task').value;
  if (taskText) {
    addTask(taskText);
    document.getElementById('new-task').value = '';
  }
});

function addTask(text) {
  const taskList = document.getElementById('task-list');
  const li = document.createElement('li');

  const taskContent = document.createElement('span');
  taskContent.textContent = text;
  taskContent.classList.add('task-content');
  
  li.appendChild(taskContent);

  const taskActions = document.createElement('div');
  taskActions.classList.add('task-actions');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', function() {
    const newText = prompt('Edit your task:', taskContent.textContent);
    if (newText) {
      taskContent.textContent = newText;
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  taskActions.appendChild(completeBtn);
  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);

  li.appendChild(taskActions);
  taskList.appendChild(li);
}
