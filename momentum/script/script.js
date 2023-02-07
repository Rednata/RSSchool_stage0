import { localStorageControl } from './modules/localStorage.js';
import { setBG, slider } from './modules/slider.js';

import { showGreeting, getTime } from './modules/timeDate.js';

const init = () => {
  getTime();
  const currentDay = showGreeting();  
  localStorageControl();
  setBG(currentDay);
  slider(currentDay);
}

init();