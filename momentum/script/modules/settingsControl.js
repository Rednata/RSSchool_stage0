import { getWeather } from './weatherFetch.js';
import { getLocalStorage } from './localStorage.js';
import { showGreeting } from './timeDate.js';
import { getTime } from './timeDate.js';
import { renderMenu } from './renderMenu.js';
import { setStorage } from './localStorage.js';
import { getQuotes } from './blocquotes.js';

const changeQuote = document.querySelector('.change-quote');

export const selectLang = () => {
  const langRU = document.querySelector('.ru');
  const langEn = document.querySelector('.en');

  langRU.addEventListener('click', () => {
    const lang = 'ru';    
    setStorage('lang', lang);          
    getTime(lang);
    showGreeting(lang);  
    getWeather(city, lang);    
    renderMenu(lang);
    getQuotes();
  })

  langEn.addEventListener('click', () => {
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