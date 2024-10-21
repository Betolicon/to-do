export const Complete = (button, card, taskId) => {
    const completeEvent = () => {
        let savedTasks = JSON.parse(localStorage.getItem('content')) || [];
        savedTasks = savedTasks.filter(task => task.id !== taskId); // Filtra la tarea completada
        localStorage.setItem('content', JSON.stringify(savedTasks));
        card.remove();
    }

    button.addEventListener('click', completeEvent);
}
