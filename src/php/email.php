<!-- Formulario -->
<?php
    if(isset($_POST['enviar'])){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $asunto = $_POST['asunto'];
        $mensaje = $_POST['mensaje'];
        if(!empty($nombre) && !empty($apellido) && !empty($telefono) && !empty($email) && !empty($asunto) && !empty($mensaje)){
            $header = "From: " . $email . "\r\n";
            $header .= "Reply-To: " . $email . "\r\n";
            $header .= "X-Mailer: PHP/" . phpversion();
            $mail = mail($email, $asunto, $mensaje, $header);

            if($mail){
                echo "Mensaje enviado";
            }else{
                echo "Mensaje no enviado";
            }

        }else{
            echo "Por favor, rellene todos los campos";
        }
    }
?>  