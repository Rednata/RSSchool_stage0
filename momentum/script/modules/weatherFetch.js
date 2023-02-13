import { getLocalStorage, setStorage } from './localStorage.js';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const cityInput = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

export const getWeather = async (city, lang) => {  
  cityInput.value = city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;  
  try{
    const response = await fetch(url);  
    const data = await response.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C `;
    weatherDescription.textContent = data.weather[0].description;
    if (lang === 'ru') {
      wind.textContent = `ветер: ${Math.round(data.wind.speed)}м/с`;
      humidity.textContent = `влажность: ${Math.round(data.main.humidity)}%`;
    } else {
      wind.textContent = `wind: ${Math.round(data.wind.speed)}m/s`;
      humidity.textContent = `humidity: ${Math.round(data.main.humidity)}%`;
    }
    
  }
  
  catch(err) {
    document.querySelector('.weather-error').textContent = 'Город не найден';
    cityInput.value = '';
    document.querySelector('.temperature').textContent = '';
    document.querySelector('.weather-description').textContent = '';
    document.querySelector('.wind').textContent = '';
    document.querySelector('.humidity').textContent = '';
    localStorage.setItem('city', '');
  }
}

cityInput.addEventListener('change', () => {  
  const value = cityInput.value;  
  const lang = getLocalStorage('lang') || 'ru';
  getWeather(value, lang);  
  setStorage('city', value);  
  document.querySelector('.weather-error').textContent = '';
})