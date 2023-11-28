document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.querySelector('button');
    const taskList = document.getElementById('taskList');

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Delete task function
    function deleteTask(button) {
        const li = button.closest('li');
        li.remove();
    }

    // Event listeners
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
