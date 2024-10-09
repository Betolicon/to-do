export const selected = () =>{
    const h1 = document.querySelectorAll('h1')

    const message = (e) => {
        h1.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    };

    h1.forEach((title) => title.addEventListener('click', message))
}