$(document).ready(function () {
  const dwarfContainer = $("#dwarfContainer");

  fetch("https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,Dwarf Planet")
    .then((response) => response.json())
    .then((result) => {
      let dwarfs = result.bodies;

      dwarfs.sort((a, b) => a.englishName.localeCompare(b.englishName));

      dwarfs.forEach(function (planet, index) {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? "bg-dark-blue" : "bg-black";
        const reverseClass = isEven ? "" : "flex-md-row-reverse";

        const layout = `
  <section class="dwarf-section-wrapper ${bgClass} text-white">
    <div class="container">
      <div class="row align-items-center ${reverseClass}">
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img src="media/${planet.englishName.toLowerCase()}.webp" alt="${planet.englishName}" class="img-fluid dwarf-img" />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-center dwarf-info">
          <h3 class="dwarf-title">${index + 1}. ${planet.englishName.toUpperCase()}</h3>
          <p><strong>Tipo:</strong> ${planet.bodyType}</p>
          <p><strong>Masa:</strong> ${planet.mass?.massValue} ×10^${planet.mass?.massExponent} kg</p>
          <p><strong>Densidad:</strong> ${planet.density || "?"} g/cm³</p>
          <p><strong>Radio medio:</strong> ${planet.meanRadius || "?"} km</p>
          <p><strong>Gravedad:</strong> ${planet.gravity || "?"} m/s²</p>
          <p><strong>Órbita:</strong> ${planet.aroundPlanet?.planet || "Alrededor del Sol"}</p>
        </div>
      </div>
    </div>
  </section>
`;

        dwarfContainer.append(layout);
      });
    })
    .catch(function (err) {
      console.log("Error al obtener planetas enanos:", err);
      dwarfContainer.append("<p>Error al cargar los planetas enanos.</p>");
    });
});
