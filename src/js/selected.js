import { dialog, hideDialog } from "./dialog";

export const selected = () =>{
    const h1 = document.querySelectorAll('h1')

    const select = (e) => {
        h1.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
        dialog()
    };

    h1.forEach((title) => title.addEventListener('click', select))
}