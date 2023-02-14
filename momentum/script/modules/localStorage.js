import { getWeather } from './weatherFetch.js';
const settings = {};


export const setStorage = (key, value) => {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value)   
  }
  
}

export const getLocalStorage = (key) => {
  if (key === 'state') {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return localStorage.getItem(key);
  }
  
  // const name = document.querySelector('.name');  
  // const city = document.querySelector('.city');
  // name.value = localStorage.getItem('name') ||  '';  
  // city.value = localStorage.getItem('city') || 'Минск';
  // const localName = name.value;
  // const localCity = city.value;
  // return { localName, localCity };
};
