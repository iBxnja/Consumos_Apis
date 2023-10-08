//CONSUMO DE API

//Crear funcion que resive un parametro
function traerPersonajes(done) {
    //cons igual al fetch( se utiliza para realizar solicitudes de red (como peticiones HTTP))
    const result = fetch("https://rickandmortyapi.com/api/character")
    result
    //el resultado lo convierno en un json
    //data representa los datos convertidos de la respuesta de la API en formato JSON
        .then(Response => Response.json())
        //la función done se utiliza para manejar los datos obtenidos de
        //la API después de que la solicitud sea exitosa y los datos se hayan convertido en un objeto JSON.
        .then(data => done(data))
}


//invocamos a la funcion con el parametro data que si fue exitosa, se utiliza
traerPersonajes(data => {
    //recorremos con foreach
    data.results.forEach(personaje => {
        //creamos una const article que con los metodos siguiene, agrega los fragmentos creados
        //mas tarde mediante el metodo append
        //creamos el fragmentoque va en el html
        const article = document.createRange().createContextualFragment(`
            <article>
                <div>
                    <img src=${personaje.image}></img>
                    <h1>Name: ${personaje.name}</h1>
                    <h4>Status: ${personaje.status}</h4>
                </div>
            </article>
        `);
        //guardamos en una const al main
        const main = document.querySelector("main")
        //para despues agregarle el "article"
        main.append(article);
    })

});