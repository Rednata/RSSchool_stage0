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

const show = document.querySelector('.ctrl-inner_show');

const stateCurrent = getLocalStorage('state') || state;
console.log(stateCurrent.blocks);

export const hiddenBlock = () => {
  show.addEventListener('click', ({target}) => {

    const current = hiddenTegs.find(elem => elem === target.dataset.hidden);
      
    if (current) {         
      const ind = hiddenTegs.indexOf(current);   
      
      switch(hiddenElements[ind]) {
        case (audio): 
        hiddenElements[ind].classList.toggle('hidden');
        break;

        case(weather): 
          hiddenElements[ind].classList.toggle('hidden_text');        
          document.querySelector('.city').classList.toggle('hidden');        
          break;

        case(quote): 
          hiddenElements[ind].classList.toggle('hidden_text');        
          document.querySelector('.change-quote').classList.toggle('hidden');
          break;

        case(greet): 
          hiddenElements[ind].classList.toggle('hidden_text');        
          document.querySelector('.name').classList.toggle('hidden');
          break;

        default: 
          hiddenElements[ind].classList.toggle('hidden_text');
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