<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera los datos del formulario
    $nombreCompleto = $_POST["nombreCompleto"];
    $correoInstitucional = $_POST["correoInstitucional"];
    $opinion = $_POST["opinion"];

    // Configura los detalles del correo electrónico
    $para = "yimmernicolas@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    $asunto = "Nueva opinión del blog por parte de: $nombreCompleto";

    $mensaje = "Nombre: $nombreCompleto\n";
    $mensaje .= "Correo Institucional: $correoInstitucional\n";
    $mensaje .= "Opinión:\n$opinion";

    // Envía el correo electrónico
    if (mail($para, $asunto, $mensaje)) {
        echo "Gracias por enviar tu opinión. Hemos recibido tus comentarios.";
    } else {
        echo "Hubo un problema al enviar tu opinión. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>
