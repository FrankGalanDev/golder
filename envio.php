<?php 
echo("llamo");
$destinatario = "goldencarwashchile@gmail.com"; 
$asunto = "Solicitud de info"; 
$nombe ="";
$apellido="";
$message="";
$email="";
$cuerpo = ' 
<html> 
<head> 
   <title>Solicitud de informacion desde la web</title> 
</head> 
<body> 
<h1>Hola !</h1> 
<p> 
<b> '. $_POST['message' ].'
</p> 
</body> 
</html> 
'; 

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

//dirección del remitente 
$headers .= "From: ". $_POST['email' ]." \r\n"; 

if(mail($destinatario,$asunto,$cuerpo,$headers))
   {echo 'su correo ha sido enviado';
}
?>

