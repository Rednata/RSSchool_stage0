export const localStorageControl = () => {
  const name = document.querySelector('.name');  

  name.addEventListener('change', () => {            
    localStorage.setItem('name', name.value);
  })
}

const getLocalStorage = () => {
  const name = document.querySelector('.name');  
  name.value = localStorage.getItem('name') ||  '';  
}
window.addEventListener('load', getLocalStorage);
