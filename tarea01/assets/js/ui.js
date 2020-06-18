export class Interfaze{


    printhtmltable(data){
        const { id, marca, linea, modelo, cilindraje, color, motor  } =data
    
    let   htmle = `
    <tr data-table="${motor}" linea="${linea}">
        <td>${marca}</td>
        <td>${linea}</td>
        <td>${modelo}</td>
        <td>${cilindraje}</td>
        <td>${color}</td>
        <td>${motor}</td>
        <td id="buttons">
            <button class="btn btn-primary-update update"  id="${id}">Actualizar</button>
            <button class="btn btn-primary-remove remove"  id="${id}">Eliminar</button>
        </td>
    </tr>
`

    return htmle;
    }
    update(){

    }
    delete(){

    }
    clearinputs(){
        inputmarca.value = '';
        inputlinea.value = '';
        inputmodelo.value = '';
        inputcilindraje.value = '';
        inputcolor.value = '';
        inputnmotor.value = '';
    }

}