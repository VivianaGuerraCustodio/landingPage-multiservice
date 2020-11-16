import { components } from '../views/index.js'

const changeView = (route) => {
    const id = route.split('/')[1];
    const container = document.getElementById('contenedor-general');
    container.innerHTML = '';
    switch (route) {
        case '':
        case '#':
        case '#/':
            { return container.appendChild(components.landing()); }
        case '#/galery':
        case '#/contact':
            { return container.appendChild(components[id]()); }
        default:
            return container.appendChild(components.error());
    }
}
export { changeView };