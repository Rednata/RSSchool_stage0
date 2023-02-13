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

const makeDoubleDigit = (number) => {
  return String(number).padStart(2, '0');     
}

export const setBG = () => {    
  const currentDate = showGreeting();
  let number = randomNum;
  if (number < 10) {
    number = makeDoubleDigit(number)
  }
  const img = new Image();
  img.src = `./assets/img/${currentDate}/${number}.jpg`;
  img.onload = () => {    
    document.body.style.backgroundImage = `url(./assets/img/${currentDate}/${number}.jpg)`
  }
}

// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
  // document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${index}.jpg)`;



// export const setBGUnsplash = async (key) => {
//   console.log(key);
//   const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${key}&client_id=a-8uLZVXLAYyWkGpYyd8PhJYoIB-jt8OHpo5xNlhopY`;  
//   try {
//     const response = await fetch(url);
//     const data = await response.json();  
//     const img = new Image();
//     img.src = data.urls.regular;
//     img.onload = () => {    
//       document.body.style.backgroundImage = `url("${data.urls.regular}")` ;
//     }    
//   } 
//   catch(err) {
//     alert('Возможно превышен лимит запросов. Источник изображений переключен на Github', err);
//     setBG();
//     state.photoSource = 'github';
//     setStorage('state', state)
//   } 
// }

export const setBGUnsplash = () => {   
  const state1 = getLocalStorage('state') || state;
  const url = `./assets/img/bg.jpg`; 
  const img = new Image(); 
  img.src = url;
  img.onload = () => {    
    document.body.style.backgroundImage = `url("${url}")`;
  };
}



const setBGSlide = (currentDate, number) => {  
  if (number < 10) {
    number = makeDoubleDigit(number)
  }
  if (number <= 0) {
    number = 20;
    randomNum = 20;
  }
  if (number > 20) {
    console.log('+++');
    number = '01';
    randomNum = '01';
  }
  document.body.style.backgroundImage = `url(./assets/img/${currentDate}/${number}.jpg)`
}

const getSlideNext = (currentDate) => {
  randomNum++;
  setBGSlide(currentDate, randomNum)
}

const getSlidePrev = (currentDate) => {
  randomNum--;  
  setBGSlide(currentDate, randomNum)
}

const ttt1 = (currentDate) => {
  const state1 = getLocalStorage('state') || state;
  const key = state1.photoSource;
  if (key === 'github') {    
    getSlideNext(currentDate);
  } else {
      setBGUnsplash(key)  
  }
}

const ttt2 = (currentDate) => {
  const state1 = getLocalStorage('state') || state;
  const key = state1.photoSource;
  
  if (key === 'github') {
    getSlidePrev(currentDate);
  } else {
      setBGUnsplash(key)  
  }
}

export const slider = (currentDate) => {
    leftSlideBtn.addEventListener('click', () => {
      ttt1(currentDate)
    });
  
    rightSlideBtn.addEventListener('click', () => {
      ttt2(currentDate)
    })
}

