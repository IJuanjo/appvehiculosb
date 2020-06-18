<?php 
require_once "../../models/automovil.php";
//$datae = json_decode(file_get_contents('php://input'), true);
$nmotor=isset($_GET['motor']) ? $_GET['motor'] : false; 

$automobil=new Automovil('','','','','',$nmotor);
$confirm=$automobil->remove();
if($confirm){
    $data=[
        'type'=>'success',
        'mensaje'=>'Se elimino el Automobil con el numero de motor '.$nmotor
       ];
   }else{
       $data=[
           'type'=>'error',
           'mensaje'=>'Hubo un error al eliminar'
       ];
   }
   echo json_encode($data);