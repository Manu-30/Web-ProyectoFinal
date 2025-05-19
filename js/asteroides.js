$(document).ready(function () {
  const asteroidRow = $("#asteroidRow");

  fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,Asteroid")
    .then((response) => response.json())
    .then((result) => {
      let asteroids = result.bodies;

      asteroids.sort((a, b) => (a.englishName > b.englishName ? 1 : -1));

      asteroids.forEach(function (asteroid, index) {
        let name = asteroid.englishName || "Desconocido";
        let orbit = asteroid.aroundPlanet?.planet || "Sin órbita conocida";
        let type = asteroid.bodyType || "Asteroide";
        let diameter = asteroid.meanRadius ? (asteroid.meanRadius * 2).toFixed(0) + " km" : "?";
        let gravity = asteroid.gravity ? asteroid.gravity + " m/s²" : "? m/s²";
        let density = asteroid.density ? asteroid.density + " g/cm³" : "? g/cm³";

        let html = `
          <div class="col-md-4 d-flex">
            <div class="card-asteroid w-100">
              <h5 class="asteroid-title">${index + 1}. ${name.toUpperCase()}</h5>
              <div class="asteroid-info">
                <p><strong>Órbita:</strong> ${orbit}</p>
                <p><strong>Tipo:</strong> ${type}</p>
                <p><strong>Diámetro:</strong> ${diameter}</p>
                <p><strong>Gravedad:</strong> ${gravity}</p>
                <p><strong>Densidad:</strong> ${density}</p>
              </div>
            </div>
          </div>
        `;

        asteroidRow.append(html);
      });
    })
    .catch(function (err) {
      console.error("Error al obtener asteroides:", err);
      asteroidRow.append("<p>Error al cargar los asteroides.</p>");
    });
});
