document.addEventListener('DOMContentLoaded', () => {
  const botonesExplore = document.querySelectorAll('a.btn-custom');

  botonesExplore.forEach(boton => {
    boton.addEventListener('click', event => {
      event.preventDefault();

      const destino = boton.getAttribute('href');
      const sonido = new Audio('sonidos/click-button.mp3');

      sonido.play().then(() => {
        sonido.onended = () => {
          window.location.href = destino;
        };
      }).catch(error => {
        console.warn('No se pudo reproducir el sonido. Redirigiendo igual:', error);
        window.location.href = destino;
      });
    });
  });
});