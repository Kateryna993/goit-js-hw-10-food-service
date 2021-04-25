import cards from './menu.json';

import templateCards from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
const page = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');

// local storage and change theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.DARK) {
  page.classList.add(Theme.DARK);
  themeSwitcher.checked = true;
} 

function themeHandler() {
  // const checked = event.target.checked;

  if (themeSwitcher.checked) {
    page.classList.add(Theme.DARK);
    page.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    page.classList.add(Theme.LIGHT);
    page.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

themeSwitcher.addEventListener('change', themeHandler);

// markup for menu cards

const createMarkUp = createMenuCardsMarkup(cards);

menuRef.insertAdjacentHTML('beforeend', createMarkUp);

function createMenuCardsMarkup(cards) {
  return cards.map(templateCards).join('');
}
