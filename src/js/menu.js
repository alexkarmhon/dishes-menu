import menuCardsTpl from '../templates/menu-cards.hbs';
import cards from '../data/menu.json';

const switcher = document.querySelector('#theme-switch-toggle');
const menuLst = document.querySelector('#js-menu');

const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
};

// Колір теми беремо з localStorage по ключу 'theme-color' або за замовчуванням світла
let themeColor = localStorage.getItem('theme-color') || THEME.LIGHT;
document.body.classList.add(themeColor)

// Якщо тема темна, то switcher(checkbox) буде checked
if (themeColor === THEME.DARK) { switcher.checked = true };

function changeTheme() {
  document.body.classList.toggle(THEME.LIGHT);
  document.body.classList.toggle(THEME.DARK);

  saveTheme()
}

function saveTheme() {
  themeColor = themeColor === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  localStorage.setItem('theme-color', themeColor)
}

function drawMarkup(arr) {
  menuLst.innerHTML = menuCardsTpl(arr)
}

drawMarkup(cards);
switcher.addEventListener('change', changeTheme)