import { changeView } from './view-controller/router.js';

const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash));
    const btnMenu = document.querySelector('.btn-menu');
    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            const menu_items = document.querySelector('.nav-list-menu');
            menu_items.classList.toggle('show');
        })
    }
};


window.addEventListener('load', init);