export const renderMenu = (lang) => { 
  
  const ctrlLang = document.querySelector('.ctrl__sum_lang');
  const ctrlSource = document.querySelector('.ctrl__sum_source');
  const ctrlNature = document.querySelector('.nature');
  const ctrlCats = document.querySelector('.cats');
  const ctrlShow = document.querySelector('.ctrl__sum_show');
  const ctrlGreet = document.querySelector('.ctrl__greet');
  const ctrlAudio = document.querySelector('.ctrl__audio');
  const ctrlTime = document.querySelector('.ctrl__time');
  const ctrlWeather = document.querySelector('.ctrl__weather');

  ctrlLang.textContent = (lang === 'ru') ? 'Выбор языка' : 'Choice language';
  ctrlSource.textContent = (lang === 'ru') ? 'Источник изображений' : 'Source images';
  ctrlNature.textContent = (lang === 'ru') ? 'nature' : 'nature';
  ctrlCats.textContent = (lang === 'ru') ? 'cats' : 'cats';
  ctrlShow.textContent = (lang === 'ru') ? 'Скрыть / отобразить' : 'Hide / Show';
  ctrlGreet.textContent = (lang === 'ru') ? 'Приветствие' : 'Greeting';
  ctrlAudio.textContent = (lang === 'ru') ? 'Аудио' : 'Audio';
  ctrlTime.textContent = (lang === 'ru') ? 'Время' : 'CTime';
  ctrlWeather.textContent = (lang === 'ru') ? 'Погода' : 'Weather';

}