import {displayLadder, displayOnePitch, displayBlank, cancelBlank, displayQuestion} from './display.js'
import {sounds} from './audio.js'

const interval = 333
let step = 0
let randomIndex

setInterval(() => {
    step++
    step %= 28

    if (step >= 0 && step <= 7) {
        cancelBlank()
        sounds[step].play()
        displayLadder(step)
    }

    if (step >= 8 && step <= 9 || step >= 12 && step <= 13) {
        cancelBlank()

        if (step === 8 || step === 12) {
            sounds[0].play()
        }
        displayOnePitch(0)
    }

    if (step >= 10 && step <= 11 ||
        step >= 14 && step <= 15 ||
        step >= 18 && step <= 19 ||
        step >= 22 && step <= 23 ||
        step >= 26 && step <= 27) {
        displayBlank()
    }

    if (step >= 16 && step <= 17) {
        cancelBlank()
        displayQuestion()

        if (step === 16) {
            randomIndex = Math.min(Math.floor(Math.random() * 7), 6) + 1
            sounds[randomIndex].play()
        }
    }

    if (step >= 20 && step <= 21 || step >= 24 && step <= 25) {
        cancelBlank()
        displayOnePitch(randomIndex)

        if (step === 20 || step === 24) {
            sounds[randomIndex].play()
        }
    }
}, interval)