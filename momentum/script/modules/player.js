const audio = new Audio();

const playBtn = document.querySelector('.play');
const playlist = document.querySelector('.play-list');
const playItemsNode = document.querySelectorAll('.play-item');
const playItems = Array.from(playItemsNode);
const durationTotal = document.querySelector('.player__time-total');
const timePassed = document.querySelector('.player__time-passed');
const songName = document.querySelector('.player-name');
const volumeMute = document.querySelector('.player__volume-btn');
const progressInput = document.querySelector('.progress__input');
const volumeInput = document.querySelector('.volume__input');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');

const getSourceSong = (target) => {  
  playItems.forEach(item => {
    item.className = 'play-item';
  });
  target.classList.add('play-item_active');
  const song = target.dataset.song;
  songName.textContent = song;            
  audio.src = `../../assets/sounds/${song}.mp3`;
  
  audio.play();
  playSong(target);
}

const changeProgress = () => {
  audio.addEventListener("timeupdate", () => {  
    progressInput.value = (audio.currentTime / audio.duration * 100) || 0;      
  });   
}

const changeMouseProgress = () => {
  progressInput.addEventListener('input', () => {
  const pct = progressInput.value / 100;
  audio.currentTime = audio.duration * pct;
  })
}

const controlProgress = () => {  
  changeProgress();
  changeMouseProgress();
}

const controlVolume = () => {
  volumeInput.addEventListener('input', () => {
    audio.volume = volumeInput.value / 100
  })
}

const getDurationTexcontent = (duration) => {
  let durationSeconds = Math.round(duration%60);
  if (durationSeconds < 10) {
    durationTotal.textContent = `${Math.floor(duration/60)}:0${durationSeconds}`
  } else {
    durationTotal.textContent = `${Math.floor(duration/60)}:${durationSeconds}`
  }
}

const getTimePassedTextContent = (duration) => {
  let currentTime = audio.currentTime;
  if (currentTime <= duration) {
    const seconds = Math.round(currentTime%60);
      if (seconds < 10) {
        timePassed.textContent = `${Math.floor(currentTime/60)}:0${seconds}`;
      } else {timePassed.textContent = `${Math.floor(currentTime/60)}:${seconds}`}        
      currentTime++;
    }
}

const loopPlay = () => {
  audio.addEventListener('ended', () => {
    const currentSongIndex = playItems.findIndex(song => {        
      return song === document.querySelector('.play-item_active')
    });       
    if (currentSongIndex >= (playItems.length - 1)) {
      getSourceSong(playItems[0])
    }
      else {
      getSourceSong(playItems[currentSongIndex + 1])
    }    
  })
}  

const playSong = (target) => {  
  audio.addEventListener('loadedmetadata', () => {    
    const duration = audio.duration;    
    getDurationTexcontent(duration);
    setInterval(getTimePassedTextContent, 1000, duration);    
    controlProgress();
  })  
}

export const controlPlayer = () => {

  playlist.addEventListener('click', ({target}) => {      
    if (target.closest('.play-item')) {   
      if (audio.paused) {      
        playBtn.classList.toggle('pause');   
        if (target.classList.contains('play-item_active')) {
          audio.play();
        } else {
          getSourceSong(target);           
        }
        
      } else {
        if (target.classList.contains('play-item_active')) {
          playBtn.classList.toggle('pause'); 
          audio.pause();
        } else {
          getSourceSong(target);
        }       
      }
    }
  });
  
  playBtn.addEventListener('click', () => {
    if (audio.paused) {      
      playBtn.classList.toggle('pause');
      if (audio.src === '') {
        getSourceSong(playItems[0]);     
      }
      audio.play();      
    } else {
      playBtn.classList.toggle('pause');
      audio.pause();
    }        
  })

  volumeMute.addEventListener('click', () => {
    if (audio.muted) {
      audio.muted = false;
      
      volumeMute.classList.toggle('player__volume-btn_mute');
    } else {
      audio.muted = true;
      volumeMute.classList.toggle('player__volume-btn_mute');
    }    
  })

  const sliderSong = () => {
    playPrev.addEventListener('click', () => {            
      const currentSongIndex = playItems.findIndex(song => {        
        return song === document.querySelector('.play-item_active')
      });   
      if (currentSongIndex > 0) {
        getSourceSong(playItems[currentSongIndex - 1])
      } else {
        getSourceSong(playItems[playItems.length - 1])
      }
    });

    playNext.addEventListener('click', () => {            
      const currentSongIndex = playItems.findIndex(song => {        
        return song === document.querySelector('.play-item_active')
      });   
      if (currentSongIndex >= (playItems.length - 1) || currentSongIndex < 0) {
        getSourceSong(playItems[0])
      } else {
        getSourceSong(playItems[currentSongIndex + 1])
      }
    })        
  }  

  sliderSong();
  controlVolume();
  loopPlay();
}

