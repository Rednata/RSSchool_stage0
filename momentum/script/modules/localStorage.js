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
};
