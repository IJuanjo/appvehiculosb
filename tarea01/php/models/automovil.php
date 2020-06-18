<?php
require_once "vehiculos2.php";
require_once "interface.php";
class Automovil extends Vehiculo implements IVehiculo
{

    public function __construct($marca, $linea, $modelo, $cilindraje, $color, $nmotor)
    {
        parent::__construct($marca, $linea, $modelo, $cilindraje, $color, $nmotor);
    }

    public function store()
    {
        $marca = $this->getMarca();
        $linea = $this->getLinea();
        $modelo = $this->getModelo();
        $cilindraje = $this->getCilindraje();
        $color = $this->getColor();
        $nmotor = $this->getNmotor();
        $sql = "INSERT INTO vehiculos (marca,linea,modelo,cilindraje,color,nmotor)
        SELECT * FROM (SELECT '$marca', '$linea', '$modelo','$cilindraje','$color','$nmotor') AS tmp
        WHERE NOT EXISTS (
            SELECT linea,nmotor FROM vehiculos   WHERE linea='automovil' and nmotor = '$nmotor'
        ) LIMIT 1;";
        $resultadoinsert = $this->getDB()->query($sql);
        $ultimoid = mysqli_insert_id($this->getDB());
        $confirm = false;
        $resultadoinsert ? $confirm = $ultimoid : false;
        return $confirm;
    }

    public function remove()
    {
        $nmotor = $this->getNmotor();
        $sql="DELETE FROM vehiculos where linea='automovil' and nmotor='$nmotor'";
        $resultadoremove = $this->getDB()->query($sql);
        $confirm = false;
        $resultadoremove ? $confirm = true : false;
        return $confirm;
    }
    public function update()
    {
        $marca = $this->getMarca();
        $linea = $this->getLinea();
        $modelo = $this->getModelo();
        $cilindraje = $this->getCilindraje();
        $color = $this->getColor();
        $nmotor = $this->getNmotor();
        $sql="UPDATE vehiculos set marca='$marca',linea='$linea',modelo='$modelo',cilindraje='$cilindraje',color='$color',nmotor='$nmotor' where linea='automovil' and nmotor='$nmotor'";
        $resultadoremove = $this->getDB()->query($sql);
        $confirm = false;
        $resultadoremove ? $confirm = true : false;
        return $confirm;  
    }
   
}
