<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicacion Vehiculos</title>

<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon.ico">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
</head>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap">
<link rel="stylesheet" href="assets/lib/sweetalert-master/dist/sweetalert.css">
<body>

    <div class="contenedor">
        <div class="formulario">
            <div class="contenido">
                <h1>Registre su Vehiculo</h1>
                <form id="formulario">
                    <div class="inputsOftwo">
                        <div class="input_group">
                            <label for="marca">Marca:</label>
                            <select name="marca" id="marca">
                                <option value="" selected disabled hidden>Seleccion una marca</option>
                            </select>
                        </div>

                        <div class="input_group">
                            <label for="linea">Linea:</label>
                            <select name="linea" id="linea">
                                <option value="" selected disabled hidden>Escoje una linea</option>
                                <option value="automovil">Automovil</option>
                                <option value="motocicleta">Motocicleta</option>
                            </select>
                        </div>
                    </div>

                    <div class="inputsOftwo">
                        <div class="input_group">
                            <label for="modelo">Modelo:</label>
                            <select name="modelo" id="modelo">
                                <option value="" selected disabled hidden>Seleccion el modelo</option>
                            </select>
                        </div>

                        <div class="input_group">
                            <label for="cilindraje">Cilindraje:</label>
                            <input type="text" name="cilindraje" id="cilindraje">
                        </div>
                    </div>


                    <div class="inputsOftwo">
                        <div class="input_group">
                            <label for="color">Color:</label>
                            <select name="color" id="color">
                                <option value="" selected disabled hidden>Seleccion el color</option>
                                <option value="blanco">Blanco</option>
                                <option value="negro">Negro</option>
                                <option value="azul">Azul</option>
                                <option value="gris">Gris</option>
                                <option value="rojo">Rojo</option>
                                <option value="verde-oliva">Verde Oliva</option>
                            </select>
                        </div>
                        <div class="input_group">
                            <label for="motor">Numero de Motor:</label>
                            <input type="text" name="motor" id="motor">
                        </div>
                    </div>

                    <input type="submit"  class="button_cart" value="Enviar">
                    <input type="submit" id="" class="button-update" update="false" value="Actualizar">
                </form>
            </div>

        </div>

        <div class="contenedor">
            <div class="search">
            <input type="text" id="search" placeholder="buscar por numero de motor">
            </div>
        </div>






        <table id="table" >
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Linea</th>
                    <th>Modelo</th>
                    <th>Cilindraje</th>
                    <th>Color</th>
                    <th>N° de Motor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
        <div id="mensajevoid"></div>



    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="assets/lib/sweetalert-master/dist/sweetalert.min.js"></script>
    <script src="assets/js/app.js" type="module"></script>
</body>

</html>