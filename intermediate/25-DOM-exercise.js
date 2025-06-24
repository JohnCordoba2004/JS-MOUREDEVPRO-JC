// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
/* const changeTitle = document.getElementById("title")

changeTitle.textContent = "Hola Mundo!"
console.log(changeTitle);
 */
// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL



const img = document.getElementById("myImage")
img.src = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Killua-Cropped.jpg"
img.width = "720"
img.height = "405"


// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

/* Creamo un nuevo div */
const newDiv = document.createElement("div") // Crea un nuevo elemento <div> en memoria

/* Agregamos contenido */
newDiv.textContent = "Soy un div creado desde el JavaScript" // Asigna texto al div creado

/* Estilamos nuestro contenido */
newDiv.style.backgroundColor = "red" // Cambia el color de fondo del div a rojo
newDiv.style.borderRadius = "10px" // Redondea las esquinas del div con 10px de radio
newDiv.style.width = "200px" // Establece el ancho del div a 200 píxeles
newDiv.style.height = "200px" // Establece la altura del div a 200 píxeles
newDiv.style.border = "5px solid trasparent" // Agrega un borde negro de 5 píxeles al div
newDiv.style.textAlign = "center"
newDiv.style.display = "flex"
newDiv.style.alignItems = "center"
/* Lo agregamos a nuestro div ya creado en el HTML */
const box = document.getElementById("box") // Busca en el DOM el elemento con id="box"
box.appendChild(newDiv) // Inserta el nuevo div como hijo dentro del elemento "box"


// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const changeParagraph = document.getElementById("paragraph")
changeParagraph.style.color = "blue"
// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const list = document.getElementById("list")
const btn = document.getElementById("agregar")

btn.addEventListener("click", () => {
    const newElement = document.createElement("li")
    newElement.textContent = "Nuevo Elemento"
    list.appendChild(newElement)
})

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const paragraphDelete = document.getElementById("deleteParagraph")
const btnDelete = document.getElementById("borrarParagraph")

btnDelete.addEventListener("click", () => {
    paragraphDelete.remove()
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const cambiarTexto = document.querySelector(".cambiarTexto")

setTimeout(() => {
    cambiarTexto.textContent = " Nuevo Contenido"
}, 2000);

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const alertBtn = document.getElementById("greenBtn")

alertBtn.addEventListener("click", () => {
    alert("¡Hola!")
})
// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const textInput = document.getElementById("textInput")
const result = document.getElementById("result")
textInput.addEventListener("input", () => {
    result.textContent = textInput.value
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const changeColor = document.getElementById("backgroundBtn")

function cambiarColor() {
    const letras = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)]
    }
    return color;
}

changeColor.addEventListener("click", () => {
    const colorAleatorio = cambiarColor()
    document.body.style.backgroundColor = colorAleatorio;
})