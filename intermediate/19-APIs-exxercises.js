// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

/* fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error", err);
    }) */

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

/* fetch("https://jsonplaceholder.typicode.com/post")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
 */
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
/* async function getPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = res.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getPosts() */
// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

/* async function partialPostUpdate() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/10`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Texto modificado",
                body: "Cuerpo modificado"
            })
        })
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
partialPostUpdate() */

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
/* async function deletePostAndVerify() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "DELETE"
        });
        if (response.ok) {
            console.log("Recurso eliminado correctamente.");
        } else {
            throw new Error(`Error al eliminar: ${response.status}`);
        }
    } catch (error) {
        console.log("Error:", error);
    }
} */

// deletePostAndVerify();

/* async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        })
        if (response.ok) {
            console.log(`Recurso eliminado correctamente.`);
        } else {
            throw new Error(`Error al eliminar ${response.status}`);

        }
    } catch (error) {
        console.log("Error", error);
    }
}

deletePost() */
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
/* async function getWeather(city) {
    const apiKey = "12f7a32ca026a46f15f3e5fa576f9d58"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        //probamos los errores
        if (!response.ok) {
            throw new Error(`Paso correctamente: ${response.status}`);
        }
        const data = await response.json()

        // Nombre de la ciudad
        const nameCity = data.name
        console.log(`El nombre de la ciudad es ${nameCity}`);

        //Humedad
        const humidity = data.main.humidity
        console.log(`La humedad de ${nameCity} es de ${humidity}%`);

        // Info de toda la api
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getWeather("Bogota") */

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

/* async function getPokemonDetails(name) {
    try {
        // Obtener datos del Pokémon
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!pokemonRes.ok) throw new Error(`Error Pokémon: ${pokemonRes.status}`);
        const pokemonData = await pokemonRes.json();
        console.log("Pokémon:", pokemonData);

        // Obtener detalles de la especie
        const speciesRes = await fetch(pokemonData.species.url);
        if (!speciesRes.ok) throw new Error(`Error Especie: ${speciesRes.status}`);
        const speciesData = await speciesRes.json();
        console.log("Especie:", speciesData);

        // Obtener cadena evolutiva
        const evolutionRes = await fetch(speciesData.evolution_chain.url);
        if (!evolutionRes.ok) throw new Error(`Error Cadena Evolutiva: ${evolutionRes.status}`);
        const evolutionData = await evolutionRes.json();
        console.log("Cadena evolutiva:", evolutionData);

    } catch (error) {
        console.log("Error:", error);
    }
}

getPokemonDetails("pikachu"); */


async function getPokemon(name) {
    try {
        const pokemonUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!pokemonUrl.ok) throw new Error(`Error Pokemon: ${pokemonUrl.status}`);
        const pokemonData = await pokemonUrl.json()
        console.log("Pokemon:", pokemonData);

        //Detalles de la especie
        const species = await fetch(pokemonData.species.url)
        if (!species.ok) throw new Error(`Error Especie:${species.status}`)
        const speciesData = await species.json()
        console.log("Especie", speciesData);

        // Cadena evolutiva
        const evolutionRes = await fetch(speciesData.evolution_chain.url);
        if (!evolutionRes.ok) throw new Error(`Error cadena evolutiva:${evolutionRes.status}`);
        const evolutionData = await evolutionRes.json()
        console.log("Evolucion", evolutionData);

    } catch (error) {
        console.log("error", error);
    }
}
getPokemon("pikachu")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
// Listo