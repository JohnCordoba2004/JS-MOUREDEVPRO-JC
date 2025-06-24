const myText = document.getElementById("text")
const button = document.getElementById("btn")
const list = document.getElementById("list")

function addTask() {

    if (text.value === "") return
    const newElement = document.createElement("li")
    newElement.textContent = myText.value

    newElement.addEventListener("click", () => {
        newElement.remove()
    })

    list.appendChild(newElement)
    text.value = ""
}

button.addEventListener("click", addTask)

text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})