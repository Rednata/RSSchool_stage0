const cityContacts = {
  'Yonkers, NY': ['Yonkers, NY', '+1	914	678 0003', '511 Warburton Ave'],
  'Canandaigua, NY': ['Canandaigua, NY', '+1	585	393 0001', '151 Charlotte Street'],
  'Sherrill, NY': ['Sherrill, NY', '+1	315	908 0004', '14 WEST Noyes BLVD'],
  'New York City': ['New York City', '+1	212	456 0002', '9 East 91st Street'],
};

const cityTitleBtn = document.querySelector('.contacts__title-city');
const select = document.querySelector('.select');

const showCityCard = (target) => {  
  const targetText = target.textContent.trim();  
  const city = document.querySelector('.city');
  const phone = document.querySelector('.phone');
  const address = document.querySelector('.address');
  const cityCardBtn = document.querySelector('.city-card__btn');
  cityCardBtn.setAttribute('href', `tel:${cityContacts[targetText][1]}`);
  city.textContent = cityContacts[targetText][0];
  phone.textContent = cityContacts[targetText][1];
  address.textContent = cityContacts[targetText][2];
  document.querySelector('.city-card').classList.add('city-card_active');
}

const changeTitleBtn = (title) => {
  cityTitleBtn.textContent = title;
  cityTitleBtn.classList.add('contacts__title-cityActive');
}

const showContacts = () => {
  cityTitleBtn.addEventListener('click', () => {    
    if (document.body.clientWidth <= 600) {
      
      document.querySelector('.container-img').classList.toggle('contacts__container_hidden');          
      document.querySelector('.container-img').classList.toggle('contacts__container');          

    }
    if (cityTitleBtn.textContent ==='City') {    
      

      select.classList.toggle('select_open');

      select.addEventListener('click', ({target}) => {
        if (target.closest('.select__city')) {
          changeTitleBtn(target.textContent);
          showCityCard(target);
          select.classList.add('select_city-card-open');
          select.classList.remove('select_open');
          }
        })

    } else {
      document.querySelector('.city-card').classList.remove('city-card_active');
      select.classList.remove('select_city-card-open');
      cityTitleBtn.textContent = 'City';
      cityTitleBtn.classList.remove('contacts__title-cityActive');


    }   
  
  })

  const mediaQ = window.matchMedia('(min-width: 600px)')

  mediaQ.addEventListener('change', (e) => {
    if (e.matches) {      
      document.querySelector('.container-img').classList.remove('contacts__container_hidden');          
      document.querySelector('.container-img').classList.add('contacts__container');          
    } else {
      if (document.querySelector('.select_open')|| document.querySelector('.city-card_active')) {
        document.querySelector('.container-img').classList.add('contacts__container_hidden');          
      document.querySelector('.container-img').classList.remove('contacts__container'); }
    }  
  })
}

export {showContacts};