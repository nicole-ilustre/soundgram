
const sound = document.createElement('audio')
sound.setAttribute('id', 'doorbell')
sound.src = '../../sounds/doorbell.wav'

document.getElementById('doorbell').addEventListener('click', playSound)

function playSound () {
  sound.play()
}