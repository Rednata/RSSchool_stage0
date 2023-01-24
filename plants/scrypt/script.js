import { menuControl } from './modules/menuControl.js';
import { showPrice } from './modules/prices.js';
import { onClickServiceBtn } from './modules/service-card.js';

const init = () => {
  menuControl();
  onClickServiceBtn();
  showPrice();
};

init();
