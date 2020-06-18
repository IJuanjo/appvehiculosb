import { Api } from './api.js'
import { Interfaze } from './ui.js'

class UI {
    constructor() {
        this.init();
        this.DOM();

    }
    /****Ejecutar metodos** */
    DOM() {
        const formulario = document.querySelector('#formulario');
        const inputSearch = document.querySelector('#search');
        formulario.addEventListener("submit", this.sendForm);
        let inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(i => i.addEventListener('blur', this.validarCampo))
        document.addEventListener('DOMContentLoaded', this.cargarTabla);
        inputSearch.addEventListener('keyup', this.search);

    }
    /***Inicalizar los metodos */
    init() {
        const selectMarca = document.querySelector('#marca');
        let api = new Api();
        api.getMarcas().then(x => {
            x.forEach(m => {
                let { nombre } = m;
                const option = document.createElement("option");
                let value = nombre.toLowerCase();
                option.value = value;
                option.text = nombre
                selectMarca.appendChild(option);
            });

        })

        const selectmodelo = document.querySelector("#modelo");
        for (let index = 1990; index <= 2015; index++) {
            const optionmodelo = document.createElement("option");
            optionmodelo.value = index;
            optionmodelo.text = index;
            selectmodelo.appendChild(optionmodelo);

        }
    }
    /*****Cargar la tabla con los datos */
    cargarTabla() {
        const tbody = document.querySelector('#tbody');
        let apiv = new Api;
        let interfaze = new Interfaze;
        var html = '';
        var inputmarca = document.querySelector('#marca');
        var inputlinea = document.querySelector('#linea');
        var inputmodelo = document.querySelector('#modelo');
        var inputcilindraje = document.querySelector('#cilindraje');
        var inputcolor = document.querySelector('#color');
        var inputnmotor = document.querySelector('#motor');



        apiv.getVehiculos().then(v => {

            v.forEach(vh => {
                html += interfaze.printhtmltable(vh);
            })
            tbody.innerHTML = html;
            const buttons = document.querySelectorAll('#buttons');
            buttons.forEach(b => {
                b.addEventListener("click", (e) => {
                    let data = e.target.parentElement.parentElement;
                    let nthmarca = data.querySelector('td:nth-child(1)');
                    let nth = data.querySelector('td:nth-child(2)');
                    let ntmodelo = data.querySelector('td:nth-child(3)');
                    let ntcilindraje = data.querySelector('td:nth-child(4)');
                    let ntcolor = data.querySelector('td:nth-child(5)');
                    let nthmotor = data.querySelector('td:nth-child(6)');
                    var buttonadd = inputmarca.parentElement.parentElement.parentElement.querySelector('.button_cart');
                    var buttonupdate = inputmarca.parentElement.parentElement.parentElement.querySelector('.button-update');

                    if (e.target.classList.contains('update')) {
                        if (nth.textContent == 'motocicleta') {
                            buttonadd.style.display = "none";
                            buttonupdate.style.display = "block";
                            buttonupdate.setAttribute('update', 'true');
                            inputmarca.value = nthmarca.textContent;
                            inputlinea.value = nth.textContent;
                            inputmodelo.value = ntmodelo.textContent;
                            inputcilindraje.value = ntcilindraje.textContent;
                            inputcolor.value = ntcolor.textContent;
                            inputnmotor.value = nthmotor.textContent;
                            inputnmotor.disabled = true;

                        } else {
                            buttonadd.style.display = "none";
                            buttonupdate.style.display = "block"
                            buttonupdate.setAttribute('update', 'true');
                            inputmarca.value = nthmarca.textContent;
                            inputlinea.value = nth.textContent;
                            inputmodelo.value = ntmodelo.textContent;
                            inputcilindraje.value = ntcilindraje.textContent;
                            inputcolor.value = ntcolor.textContent;
                            inputnmotor.value = nthmotor.textContent;
                            inputnmotor.disabled = true;
                        }
                    } else if (e.target.classList.contains('remove')) {
                        if (nth.textContent == 'motocicleta') {

                            jQuery(document).ready($ => {
                                swal({
                                    title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                    text: "No podrás deshacer esto!",
                                    type: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "Si, borrarlo",
                                    closeOnConfirm: false,
                                    showLoaderOnConfirm: true,
                                    html: true
                                }, function (isConfirm) {


                                    if (isConfirm) {
                                        apiv.removeMoto('?motor=' + nthmotor.textContent).then(m => {


                                            nthmotor.parentElement.remove();
                                            buttonupdate.setAttribute('update', 'false');
                                            buttonupdate.style.display = "none"
                                            buttonadd.style.display = "block";
                                            inputnmotor.disabled = false;
                                            inputmarca.value = '';
                                            inputlinea.value = '';
                                            inputmodelo.value = '';
                                            inputcilindraje.value = '';
                                            inputcolor.value = '';
                                            inputnmotor.value = '';

                                            setTimeout(function () {

                                                swal({
                                                    title: "Borrado",
                                                    text: "El Autmovil ha sido eliminado",
                                                    type: "success",
                                                    timer: 1500
                                                });
                                                nthmotor.parentElement.remove();

                                            }, 100);

                                        }).catch(err => console.log("Hubo un error " + err));

                                    } else {

                                    }



                                });


                            })









                        } else {



                            jQuery(document).ready($ => {
                                swal({
                                    title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                    text: "No podrás deshacer esto!",
                                    type: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText: "Si, borrarlo",
                                    closeOnConfirm: false,
                                    showLoaderOnConfirm: true,
                                    html: true
                                }, function (isConfirm) {



                                    if (isConfirm) {

                                        apiv.removeAutomobil('?motor=' + nthmotor.textContent).then(x => {
                                            nthmotor.parentElement.remove()
                                            buttonupdate.setAttribute('update', 'false');
                                            buttonadd.style.display = "block";
                                            buttonupdate.style.display = "none"
                                            inputmarca.value = '';
                                            inputlinea.value = '';
                                            inputmodelo.value = '';
                                            inputcilindraje.value = '';
                                            inputcolor.value = '';
                                            inputnmotor.value = '';
                                            inputnmotor.disabled = false;

                                            setTimeout(function () {

                                                swal({
                                                    title: "Borrado",
                                                    text: "El Autmovil ha sido eliminado",
                                                    type: "success",
                                                    timer: 1500
                                                });
                                                nthmotor.parentElement.remove();

                                            }, 100);




                                        }).catch(err => console.log("Hubo un error " + err));

                                    } else {

                                    }



                                });


                            })







                        }
                    }
                })
            })
        }).catch(err => {
            let table = document.querySelector('#mensajevoid');
            const p = document.createElement('p');
            p.innerHTML = "No hay datos que mostrar....";
            table.appendChild(p)

        });


    }
    /*****Envio al formulario */

    sendForm(e) {
        e.preventDefault();
        let marca = e.target.querySelector("#marca");
        let modelo = e.target.querySelector("#modelo");
        let linea = e.target.querySelector("#linea");
        let cilindraje = e.target.querySelector("#cilindraje");
        let color = e.target.querySelector("#color");
        let nmotor = e.target.querySelector("#motor");
        var div = document.createElement('div');
        div.classList.add('mensaje');
        div.style.background = "red";
        div.style.color = "#fff";
        div.style.padding = "5px";
        div.style.marginBottom = "15px";
        let rgx = /^([0-9])*$/;
        let interfaze = new Interfaze;
        var formDT = new FormData(this);

        if (marca.value == '' || modelo.value == '' || linea.value == '' || cilindraje.value == '' || color.value == '' || nmotor.value == '') {

            div.innerHTML = "Los campos no pueden estar vacios";
            let mnsj = document.querySelector('.mensaje');
            if (mnsj == null) {

                e.target.insertBefore(div, document.querySelector('.inputsOftwo'));
                setTimeout(() => {
                    document.querySelector('.mensaje').remove();

                }, 3000);
            }

        } else if (rgx.test(nmotor.value)) {

            let apif = new Api();
            var tbodyv = document.querySelector('#tbody');
            var htmle = '';
            var inputmarca = document.querySelector('#marca');
            var inputlinea = document.querySelector('#linea');
            var inputmodelo = document.querySelector('#modelo');
            var inputcilindraje = document.querySelector('#cilindraje');
            var inputcolor = document.querySelector('#color');
            var inputnmotor = document.querySelector('#motor');
            const buttonUpdate = this.querySelector('.button-update');
            const buttonInsert = this.querySelector('.button_cart');
            var update = buttonUpdate.getAttribute('update');
            let formU = new FormData();



            if (linea.value == 'automovil') {
                if (update == 'true') {

                    formU.append("marca", marca.value);
                    formU.append("linea", linea.value);
                    formU.append("modelo", modelo.value);
                    formU.append("cilindraje", cilindraje.value);
                    formU.append("color", color.value);
                    formU.append("motor", motor.value);

                    apif.updateAutomobil(formU).then(up => {
                        ////Cocolar el codigo al actualizar

                        jQuery(document).ready($ => {
                            swal({
                                title: 'Actualizado',
                                text: 'El autmovil ha sido actualizado correctamente!',
                                type: 'success',
                                timer: 2000
                            });
                        })


                        const { id, marca, linea, modelo, cilindraje, color, motor } = up.data;
                        const tr = document.querySelectorAll('tr[data-table="' + up.data.motor + '"]');
                        tr.forEach(t=>{
                            if (t.getAttribute('linea') == 'automovil') {
                                let nthmarca = t.querySelector('td:nth-child(1)');
                                let nthlinea = t.querySelector('td:nth-child(2)');
                                let ntmodelo = t.querySelector('td:nth-child(3)');
                                let ntcilindraje = t.querySelector('td:nth-child(4)');
                                let ntcolor = t.querySelector('td:nth-child(5)');
                                let nthmotor = t.querySelector('td:nth-child(6)');
                                nthmarca.textContent = marca;
                                nthlinea.textContent = linea;
                                ntmodelo.textContent = modelo;
                                ntcilindraje.textContent = cilindraje;
                                ntcolor.textContent = color;
                                nthmotor.textContent = motor;
                            }    
                        })
 


                    })
                    buttonUpdate.setAttribute('update', 'false')
                    inputnmotor.disabled = false;
                    buttonUpdate.style.display = "none";
                    buttonInsert.style.display = "block";
                } else {


                    apif.insertAutomobil(formDT).then(y => {
                        if (y.type == 'success') {

                            jQuery(document).ready($ => {
                                swal({
                                    title: 'Agregado',
                                    text: 'El automobil ha sido agregado correctamente!',
                                    type: 'success',
                                    timer: 2000
                                });
                            })


                            const mensajevoid = document.querySelector('#mensajevoid');
                            if (mensajevoid !== null) {
                                mensajevoid.remove();
                            }
                            //y.data

                            htmle = interfaze.printhtmltable(y.data);

                            tbodyv.innerHTML += htmle;

                            const buttons = document.querySelectorAll('#buttons');
                            buttons.forEach(b => {
                                b.addEventListener("click", (e) => {

                                    let data = e.target.parentElement.parentElement;
                                    let nthmarca = data.querySelector('td:nth-child(1)');
                                    let nth = data.querySelector('td:nth-child(2)');
                                    let ntmodelo = data.querySelector('td:nth-child(3)');
                                    let ntcilindraje = data.querySelector('td:nth-child(4)');
                                    let ntcolor = data.querySelector('td:nth-child(5)');
                                    let nthmotor = data.querySelector('td:nth-child(6)');
                                    var buttonadd = this.querySelector('.button_cart');
                                    var buttonupdate = this.querySelector('.button-update');

                                    if (e.target.classList.contains('update')) {
                                        if (nth.textContent == 'motocicleta') {

                                            buttonadd.style.display = "none";
                                            buttonupdate.style.display = "block"
                                            buttonupdate.setAttribute('update', 'true');
                                            inputmarca.value = nthmarca.textContent;
                                            inputlinea.value = nth.textContent;
                                            inputmodelo.value = ntmodelo.textContent;
                                            inputcilindraje.value = ntcilindraje.textContent;
                                            inputcolor.value = ntcolor.textContent;
                                            inputnmotor.value = nthmotor.textContent;
                                            inputnmotor.disabled = true;
                                        } else {
                                            buttonadd.style.display = "none";
                                            buttonupdate.style.display = "block"
                                            buttonupdate.setAttribute('update', 'true');
                                            inputmarca.value = nthmarca.textContent;
                                            inputlinea.value = nth.textContent;
                                            inputmodelo.value = ntmodelo.textContent;
                                            inputcilindraje.value = ntcilindraje.textContent;
                                            inputcolor.value = ntcolor.textContent;
                                            inputnmotor.value = nthmotor.textContent;
                                            inputnmotor.disabled = true;
                                        }
                                    } else if (e.target.classList.contains('remove')) {
                                        if (nth.textContent == 'motocicleta') {

                                            jQuery(document).ready($ => {
                                                swal({
                                                    title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                                    text: "No podrás deshacer esto!",
                                                    type: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#DD6B55",
                                                    confirmButtonText: "Si, borrarlo",
                                                    closeOnConfirm: false,
                                                    showLoaderOnConfirm: true,
                                                    html: true
                                                }, function (isConfirm) {


                                                    if (isConfirm) {
                                                        apif.removeMoto('?motor=' + nthmotor.textContent).then(m => {

                                                            inputmarca.value = '';
                                                            inputlinea.value = '';
                                                            inputmodelo.value = '';
                                                            inputcilindraje.value = '';
                                                            inputcolor.value = '';
                                                            inputnmotor.value = '';
                                                            buttonupdate.setAttribute('update', 'false');

                                                            inputnmotor.disabled = false;
                                                            buttonadd.style.display = "block";
                                                            buttonupdate.style.display = "none"
                                                            setTimeout(function () {

                                                                swal({
                                                                    title: "Borrado",
                                                                    text: "El Autmovil ha sido eliminado",
                                                                    type: "success",
                                                                    timer: 1500
                                                                });
                                                                nthmotor.parentElement.remove();

                                                            }, 100);




                                                        }).catch(err => console.log("Hubo un error " + err));


                                                    } else {

                                                    }



                                                });


                                            })






                                        } else {
                                            jQuery(document).ready($ => {
                                                swal({
                                                    title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                                    text: "No podrás deshacer esto!",
                                                    type: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#DD6B55",
                                                    confirmButtonText: "Si, borrarlo",
                                                    closeOnConfirm: false,
                                                    showLoaderOnConfirm: true,
                                                    html: true
                                                }, function (isConfirm) {
                                                    if (isConfirm) {
                                                        apif.removeAutomobil('?motor=' + nthmotor.textContent).then(x => {

                                                            inputmarca.value = '';
                                                            inputlinea.value = '';
                                                            inputmodelo.value = '';
                                                            inputcilindraje.value = '';
                                                            inputcolor.value = '';
                                                            inputnmotor.value = '';
                                                            inputnmotor.disabled = false;
                                                            buttonupdate.setAttribute('update', 'false');

                                                            buttonadd.style.display = "block";
                                                            buttonupdate.style.display = "none"


                                                            setTimeout(function () {

                                                                swal({
                                                                    title: "Borrado",
                                                                    text: "El Autmovil ha sido eliminado",
                                                                    type: "success",
                                                                    timer: 1500
                                                                });
                                                                let tr = nthmotor.parentElement
                                                                tr.remove();
                                                            }, 100);




                                                        }).catch(err => {

                                                            swal({
                                                                title: 'Error',
                                                                text: 'Hubo un error al guardar los datos, por favor intenta más tarde',
                                                                type: 'error',
                                                                timer: 2000
                                                            });

                                                            console.log("Hubo un error " + err)

                                                        });
                                                    }


                                                });

                                            })







                                        }
                                    }
                                })
                            })

                        } else {
                            swal({
                                title: 'Error',
                                text: y.mensaje,
                                type: 'error',
                                timer: 2000
                            });

                        }






                    }).catch(err=>console.log(err));
                }


                /*  
                */
            } else if (linea.value == 'motocicleta') {


                if (update == 'true') {

                    let formU = new FormData();
                    formU.append("marca", marca.value);
                    formU.append("linea", linea.value);
                    formU.append("modelo", modelo.value);
                    formU.append("cilindraje", cilindraje.value);
                    formU.append("color", color.value);
                    formU.append("motor", motor.value);

                    apif.updateMoto(formU).then(up => {
                        ////Cocolar el codigo al actualizar

                        jQuery(document).ready($ => {
                            swal({
                                title: 'Actualizado',
                                text: 'la Motocicleta ha sido actualizado correctamente!',
                                type: 'success',
                                timer: 2000
                            });
                        })

                        const { id, marca, linea, modelo, cilindraje, color, motor } = up.data;
                        const tr = document.querySelectorAll('tr[data-table="' + up.data.motor + '"]');
                        tr.forEach(t=>{
                            if (t.getAttribute('linea') == 'motocicleta') {
                                let nthmarca = t.querySelector('td:nth-child(1)');
                                let nthlinea = t.querySelector('td:nth-child(2)');
                                let ntmodelo = t.querySelector('td:nth-child(3)');
                                let ntcilindraje = t.querySelector('td:nth-child(4)');
                                let ntcolor = t.querySelector('td:nth-child(5)');
                                let nthmotor = t.querySelector('td:nth-child(6)');
                                nthmarca.textContent = marca;
                                nthlinea.textContent = linea;
                                ntmodelo.textContent = modelo;
                                ntcilindraje.textContent = cilindraje;
                                ntcolor.textContent = color;
                                nthmotor.textContent = motor;
                            }    
                        })


                    })

                    buttonUpdate.setAttribute('update', 'false');

                    inputnmotor.disabled = false;
                    buttonUpdate.style.display = "none";
                    buttonInsert.style.display = "block";


                } else {
                    apif.insertMoto(formDT).then(y => {
                        if (y.type == 'success') {

                            jQuery(document).ready($ => {
                                swal({
                                    title: 'Agregado',
                                    text: 'El automobil ha sido agregado correctamente!',
                                    type: 'success',
                                    timer: 2000
                                });
                            })


                            const mensajevoid = document.querySelector('#mensajevoid');
                            if (mensajevoid !== null) {
                                mensajevoid.remove();
                            }
                            //y.data

                            htmle = interfaze.printhtmltable(y.data);

                            tbodyv.innerHTML += htmle;

                            const buttons = document.querySelectorAll('#buttons');
                            buttons.forEach(b => {
                                b.addEventListener("click", (e) => {

                                    let data = e.target.parentElement.parentElement;
                                    let nthmarca = data.querySelector('td:nth-child(1)');
                                    let nth = data.querySelector('td:nth-child(2)');
                                    let ntmodelo = data.querySelector('td:nth-child(3)');
                                    let ntcilindraje = data.querySelector('td:nth-child(4)');
                                    let ntcolor = data.querySelector('td:nth-child(5)');
                                    let nthmotor = data.querySelector('td:nth-child(6)');
                                    var buttonadd = this.querySelector('.button_cart');
                                    var buttonupdate = this.querySelector('.button-update');

                                    if (e.target.classList.contains('update')) {
                                        if (nth.textContent == 'motocicleta') {

                                            buttonadd.style.display = "none";
                                            buttonupdate.style.display = "block"
                                            buttonupdate.setAttribute('update', 'true');
                                            inputmarca.value = nthmarca.textContent;
                                            inputlinea.value = nth.textContent;
                                            inputmodelo.value = ntmodelo.textContent;
                                            inputcilindraje.value = ntcilindraje.textContent;
                                            inputcolor.value = ntcolor.textContent;
                                            inputnmotor.value = nthmotor.textContent;
                                            inputnmotor.disabled = true;
                                        } else {
                                            buttonadd.style.display = "none";
                                            buttonupdate.style.display = "block"
                                            buttonupdate.setAttribute('update', 'true');
                                            inputmarca.value = nthmarca.textContent;
                                            inputlinea.value = nth.textContent;
                                            inputmodelo.value = ntmodelo.textContent;
                                            inputcilindraje.value = ntcilindraje.textContent;
                                            inputcolor.value = ntcolor.textContent;
                                            inputnmotor.value = nthmotor.textContent;
                                            inputnmotor.disabled = true;
                                        }
                                    } else if (e.target.classList.contains('remove')) {
                                        if (nth.textContent == 'motocicleta') {

                                            jQuery(document).ready($ => {
                                                swal({
                                                    title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                                    text: "No podrás deshacer esto!",
                                                    type: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#DD6B55",
                                                    confirmButtonText: "Si, borrarlo",
                                                    closeOnConfirm: false,
                                                    showLoaderOnConfirm: true,
                                                    html: true
                                                }, function (isConfirm) {


                                                    if (isConfirm) {
                                                        apif.removeMoto('?motor=' + nthmotor.textContent).then(m => {

                                                            inputmarca.value = '';
                                                            inputlinea.value = '';
                                                            inputmodelo.value = '';
                                                            inputcilindraje.value = '';
                                                            inputcolor.value = '';
                                                            inputnmotor.value = '';
                                                            buttonupdate.setAttribute('update', 'false');

                                                            inputnmotor.disabled = false;
                                                            buttonadd.style.display = "block";
                                                            buttonupdate.style.display = "none"
                                                            setTimeout(function () {

                                                                swal({
                                                                    title: "Borrado",
                                                                    text: "El Autmovil ha sido eliminado",
                                                                    type: "success",
                                                                    timer: 1500
                                                                });
                                                                nthmotor.parentElement.remove();

                                                            }, 100);




                                                        }).catch(err => console.log("Hubo un error " + err));


                                                    } else {

                                                    }



                                                });


                                            })






                                        } else {
                                            jQuery(document).ready($ => {
                                                swal({
                                                    title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                                    text: "No podrás deshacer esto!",
                                                    type: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#DD6B55",
                                                    confirmButtonText: "Si, borrarlo",
                                                    closeOnConfirm: false,
                                                    showLoaderOnConfirm: true,
                                                    html: true
                                                }, function (isConfirm) {
                                                    if (isConfirm) {
                                                        apif.removeAutomobil('?motor=' + nthmotor.textContent).then(x => {

                                                            inputmarca.value = '';
                                                            inputlinea.value = '';
                                                            inputmodelo.value = '';
                                                            inputcilindraje.value = '';
                                                            inputcolor.value = '';
                                                            inputnmotor.value = '';
                                                            inputnmotor.disabled = false;
                                                            buttonupdate.setAttribute('update', 'false');

                                                            buttonadd.style.display = "block";
                                                            buttonupdate.style.display = "none"


                                                            setTimeout(function () {

                                                                swal({
                                                                    title: "Borrado",
                                                                    text: "El Autmovil ha sido eliminado",
                                                                    type: "success",
                                                                    timer: 1500
                                                                });
                                                                let tr = nthmotor.parentElement
                                                                tr.remove();
                                                            }, 100);




                                                        }).catch(err => {

                                                            swal({
                                                                title: 'Error',
                                                                text: 'Hubo un error al guardar los datos, por favor intenta más tarde',
                                                                type: 'error',
                                                                timer: 2000
                                                            });

                                                            console.log("Hubo un error " + err)

                                                        });
                                                    }


                                                });

                                            })







                                        }
                                    }
                                })
                            })

                        } else {
                            swal({
                                title: 'Error',
                                text: y.mensaje,
                                type: 'error',
                                timer: 2000
                            });

                        }
                    });
                }


            }
            marca.value = '';
            modelo.value = '';
            linea.value = '';
            cilindraje.value = '';
            color.value = '';
            nmotor.value = '';


        } else {
            div.innerHTML = "El campo motor debe ser numerico";
            let mnsj = document.querySelector('.mensaje');
            if (mnsj == null) {

                e.target.insertBefore(div, document.querySelector('.inputsOftwo'));
                setTimeout(() => {
                    document.querySelector('.mensaje').remove();

                }, 3000);
            }
        }
    }
    /****Validar campos***** */
    validarCampo() {

        if (this.value.length > 0) {
            this.style.borderColor = "green";
        } else {
            this.style.borderColor = "red";

        }
    }
    search(e) {
        var valor = e.target.value

        let apisearch = new Api;
        let interfaze = new Interfaze;
        var htmles = '';
        var tbodys = document.querySelector('tbody');
        tbodys.innerHTML = '';
        apisearch.getVehiculos().then(s => {

            s.forEach(x => {
                const { id, marca, linea, modelo, cilindraje, color, motor } = x;
                let a=motor.indexOf(valor)
                if(a!=-1){
                    htmles = interfaze.printhtmltable(x);
                    tbodys.innerHTML += htmles;

                    const buttons = document.querySelectorAll('#buttons');
                    buttons.forEach(b => {
                        b.addEventListener("click", (e) => {


                            var inputmarca = document.querySelector('#marca');
                            var inputlinea = document.querySelector('#linea');
                            var inputmodelo = document.querySelector('#modelo');
                            var inputcilindraje = document.querySelector('#cilindraje');
                            var inputcolor = document.querySelector('#color');
                            var inputnmotor = document.querySelector('#motor');




                            let data = e.target.parentElement.parentElement;
                            let nthmarca = data.querySelector('td:nth-child(1)');
                            let nth = data.querySelector('td:nth-child(2)');
                            let ntmodelo = data.querySelector('td:nth-child(3)');
                            let ntcilindraje = data.querySelector('td:nth-child(4)');
                            let ntcolor = data.querySelector('td:nth-child(5)');
                            let nthmotor = data.querySelector('td:nth-child(6)');
                            var buttonadd = document.querySelector('.button_cart');
                            var buttonupdate = document.querySelector('.button-update');
                            if (e.target.classList.contains('update')) {
                                if (nth.textContent == 'motocicleta') {

                                    buttonadd.style.display = "none";
                                    buttonupdate.style.display = "block"
                                    inputmarca.value = nthmarca.textContent;
                                    buttonupdate.setAttribute('update', 'true');
                                    inputlinea.value = nth.textContent;
                                    inputmodelo.value = ntmodelo.textContent;
                                    inputcilindraje.value = ntcilindraje.textContent;
                                    inputcolor.value = ntcolor.textContent;
                                    inputnmotor.value = nthmotor.textContent;
                                    inputnmotor.disabled = true;

                                } else {
                                    buttonadd.style.display = "none";
                                    buttonupdate.style.display = "block"
                                    buttonupdate.setAttribute('update', 'true');
                                    inputmarca.value = nthmarca.textContent;
                                    inputlinea.value = nth.textContent;
                                    inputmodelo.value = ntmodelo.textContent;
                                    inputcilindraje.value = ntcilindraje.textContent;
                                    inputcolor.value = ntcolor.textContent;
                                    inputnmotor.value = nthmotor.textContent;
                                    inputnmotor.disabled = true;
                                    console.log("actualizando dato de la linea de automovil...")
                                }
                            } else if (e.target.classList.contains('remove')) {
                                if (nth.textContent == 'motocicleta') {

                                    jQuery(document).ready($ => {
                                        swal({
                                            title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                            text: "No podrás deshacer esto!",
                                            type: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#DD6B55",
                                            confirmButtonText: "Si, borrarlo",
                                            closeOnConfirm: false,
                                            showLoaderOnConfirm: true,
                                            html: true
                                        }, function (isConfirm) {
                                            if (isConfirm) {
                                                apisearch.removeMoto('?motor=' + nthmotor.textContent).then(m => {
                                                    inputmarca.value = '';
                                                    inputlinea.value = '';
                                                    inputmodelo.value = '';
                                                    inputcilindraje.value = '';
                                                    inputcolor.value = '';
                                                    inputnmotor.value = '';
                                                    inputnmotor.disabled = false;
                                                    buttonupdate.setAttribute('update', 'false');

                                                    buttonadd.style.display = "block";
                                                    buttonupdate.style.display = "none"


                                                    setTimeout(function () {

                                                        swal({
                                                            title: "Borrado",
                                                            text: "El Autmovil ha sido eliminado",
                                                            type: "success",
                                                            timer: 1500
                                                        });
                                                        let tr = nthmotor.parentElement
                                                        tr.remove();
                                                    }, 100);


                                                }).catch(err => console.log("Hubo un error " + err));


                                            }


                                        });

                                    })



                                } else {
                                    jQuery(document).ready($ => {
                                        swal({
                                            title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                            text: "No podrás deshacer esto!",
                                            type: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#DD6B55",
                                            confirmButtonText: "Si, borrarlo",
                                            closeOnConfirm: false,
                                            showLoaderOnConfirm: true,
                                            html: true
                                        }, function (isConfirm) {
                                            if (isConfirm) {
                                                apisearch.removeAutomobil('?motor=' + nthmotor.textContent).then(m => {
                                                    inputmarca.value = '';
                                                    inputlinea.value = '';
                                                    inputmodelo.value = '';
                                                    inputcilindraje.value = '';
                                                    inputcolor.value = '';
                                                    inputnmotor.value = '';
                                                    inputnmotor.disabled = false;
                                                    buttonupdate.setAttribute('update', 'false');

                                                    buttonadd.style.display = "block";
                                                    buttonupdate.style.display = "none"


                                                    setTimeout(function () {

                                                        swal({
                                                            title: "Borrado",
                                                            text: "El Autmovil ha sido eliminado",
                                                            type: "success",
                                                            timer: 1500
                                                        });
                                                        let tr = nthmotor.parentElement
                                                        tr.remove();
                                                    }, 100);


                                                }).catch(err => console.log("Hubo un error " + err));


                                            }


                                        });

                                    })


                                }
                            }
                        })
                    })     
                }else if(valor == '') {
                    const tablet=document.querySelector("#table tbody");
                    tablet.innerHTML="";
                    htmles = interfaze.printhtmltable(x);
                    tbodys.innerHTML += htmles;

                    const buttons = document.querySelectorAll('#buttons');
                    buttons.forEach(b => {
                        b.addEventListener("click", (e) => {


                            var inputmarca = document.querySelector('#marca');
                            var inputlinea = document.querySelector('#linea');
                            var inputmodelo = document.querySelector('#modelo');
                            var inputcilindraje = document.querySelector('#cilindraje');
                            var inputcolor = document.querySelector('#color');
                            var inputnmotor = document.querySelector('#motor');




                            let data = e.target.parentElement.parentElement;
                            let nthmarca = data.querySelector('td:nth-child(1)');
                            let nth = data.querySelector('td:nth-child(2)');
                            let ntmodelo = data.querySelector('td:nth-child(3)');
                            let ntcilindraje = data.querySelector('td:nth-child(4)');
                            let ntcolor = data.querySelector('td:nth-child(5)');
                            let nthmotor = data.querySelector('td:nth-child(6)');
                            var buttonadd = document.querySelector('.button_cart');
                            var buttonupdate = document.querySelector('.button-update');
                            if (e.target.classList.contains('update')) {
                                if (nth.textContent == 'motocicleta') {

                                    buttonadd.style.display = "none";
                                    buttonupdate.style.display = "block"
                                    inputmarca.value = nthmarca.textContent;
                                    buttonupdate.setAttribute('update', 'true');
                                    inputlinea.value = nth.textContent;
                                    inputmodelo.value = ntmodelo.textContent;
                                    inputcilindraje.value = ntcilindraje.textContent;
                                    inputcolor.value = ntcolor.textContent;
                                    inputnmotor.value = nthmotor.textContent;
                                    inputnmotor.disabled = true;

                                } else {
                                    buttonadd.style.display = "none";
                                    buttonupdate.style.display = "block"
                                    buttonupdate.setAttribute('update', 'true');
                                    inputmarca.value = nthmarca.textContent;
                                    inputlinea.value = nth.textContent;
                                    inputmodelo.value = ntmodelo.textContent;
                                    inputcilindraje.value = ntcilindraje.textContent;
                                    inputcolor.value = ntcolor.textContent;
                                    inputnmotor.value = nthmotor.textContent;
                                    inputnmotor.disabled = true;
                                    console.log("actualizando dato de la linea de automovil...")
                                }
                            } else if (e.target.classList.contains('remove')) {
                                if (nth.textContent == 'motocicleta') {
                                    jQuery(document).ready($ => {
                                        swal({
                                            title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                            text: "No podrás deshacer esto!",
                                            type: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#DD6B55",
                                            confirmButtonText: "Si, borrarlo",
                                            closeOnConfirm: false,
                                            showLoaderOnConfirm: true,
                                            html: true
                                        }, function (isConfirm) {
                                            if (isConfirm) {
                                                apisearch.removeMoto('?motor=' + nthmotor.textContent).then(m => {
                                                    inputmarca.value = '';
                                                    inputlinea.value = '';
                                                    inputmodelo.value = '';
                                                    inputcilindraje.value = '';
                                                    inputcolor.value = '';
                                                    inputnmotor.value = '';
                                                    inputnmotor.disabled = false;
                                                    buttonupdate.setAttribute('update', 'false');

                                                    buttonadd.style.display = "block";
                                                    buttonupdate.style.display = "none"


                                                    setTimeout(function () {

                                                        swal({
                                                            title: "Borrado",
                                                            text: "El Autmovil ha sido eliminado",
                                                            type: "success",
                                                            timer: 1500
                                                        });
                                                        let tr = nthmotor.parentElement
                                                        tr.remove();
                                                    }, 100);


                                                }).catch(err => console.log("Hubo un error " + err));


                                            } else { }


                                        });

                                    })
                                } else {
                                    jQuery(document).ready($ => {
                                        swal({
                                            title: "¿Estás seguro que quieres eliminar el tab con su contenido?",
                                            text: "No podrás deshacer esto!",
                                            type: "warning",
                                            showCancelButton: true,
                                            confirmButtonColor: "#DD6B55",
                                            confirmButtonText: "Si, borrarlo",
                                            closeOnConfirm: false,
                                            showLoaderOnConfirm: true,
                                            html: true
                                        }, function (isConfirm) {
                                            if (isConfirm) {
                                                apisearch.removeAutomobil('?motor=' + nthmotor.textContent).then(m => {
                                                    inputmarca.value = '';
                                                    inputlinea.value = '';
                                                    inputmodelo.value = '';
                                                    inputcilindraje.value = '';
                                                    inputcolor.value = '';
                                                    inputnmotor.value = '';
                                                    inputnmotor.disabled = false;
                                                    buttonupdate.setAttribute('update', 'false');

                                                    buttonadd.style.display = "block";
                                                    buttonupdate.style.display = "none"


                                                    setTimeout(function () {

                                                        swal({
                                                            title: "Borrado",
                                                            text: "El Autmovil ha sido eliminado",
                                                            type: "success",
                                                            timer: 1500
                                                        });
                                                        let tr = nthmotor.parentElement
                                                        tr.remove();
                                                    }, 100);


                                                }).catch(err => console.log("Hubo un error " + err));


                                            } else {

                                            }


                                        });

                                    })
                                }
                            }
                        })
                    })



                }
            })
        }).catch(err => {
            let table = document.querySelector('#mensajevoid');
            let mensajevoid = document.querySelector('#mensajevoid p')
            const p = document.createElement('p');
            if (valor == '') {
                p.innerHTML = "No hay datos que mostrar....";
                table.removeChild(mensajevoid)
                table.appendChild(p)
            } else {
                p.innerHTML = "No hay datos que buscar....";
                table.removeChild(mensajevoid)
                table.appendChild(p)
            }

        })


    }

}

new UI;