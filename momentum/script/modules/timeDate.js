import { getLocalStorage, setStorage } from './localStorage.js';

export const getTime = (lang) => {
const date = document.querySelector('.date');
const currentDate = new Date();
const optionsDay = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDay = currentDate.toLocaleDateString(lang, optionsDay);        
date.textContent = currentDay;

  const showTime = () => {
    const time = document.querySelector('.time');    
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();          
    time.textContent = currentTime;    
  };

  setInterval(showTime, 1000);  
}

const greeting = (greet, arr) => {
  const greeting = document.querySelector('.greeting');    
  greeting.textContent = arr[greet];
}

const getTimeOfDay = (currentDateHour) => {
  if (currentDateHour >= 6 && currentDateHour < 12) {
    return 0;
  } else if (currentDateHour >= 12 && currentDateHour < 18) {
    return 1;
  } else if (currentDateHour >= 18 && currentDateHour < 24) {
    return 2;
  } else {
    return 3;
  }
}
export const showGreeting = (lang) => {  
  const currentDateHour = getTimeOfDay(new Date().getHours());  
  let arr;
  if (lang === 'en') {
    arr = ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,']    
  } else {
    arr = ['Доброе утро,', 'Добрый день,', 'Добрый вечер,', 'Спокойной ночи,']    
  };
  greeting(currentDateHour, arr);
  return currentDateHour
}

export const getName = () => {
  const name = document.querySelector('.name');    
  name.addEventListener('change', () => {   
    setStorage('name', name.value);    
  });
  name.value = getLocalStorage('name') || '';
}



