import { getWeather } from './weatherFetch.js';
import { getLocalStorage } from './localStorage.js';
import { showGreeting } from './timeDate.js';
import { getTime } from './timeDate.js';
import { renderMenu } from './renderMenu.js';
import { setStorage } from './localStorage.js';
import { getQuotes } from './blocquotes.js';
import { setBG, setBGUnsplash } from './slider.js';
import { state } from './state.js';



export const showMenu = () => {
  const settings = document.querySelector('.settings');
  const menu = document.querySelector('.ctrl');  
  settings.addEventListener('click', () => {
    settings.classList.toggle('settings_active');
    menu.classList.toggle('ctrl_active');
  })
}

export const selectLang = () => {
  const langRU = document.querySelector('.ru');
  const langEn = document.querySelector('.en');

  langRU.addEventListener('click', () => {   
    langRU.classList.add('ctrl-btn_active');
    langEn.classList.remove('ctrl-btn_active');

    const lang = 'ru';    
    setStorage('lang', lang);          
    getTime(lang);
    showGreeting(lang);  
    getWeather(city, lang);    
    renderMenu(lang);
    getQuotes();
  })

  langEn.addEventListener('click', () => {   

    langRU.classList.remove('ctrl-btn_active');
    langEn.classList.add('ctrl-btn_active');
    const lang = 'en';
    setStorage('lang', lang);      
    getTime(lang);
    showGreeting(lang);  
    getWeather(city, lang);    
    renderMenu(lang);
    getQuotes();
  });
const city = getLocalStorage('city') || 'Минск';
}

export const selectSource = () => {
  const source = document.querySelector('.ctrl-inner_source');
  const github = document.querySelector('.github');
  const nature = document.querySelector('.nature');
  const cats = document.querySelector('.cats');

  source.addEventListener('click', ({target}) => {
    if (target === github) {           
      setBG();
      state.photoSource = 'github';
      setStorage('state', state)
    }
    else if (target === nature) {      
      setBGUnsplash('nature');
      state.photoSource = 'nature';
      setStorage('state', state)
    } else if (target === cats) {      
      setBGUnsplash('cats');
      state.photoSource = 'cats';
      setStorage('state', state)      
    }
  })
}

