import React from 'react';

const audioSamples = {
  bank1: {
    q: new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%208-900-Free-Loops.com.mp3"),
    w: new Audio("http://www.denhaku.com/r_box/sr16/sr16sd/alloysnr.wav"),
    e: new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Long%20Open%20Hi%20Hat%20002-1653-Free-Loops.com.mp3"),
    a: new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Ride%20Cymbal%202-2526-Free-Loops.com.mp3"),
    s: new Audio("http://electrongate.com/dmxfiles/DXCRASH.wav"),
    d: new Audio("http://cd.textfiles.com/10000soundssongs/WAV/COWBELL1.WAV")
  },
  bank2: {
    q: new Audio("http://cd.textfiles.com/10000soundssongs/WAV/EERIE_1.WAV"),
    w: new Audio("http://www.denhaku.com/r_box/linn/congal.wav"),
    e: new Audio("http://electrongate.com/dmxfiles/conga.wav"),
    a: new Audio("http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Ride%20Cymbal%202-2526-Free-Loops.com.mp3"),
    s: new Audio("http://electrongate.com/dmxfiles/DXCRASH.wav"),
    d: new Audio("http://cd.textfiles.com/10000soundssongs/WAV/COWBELL1.WAV")
  }
}

let bank = true
let bankName = "bank1"


function changeBank() {
  if (bank){
    bank = false
  }  
  else{ bank = true
  }
}

function changeName() {
return bank ? "bank1" :  "bumhole"

}

document.addEventListener("keydown", keyPressed)
function keyPressed(e) {

  if (bank && audioSamples.bank1[e.key]) {
    audioSamples.bank1[e.key].load()
    audioSamples.bank1[e.key].play()
    colorChange(e)
  }
  else if (audioSamples.bank2[e.key]) {
    audioSamples.bank2[e.key].load()
    audioSamples.bank2[e.key].play()
    colorChange(e)
  }

  else if (e.key === "p") {
    changeBank()
    colorChange(e)
  }
}

function colorChange(e) {
  setTimeout(function () {
    document.getElementById(e.key).style.color = null
    document.getElementById(e.key).style.backgroundColor = null
    document.getElementById(e.key).style.border = null
    document.getElementById(e.key).style.background = null
  }, 100);
  document.getElementById(e.key).style.background = "radial-gradient(white, purple)";
  document.getElementById(e.key).style.backgroundColor = "red"
  

}

function handleClick(e) {
  if (bank) {
    audioSamples.bank1[e.target.id].load()
    audioSamples.bank1[e.target.id].play()
  }
  else {
    audioSamples.bank2[e.target.id].load()
    audioSamples.bank2[e.target.id].play()
  }
}

function App() {

  return (
    <div id="allButtons">
      <div id="DrumMachine" className="Rows"  >
        <button id="q" class="button" onClick={handleClick} >Q</button>
        <button id="w" class="button" onClick={handleClick} >W</button>
        <button id="e" class="button" onClick={handleClick}>E</button>
      </div>
      <div className="Rows"> <button id="a" class="button" onClick={handleClick}>A</button>
        <button id="s" class="button" onClick={handleClick} >S</button>
        <button id="d" class="button" onClick={handleClick} >D</button></div>
      <div>
        <button id="p" class="bank" onClick={changeBank}> P (Change Bank) </button></div>
  <h1>{changeName()}</h1>
    </div>
    
  );
}
export default App;
