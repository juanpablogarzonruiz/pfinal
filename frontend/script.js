function mostrar(resultado){
    let transformado = JSON.parse(resultado);
    let salida="";
    let elemento="";

    console.log ("lo que trajo es " + transformado +
                " y la longitud de elementos es " + transformado.length +
                "");

    for (let vc in transformado){
            elemento = "Código: " + transformado[vc].codigo;
            elemento = elemento + "<br>Nombre: " + transformado[vc].nombre;
            elemento = elemento + "<br>Descripción: " + transformado[vc].descripcion;
            elemento = elemento + "<br>$ " + transformado[vc].precio;
            salida = salida  + elemento + "<br><br>";
    }
    document.getElementById("resultado").innerHTML = salida;
}

function cargar(){
    event.preventDefault();
    if (document.getElementById("criterio").value == "*"){
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        fetch("http://localhost:8888/.netlify/functions/productos", requestOptions)
          .then((response) =>
            response.text())
          .then((resultado) =>
            mostrar(resultado))
          .catch((error) =>
            console.error(error));
    }else {
        document.getElementById("resultado").innerHTML = "No existen"+          " productos que cumplan ese criterio";
    }

}






















function guardar(){

    let nota=0.0;
    let apellidos='';
    let datoingresado = document.getElementById("correo").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
      "dni": document.getElementById("dni").value,
      "nombre": document.getElementById("nombre").value,
      "apellidos": document.getElementById("apellidos").value,
      "email": document.getElementById("correo").value
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}








function respuesta_actualizar(resultado){
    document.getElementById("rtaA").innerHTML = resultado;
}

function actualizar(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    let raw = JSON.stringify({
      "dni": document.getElementById("dniA").value,
      "nombre": document.getElementById("nombreA").value,
      "apellidos": document.getElementById("apellidosA").value,
      "email": document.getElementById("correoA").value
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    let elid=document.getElementById("idA").value;
    fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
      .then((response) =>
            response.text())
      .then((result) =>
            respuesta_actualizar(result))
      .catch((error) =>
            console.error(error));
}

function cargarLE(resultado){
    let transformado = JSON.parse(resultado);
    var salida="";
    var elemento="";
    elemento = "ID: " + transformado.id;
    elemento = elemento + "<br>Documento de identidad: " + transformado.dni;
    elemento = elemento + "<br>Nombres: " + transformado.nombre;
    elemento = elemento + "<br>Apellidos: " + transformado.apellidos;
    elemento = elemento + "<br>Correo electrónico: " + transformado.email;
    salida = salida  + elemento + "<br><br>";
    document.getElementById("rtaLE").innerHTML = salida;
}

function listar_estudiante(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    let elid=document.getElementById("idLE").value;
    fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargarLE(result))
      .catch((error) =>
        console.error(error));
}

function cargarEE(resultado){
    let transformado = JSON.parse(resultado);
    document.getElementById("rtaEE").innerHTML = transformado.respuesta;
}

function eliminar_estudiante(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };
    let elid=document.getElementById("idEE").value;
    fetch("http://localhost:8888/.netlify/functions/estudiantes/"+elid, requestOptions)
      .then((response) =>
        response.text())
      .then((result) =>
        cargarEE(result))
      .catch((error) =>
        console.error(error));
}
