export default () => {
    const galeryViews = `
    
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = galeryViews;
    divElement.className = ("contenedor-general")
    return divElement;
}