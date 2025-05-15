$(document).ready(function(){
    console.log("online");

    const nasaContent = $("#nasaContent");

    const apiKey = "DEMO_KEY"; // NASA demo key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Llamada a la API con fetch
    fetch(apiUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            // Renderizar la imagen y los datos al estilo de vuestros ejemplos
            let apodHTML = `
                <div class="card bg-dark text-white">
                    <img src="${data.url}" class="card-img-top" alt="${data.title}">
                    <div class="card-body">
                        <h2 class="card-title">${data.title}</h2>
                        <p class="card-text">${data.date}</p>
                        <p class="card-text">${data.explanation}</p>
                    </div>
                </div>
            `;

            nasaContent.html(apodHTML);
        })
        .catch(function(err){
            console.error("Error al conectar con la API de la NASA", err);
            nasaContent.html('<p class="text-danger">No se pudo cargar la imagen del día.</p>');
        });
});
