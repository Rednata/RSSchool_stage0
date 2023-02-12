const rightSlideBtn = document.querySelector('.slide-next');
const leftSlideBtn = document.querySelector('.slide-prev');

const getRandomNum = () => {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
}

let randomNum = getRandomNum();

const makeDoubleDigit = (number) => {
  return String(number).padStart(2, '0');     
}

export const setBG = (currentDate) => {    
  let number = randomNum;
  if (number < 10) {
    number = makeDoubleDigit(number)
  }
  const img = new Image();
  img.src = `./assets/img/${currentDate}/${number}.jpg`
  img.onload = () => {    
    document.body.style.backgroundImage = `url(./assets/img/${currentDate}/${number}.jpg)`
  }
  // body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
  // document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${index}.jpg)`;
  
}

const setBGSlide = (currentDate, number) => {  
  if (number < 10) {
    number = makeDoubleDigit(number)
  }
  if (number <= 0) {
    number = 20;
    randomNum = 20;
  }
  if (number > 20) {
    console.log('+++');
    number = '01';
    randomNum = '01';
  }
  document.body.style.backgroundImage = `url(./assets/img/${currentDate}/${number}.jpg)`
}

const getSlideNext = (currentDate) => {
  randomNum++;
  setBGSlide(currentDate, randomNum)
}

const getSlidePrev = (currentDate) => {
  randomNum--;  
  setBGSlide(currentDate, randomNum)
}

export const slider = (currentDate) => {
  leftSlideBtn.addEventListener('click', () => {
    getSlideNext(currentDate);
  });

  rightSlideBtn.addEventListener('click', () => {
    getSlidePrev(currentDate);
  })
  
}