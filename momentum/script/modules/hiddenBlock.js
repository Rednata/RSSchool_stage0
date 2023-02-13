const audio = document.querySelector('.player__inner');
const weather = document.querySelector('.weather');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greet = document.querySelector('.greeting');
const quote = document.querySelector('.footer__quote');
// const todo = document.querySelector('.footer__quote');

const hiddenElements = [audio, weather, time, date, greet, quote];
const hiddenTegs = ['audio', 'weather', 'time', 'date', 'greet', 'quote'];

const show = document.querySelector('.ctrl-inner_show');

export const hiddenBlock = () => {
  show.addEventListener('click', ({target}) => {
    if (hiddenTegs.some(elem => elem === target.dataset.hidden)) {      
        const ind = hiddenTegs.indexOf(target.dataset.hidden);
        if (hiddenElements[ind] === audio) {
          hiddenElements[ind].classList.toggle('hidden');        
        } else if  (hiddenElements[ind] === weather)
        {
          hiddenElements[ind].classList.toggle('hidden_text');        
          document.querySelector('.city').classList.toggle('hidden');      
        } else if (hiddenElements[ind] === greet) {
          hiddenElements[ind].classList.toggle('hidden_text');        
          document.querySelector('.name').classList.toggle('hidden');      
        }
        else {
          hiddenElements[ind].classList.toggle('hidden_text');        
        }
        
        target.classList.toggle('ctrl-btn_active');          
    }        
    
  })  
}