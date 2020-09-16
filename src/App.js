import React, { useState, useEffect, useCallback } from 'react';

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

function App() {

  const [banknum, setBanknum] = useState("bank1");

  function changeBank() {
    setBanknum(prevBanknum => prevBanknum === "bank1" ? prevBanknum = "bank2" : prevBanknum = "bank1")
    console.log(banknum)
  }

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      if (audioSamples[banknum][e.key]) {
        audioSamples[banknum][e.key].load()
        audioSamples[banknum][e.key].play()
      }
      console.log(banknum)

    })
  }, [banknum])

  function handleClick(e) {
    if (banknum === "bank1") {
      audioSamples.bank1[e.target.id].play()
    }
    else if (banknum === "bank2") {
      audioSamples.bank2[e.target.id].play()
    }
  }

  return (
    <div id="DrumMachine" className="App" >
      <button id="q" onClick={handleClick} >Q</button>
      <button id="w" onClick={handleClick}>W</button>
      <button id="e" onClick={handleClick}>E</button>
      <button id="a" onClick={handleClick}>A</button>
      <button id="s" onClick={handleClick}>S</button>
      <button id="d" onClick={handleClick}>D</button>
      <button id="banks" onClick={changeBank}>Change Bank
      </button>
    </div>
  );
}
export default App;
