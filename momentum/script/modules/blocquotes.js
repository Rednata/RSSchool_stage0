const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const getRandomNum = () => {
  const num = Math.floor(Math.random() * 8);
  return num;
}

export const getQuotes = async () => {
  const response = await fetch('script/modules/data.json');
  const data = await response.json();
  const randomNum = getRandomNum();  
  
  quote.textContent = data[randomNum].text;
  author.textContent = data[randomNum].author

}

changeQuote.addEventListener('click', () => {
  getQuotes();
});
