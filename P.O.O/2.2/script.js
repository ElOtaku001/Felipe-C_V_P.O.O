console.log("page loaded...");

function playVideo(secondaryVideo){
    var mainVideo = document.getElementById("mainVideo");
    var videoTitle = secondaryVideo.parentElement.querySelector(".video-title").textContent;
    var principalTitle = document.getElementById("title-principal");
    
    var tempVideoSrc = mainVideo.src;
    var tempTitle = principalTitle.textContent;
    
    mainVideo.src = secondaryVideo.src;
    mainVideo.play();

    secondaryVideo.src = tempVideoSrc;

    principalTitle.textContent = videoTitle;
    secondaryVideo.parentElement.querySelector(".video-title").textContent = tempTitle;
}

function pauseVideo(secondaryVideo){
    var mainVideo = document.getElementById("mainVideo")

    var tempSrc = secondaryVideo.src;

    secondaryVideo.src = mainVideo.src;
    mainVideo.src = tempSrc;
    mainVideo.play();
}