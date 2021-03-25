const doorbell = document.createElement('audio')
doorbell.setAttribute('id', 'doorbell')
doorbell.src = '/sounds/doorbell.wav'

document.getElementById('doorbell').addEventListener('click', playDoorbell)

function playDoorbell () {
  doorbell.play()
}

const cat = document.createElement('audio')
cat.setAttribute('id', 'cat')
cat.src = '/sounds/cat.wav'

document.getElementById('cat').addEventListener('click', playCat)

function playCat () {
  cat.play()
}

const washingMachine = document.createElement('audio')
washingMachine.setAttribute('id', 'washing-machine')
washingMachine.src = '/sounds/washingmachine.mp3'

document.getElementById('washing-machine').addEventListener('click', playWashingMachine)

function playWashingMachine () {
  washingMachine.play()
}