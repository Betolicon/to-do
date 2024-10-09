import userPhoto from "../user.png"

export const photo = () =>{
    const divUser = document.querySelector('.user');
    const imgUser = document.createElement('img');
    imgUser.src = userPhoto;
    imgUser.alt = 'user photo';
    imgUser.classList.add('userPhoto')

    divUser.append(imgUser)
}