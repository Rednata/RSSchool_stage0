const burgerBtnOpen = document.querySelector('.burger-btn');
const burgerNavActive = document.querySelector('.burger__container')
const burgerClose = document.querySelector('.close-btn');
const logo = document.querySelector('.header__logo');

const openMenu = () => {
  burgerNavActive.classList.add('burger__container_active');
  burgerBtnOpen.classList.add('burgerMenuOff');
  logo.style.display = 'none';  
  document.body.classList.add('body-overlay');
}

const closeMenu = () => {
  burgerNavActive.classList.remove('burger__container_active');  
  burgerBtnOpen.classList.remove('burgerMenuOff');  
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

const mediaQ = window.matchMedia('(min-width: 600px)')

mediaQ.addEventListener('change', (e) => {
  if (e.matches) {
    closeMenu();
  }
})

const menuControl = () => {
  burgerBtnOpen.addEventListener('click', () => openMenu());
  onOverlayClick();  
}

export {menuControl};
