const showPrice = () => {
  const priceBtns = document.querySelectorAll('.category');

  const showCard = (target, btn) => {
    if (!target.closest('.category__order')) {
      const currentBtn = btn;
      btn.classList.toggle('category_active');
      priceBtns.forEach(btn => {
        if (btn !== currentBtn) {
          btn.classList.remove('category_active')
        }          
      })
    }
  }

  priceBtns.forEach(btn => {    
    btn.addEventListener('click', ({target}) => { 
      showCard(target, btn);      
    })
  })

  priceBtns.forEach(btn => {    
    btn.addEventListener('keydown', (e) => {          
      if (e.keyCode === 13) {        
        showCard(e.target, btn);
      }      
    })
  })
}

export {showPrice};
