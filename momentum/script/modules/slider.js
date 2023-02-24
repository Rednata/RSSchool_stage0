import { getLocalStorage, setStorage } from './localStorage.js';
import { showGreeting } from './timeDate.js';
import { state } from './state.js';

const rightSlideBtn = document.querySelector('.slide-next');
const leftSlideBtn = document.querySelector('.slide-prev');

const getRandomNum = () => {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
}

let randomNum = getRandomNum();

export const setBG = () => {    
  const currentDate = showGreeting();
  let number = randomNum;
  if (number <= 0) {
    number = 20;
    randomNum = 20;
  }
  if (number > 20) {    
    number = '1';
    randomNum = '1';
  }
  // const url = `./assets/img/${currentDate}/${number}.jpg`;
  const url = `https://github.com/Rednata/bgImg/blob/main/${currentDate}/${number}.jpg?raw=true`  
  const img = new Image();
  img.src = url;  
  img.onload = () => {
    document.body.style.backgroundImage = `url(${url})`    
  }
}

export const setBGUnsplash = async (key) => {  
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${key}&client_id=a-8uLZVXLAYyWkGpYyd8PhJYoIB-jt8OHpo5xNlhopY`;  
  try {
    const response = await fetch(url);
    const data = await response.json();  
    const img = new Image();
    img.src = data.urls.regular;
    img.onload = () => {    
      document.body.style.backgroundImage = `url("${data.urls.regular}")` ;
    }    
  } 
  catch(err) {
    alert('Возможно превышен лимит запросов. Источник изображений переключен на Github', err);
    setBG();
    state.photoSource = 'github';
    setStorage('state', state)
  } 
}

const getSlideNext = (currentDate) => {
  const state1 = getLocalStorage('state') || state;
  const key = state1.photoSource;
  if (key === 'github') {        
    setBG(randomNum++)
  } else {
      setBGUnsplash(key)  
  }
}

const getSlidePrev = (currentDate) => {
  const state1 = getLocalStorage('state') || state;
  const key = state1.photoSource;
  
  if (key === 'github') {    
    setBG(randomNum--)
  } else {
      setBGUnsplash(key)  
  }
}

export const slider = (currentDate) => {
    leftSlideBtn.addEventListener('click', () => {
      getSlideNext(currentDate)
    });
  
    rightSlideBtn.addEventListener('click', () => {
      getSlidePrev(currentDate)
    })
}

