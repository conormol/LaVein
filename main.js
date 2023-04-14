const menu = document.getElementById('menu--window');
const menuButton = document.getElementById('header--menu-button');
const windowButton =  document.getElementById('window--menu-button');


function showMenu() {
   menu.style.display = 'block';
   menuButton.style.position = 'fixed';
};

function collapseMenu() {
    menu.style.display = 'none';
    menuButton.style.position= 'static';
 };

menuButton.addEventListener('click', showMenu);
windowButton.addEventListener('click', collapseMenu);
