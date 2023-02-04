const serviceCards = document.querySelectorAll('.service-card');
const serviceBtnGroup = document.querySelector('.service__btn-group');
const buttons = document.querySelectorAll('.service__button');

const countBtn = new Set;

const makeCardBlur = () => {
  serviceCards.forEach(card => card.classList.add('service-card_blur'))
};

const makeActiveBtn = (target) => {
  target.classList.add('service__button_active');
}

const makeDisactiveBtn = (target) => {
  target.classList.remove('service__button_active')
}

const makeActiveCard = () => {  
  countBtn.forEach(btn => {    
    serviceCards.forEach(card => {
      if (card.dataset.blur === btn.textContent) {
        card.className = ('service-card');
      } 
    })
  })
}

const makeSet = (target) => {  
    if (countBtn.has(target)) {    
      makeDisactiveBtn(target);
      countBtn.delete(target);
    } else {    
      makeActiveBtn(target);    
      countBtn.add(target);    
    }
  } 

const onClickServiceBtn = () => {
  serviceBtnGroup.addEventListener('click', ({ target }) => {

    if (target.closest('.service__button')) {       
      makeCardBlur();
      if (countBtn.size < 2) {
        makeSet(target);
        makeActiveCard();
      } else {
        if (countBtn.has(target)) {    
          makeDisactiveBtn(target);
          countBtn.delete(target);
          makeActiveCard();
        };
        }      
      }      

    if (countBtn.size === 0) {
      serviceCards.forEach(card => {
        card.className = ('service-card');
      })
    }
  })
}

export {onClickServiceBtn};

