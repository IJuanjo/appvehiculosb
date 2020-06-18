<?php
require_once "../../models/motocicleta.php";
$nmotor = isset($_GET['motor']) ? $_GET['motor'] : false;

$motocicleta = new Motocicleta('', '', '', '', '', $nmotor);
$confirm = $motocicleta->remove();
if ($confirm) {
    $data = [
        'type' => 'success',
        'mensaje' => 'Se elimino la motocicleta con el numero de motor ' . $nmotor
    ];
} else {
    $data = [
        'type' => 'error',
        'mensaje' => 'Hubo un error al eliminar'
    ];
}
echo json_encode($data);
