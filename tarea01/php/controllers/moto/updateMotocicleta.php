<?php
require_once "../../models/motocicleta.php";
//$datae = json_decode(file_get_contents('php://input'), true);
$marca=isset($_POST['marca']) ? $_POST['marca'] : false;
$linea=isset($_POST['linea']) ? $_POST['linea'] : false;
$modelo=isset($_POST['modelo']) ? $_POST['modelo'] : false;
$cilindraje=isset($_POST['cilindraje']) ? $_POST['cilindraje'] : false; 
$color=isset($_POST['color']) ? $_POST['color'] : false;
$nmotor=isset($_POST['motor']) ? $_POST['motor'] : false; 

$automobil=new Motocicleta($marca,$linea,$modelo,$cilindraje,$color,$nmotor);
$confirm=$automobil->update();
if($confirm){
    $data=[
        'type'=>'success',
        'mensaje'=>'Se actualizo la Motocicleta con el numero de motor '.$nmotor,
        'data'=>[
            'id'=>$confirm,
            'marca'=>$marca,
            'linea'=>$linea,
            'modelo'=>$modelo,
            'cilindraje'=>$cilindraje,
            'color'=>$color,
            'motor'=>$nmotor
        ]
       ];
   }else{
       $data=[
           'type'=>'error',
           'mensaje'=>'Hubo un error al eliminar'
       ];
   }
   echo json_encode($data);