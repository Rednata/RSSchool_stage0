import { getQuotes } from './modules/blocquotes.js';
import { localStorageControl, getLocalStorage } from './modules/localStorage.js';
import { controlPlayer } from './modules/player.js';
import { setBG, slider } from './modules/slider.js';
import { showGreeting, getTime } from './modules/timeDate.js';
import { getWeather } from './modules/weatherFetch.js';

const init = () => {
  getTime();
  const currentDay = showGreeting();  
  localStorageControl();  
  setBG(currentDay);
  slider(currentDay);
  const local = getLocalStorage();  
  getWeather(local.localCity);  
  getQuotes();
  controlPlayer();  
}

init();