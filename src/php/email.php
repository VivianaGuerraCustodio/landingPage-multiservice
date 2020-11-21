<?php
 error_reporting(0);
// Declaración de variables del formulario
$nombre = $_POST['Nombre'];
$email = $_POST['Email'];
$telefono = $_POST['Telefono'];
$mensaje = $_POST['Mensaje'];

// Datos del email
$para = 'vivianaguerracustodio@gmail.com';
$titulo = 'S&S Solicitud de presupuesto y contacto';
$header = 'From: ' . $email;
$header = "X-Mailer:PHP/ " .phpversion(). "\r\n";
$header = "Mime-Version:1.0\r\n";
$header = "Content-Type:text/plain";
$msjCorreo = "Nombre: $nombre\n Telefono: $telefono\n E-Mail: $email\n Mensaje:\n $mensaje";

mail($para, $titulo , utf8_decode( $msjCorreo), $header);

echo "mensaje enviado";
/*if ($_POST['submit']) {

    if (mail($para, $titulo, $msjCorreo, $header)) {

        echo "<script language='javascript'>
    alert('Mensaje enviado, muchas gracias por contactar con nosotros.');
    </script>";
    } else {
        echo 'Falló el envio';
    } 
}*/
?>