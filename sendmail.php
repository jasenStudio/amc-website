<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Allow: POST, OPTIONS");

$jsonClient = json_decode(file_get_contents("php://input"));

if (!$jsonClient) {
    exit("No day datos para actualizar");
}

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

$from = "info@amcgestiondelriesgo.com.co";
$to = "info@amcgestiondelriesgo.com.co";
$subject = "Info desde la web";
$message = $jsonClient->message;
$headers = "From:" . $from;
mail($to,$subject,$message, $headers);

$response = array( "ok" => true , "message" => "Mensaje enviado con exito" );
        
header("HTTP/1.1 201 ok");
echo json_encode($response);
exit; 