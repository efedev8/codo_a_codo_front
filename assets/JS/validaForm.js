function validarFormulario() {
  var name = document.forms["formContacto"]["name"].value;
  var email = document.forms["formContacto"]["email"].value;
  var telefono = document.forms["formContacto"]["telefono"].value;
  var mensaje = document.forms["formContacto"]["mensaje"].value;


  if (name == "") {
    alert("El campo Nombre no puede estar vacío");
    return false;
  }

  if (email == "") {
    alert("El campo Correo Electrónico no puede estar vacío");
    return false;
  }

  if (telefono == "") {
    alert("El campo telefono no puede estar vacío");
    return false;
  }

  if (mensaje == "") {
    alert("El campo mensaje no puede estar vacío");
    return false;
  }

  alert("Su mensaje se envio con exito, a le brevedad responderemos su consulta.");
  return true;
}