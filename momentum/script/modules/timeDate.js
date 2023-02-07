import { setBG } from './slider.js';


export const getTime = () => {

  const showTime = () => {
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();      
    const optionsDay = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDay = currentDate.toLocaleDateString('ru', optionsDay);        
    time.textContent = currentTime;
    date.textContent = currentDay;
  };

  setInterval(showTime, 1000);  
}

const arr = ['morning', 'afternoon', 'evening', 'night'];



const greeting = (greet) => {
  const greeting = document.querySelector('.greeting');    
  greeting.textContent = `Good ${greet},`
}

const getTimeOfDay = (currentDateHour) => {
  if (currentDateHour >= 6 && currentDateHour < 12) {
    return arr[0];
  } else if (currentDateHour >= 12 && currentDateHour < 18) {
    return arr[1]
  } else if (currentDateHour >= 18 && currentDateHour < 24) {
    return arr[2];
  } else {
    return arr[3];
  }
}
export const showGreeting = () => {  
  const currentDateHour = getTimeOfDay(new Date().getHours());  
  greeting(currentDateHour);
  // setBG(currentDateHour);
  return currentDateHour
}



