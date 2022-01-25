const pitchCard = document.querySelector('#pitchCard')

const names = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Ti', 'Do']
const colors = ['#f6114a', '#fca00c', '#78b177', '#25998f', '#9862a2', '#0aa0bf', '#986f51', '#f36e98']

export function displayLadder(step) {
    pitchCard.style.left = `${step * 12.5}vw`
    pitchCard.style.top = `${(7 - step) * 12.5}vh`
    pitchCard.style.color = colors[step]
    pitchCard.innerHTML = names[step]
}

export function displayOnePitch(index) {
    pitchCard.style.left = '43.75vw'
    pitchCard.style.top = '43.75vh'
    pitchCard.style.color = colors[index]
    pitchCard.innerHTML = names[index]
}

export function displayQuestion(index) {
    pitchCard.style.left = '43.75vw'
    pitchCard.style.top = '43.75vh'
    pitchCard.style.color = 'black'
    pitchCard.innerHTML = '?'
}

export function displayBlank() {
    pitchCard.style.visibility = 'hidden'
}

export function cancelBlank() {
    if (pitchCard.style.visibility === 'hidden') {
        pitchCard.style.visibility = ''
    }
}

let interval

export function displayLoading() {
    displayBlank()
    const loading =  document.querySelector('#loading')
    loading.style.display = 'block'
    let times = -1
    interval = setInterval(() => {
        times++
        times %= 4
        loading.innerHTML = 'Loading Audios' + '.'.repeat(times)
    }, 500)
}

export function hideLoading() {
    cancelBlank()
    document.querySelector('#loading').style.display = 'none'
}
