// expose.js

window.addEventListener('DOMContentLoaded', init);
  
const confetti = new JSConfetti();

const volMute = 'assets/icons/volume-level-0.svg';
const volLow = 'assets/icons/volume-level-1.svg'; 
const volMed = 'assets/icons/volume-level-2.svg';
const volHigh = 'assets/icons/volume-level-3.svg';

function init() {
  
  const horn = document.querySelector("select");
  const volume = document.getElementById('volume');
  const button = document.getElementsByTagName('button')[0];

  horn.addEventListener('change', (event) => {
    const image = document.getElementsByTagName('img')[0];
    image.src = `assets/images/${event.target.value}.svg`;
    const audio = document.getElementsByClassName('hidden')[0];
    audio.src = `assets/audio/${event.target.value}.mp3`;
  })
  
  volume.addEventListener('change', (event) => {
    const audio = document.getElementsByClassName('hidden')[0];
    const slider = event.target.value;
    const img = document.getElementsByTagName('select')[1];
    audio.volume = slider/100;
    if(slider == 0){
      img.source = 'assets/icons/volume-level-0.svg'
    } else if(slider > 0 && vol < 33){
      img.source = 'assets/icons/volume-level-1.svg'
    } else if(slider >= 33 && vol < 67){
      img.source = 'assets/icons/volume-level-2.svg'
    } else{
      img.source = 'assets/icons/volume-level-3.svg'
    }
  })
  
  button.addEventListener('change', (event) => {
    const audio = document.getElementsByClassName('hidden')[0];
    audio.play();
    if(horn.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  })
}
