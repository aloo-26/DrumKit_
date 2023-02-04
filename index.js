function playWithKey(key){
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-4.mp3");
            break;
        case "a":
            var audio= new Audio("sounds/tom-3.mp3");
            break;
        case "s":
            var audio= new Audio("sounds/tom-2.mp3");
            break;
        case "d":
            var audio= new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            break;   
        case "k":
            var audio= new Audio("sounds/kick-bass.mp3");
            break; 
        case "l":
            var audio= new Audio("sounds/crash.mp3");
            break;
        default:
            break;
    }
    return audio;
}
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
buttons=document.querySelectorAll(".drum");
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        audio=playWithKey(this.innerHTML);
        audio.play();
        buttonAnimation(this.innerHTML);
    })
}
document.addEventListener("keydown",function(e){
    audio=playWithKey(e.key);
    audio.play();
    buttonAnimation(e.key);
})

