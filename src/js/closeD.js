import { hideDialog } from "./dialog"

export const Close = () =>{

const closed = () =>{
    hideDialog()
}

const buttonC = document.getElementById('close')
buttonC.addEventListener('click', closed)
}