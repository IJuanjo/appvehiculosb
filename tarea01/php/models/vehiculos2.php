<?php
require_once "dbw.php"; 
class Vehiculo{
    private $_marca;
    private $_linea;
    private $_modelo;
    private $_cilindraje;
    private $_color;
    private $_nmotor;
    private $_db;
    public function __construct($marca,$linea,$modelo,$cilindraje,$color,$nmotor)
    {   
        $this->_marca=$marca;
        $this->_linea=$linea;
        $this->_modelo=$modelo;
        $this->_cilindraje=$cilindraje;
        $this->_color=$color;
        $this->_nmotor=$nmotor;
        $this->_db=Conexion::conectar();
        
    }

    public function getMarca(){
        return $this->_db->real_escape_string($this->_marca);
    }

    public function setMarca($newmarca){
        $this->_marca=$newmarca;
    }

    public function getLinea(){
        return $this->_db->real_escape_string($this->_linea);
    }

    public function setLinea($newlinea){
        $this->_linea=$newlinea;
    }

    public function getModelo(){
        return $this->_db->real_escape_string($this->_modelo);
    }

    public function setModelo($newmodelo){
        $this->_modelo=$newmodelo;
    }


    public function getCilindraje(){
        return $this->_db->real_escape_string($this->_cilindraje);
    }

    public function setCilindraje($newcilindraje){
        $this->_cilindraje=$newcilindraje;
    }

    public function getColor(){
        return $this->_db->real_escape_string($this->_color);
    }

    public function setColor($newcolor){
        $this->_color=$newcolor;
    }

    public function getNmotor(){
        return $this->_db->real_escape_string($this->_nmotor);
    }

    public function setNmotor($newnmotor){
        $this->_nmotor=$newnmotor;
    }

    public function getDB(){
        return $this->_db;
    }
  
}



?>