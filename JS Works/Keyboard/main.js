let prev = null;

window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    if((audio.paused && prev !== audio) || (prev === null)){
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        prev = audio;
    }
    else{
        prev = audio;
        prev.pause();
        prev.currentTime = 0;
    }
});
const keys = document.querySelectorAll(".key");
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}
keys.forEach(key => key.addEventListener('transitionend',removeTransition))