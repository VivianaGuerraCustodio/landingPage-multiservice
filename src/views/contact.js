export default () => {
    const contactView = `
    <section id="contacto" class="margin">
        <div class="flex column div-center">
                <div class="form">
                    <form class="flex column" action="submit">
                        <p>Nombre y Apellido</p>
                        <input type="text" placeholder="Fernando Cerrón" required>
                        <p>Correo</p>
                        <input type="email" id="email-contacto" placeholder="fernando@gmail.com" required>
                        <p>Celular</p>
                        <input type="text" id="celular-contacto" placeholder="982 123 000" required>
                        <p>Motivo :</p>
                        <textarea type="text" placeholder = " Ejemplo : Necesito una proforma " required></textarea>
                        <button class="margin-top-bottom" type="submit"> Enviar </button>
                    </form>
               </div>
                <div class="flex column div-center margin-top-bottom">
                   <div class="column">
                     <p>También puedes encontrarnos por aquí</p>
                   </div>
                  <div class="column margin-top-bottom">
                     <img class="icon-red-social" src="../assets/facebook.svg" alt="facebook">
                     <img class="icon-red-social" src="../assets/whatsapp.svg" alt="whatsapp">
                     <img class="icon-red-social" src="../assets/gmail.png" alt="gmail">
                  </div>
                    
                </div>

        </div>
    </section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = contactView;
    divElement.className = ("contenedor-general")
    return divElement;
}