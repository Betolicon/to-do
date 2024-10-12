export const dialog = () =>{
    const showForm = () =>{
        let dlg = document.getElementById("form");
        dlg.show();
    }
    showForm()
}

export const list = () =>{
    const showForm = () =>{
        let dlg = document.getElementById("list");
        dlg.show();
    }
    showForm()
}

export const hideDialog = ()=>{
    const closeForm = () =>{
        let dlg = document.getElementById("form");
        dlg.close();
    }
    closeForm()
}

export const hideList = () =>{
    const closeForm = () =>{
        let dlg = document.getElementById("list");
        dlg.close();
    }
    closeForm()
}