const burgerBtnOpen = document.querySelector('.burger');
const burgerNavActive = document.querySelector('.burger__container')
const burgerClose = document.querySelector('.close-btn');
const logo = document.querySelector('.header__logo');
const body = document.querySelector('body');

const openMenu = () => {
  burgerNavActive.classList.add('burger__active');
  burgerBtnOpen.classList.add('burgerMenuNotactive');
  logo.style.display = 'none';
}

const closeMenu = () => {
  burgerNavActive.classList.remove('burger__active');
  burgerBtnOpen.classList.remove('burgerMenuNotactive');
  logo.style.display = 'flex';
}

burgerBtnOpen.addEventListener('click', () => {
  openMenu();
})

burgerClose.addEventListener('click', () => {
  closeMenu();
})




// console.log(`
// Оценка работы: 100 / 100

// 1. Вёрстка валидная +10
// 2. Вёрстка семантическая +20
//   В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):
//   * <header>, <main>, <footer> +3
//   * пять элементов <section> (по количеству секций) +3
//   * только один заголовок <h1> +3
//   * четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3
//   * один элемент <nav> (панель навигации) +3
//   * два списка ul > li > a (панель навигации, ссылки на соцсети) +3
//   * пять кнопок <button> +2
// 3. Вёрстка соответствует макету +48
//   * блок <header> +6
//   * секция welcome +7
//   * секция about +7
//   * секция service +7
//   * секция prices +7
//   * секция contacts +7
//   * блок <footer> +7
// 4. Требования к css + 12
//   * для построения сетки используются флексы или гриды +2
//   * при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
//   * фоновый цвет тянется на всю ширину страницы +2
//   * иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2
//   * изображения добавлены в формате .jpg или .png +2
//   * есть favicon +2
// 5. Интерактивность, реализуемая через css +20
//   * плавная прокрутка по якорям +5
//   * cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5
//   * интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5
//   обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5
// `)