const showPrice = () => {
  const priceBtns = document.querySelectorAll('.category');

  priceBtns.forEach(btn => {    
    btn.addEventListener('click', ({target}) => {          
      console.dir(btn);
      if (!target.closest('.category__order')) {
        const currentBtn = btn;
        btn.classList.toggle('category_active');
        priceBtns.forEach(btn => {
          if (btn !== currentBtn) {
            btn.classList.remove('category_active')
          }          
        })
      }
      
    })

  })
}

export {showPrice};
