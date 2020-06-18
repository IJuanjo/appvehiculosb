<?php 
require_once "../../config/db.php";
$db=Conexion::conectar();
$query="SELECT nombre from marcas";
$r=$db->query($query);
$value=[];
while($v=$r->fetch_assoc()){
    $value[]["nombre"]=$v["nombre"];
}
echo json_encode($value);
?>