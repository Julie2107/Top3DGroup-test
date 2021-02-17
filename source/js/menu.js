const header = document.querySelector('.header');
const menuButton = header.querySelector('.nav__menu-button');
const menuList = header.querySelector('.nav__options-list');

menuButton.addEventListener('click', evt => {
  evt.preventDefault();

  if (!menuButton.classList.contains('nav__menu-button--opened')) {
    menuButton.classList.add('nav__menu-button--opened');
    menuList.classList.add('nav__options-list--opened');
  } else {
    menuButton.classList.remove('nav__menu-button--opened');
    menuList.classList.remove('nav__options-list--opened');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1248) {
    menuButton.classList.remove('nav__menu-button--opened');
    menuList.classList.remove('nav__options-list--opened');
  }
});
