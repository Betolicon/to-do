import { Complete } from "./completed";

export const createList = () => {
    const name = document.getElementById('name').value;
    createItem(name)
    saveFolders(name)
    savedItems(name)
};

export const createTask = ()=>{
    const task = getValues()
    saveTasks(task)
    loadTasks()
}

const getValues = () =>{
    const Title = document.getElementById('Title').value
    const Description = document.getElementById('description').value
    const Date = document.getElementById('Duedate').value
    const Priority = document.getElementById('priority').value
    const Folder = document.getElementById('folder').value  

    return { Title, Description, Date, Priority, Folder}
}

const saveTasks = (task) =>{
    let savedTasks = JSON.parse(localStorage.getItem('content')) || [];
    savedTasks.push(task);
    localStorage.setItem('content', JSON.stringify(savedTasks));
}

const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem('content')) || [];
    const content = document.querySelector(".content")

    savedTasks.forEach(task => {
        const card = document.createElement("div")
        card.className = 'card';
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const date = document.createElement("p")
        const priority = document.createElement("p")
        const folder = document.createElement("p")
        const button = document.createElement("button")
        button.innerHTML = "Complete"
        button.classList.add('completed')
        button.addEventListener("click", Complete)
    
        title.innerHTML = task.Title
        description.innerHTML = task.Description
        date.innerHTML = task.Date
        priority.innerHTML = task.Priority
        folder.innerHTML = task.Folder
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date);
        card.appendChild(priority);
        card.appendChild(folder);
        card.appendChild(button)
        content.appendChild(card)
    });
};


const createItem = (name) =>{
    const items = document.getElementById('List-items');
    const item = document.createElement('li');
    item.innerHTML = name;
    items.append(item);
    return items
}

const saveFolders = (name) =>{
    let savedFolders = JSON.parse(localStorage.getItem('folders')) || [];
    savedFolders.push(name);
    localStorage.setItem('folders', JSON.stringify(savedFolders));
}

const savedItems = (name) =>{
    let savedItems = JSON.parse(localStorage.getItem('List-items')) || [];
    savedItems.push(name);
    localStorage.setItem('List-items', JSON.stringify(savedItems)); 
}

const loadFolders = () => {
    const savedFolders = JSON.parse(localStorage.getItem('folders')) || [];
    const options = document.getElementById('folder');
    savedFolders.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.text = name;
        options.append(option);
    });
};

const loadLists = () => {
    const savedItems = JSON.parse(localStorage.getItem('List-items')) || [];
    const items = document.getElementById('List-items');
    savedItems.forEach(name => {
        const item = document.createElement('li');
        item.innerHTML = name;
        items.append(item);
    });
};

window.onload = ()=>{
    loadFolders()
    loadLists()
    loadTasks()
}