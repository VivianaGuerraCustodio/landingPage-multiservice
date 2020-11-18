export default () => {
    const landingPage = `
    <section class="section flex" id="Nosotros">
            <img class="img-info" src="../assets/nosotros.jpg" alt="equipo-trabajo">
            <div>
                <p>Nosotros</p>
                <p> Somos una pequeña empresa peruana que ofrece múltiples servicios
                    nos caracterizamos por nuestra responsabilidad , compromiso y
                    eficacia en la resolución de pedidos.
                </p>
            </div>
        </section>

        <section class="section flex" id="medidas-prevencion">
            <div>
                <p>Medidas de prevención</p>
                <p>Sabemos que en tiempos de pandemia, debemos protegernos mucho
                    más que de la manera habitual , es por eso , que hacemos hincapié
                    en las medidas de prevención ordenadas por el Ministerio de Salud.
                </p>
            </div>
            <img class="img-info" src="../assets/prevencion.png" alt="medidas-prevención">
        </section>

        <section class=" flex" id="servicios">
        <p>Servicios</p>
        <div class=" flex servicios">
        <div class="div-cada-servicio"> 
        <img class="icons" src="../assets/fa-solid_tractor.svg" alt="icon-tractor">
        <p>Alquiler de máquinas</p>
        </div>

        <div class="div-cada-servicio">
         <img class="icons" src="../assets/construccion.png" alt="icon-construccion">
        <p>Construcción</p>
        </div>

        <div class="div-cada-servicio"> 
        <img class="icons" src="../assets/mueble.png" alt="icon-muebles">
        <p>Mueblería</p>
        </div>

        <div class="div-cada-servicio"> 
        <img class="icons" src="../assets/gasfiteria.svg" alt="icon-gasfiteria">
        <p>Gasfitería</p>
        </div>
        </div>  
        </section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = landingPage;
    divElement.className = ("contenedor-general")
    return divElement;
}