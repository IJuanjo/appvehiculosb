<?php 
require_once "../../config/db.php";
$db=Conexion::conectar();
$query="SELECT*from vehiculos";
$r=$db->query($query);
$data_item = array();
while($v=$r->fetch_object()){
    $data_item['id'] = $v->id;
    $data_item['marca'] = $v->marca;
    $data_item['linea'] = $v->linea;
    $data_item['modelo'] = $v->modelo;
    $data_item['cilindraje'] = $v->cilindraje;
    $data_item['color'] = $v->color;
    $data_item['motor'] = $v->nmotor;
    $items[] = $data_item;
}
echo json_encode($items);
?>