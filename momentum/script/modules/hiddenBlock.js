import { setStorage, getLocalStorage } from './localStorage.js';
import {state} from './state.js';

const allShowBtn = document.querySelectorAll('.ctrl-inner_show .ctrl-btn');
const show = document.querySelector('.ctrl-inner_show');
const stateCurrent = getLocalStorage('state') || state;

const firstLoadHidden = () => {
  allShowBtn.forEach(btn => btn.classList.add('ctrl-btn_active'));
  (stateCurrent.blocks).forEach(elem => {
    document.getElementById(elem).classList.remove('hidden')    
    document.querySelector(`[data-hidden=${elem}]`).classList.remove('ctrl-btn_active')  
  })
}

const firstLoadLang = (lang) => {    
  const btnActive = document.querySelector(`.${lang}`);
  btnActive.classList.add('ctrl-btn_active');
}

const firstLoadSource = () => {
  const source = stateCurrent.photoSource || 'github';
  const btnActive = document.querySelector(`.${source}`);
  btnActive.classList.add('ctrl-btn_active');  
}

export const firstLoadWindow = (lang) => {  
  window.addEventListener('load', () => {
    // document.querySelector('html').style.visibility = 'visible';    
    firstLoadHidden();   
    firstLoadLang(lang);
    firstLoadSource();
  }, {once: true})  
}

const makeHidden = (elem) => {    
  elem.classList.toggle('hidden');  
};

export const hiddenBlock = () => {
  show.addEventListener('click', ({target}) => {    
    const selector = target.dataset.hidden;    
    const currentElem = document.getElementById(selector);
    const activeBtn = target;
    if (selector) {
      makeHidden(currentElem)
      activeBtn.classList.toggle('ctrl-btn_active');  

      const indexElemInStateCurrent = (stateCurrent.blocks).indexOf(selector);      
      if (indexElemInStateCurrent >= 0) {        
        (stateCurrent.blocks).splice(indexElemInStateCurrent, 1);
        setStorage('state', stateCurrent);        
      } else {
        (stateCurrent.blocks).push(selector);
        setStorage('state', stateCurrent);
      }      
    }    
  })  
}