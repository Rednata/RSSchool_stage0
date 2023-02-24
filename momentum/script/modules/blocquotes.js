import { getLocalStorage } from './localStorage.js';

const quote = document.querySelector('.quote__text');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const getRandomNum = () => {
  const num = Math.floor(Math.random() * 15);
  return num;
}

export const getQuotes = async () => {
  const lang = getLocalStorage('lang') || 'ru';
  let url;
  if (lang === 'ru') {
    url = './script/modules/dataRU.json'
  } else {
    url = './script/modules/dataEN.json'
  }
  const response = await fetch(url);
  const data = await response.json();
  const randomNum = getRandomNum();      
  quote.textContent = data[randomNum].text;
  author.textContent = data[randomNum].author
}

export const getQuotesOnClick = () => {
  changeQuote.addEventListener('click', () => {
    getQuotes();  
  })
}




