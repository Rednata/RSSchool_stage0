import { getWeather } from './weatherFetch.js';

export const localStorageControl = (value) => {
  const name = document.querySelector('.name');    

  name.addEventListener('change', () => {                
    localStorage.setItem('name', name.value);
  })

  if (value) {
    localStorage.setItem('city', value);
  }    
}

export const getLocalStorage = () => {
  const name = document.querySelector('.name');  
  const city = document.querySelector('.city');
  name.value = localStorage.getItem('name') ||  '';  
  city.value = localStorage.getItem('city') || 'Минск';
  const localName = name.value;
  const localCity = city.value;
  return { localName, localCity };
};
