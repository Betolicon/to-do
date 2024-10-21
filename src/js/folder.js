import { Complete } from "./completed";

export const folder =(e)=>{
    let folderName = e.target.textContent
    const savedTasks = JSON.parse(localStorage.getItem('content')) || [];

    const filteredTasks = savedTasks.filter(task => task.Folder === folderName);
    
    const content = document.querySelector(".content");
    content.innerHTML = ""; 
    filteredTasks.forEach(task => {
        const card = document.createElement("div");
        card.className = 'card';
        const title = document.createElement("h3");
        const description = document.createElement("p");
        const date = document.createElement("p");
        const priority = document.createElement("p");
        const folder = document.createElement("p");
        const button = document.createElement("button")
        button.innerHTML = "Complete"
        button.classList.add('completed')
        Complete(button, card, task.id)

        title.innerHTML = task.Title;
        description.innerHTML = task.Description;
        date.innerHTML = task.Date;
        priority.innerHTML = task.Priority;
        folder.innerHTML = task.Folder;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(priority);
        card.appendChild(folder);
        card.appendChild(button)
        content.appendChild(card);
    });
};