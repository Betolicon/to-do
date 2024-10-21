import { dialog, list } from "./dialog";
import { folder } from "./folder";
import { loadTasks } from "./loadTasks";

export const selectedList = () =>{
    const li = document.querySelectorAll('li')

    const select = (e) => {
        li.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
        if(e.target.id == 'tasks')
            dialog()
        else if (e.target.id == 'lists')
            list()
        else if (e.target.id == 'allTasks')
            loadTasks()
        else
            folder(e)
    };

    li.forEach((item) => item.addEventListener('click', select))
}