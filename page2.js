song = "";

function setup(){
    song = loadSound("song.mp3");
}

function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}

function next2(){
    window.location = "page3.html";
}
