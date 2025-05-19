$(document).ready(function () {
  const planetContainer = $("#planetContainer");

  fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true")
    .then((response) => response.json())
    .then((result) => {
      let planets = result.bodies;

      // Ordenar por distancia al Sol
      planets.sort((a, b) => a.semimajorAxis - b.semimajorAxis);

      planets.forEach(function (planet, index) {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-dark-blue" : "bg-black";
        const reverseClass = isEven ? "" : "flex-md-row-reverse";

        const layout = `
  <section class="planet-section-wrapper ${bgClass} text-white">
    <div class="container">
      <div class="row align-items-center ${reverseClass}">
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img src="media/${planet.englishName.toLowerCase()}.webp" alt="${planet.englishName}" class="img-fluid planet-img" />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-center planet-info">
          <h3 class="planet-title">${index + 1}. ${planet.englishName.toUpperCase()}</h3>
          <p><strong>Nombre:</strong> ${planet.englishName}</p>
          <p><strong>Órbita:</strong> ${planet.aroundPlanet ? planet.aroundPlanet.planet : 'Alrededor del Sol'}</p>
          <p><strong>Tipo:</strong> ${planet.bodyType}</p>
          <p><strong>Masa:</strong> ${planet.mass?.massValue} ×10^${planet.mass?.massExponent} kg</p>
          <p><strong>Gravedad:</strong> ${planet.gravity} m/s²</p>
          <p><strong>Densidad:</strong> ${planet.density} g/cm³</p>
          <p><strong>Radio medio:</strong> ${planet.meanRadius} km</p>
          <p><strong>Distancia al Sol:</strong> ${planet.semimajorAxis} km</p>
          <p><strong>Período de órbita:</strong> ${planet.sideralOrbit} días</p>
          <p><strong>Período de rotación:</strong> ${planet.sideralRotation} h</p>
        </div>
      </div>
    </div>
  </section>
`;
        planetContainer.append(layout);
      });
    })
    .catch(function (err) {
      console.log("Error al obtener planetas:", err);
      planetContainer.append("<p>Error al cargar los planetas.</p>");
    });
});
