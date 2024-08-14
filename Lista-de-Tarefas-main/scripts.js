document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskName').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskName = document.getElementById('taskName').value.trim();
    const taskTime = document.getElementById('taskTime').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskName && taskTime && taskPriority) {
        const taskList = document.getElementById('taskList');
        
        // Criação do item da tarefa
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        // Informações da tarefa
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
        taskInfo.innerHTML = `
            <span><strong>Tarefa:</strong> ${taskName}</span>
            <span><strong>Hora:</strong> ${taskTime}</span>
            <span><strong>Prioridade:</strong> ${taskPriority}</span>
        `;
        
        // Botão de remover
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
        removeBtn.addEventListener('click', function() {
            taskItem.remove();
        });
        
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);
        
        // Limpar os campos de entrada
        document.getElementById('taskName').value = '';
        document.getElementById('taskTime').value = '';
        document.getElementById('taskPriority').value = '1';
    }
}
