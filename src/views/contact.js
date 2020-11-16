export default () => {
    const contactView = `
    <section id="contacto" class="margin">
        <div class="flex row">
            <div><iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1399.0646163910806!2d-77.0011516812796!3d-12.18677690865695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1605048663329!5m2!1ses-419!2spe"
                    width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe></div>
            <div class="flex column margin">
                <div class="text-center margin direccion">
                    Dirección: <br>
                    Av. Buenos , Chorrillos<br>
                    Atención:<br>
                    Lunes a Viernes 9:00 -16:00<br>
                    Previa cita <br>
                    Teléfonos: <br>
                    923234400<br>
                    912321123<br>
                </div>
                <div class="flex row margin-top-bottom">
                    <img class="icons" src="../assets/facebook.svg" alt="facebook">
                    <img class="icons" src="../assets/whatsapp.svg" alt="whatsapp">
                    <img class="icons" src="../assets/gmail.png" alt="gmail">
                </div>
            </div>

        </div>
    </section>
    `
    const divElement = document.createElement('div')
    divElement.innerHTML = contactView;
    return divElement;
}