import "./style.css"

const h1 = document.querySelectorAll('h1')

const message = (e) => console.log(e)

h1.forEach((title) => title.addEventListener('click', message))