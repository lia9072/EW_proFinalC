

//menu movil
function abrirmenu() {
  var acumulador = 0;
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



function validar() {
  var nombre,apellidos,email,mesaje,expresion;
  nombre=document.getElementById("nombre").value;
  apellidos=document.getElementById("apellidos").value;
  email=document.getElementById("email").value;
  mesaje=document.getElementById("mensaje").value;

  expresiones =/\w+@\w+\.+[a-z]/ ;

  if (nombre==""||apellidos==""||mesaje==""){
    alert("Flata llenar Datos");
   return false;
  }
  
  if (!expresion.test(email)) {
    alert("El correco no es valido");
  }
  
  

}

