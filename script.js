document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Función para agregar tarea
    function addTask(event) {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Por favor ingresa una tarea válida');
            return;
        }
        
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">🗑️ Eliminar</button>
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = '';
        
        // Agregar evento al botón de eliminar
        taskItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }

    // Función para eliminar tarea
    function deleteTask() {
        if (confirm('¿Estás seguro de eliminar esta tarea?')) {
            this.parentElement.remove();
        }
    }

    // Event Listeners
    taskForm.addEventListener('submit', addTask);
});