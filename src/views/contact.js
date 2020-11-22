import {
    validateTel,
    validateEmail,
    validateNA
} from '../validator/validator.js'

export default () => {
    const contactView = `
    <section id="contacto" class="margin">
        <div class="flex column div-center">
                <div class="form">
                    <form class="flex column" method="POST" action="https://formspree.io/f/mpzolvje">
                        <p>Nombre y Apellido</p> <label class="text-danger" id="lnombre"></label>
                        <input id="nombre" name="Nombre" type="text" required placeholder="Fernando Cerrón">
                        <p>Correo</p> <label class="text-danger" id="lmail"></label>
                        <input type="text" name ="Email" id="mail" required placeholder="fernando@gmail.com" >
                        <p>Celular</p> <label class="text-danger" id="ltel"></label>
                        <input name="Telefono" type="text" id="tel" required placeholder="982 123 000" >
                        <p>Motivo :</p>
                        <textarea name="Mensaje" type="text" placeholder = " Ejemplo : Necesito una proforma " required></textarea>
                        <button class="margin-top-bottom" required type="submit"> Enviar </button>
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

    const validate_nombre = divElement.querySelector("#nombre");
    const validate_mail = divElement.querySelector("#mail");
    const validate_tel = divElement.querySelector("#tel");

    if (validate_nombre, validate_mail, validate_tel) {
        validate_nombre.addEventListener("blur", validateNA);
        validate_mail.addEventListener("blur", validateEmail)
        validate_tel.addEventListener("blur", validateTel)

    }

    return divElement;
}