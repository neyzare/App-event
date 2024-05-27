export function handleTaskFormSubmit() {
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDate = document.getElementById('taskDate').value;
    
    if (taskTitle && taskDate) {
      // Créer un nouvel élément de liste pour la tâche
      const taskItem = document.createElement('li');
      taskItem.classList.add('list-group-item');
      taskItem.textContent = `${taskDate}: ${taskTitle}`;
      
      // Ajouter l'élément de liste à la liste des tâches
      taskList.appendChild(taskItem);

      // Réinitialiser le formulaire
      taskForm.reset();
    }
  });
}
