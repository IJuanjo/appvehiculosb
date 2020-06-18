<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


require_once "../../models/motocicleta.php";


$marca=isset($_POST['marca']) ? $_POST['marca'] : false;
$linea=isset($_POST['linea']) ? $_POST['linea'] : false;
$modelo=isset($_POST['modelo']) ? $_POST['modelo'] : false;
$cilindraje=isset($_POST['cilindraje']) ? $_POST['cilindraje'] : false; 
$color=isset($_POST['color']) ? $_POST['color'] : false;
$nmotor=isset($_POST['motor']) ? $_POST['motor'] : false; 

$motocicleta=new Motocicleta($marca,$linea,$modelo,$cilindraje,$color,$nmotor);
$confirm=$motocicleta->store();
if($confirm){
    $data=[
     'type'=>'success',
     'mensaje'=>'Se inserto la motocicleta con el numero de motor '.$nmotor,
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
