$(document).ready(function () {
  const satelliteRow = $("#satelliteRow");

  fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=aroundPlanet,neq,null")
    .then((response) => response.json())
    .then((result) => {
      let satellites = result.bodies;

      satellites.sort((a, b) => (a.englishName > b.englishName ? 1 : -1));

      satellites.forEach(function (satellite, index) {
        let name = satellite.englishName || "Desconocido";
        let orbit = satellite.aroundPlanet?.planet || "Desconocido";
        let type = satellite.bodyType || "Desconocido";
        let diameter = satellite.meanRadius ? (satellite.meanRadius * 2).toFixed(0) + " km" : "?";
        let gravity = satellite.gravity ? satellite.gravity + " m/s²" : "? m/s²";
        let density = satellite.density ? satellite.density + " g/cm³" : "? g/cm³";

        let html = `
          <div class="col-md-4 d-flex">
            <div class="card-satellite w-100">
              <h5 class="satellite-title">${index + 1}. ${name.toUpperCase()}</h5>
              <div class="satellite-info">
                <p><strong>Órbita:</strong> Alrededor de ${orbit}</p>
                <p><strong>Tipo:</strong> ${type}</p>
                <p><strong>Diámetro:</strong> ${diameter}</p>
                <p><strong>Gravedad:</strong> ${gravity}</p>
                <p><strong>Densidad:</strong> ${density}</p>
              </div>
            </div>
          </div>
        `;

        satelliteRow.append(html);
      });
    })
    .catch(function (err) {
      console.error("Error al obtener satélites:", err);
      satelliteRow.append("<p>Error al cargar los satélites.</p>");
    });
});
