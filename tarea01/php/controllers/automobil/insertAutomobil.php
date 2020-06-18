<?php 
require_once "../../models/automovil.php";

$marca=isset($_POST['marca']) ? $_POST['marca'] : false;
$linea=isset($_POST['linea']) ? $_POST['linea'] : false;
$modelo=isset($_POST['modelo']) ? $_POST['modelo'] : false;
$cilindraje=isset($_POST['cilindraje']) ? $_POST['cilindraje'] : false; 
$color=isset($_POST['color']) ? $_POST['color'] : false;
$nmotor=isset($_POST['motor']) ? $_POST['motor'] : false; 

$automobil=new Automovil($marca,$linea,$modelo,$cilindraje,$color,$nmotor);
$confirm=$automobil->store();
if($confirm){
    $data=[
     'type'=>'success',
     'mensaje'=>'Se inserto el Automobil con el numero de motor '.$nmotor,
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
        'mensaje'=>'El numero del motor ya existe'
    ];
}


echo json_encode($data);