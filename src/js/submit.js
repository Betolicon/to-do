export const Submit = () =>{

    const submitted = () =>{
        alert("Form submitted");
    }

    const buttonS = document.getElementById('Submit')
    buttonS.addEventListener('click', submitted)
}   