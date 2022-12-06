const listcondenados = [];
const input = document.getElementById("condenados");
const addbtn = document.getElementById("add");
const ul = document.getElementById("book");


addbtn.addEventListener("click", (e) => {
    const text = input.value; //agregar a la variable text el valor introducido en el input

    let li = document.createElement("li"); //crea el elemento li
    let p = document.createElement("p"); // crea el texto del li con un p
    p.textContent = text; //al p le agrego el texto de la variable text que contiene el valor del input

    li.appendChild(p); //al li le agrega el hijo p
    li.appendChild(adddeletebtn()); //agrega el boton eliminar
    ul.appendChild(li); //al ul le agrega el hijo li
    
    input.value = "" //limpia el input
});
function adddeletebtn(){
    let deletebtn = document.createElement("button") // creal el boton
    deletebtn.textContent = "X" //agrega el contenido al boton

    deletebtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement; //selecciona el boton y selecciona tambien al padre
        ul.removeChild(item); //elimina el padre
    });
    return deletebtn;
}
function jugar(){
    let jugadores = document.getElementById('book').value;
    console.log(jugadores);
}