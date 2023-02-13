import { getQuotes, getQuotesOnClick} from './modules/blocquotes.js';
import { setStorage, getLocalStorage } from './modules/localStorage.js';
import { controlPlayer } from './modules/player.js';
import { selectLang } from './modules/settingsControl.js';
import { setBG, slider } from './modules/slider.js';
import { showGreeting, getTime, getName } from './modules/timeDate.js';
import { getWeather } from './modules/weatherFetch.js';
import { renderMenu } from './modules/renderMenu.js';

const init = () => {
  const lang = getLocalStorage('lang') || 'ru';
  const city = getLocalStorage('city') || 'Минск';
  getTime(lang);
  const currentDay = showGreeting(lang);  
  setBG(currentDay);
  slider(currentDay);
  getName();
  getWeather(city, lang);  
  controlPlayer();  
  selectLang();
  getQuotes();
  getQuotesOnClick();
  renderMenu(lang);
}

init();