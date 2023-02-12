import { localStorageControl } from './localStorage.js';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

export const getWeather = async (city) => {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  try{
    const response = await fetch(url);  
    const data = await response.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C `;
    weatherDescription.textContent = data.weather[0].description
    wind.textContent = `ветер: ${Math.round(data.wind.speed)}м/с`;
    humidity.textContent = `влажность: ${Math.round(data.main.humidity)}%`;
  }
  
  catch(err) {
    document.querySelector('.weather-error').textContent = 'Город не найден';
    document.querySelector('.city').value = '';
    document.querySelector('.temperature').textContent = '';
    document.querySelector('.weather-description').textContent = '';
    document.querySelector('.wind').textContent = '';
    document.querySelector('.humidity').textContent = '';
    localStorage.setItem('city', '');
  }
}

city.addEventListener('change', () => {  
  const value = city.value;  
  getWeather(value);  
  localStorageControl(value);
  console.log(value);
  document.querySelector('.weather-error').textContent = '';
})