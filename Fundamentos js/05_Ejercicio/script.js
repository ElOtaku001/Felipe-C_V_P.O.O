function valorPuntuaciones(){
    let puntuacion = parseInt(prompt("Ingrese uau puntuacion"));
    let resultado = "";

    if (puntuacion >= 90){
        resultado = `Excelente - ${puntuacion}`; 
    } else if (puntuacion  >= 70 && puntuacion <= 89){
        resultado = `Buen trabajo - ${puntuacion}`;
    } else if (puntuacion < 70){
        resultado = `necesitas mejorar - ${puntuacion}`;
    } else{
        resultado = `Ingrese un valor valido`;
    }
document.getElementById("lista").innerHTML = resultado    

}