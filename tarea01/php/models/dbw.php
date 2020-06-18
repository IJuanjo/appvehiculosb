<?php 


class Conexion{


    public static function conectar(){
        $connect=mysqli_connect('localhost','root','','bdappmovil');
        $connect->query("SET NAMES 'utf-8'");
        return $connect;

    }
}

?>