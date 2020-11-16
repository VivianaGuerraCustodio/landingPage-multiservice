export default () => {
    const error = `
    Pagina no encontrada :) 
    <button id="Back"> Regresar </button>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = error;
    return divElement;
}