// Manejo del DOM
console.log(document);
// Seleccion de elementos

// Metodos basicos

const myElementById = document.getElementById("id")

const myElementsByClass = document.getElementsByClassName("class")

const myElementsByTag = document.getElementsByTagName("tag")

// Metodos modernos

const myQuerySelector = document.querySelector(".paragraph")
const myQuerySelectorAll = document.querySelectorAll(".paragraph")


// Manipulacion de elementos
const title = document.getElementById("title")
title.textContent = "Hola, John"

const container = document.querySelector("container")
container.innerHTML = "<p>Esto es un nuevo parrafo</p>"


// Modificacion de atributos

const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobacion de atributo
const hasTarget = link.hasAttribute("target")

// Eliminacion de atributo
link.removeAttribute("target")


// Interaccion con clases CSS
const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const button = document.querySelector("button")
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.padding = "10px";



// Creacion y eliminacion de elementos

// creacion

const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo parragfo creado desde JS";
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)

const itemsList = document.querySelector("ul")

const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Inserccion en un lugar concreto
const secondItem = itemsList.children(1)
secondItem.insertBefore(newItem, secondItem)

itemsList.append(newItem)
itemsList.prepend(newItem)
secondItem.before(newItem)
secondItem.after(newItem)

// Eliminacion

newParagraph.remove()

// Elim trad

const parentElement = newParagraph.parentElement
parentElement.removeChild(newParagraph)


// Elem del DOM

function showMsg() {
    alert("Click")
}

const sendBtn = document.querySelector("#send")
sendBtn.addEventListener("click", showMsg)

sendBtn.addEventListener("click", () => {
    alert("click con una arrow function")
})

// Eventos comunes

document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM está completamente cargado");
})

sendBtn.addEventListener("mouseenter", () => {
    sendBtn.style.backgroundColor = "green"
})

sendBtn.addEventListener("moueseleave", () => {
    sendBtn.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    // Codigo
})