
import cards from './menu.json';

import templateCards from '../templates/menu.hbs';


const menuRef = document.querySelector('.js-menu');

// markup for menu cards

const createMarkUp = createMenuCardsMarkup(cards);

menuRef.insertAdjacentHTML('beforeend', createMarkUp)

function createMenuCardsMarkup(cards) {
    return cards.map(templateCards).join('')
}