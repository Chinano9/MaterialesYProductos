<!-- Formulario -->

<?php
ini_set('display_errors', 1);
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];
    $asunto = $_POST['asunto'];
    
    mail("materialesyproductos.myp@gmail.com", $asunto, $mensaje, "From: $nombre $apellido $correo");
?>  