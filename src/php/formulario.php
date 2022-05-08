<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style.css">
    <link rel="stylesheet" href="../styles/style-formulario.css">
    <title>Formulario</title>
</head>

<body>
    <form action="" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" placeholder="Nombre">
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" placeholder="Apellido">
        <label for="telefono">Telefono</label>
        <input type="text" name="telefono" placeholder="Telefono">
        <label for="correo">Email</label>
        <input type="text" name="correo" placeholder="Correo">
        <label for="asunto">Asunto</label>
        <input type="text" name="asunto" placeholder="Asunto">
        <label for="mensaje">Mensaje</label>
        <textarea name="mensaje" placeholder="Mensaje"></textarea>
        <input type="submit" value="Enviar" name="enviar">
    </form>
    <?php
    include('email.php');
    ?>
</body>

</html>