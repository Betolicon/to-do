import { dialog, list } from "./dialog";

export const selected = () =>{
    const h1 = document.querySelectorAll('h1')

    const select = (e) => {
        h1.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
        (e.target.id == 'tasks') ? dialog() : list()
    };

    h1.forEach((title) => title.addEventListener('click', select))
}