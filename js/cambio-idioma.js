//Cambiar idioma de español a inglés y viceversa
function cambiarIdioma(event) {
    const html = document.documentElement;
    const langButton = document.querySelector('.lang-toggle');
  
    if (html.lang === 'es') {
      html.lang = 'en';
      langButton.textContent = 'ES';
      cambiarTextos('en');
    } else {
      html.lang = 'es';
      langButton.textContent = 'EN';
      cambiarTextos('es');
    }
  }
  
  // Cambiar los textos de acuerdo al idioma
  function cambiarTextos(idioma) {
    const textos = {
      es: {
        inicio_txt: 'Inicio',
        estrellas_txt: 'Estrellas',
        planetas_txt: 'Planetas',
        satelites_txt: 'Satelites',
        galaxias_txt: 'Galaxias',
        foto_del_dia_txt: 'Foto del día',
        contacto_txt: 'Contacto',
        info_estrellas_txt: 'Las estrellas son enormes cuerpos celestes compuestos principalmente de hidrógeno y helio que emiten luz y calor debido a las reacciones nucleares que ocurren en sus núcleos. Estas reacciones, llamadas fusión nuclear, convierten hidrógeno en helio, liberando una gran cantidad de energía. Las estrellas pueden variar en tamaño, color y temperatura, y son los elementos fundamentales de las galaxias.',
        info_planetas_txt: 'Los planetas son cuerpos celestes que orbitan alrededor de una estrella, como el Sol, y no emiten luz propia. Tienen suficiente masa para tener una forma casi esférica y han limpiado su órbita de otros objetos. Se dividen en dos grupos: los rocosos (los mas cercanos a las estrellas), y los gaseosos (los más alejados). También existen planetas fuera de los sistemas, llamados exoplanetas.',
        info_satelites_txt: 'Los satélites naturales son cuerpos celestes que orbitan alrededor de un planeta de forma natural, sin intervención humana. Están formados por roca, hielo o una combinación de ambos. El ejemplo más conocido es la Luna, satélite natural de la Tierra. Otros planetas, como Júpiter o Saturno, tienen decenas de satélites naturales, algunos incluso más grandes que planetas pequeños. Estos satélites pueden influir en fenómenos como las mareas y ayudan a los científicos a entender mejor la formación y evolución del sistema solar.',
        info_galaxias_txt: 'Las galaxias son enormes conjuntos de estrellas, planetas, gas, polvo y materia oscura unidos por la gravedad. Existen miles de millones de galaxias en el universo, y cada una puede contener desde millones hasta billones de estrellas. Se presentan en diferentes formas: espirales (como la Vía Láctea, donde se encuentra nuestro sistema solar), elípticas e irregulares. Las galaxias pueden agruparse en cúmulos y supercúmulos, y evolucionan a lo largo de miles de millones de años mediante fusiones y colisiones con otras galaxias.',
        info_foto_del_dia_txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla justo nec felis accumsan, at malesuada justo feugiat. Nullam eu facilisis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        nombre_txt: 'Nombre:',
        apellidos_txt: 'Apellido:',
        email_txt: 'Email:',
        comentario_txt: 'Comentario:',
        enviar_txt: 'Enviar',
        escribenos_txt: '<strong>Escríbenos</strong><br> estrellitadondestas@gmail.com',
        llamanos_txt: '<strong>Llámamos</strong><br> +34 XXX 44X X44',
        encuentranos_aqui_txt: '<strong>Encuéntranos aquí</strong><br> En una galaxia muy muy lejana'
      },
      en: {
        inicio_txt: "Home",
        estrellas_txt: "Stars",
        planetas_txt: "Planets",
        satelites_txt: "Satellites",
        galaxias_txt: "Galaxies",
        foto_del_dia_txt: "Picture of the Day",
        contacto_txt: "Contact",
        info_estrellas_txt: 'Stars are enormous celestial bodies composed primarily of hydrogen and helium that emit light and heat due to nuclear reactions occurring in their nuclei. These reactions, called nuclear fusion, convert hydrogen into helium, releasing a vast amount of energy. Stars can vary in size, color, and temperature, and are the fundamental building blocks of galaxies.',
        info_planetas_txt: 'Planets are celestial bodies that orbit a star, like the Sun, and do not emit light of their own. They have enough mass to maintain a nearly spherical shape and have cleared their orbits of other objects. They are divided into two groups: rocky planets (closest to stars) and gaseous planets (farthest away). There are also planets outside of these systems, called exoplanets.',
        info_satelites_txt: "Natural satellites are celestial bodies that orbit a planet naturally, without human intervention. They are made of rock, ice, or a combination of both. The best-known example is the Moon, Earth's natural satellite. Other planets, such as Jupiter and Saturn, have dozens of natural satellites, some even larger than small planets. These satellites can influence phenomena such as tides and help scientists better understand the formation and evolution of the solar system.",
        info_galaxias_txt: 'Las galaxias son enormes conjuntos de estrellas, planetas, gas, polvo y materia oscura unidos por la gravedad. Existen miles de millones de galaxias en el universo, y cada una puede contener desde millones hasta billones de estrellas. Se presentan en diferentes formas: espirales (como la Vía Láctea, donde se encuentra nuestro sistema solar), elípticas e irregulares. Las galaxias pueden agruparse en cúmulos y supercúmulos, y evolucionan a lo largo de miles de millones de años mediante fusiones y colisiones con otras galaxias.',
        info_foto_del_dia_txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla justo nec felis accumsan, at malesuada justo feugiat. Nullam eu facilisis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        nombre_txt: "First Name:",
        apellidos_txt: "Last Name:",
        email_txt: "Email:",
        comentario_txt: "Comment:",
        enviar_txt: "Send",
        escribenos_txt: '<strong>Write to us</strong><br> estrellitadondestas@gmail.com',
        llamanos_txt: '<strong>Call us</strong><br> +34 XXX 44X X44',
        encuentranos_aqui_txt: '<strong>Find us here</strong><br> In a galaxy far, far away'
      }
    };
  
   
  // Actualizar los textos en la tarjeta
  document.getElementById('inicio_txt').textContent = textos[idioma].inicio_txt;
  document.getElementById('estrellas_txt').textContent = textos[idioma].estrellas_txt;
  document.getElementById('planetas_txt').textContent = textos[idioma].planetas_txt;
  document.getElementById('satelites_txt').textContent = textos[idioma].satelites_txt;
  document.getElementById('galaxias_txt').textContent = textos[idioma].galaxias_txt;
  document.getElementById('foto_del_dia_txt').textContent = textos[idioma].foto_del_dia;
  document.getElementById('contacto_txt').textContent = textos[idioma].contacto_txt;
  document.getElementById('info_estrellas_txt').textContent = textos[idioma].info_estrellas_txt;
  document.getElementById('info_planetas_txt').textContent = textos[idioma].info_planetas_txt;
  document.getElementById('info_satelites_txt').textContent = textos[idioma].info_satelites_txt;
  document.getElementById('info_galaxias_txt').textContent = textos[idioma].info_galaxias_txt;
  document.getElementById('info_foto_del_dia_txt').textContent = textos[idioma].info_foto_del_dia_txt;
  document.getElementById('nombre_txt').textContent = textos[idioma].nombre_txt;
  document.getElementById('apellidos_txt').textContent = textos[idioma].apellidos_txt;
  document.getElementById('comentario_txt').textContent = textos[idioma].comentario_txt;
  document.getElementById('enviar_txt').textContent = textos[idioma].enviar_txt;
  document.getElementById('escribenos_txt').textContent = textos[idioma].escribenos_txt;
  document.getElementById('llamanos_txt').textContent = textos[idioma].llamanos_txt;
  document.getElementById('encuentranos_aqui_txt').textContent = textos[idioma].encuentranos_aqui_txt;
}