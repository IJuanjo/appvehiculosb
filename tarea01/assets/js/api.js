export class Api {
    /****Get Marcas******/
    async getMarcas() {
        const marcas = await fetch('../tarea01/php/controllers/helpers/getMarcas.php');
        const result = await marcas.json();
        return result;
    }
    /****Get Vehiculos** */
    async getVehiculos() {
        const vehiculos = await fetch('../tarea01/php/controllers/helpers/getVehiculos.php');
        const resultv = await vehiculos.json();
        return resultv;
    }

    /***********Vehiculo CRUD *****************/

    /*-----------Insert Automobil------------------------*/
    async insertAutomobil(datamobil) {
        const insertMoto = await fetch("../tarea01/php/controllers/automobil/insertAutomobil.php",
            {
                method: "POST",
                body: datamobil,
            }
        );
        const jsonMoto = await insertMoto.json();
        return jsonMoto;
    }

    async removeAutomobil(nmotormobil) {
        const removeMoto = await fetch("../tarea01/php/controllers/automobil/removeAutomovil.php"+'/'+nmotormobil,
            {
                method: "delete",
            }
        );
        const jsonMoto = await removeMoto.json();
        return jsonMoto;
    }

    async updateAutomobil(dmobil) {
        const updateMoto = await fetch("../tarea01/php/controllers/automobil/updateAutomovil.php",
            {
                method: "POST",
                body: dmobil,
            }
        );
        const jsonMoto = await updateMoto.json();
        return jsonMoto;
    }


     /*-----------Insert Moto------------------------*/
     async insertMoto(data) {
        const insertmoto = await fetch("../tarea01/php/controllers/moto/insertMotocicleta.php",
            {
                method: "POST",
                body: data,
            }
        );
        const jsonmoto = await insertmoto.json();
        return jsonmoto;
    }

    async removeMoto(nmotormotocicleta) {
        const removemotocicleta = await fetch("../tarea01/php/controllers/moto/removeMotocicleta.php"+'/'+nmotormotocicleta,
            {
                method: "delete"
            }
        );
        const jsonmotocicleta = await removemotocicleta.json();
        return jsonmotocicleta;
    }
    async updateMoto(nmotormobil) {
        const updateMoto = await fetch("../tarea01/php/controllers/moto/updateMotocicleta.php",
            {
                method: "POST",
                body: nmotormobil,
            }
        );
        const jsonMoto = await updateMoto.json();
        return jsonMoto;
    }

}