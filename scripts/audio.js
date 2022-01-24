function sound(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.play = function(){
        stopAll()
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
        this.sound.currentTime = 0;
    }
}

export const sounds = [
    new sound('audio/do.mp3'),
    new sound('audio/re.mp3'),
    new sound('audio/mi.mp3'),
    new sound('audio/fa.mp3'),
    new sound('audio/sol.mp3'),
    new sound('audio/la.mp3'),
    new sound('audio/ti.mp3'),
    new sound('audio/do-h.mp3')
]

function stopAll() {
    sounds.filter(sound => sound.sound.currentTime > 0).map(sound => sound.stop())
}
