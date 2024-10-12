import { hideDialog, hideList} from "./dialog"

export const Close = () =>{

const closed = (e) =>{
    (e.target.value == 1) ? hideDialog() : hideList();
}

const buttonC = document.querySelectorAll('.close')
buttonC.forEach(button => button.addEventListener('click', closed))
}