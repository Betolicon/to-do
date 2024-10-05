import location from "./location.jpg";

export function createContact() {
    const h1 = document.createElement("h1")
    h1.innerHTML = "Contact"
    h1.classList.add('centrado')
    const info = document.createElement('p');
    info.innerHTML = `
        <strong>Teléfono:</strong> (123) 456-7890<br>
        <strong>Email:</strong> contacto@pizzeriamisabores.com<br>
        <strong>Dirección:</strong> Calle del Sabor, 123, Ciudad, País
    `;
    info.classList.add('centrado')
    const image = document.createElement("img");
    image.src = location;
    image.alt = 'location'
    image.classList.add('location')
    content.append(h1)
    content.append(info)
    content.append(image)
}