// Seleccionamos el botón y el contador de likes
let likes = 0;

function Like(){
    likes++;
    document.getElementById('numero').textContent = likes;
}