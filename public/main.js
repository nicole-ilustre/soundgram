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

const laundry = document.createElement('audio')
laundry.setAttribute('id', 'laundry')
laundry.src = '/sounds/laundry.mp3'

document.getElementById('laundry').addEventListener('click', playlaundry)

function playlaundry () {
 laundry.play()
}