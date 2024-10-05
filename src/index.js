import "./style.css"
import { createMenu } from './menu.js';
import { createContact } from './contact.js';
import { Home } from './home.js'
  
const buttons = document.querySelectorAll('button')
const content = document.getElementById('content')

window.onload = () => {
    Home()
    buttons[0].classList.add('selected');
};

const Selected = (e) => {
    buttons.forEach(button => button.classList.remove('selected'));
    e.target.classList.add('selected');
};
    
const renderContent = (e) =>{
    content.innerHTML = ''

    if(e.target.id === 'menu')
        createMenu()
    else if (e.target.id === 'contact')
        createContact()
    else
        Home()
    Selected(e)
}

buttons.forEach(button => button.addEventListener('click', renderContent))