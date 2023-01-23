const serviceCards = document.querySelectorAll('.service-card');
const serviceBtnGroup = document.querySelector('.service__btn-group');
const buttons = document.querySelectorAll('.service__button');

const countBtn = new Set;

const onClickServiceBtn = () => {
  serviceBtnGroup.addEventListener('click', ({ target }) => {
    if (target.closest('.service__button')) {   
      if (countBtn.size === 2) {
        if (countBtn.has(target)) {
          countBtn.delete(target);
          target.classList.toggle('service__button_active')
        }
      } else {
        if (countBtn.has(target)) {
          countBtn.delete(target);
          target.classList.toggle('service__button_active')
        } else {
          countBtn.add(target);
          target.classList.toggle('service__button_active')
        }
      }
    }

  if (countBtn.size === 0) {
    serviceCards.forEach(card => card.className = 'service-card');
  }

    countBtn.forEach(button => {      
      serviceCards.forEach(card => {              
        if (card.dataset.blur !== button.textContent) {
          card.classList.add('service-card_blur');          
        }         
      })
    })

    countBtn.forEach(button => {
      serviceCards.forEach(card => {      
        if (card.dataset.blur === button.textContent) {
          card.className = 'service-card';          
        }         
      })
    })

  })

}

export {onClickServiceBtn};

