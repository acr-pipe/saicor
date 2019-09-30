$(function(){
    $("#fmantenimientos").submit(function(){return false});
    // $("#data-table-mantenimientos").dataTable();

// var tel = {
// url: "../assets/json/teltalleres.php",
// getValue: "telefono",
// list: { 
// match: {
// enabled: true
// }
// },
// template: {
//     type: "custom",
//     method: function(value, item) {
//       return value+"<input type='hidden' class='cval' value='"+item+"'>";
//     }
//  },
// theme: "square"
// };
// $("#itelefono").easyAutocomplete(tel);

var nomcomercial = {
url: "../assets/json/teltalleres.php",
getValue: "nombrecomercial",
list: { 
match: {
enabled: true
}
},
template: {
    type: "custom",
    method: function(value, item) {
      return value+"<input type='hidden' class='nval' value='"+item+"'>";
    }
 },
theme: "square"
};

$("#inombre").easyAutocomplete(nomcomercial);

$("#itelefono").keyup(function(e){
    var code = e.which || e.keyCode;
    if (code == 13) {
        var text = $(this).val();
        var tipo = $(this).attr('tipo');
        buscar_taller(text,tipo);
    }
});

// $("#inombre").keyup(function(e){
//     var code = e.which || e.keyCode;
//     if (code == 13) {
//         var text = $(this).val();
//         var tipo = $(this).attr('tipo');
//         buscarCliente(text,tipo);
//     }
// });

// $("#inombre").blur(function(){
//     var text = $(this).val();
//     var tipo = $(this).attr('tipo');
//     buscarCliente(text,tipo);
// });

// function buscarCliente(vtext,vtipo){
//     // Sellos
//     var a = arr('login',4,'',154,"'"+vtext+"','"+vtipo+"'",0,0,0)[0][0];
//     // $("#itelefono").val(a[1]);
//     if (a[3] == null) { $("#isdisp").val(0) } else{ $("#isdisp").val(a[3]) }
//     if (a[4] == null) { $("#isdisp_plus").val(0) } else{ $("#isdisp_plus").val(a[4]) }
//     if (a[4] == null) { $("#isdisp_blue").val(0) } else{ $("#isdisp_blue").val(a[5]) }
//     // $("#isellos").val();
//     $("#isellos").focus();
//     $("#hid").val(a[0]);
// }

$("#itelefono").change(function(){
    var text = $(this).val();
    var tipo = $(this).attr('tipo');
    buscar_taller(text,tipo);
});

$("#inombre").change(function(){
    var text = $(this).val();
    var tipo = $(this).attr('tipo');
    buscar_taller(text,tipo);
});

$("#itelefono").blur(function(){
    var text = $(this).val();
    var tipo = $(this).attr('tipo');
    buscar_taller(text,tipo);
});

$("#inombre").blur(function(){
    var text = $(this).val();
    var tipo = $(this).attr('tipo');
    buscar_taller(text,tipo);
});

function buscar_taller(text,vari) {
    $("#isdisp").val('');
    $("#isdisp_plus").val('');
    $("#isdisp_blue").val('');
    $("#isellos").val('');
    $("#isellos_plus").val('');
    $("#isellos_blue").val('');
    var a = arr('login',4,'',154,"'"+text+"','"+vari+"'",0,0,0)[0];
    if (a.length > 0) {
        $("#inombre").val(a[0][2]);
        if (a[0][3] == null) {
            $("#isdisp").val(0);
        }else{
            $("#isdisp").val(a[0][3]);
        }
        if (a[0][4] == null) {
            $("#isdisp_plus").val(0);
        }else{
            $("#isdisp_plus").val(a[0][4]);
        }
        if (a[0][5] == null) {
            $("#isdisp_blue").val(0);
        }else{
            $("#isdisp_blue").val(a[0][5]);
        }
    }else{
        $("#isdisp").val(0);
        $("#isdisp_plus").val(0);
        $("#isdisp_blue").val(0);
    }
    $("#hid").val(a[0][0]);
}

$("#isellos").keyup(function(e){
    var code = e.which || e.keyCode;
    if (code == 13) {
        adjudicarsello();   
    }
});

$("#adjsellos").click(function(){
    adjudicarsello();
});

$("#vreg").click(function(){
    var a = arr('login',4,'',156,'',0,0,0)[0];
    var cont = 1;
    $("#table-m").html('');

    for (var i = 0; i < a.length; i++) {
        var stot = parseInt(a[i][5]) + parseInt(a[i][6]);
        var splustot = parseInt(a[i][7]) + parseInt(a[i][8]);
        var sbluetot = parseInt(a[i][9]) + parseInt(a[i][10]);

        $("#table-m").append('<tr> <input id="i'+a[i][1]+'" type="hidden"> <td class="td-t" width="50">'+cont+'</td> <td class="td-t">'+a[i][2]+'</td> <td class="td-t">'+a[i][3]+'</td> <td class="td-t">'+a[i][4]+'</td> <td class="td-t">'+a[i][5]+'</td> <td class="td-t">'+a[i][6]+'</td> <td class="td-t"><b>'+stot+'</b></td> <td class="td-t">'+a[i][7]+'</td> <td class="td-t">'+a[i][8]+'</td> <td class="td-t"><b>'+splustot+'</b></td>  <td class="td-t">'+a[i][9]+'</td> <td class="td-t">'+a[i][10]+'</td> <td class="td-t"><b>'+sbluetot+'</b></td></tr>');

        cont++;
    }
});

	$("#labelmsj").click(function(){
		$("#itelefono").focus();
	});

});

$(document).ready(function(){
    var day = getDate()[0];
    var month = getDate()[1];
    var year = getDate()[2];

    $("#ifecha").val(day +', '+ month +' de '+ year);
});

$(document).on("click","#Iadd",function(){
    deadclear('mantenimiento')

});

function validar (varreglo,vmodulo) {
    
    var salida = {}
    
        /*VALIDACION FRONT END*/
    
    switch(vmodulo['modulo']) {
        case 'mantenimiento':
            if (vmodulo['tip'] == '') {
                err = validarmantenimiento();
                if ( err ) {
                    return err;
                }
            }
            
            break;
        default:
            return 'Módulo no Existente';
            break;
    }

    salida = odin(varreglo,"f"+vmodulo['modulo']+"s");
    return salida;

}

function validarmantenimiento() {


    return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


    switch(vmodulo['modulo']) {
        case 'mantenimiento':
            vmodulo['sel'] = '';
            vmodulo['tbl'] = 3;
            vmodulo['where'] ='';
            break;
        default:
            return 'Módulo no Existente';
            break;
    }
    
    return vmodulo;
}

function cargarSintax(){
    var arr = {}

    arr['sel'] = '';
    arr['tbl'] = 4;
    arr['where'] = '';

    return arr;
}

function endDetail(vid) {
    setTimeout(function(){ console.log('Registro Ingresado') }, 2000);
    return false;
}

function adjudicarsello(){
    var id = $("#hid").val();
    var nombre = $("#inombre").val();
    var fecha = $("#ifecha").val();
    var isdisp = $("#isdisp").val() == '' ? 0 : parseInt($("#isdisp").val());
    var isellos = $("#isellos").val() == '' ? 0 : parseInt($("#isellos").val());
    var isdisp_plus = $("#isdisp_plus").val() == '' ? 0 : parseInt($("#isdisp_plus").val());
    var isdisp_blue = $("#isdisp_blue").val() == '' ? 0 : parseInt($("#isdisp_blue").val());
    var isellos_plus = $("#isellos_plus").val() == '' ? 0 : parseInt($("#isellos_plus").val());
    var isellos_blue = $("#isellos_blue").val() == '' ? 0 : parseInt($("#isellos_blue").val());
    var stot = isdisp + isellos;
    var splustot = isdisp_plus + isellos_plus;
    var sbluetot = isdisp_blue + isellos_blue;
    
    $("#table-t").html('');
    $("#table-t").append('<tr><td class="td-t"><span id="ital'+id+'">'+nombre+'</span></td><td class="td-t"><span id="iper'+id+'">'+fecha+'</span></td><td class="td-t"><span id="idis'+id+'">'+isdisp+'</span></td><td class="td-t"><span id="iadj'+id+'">'+isellos+'</span></td><td class="td-t"><span id="idisplus'+id+'">'+isdisp_plus+'</span></td><td class="td-t"><span id="iadjplus'+id+'">'+isellos_plus+'</span></td><td class="td-t"><span id="isdispblue'+id+'">'+isdisp_blue+'</span></td><td class="td-t"><span id="iadjblue'+id+'">'+isellos_blue+'</span></td><td class="td-t"><span id="itot'+id+'"><div class="columns small-4"><label>Tcar</label> '+stot+'</div><div class="columns small-4"><label>Plus</label> '+splustot+'</div><div class="columns small-4"><label>Blue</label> '+sbluetot+'</div></span></td></tr>');

    var adjsello = arr('login',4,'',180,'1,0,'+id+','+isdisp+','+isellos+','+isdisp_plus+','+isellos_plus+','+isdisp_blue+','+isellos_blue+','+stot+','+splustot+','+sbluetot,0,0,0);

    if (adjsello['succed']) {
        console.log(adjsello)
    }else{
        console.log(adjsello[0]['ERROR'])
    }

    $("#itelefono").val('');
    $("#inombre").val('');
    $("#isdisp").val('');
    $("#isellos").val('');
    $("#isdisp_plus").val('');
    $("#isellos_plus").val('');
    $("#isdisp_blue").val('');
    $("#isellos_blue").val('');
    $("#inombre").focus();
}

function getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //Enero es 0!
    var yyyy = today.getFullYear();
    var fecha = new Array();

    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}

    var m = arr('login',4,'nombre',126,'id =' + mm)[0][0];

    // today = dd+'/'+m[0]+'/'+yyyy;

    fecha.push(dd);
    fecha.push(m[0]);
    fecha.push(yyyy);

    return fecha;
}