



//menu movil
function abrirmenu() {
  var acumulador = 0;
  var menupadre=document.getElementById("contenedor");
  var menu = document.getElementById("menu-enlaces2");
  var icono = document.getElementById("iconoAbrir");
  icono.addEventListener("click", function () {
    
   
    if (acumulador == 0) {
      menu.classList.add("activo");
      icono.style.background="yellow";
      icono.style.color="rgb(116, 14, 14)";
      acumulador = 1;
     
    } else {
      menu.classList.remove("activo");
      icono.style.background="transparent";
      icono.style.color="white";
      acumulador = 0;
    }
  });
}
abrirmenu();

//overlay

var overlay = document.getElementById("overlay");

function aparecer() {
  document.querySelectorAll(".main-carta img").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      var ruta = elemento.getAttribute("src");
      var descripcion = elemento.parentNode.dataset.descripcion;

      overlay.classList.add("activo");
      document.querySelector("#overlay img").src = ruta;
      document.querySelector("#overlay #descripcion").innerHTML = descripcion;
    });
  });

  document.querySelector("#btn-cerrar").addEventListener("click", () => {
    overlay.classList.remove("activo");
  });
  overlay.addEventListener("click", (evento) => {
    evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
  });

}
aparecer();

function apareceroverlay() {
  document.querySelectorAll(".main-carta .comprar").forEach((elemento) => {
    elemento.addEventListener("click", () => {
      var ruta = elemento.dataset.ruta;
      var descripcion = elemento.dataset.descripcion;

      overlay.classList.add("activo");
      document.querySelector("#overlay img").src = ruta;
      document.querySelector("#overlay #descripcion").innerHTML = descripcion;
    });
  });
}
apareceroverlay();


  

function clickcomprar() {
  var comprar=document-getElementById("comprarsumit");
  comprar.addEventListener("click",()=>{
    event.preventDefault();
    console.log("compraste te enviaremos");
  })
}
clickcomprar();