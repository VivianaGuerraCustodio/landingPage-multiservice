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
                    <form class="flex column" action="submit">
                        <p>Nombre y Apellido</p> <label id="lnombre"></label>
                        <input id="nombre" type="text" placeholder="Fernando Cerrón">
                        <p>Correo</p> <label id="lmail"></label>
                        <input type="text" id="mail" placeholder="fernando@gmail.com" >
                        <p>Celular</p> <label id="ltel"></label>
                        <input type="text" id="tel" placeholder="982 123 000" >
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

    const validate_nombre = document.getElementById("nombre");
    const validate_mail = document.getElementById("mail");
    const validate_tel = document.getElementById("tel");

    if (validate_nombre, validate_mail, validate_tel) {
        validate_nombre.addEventListener("blur", validateNA);
        validate_mail.addEventListener("blur", validateEmail)
        validate_tel.addEventListener("blur", validateTel)
    }



    return divElement;
}