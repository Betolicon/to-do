export const createList = () => {
    const name = document.getElementById('name').value;
    createItem(name)
    saveFolders(name)
    savedItems(name)
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
}