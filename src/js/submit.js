export const Submit = () =>{

    const submitted = (e) =>{
        if(e.target.value == 1)
            createTask()
        else
            createList()
    }

    const buttonS = document.querySelectorAll('.Submit')
    buttonS.forEach(button => button.addEventListener('click', submitted))
}   