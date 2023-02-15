var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for button events
for (var i = 0; i < numberOfDrumButtons; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonHtml = this.innerHTML
    switch (buttonHtml) {
        case "w":
            tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            crash = new Audio("snare.mp3");
            crash.play();
            break;
        case "l":
            kickBass = new Audio("kick-bass.mp3");
            kickBass.play();
            break;
    
        default: console.log(buttonHtml)
            break;
    }
});
}
document.addEventListener("keydown", function(e){
    soundMaker(e.key)
});
// for keyboard events
function soundMaker(key){
    switch (key) {
        case "w":
            tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "l":
            kickBass = new Audio("kick-bass.mp3");
            kickBass.play();
            break;
    
        default: console.log(buttonHtml)
            break;
}}
