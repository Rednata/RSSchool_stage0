const burgerBtnOpen = document.querySelector('.burger-btn');
const burgerNavActive = document.querySelector('.burger__container')
const burgerClose = document.querySelector('.close-btn');
const logo = document.querySelector('.header__logo');

const openMenu = () => {
  burgerNavActive.classList.toggle('burger__container_active');
  burgerBtnOpen.classList.toggle('burgerMenuOff');
  logo.style.display = 'none';  
  document.body.classList.add('body-overlay');
}

const closeMenu = () => {
  burgerNavActive.classList.toggle('burger__container_active');  
  burgerBtnOpen.classList.toggle('burgerMenuOff');  
  logo.style.display = 'flex';  
  document.body.classList.remove('body-overlay');
}

const onOverlayClick = () => {
  document.body.addEventListener('click', ({target}) => {    
    if (target.classList.contains('body-overlay') 
      || target.closest('.close-btn')) {
      closeMenu()
    }
  })
}

const isChangeSizeWindow = () => {
  window.addEventListener('resize', () => {
    console.log('=======');
  })
}

const menuControl = () => {
  burgerBtnOpen.addEventListener('click', () => openMenu());
  onOverlayClick();
  isChangeSizeWindow();
}



export {menuControl};
