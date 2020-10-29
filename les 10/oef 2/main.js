var x = document.getElementById("video");

function play(){
    x.play();
}

function pause(){
    x.pause();
}

function minsec(){
    x.currentTime = x.currentTime - 1;
}

function plussec(){
    x.currentTime = x.currentTime + 1;
}

function reset(){
    x.currentTime = 0;
}