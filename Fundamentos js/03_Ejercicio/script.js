function login(){
    let nombreUsuario = prompt("Ingrese nombre de usuario: ")
    let contraseña = prompt("Ingrese contraseña: ")
    let resultado = "";

    const usuario = "usuario123";
    const contr = "";

    if (nombreAUsuario == usuario && contraseña == contr){
        result = "<h2>¡Lograste acceder!</h2>";
    }else {
        result = "<h2>¡No lograste acceder!</h2>";
    } 
        document.getElementById("lista").innerHTML = result;
}