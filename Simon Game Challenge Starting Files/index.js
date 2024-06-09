var buttons = ["green", "red", "yellow", "blue"];

var gameSequence = [];

function nextSequence() {
    var randomColor = buttons[(Math.floor(Math.random()*4) + 1)- 1];
    gameSequence.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomColor + ".mp3");
    audio.play();
}