song = "";

function preload(){
    song = loadSound("Papa mere Papa.mp3");
}

function play_music(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}

function next2(){
    window.location = "page3.html";
}