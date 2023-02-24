import { getQuotes, getQuotesOnClick} from './modules/blocquotes.js';
import { getLocalStorage } from './modules/localStorage.js';
import { controlPlayer } from './modules/player.js';
import { selectLang, selectSource, showMenu } from './modules/settingsControl.js';
import { setBG, setBGUnsplash, slider } from './modules/slider.js';
import { showGreeting, getTime, getName } from './modules/timeDate.js';
import { getWeather } from './modules/weatherFetch.js';
import { renderMenu } from './modules/renderMenu.js';
import { state } from './modules/state.js';
import { firstLoadWindow, hiddenBlock } from './modules/hiddenBlock.js';

const init = () => {
  console.log(`
  Оцениваю работу на 145 баллов.
  Выполнены все пункты, кроме "ToDo List" = 10 баллов 
  и "Использование в качестве источника изображений Flickr API" = 5 баллов
  `);  

  const state1 = getLocalStorage('state') || state;
  if (state1.photoSource === 'github') {
    setBG()
  } else {
    setBGUnsplash(state1.photoSource)
  };

  const lang = getLocalStorage('lang') || 'ru';
  firstLoadWindow(lang)
  const city = getLocalStorage('city') || 'Минск';    
  getTime(lang);
  const currentDay = showGreeting(lang);  
  
  hiddenBlock();
  slider(currentDay);
  getName();
  getWeather(city, lang);  
  controlPlayer();    
  getQuotes();
  getQuotesOnClick();  
  selectLang();
  selectSource();
  renderMenu(lang);
  showMenu();

}

init();