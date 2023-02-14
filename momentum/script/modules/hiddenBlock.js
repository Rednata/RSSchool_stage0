import { setStorage, getLocalStorage } from './localStorage.js';
import {state} from './state.js';

const audio = document.querySelector('.player__inner');
const weather = document.querySelector('.weather');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greet = document.querySelector('.greeting');
const quote = document.querySelector('.footer__quote');

const hiddenElements = [audio, weather, time, date, greet, quote];
const hiddenTegs = ['audio', 'weather', 'time', 'date', 'greet', 'quote'];
const allShowBtn = document.querySelectorAll('.ctrl-inner_show .ctrl-btn');

const show = document.querySelector('.ctrl-inner_show');

const stateCurrent = getLocalStorage('state') || state;

const ttt = () => {
  allShowBtn.forEach(btn => btn.classList.add('ctrl-btn_active'));
  (stateCurrent.blocks).forEach((elem, ind )=> {        
    if  (elem === 0) {
      switch(hiddenTegs[ind]) {
        case ('audio'):               
          hiddenAudio(ind)        
          break;
        case('weather'): 
          hiddenWeather(ind);
          break;
        case('quote'): 
          hiddenQuote(ind);
          break;  
        case('greet'): 
          hiddenGreet(ind);
          break;
        default: 
          hiddenOther(ind);                
      }      
    } else {
      document.querySelector(`[data-hidden=${elem}]`).classList.remove('ctrl-btn_active')
    }
  });
  if (getLocalStorage('lang') === 'en') {
    document.querySelector('.en').classList.toggle('ctrl-btn_active');    
  } else {
    document.querySelector('.ru').classList.toggle('ctrl-btn_active');    
    
  }
  if (stateCurrent.photoSource === 'github') {
    document.querySelector('.github').classList.toggle('ctrl-btn_active');    
  } else if (stateCurrent.photoSource === 'nature') {
    document.querySelector('.nature').classList.toggle('ctrl-btn_active');    
  } else {
    document.querySelector('.cats').classList.toggle('ctrl-btn_active');    
  }

}

export const currentHidden = () => {
  window.addEventListener('load', ttt, {once: true});
}

const hiddenAudio = (ind) => {
  hiddenElements[ind].classList.toggle('hidden');
  hiddenElements[ind].classList.toggle('hidden_text');  
};
const hiddenWeather = (ind) => {
  hiddenElements[ind].classList.toggle('hidden_text');        
  document.querySelector('.city').classList.toggle('hidden');        
};
const hiddenQuote = (ind) => {
  hiddenElements[ind].classList.toggle('hidden_text');        
  document.querySelector('.change-quote').classList.toggle('hidden');
};
const hiddenGreet = (ind) => {
  hiddenElements[ind].classList.toggle('hidden_text');        
  document.querySelector('.name').classList.toggle('hidden');
};
const hiddenOther = (ind) => {
  hiddenElements[ind].classList.toggle('hidden_text');
}



export const hiddenBlock = () => {
  show.addEventListener('click', ({target}) => {

    const current = hiddenTegs.find(elem => elem === target.dataset.hidden);
      
    if (current) {         
      const ind = hiddenTegs.indexOf(current);   
      
      switch(hiddenElements[ind]) {
        case (audio): 
          hiddenAudio(ind)        
        break;

        case(weather): 
          hiddenWeather(ind);
          break;

        case(quote): 
          hiddenQuote(ind);
          break;

        case(greet): 
          hiddenGreet(ind);
          break;

        default: 
          hiddenOther(ind);
          break
      }
      target.classList.toggle('ctrl-btn_active');  
                      
        if (hiddenElements[ind].classList.contains('hidden') 
          || hiddenElements[ind].classList.contains('hidden_text')) {
              stateCurrent.blocks[ind] = 0;
              setStorage('state', stateCurrent);
            } else {
              stateCurrent.blocks[ind] = hiddenTegs[ind];              
              setStorage('state', stateCurrent);
            }
    }    
    
      
    
  })  
}