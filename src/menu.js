import margarita from "./margartia.jpg"

export function createMenu() {
    const h1 = document.createElement("h1")
    h1.innerHTML = "Menu"
    h1.classList.add('centrado')
    const div = document.createElement("div")
    div.classList.add('container')
    const p = document.createElement("p")
    p.innerHTML = `<strong>Pizza margarita</strong><br>
    Deléitate con nuestra clásica Pizza Margarita, una obra maestra de la cocina italiana. 
    Elaborada con una base de masa fina y crujiente, esta pizza se cubre con una salsa de tomate fresca y aromática, 
    queso mozzarella derretido y un toque de albahaca fresca. Cada bocado ofrece un equilibrio perfecto de sabores simples 
    y auténticos, ideal para los amantes de la buena comida. 
    ¡Una opción que nunca pasa de moda!
    `
    p.classList.add('menuText')
    const  imag2 = document.createElement("img");
    imag2.src = margarita;
    imag2.classList.add('menu')
    content.append(h1)
    div.append(p)
    div.append(imag2)
    content.append(div)
}
