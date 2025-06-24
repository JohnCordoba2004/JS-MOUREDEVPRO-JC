// Manejo de APIs

// APIs REST(HTTP + URLs + JSON)

// Métodos HTTP:
// - GET
// - POST
// - PUT
// - DELETE


// Codigos de respuesta HTTP: 
// 200 0k
// 201 
// 400 
// 404
// 500 

// Consumir una API
/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => {
    // Transforma la respuesta a JSON
    return res.json();
  })
  .then(data => {
    // Procesa los datos
    console.log(data);
  })
  .catch(err => {
    // Captura los errores
    console.log("Error: ", err);
  })


//uso Async/Await

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = response.json()

    console.log(data);
  } catch (errror) {
    console.log(errror);
  }
}

getPosts() */


// Solicitud POST

/* async function createPost() {
  try {

    const newPost = {
      userId: 1,
      title: "Este es el titulo de mi post",
      body: "Este es el cuerpo de mi post"
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })

    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
createPost() */


// Manejo de errores
/* fetch("https://jsonplaceholder.typicode.com/mouredev")
  .then(res => {
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }
    return res.json()
  })
  .catch(err => {
    // Captura los errores
    console.log("Error", err);
  }) */

// Métodos adicionale HTTP
// - PATCH
// - OPTIONS
/* async function partialPostUpdate() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Este es el nuevo título de mi post"
      })
    })

    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
partialPostUpdate() */

// Autenticación mediante API Key
// 12f7a32ca026a46f15f3e5fa576f9d58
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


async function getWeather(city) {
  const apiKey = "12f7a32ca026a46f15f3e5fa576f9d58"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
getWeather("Madrid")

// Otros metodod de autenticacion y autorizacion
// - Bearer tokens
// - JWT


// Versionado de APIs
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources


// Otras APIs
// PokeAPI