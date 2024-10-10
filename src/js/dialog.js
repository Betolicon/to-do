export const dialog = () =>{
    const showForm = () =>{
        let dlg = document.getElementById("form");
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