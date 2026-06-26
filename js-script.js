document.addEventListener("DOMContentLoaded", function(){
    
    const imagenes = [
      "Img/coreana-1.jpg",
      "Img/OIP.webp",
      "Img/pato.webp"
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById ("imagenPrincipal");
    const btnanterior = document.getElementById ("btnanterior");
    const  btnsiguiente = document.getElementById ("btnsiguiente");

    function mostrarImagen (indice){
    imagenPrincipal.src = imagenes [indice];
    }

    btnsiguiente.addEventListener("click", function(){
    indiceActual++;
    if(indiceActual >= imagenes.length) indiceActual = 0;
    mostrarImagen (indiceActual);
    });

    btnanterior.addEventListener("click", function(){
      indiceActual--;
    if(indiceActual < 0) indiceActual = imagenes.length -1;
    mostrarImagen (indiceActual);
    });

    mostrarImagen(indiceActual);

});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Formulario enviado");
      })
    });
  });

