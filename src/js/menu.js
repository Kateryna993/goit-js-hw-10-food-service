import cards from './menu.json';

import templateCards from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
const page = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');

// local storage

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const setTheme = localStorage.setItem('theme', JSON.stringify(Theme));

// console.log(setTheme);

const savedTheme = localStorage.getItem('theme');

console.log(savedTheme);

const handlingTheme = themeChecker(savedTheme);

function themeChecker(savedTheme) {
  if (savedTheme === 'light-theme') {
    page.classList.add('light-theme');
    themeSwitcher.checked = false;
  } else if (savedTheme === 'dark-theme') {
    page.classList.add('dark-theme');
    themeSwitcher.checked = true;
  } else {
    page.classList.add('light-theme');
  }
}

themeSwitcher.addEventListener('change', themeHandler);

function themeHandler(event) {
  const checked = event.target.checked;

  if (checked) {
    page.classList.remove('light-theme');
    page.classList.add('dark-theme');
  } else {
      
    page.classList.remove('dark-theme');
    page.classList.add('light-theme');
  }
}



// markup for menu cards

const createMarkUp = createMenuCardsMarkup(cards);

menuRef.insertAdjacentHTML('beforeend', createMarkUp);

function createMenuCardsMarkup(cards) {
  return cards.map(templateCards).join('');
}
