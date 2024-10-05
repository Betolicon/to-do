import pizza from "./pizza.jpg";
import margarita from "./margartia.jpg"
import pizza3 from "./Pizza_Update.png"

export const Home = () =>{
    const div = document.createElement('div')
    div.classList.add('container')
    
    const divPizza = document.createElement('div')
    divPizza.classList.add('Pizza')
    
    const h1 = document.createElement("h1")
    h1.innerHTML = "Alvarado's Pizzas"
    h1.classList.add('centrado')
    const p = document.createElement("p")
    p.innerHTML = "Taste that melts hearts."
    p.classList.add('centrado')
    
    const image = document.createElement("img");
    image.src = pizza;
    image.classList.add('photo')
    
    const  imag2 = document.createElement("img");
    imag2.src = margarita;
    imag2.classList.add('photo')
    
    const  imag3 = document.createElement("img");
    imag3.src = pizza3;
    imag3.classList.add('photo')
    
    const about = document.createElement("p")
    about.innerHTML = "At Alvarado's Pizzas, we believe that great pizza starts with quality ingredients and a passion for flavor. Located in the heart of the community, our pizzeria offers a diverse menu featuring classic favorites and unique creations, all crafted with love. Whether you're dining in, taking out, or ordering delivery, our friendly staff is dedicated to providing a memorable experience. Join us for a slice of happiness and discover why Alvarado's Pizzas is your go-to spot for delicious, authentic pizza!"
    content.append(h1)
    content.append(p)
    divPizza.append(image)
    divPizza.append(imag2)
    divPizza.append(imag3)
    div.append(divPizza)
    div.append(about)
    content.append(div)
    }