import cards from './menu.json';
import templateCards from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
const page = document.querySelector('body');
const themeSwitcher = document.querySelector('#theme-switch-toggle');

// saved to local storage and changed theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const getTheme = localStorage.getItem('theme');

// console.log('theme', Theme.DARK);

if (getTheme === Theme.DARK) {
  page.classList.add(Theme.DARK);
  themeSwitcher.checked = true;
} 

function themeHandler() {
  if (themeSwitcher.checked) {
    page.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
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
