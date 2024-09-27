console.log("page loaded...");
function playVideo(secondaryVideo, textoId) {
    var mainVideo = document.getElementById("mainVideo"); // Selecciona el video principal
    var temp = mainVideo.src;
    var textoSecundario = document.getElementById(textoId);
    var textoPrincipal = document.getElementById("texto");

    var tempTexto = textoSecundario.innerText;
    textoSecundario.innerText = textoPrincipal.innerText;
    textoPrincipal.innerText = tempTexto;

    // Cambia el src del video principal al del video secundario
    mainVideo.src = secondaryVideo.src;
    mainVideo.play(); // Reproduce el nuevo video en el video principal
    // Cambia el src del video secundario al que tenía el video principal
    secondaryVideo.src = temp;
}
function pauseVideo() {

    mainVideo.pause(); // Reproduce el video original en el video principal
}