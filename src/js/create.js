import { selectedList } from "./selected";
import { loadTasks } from "./loadTasks";

export const createList = () => {
    const name = document.getElementById('name').value;
    createItem(name)
    saveFolders(name)
    savedItems(name)
};

export const createTask = ()=>{
    const task = getValues()
    if (task.Title.length != 0 && task.Description.length != 0 && task.Date.length != 0 && task.Priority.length != 0 && task.Folder.length != 0){ 
    saveTasks(task)
}    
    else{
        alert('Fill out the form')}
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

const saveTasks = (task) => {
    const id = Date.now(); // Genera un ID único basado en la fecha actual
    const taskWithId = { id, ...task }; // Añade el ID al objeto de tarea
    let savedTasks = JSON.parse(localStorage.getItem('content')) || [];
    savedTasks.push(taskWithId);
    localStorage.setItem('content', JSON.stringify(savedTasks));
}

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
        item.addEventListener('click',selectedList)
        item.innerHTML = name;
        items.append(item);
    });
};

window.onload = ()=>{
    loadFolders()
    loadLists()
    loadTasks()
}