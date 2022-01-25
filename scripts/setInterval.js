import {
    displayLadder,
    displayOnePitch,
    displayBlank,
    cancelBlank,
    displayQuestion,
    displayLoading,
    hideLoading
} from './display.js'
import {sounds} from './audio.js'

const interval = 280
let step = 0
let randomIndex

displayLoading()

sounds[7].sound.onloadeddata = () => {
    hideLoading()
    setInterval(() => {
        step++
        step %= 23

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
            step >= 22 && step <= 23) {
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

        if (step >= 20 && step <= 21) {
            cancelBlank()
            displayOnePitch(randomIndex)

            if (step === 20) {
                sounds[randomIndex].play()
            }
        }
        sounds.map(item => {
            console.log(item.sound.readyState)
        })
    }, interval)

}