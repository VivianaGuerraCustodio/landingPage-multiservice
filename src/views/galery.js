import data from '../data/data.js';
export default () => {

    const galeryViews = `
    <div class="galery">
       <div  id="div_img">
    
       </div>
    </div>
    
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = galeryViews;
    divElement.className = ("contenedor-general")
    const divs_img = divElement.querySelector("#div_img");

    const data_json = data.data;
    const imagenes_data = data_json["imagenes-galeria"];
    imagenes_data.forEach(el => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        div.className = "container_img";
        img.className = "galery_img";
        img.src = el;
        div.appendChild(img);
        divs_img.appendChild(div);
        //console.log(el);
    })

    return divElement;
}