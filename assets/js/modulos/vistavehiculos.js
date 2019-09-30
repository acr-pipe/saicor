$(function(){

    $("#fgalerias").submit(function(){return false});

    var kil = parseInt($("#kilome").html());
    var col = parseInt($("#preciocol").html());
    $("#kilome").html(kil.formatMoney(0,'.',','));
    var cambio = 560;
    var totaldol = (col / cambio);
    $("#preciodol").html('( $'+totaldol.formatMoney(2,'.',',')+' )');


    var plac = $("#inf-placa").html()//.substr(-1);
    $("#inf-placa").html('Termina en '+plac.substr(-1));

    // <i class="fa fa-angle-down right" id="row-pic" aria-hidden="true"></i>
    $("#row-pic").click(function(){
        var flag = $(this).val();

        if (flag == 0) {
            $("[name='smallgal']").removeClass('fa-angle-down');
            $("[name='smallgal']").addClass('fa-angle-up');
            $("#row-pic").val(1);
        }else if(flag == 1){
            $("[name='smallgal']").removeClass('fa-angle-up');
            $("[name='smallgal']").addClass('fa-angle-down');
            $("#row-pic").val(0);
        }
    });

// INFORMACION POR VEHICULO
$(".btn-car-info").click(function(){

    var p = arr('login',4,'',129,$(this).attr('id').substr(9),0,0,0);
    var fotos = p[0];
    var info = p[0][0];
    var i = arr('login',4,'',132,info[1],0,0,0)[0][0];

    $("#nom-propietario2").html(i[1]);
    $("#telefonos").html(i[2]);
    $("#correo").html(i[3]);
    $("#provincia").html(i[4]);

    // fotos
    if (fotos == '') {
        $("#fotosvehiculos").html('Este vehículo no tiene fotos asociadas');
    }else{
        $("#fotosvehiculos").html('');
        $("#fvehiculos").html('');
        for(var i = 0; i < fotos.length; i++){

            $("#fotosvehiculos").append('<li data-orbit-slide="headline-'+(i+1)+'"><img src="'+fotos[i][22]+'" class="img-into-orbit"></li>');
            $("#fvehiculos").append('<a data-orbit-link="headline-'+(i+1)+'" class="sub-image-a"><img src="'+fotos[i][22]+'" class="sub-image-orbit"></a>');
        };
    };
    
    var sello = '';
    if (info[38] == 1) {
        sello = 'sello_tcar';
    }else if (info[38] == 2) {
        sello = 'sello_tcarplus';
    }else if (info[38] == 3) {
        sello = 'sello_tcarblue';
    }else{
        sello = '';
    }

    $("#tp_sello").attr('src','../assets/img/'+sello+'.png');
    $("#nom-propietario1").html(info[35]);
    $("#nom-propietario").html(info[35]);
    $("#marca-car").html(info[3]);
    $("#model-car").html(info[4]);
    $("#anio-car").html(info[7]);
    $("#autoplaca").html(info[6]);
    $("#esp-marca").html(info[3]);
    $("#esp-modelo").html(info[4]);
    $("#esp-estilo").html(info[5]);
    $("#esp-placa").html(info[6].substr(-1));
    $("#esp-anio").html(info[7]);
    $("#esp-ccmotor").html(info[11]);
    $("#esp-trans").html(info[12]);
    $("#esp-recorrido").html(info[13]);
    $("#esp-tiporecorrido").html(info[14]);
    $("#esp-combus").html(info[15]);
    $("#esp-plazas").html(info[16]);
    $("#esp-puertas").html(info[17]);
    $("#esp-rtv").html(info[18]);
    $("#esp-ext").html(info[19]);
    $("#esp-int").html(info[20]);
    $("#esp-prov").html(info[21]);
    // ***********************************************************************// 
    //precioventa
    var precio = parseInt(info[23]);
    $("#preciocol-modal").html('¢ '+precio.formatMoney(2,'.',','));
    var preciodol = (parseInt(info[23]) / 560);
    $("#preciodol-modal").html('($ '+preciodol.formatMoney(2,'.',',')+')');
    
    var preciov = parseInt(info[23]);
    $("#preciocol-submenu").html('¢ '+preciov.formatMoney(2,'.',','));
    var preciodolv = (parseInt(info[23]) / 560);
    $("#preciodol-submenu").html('($ '+preciodolv.formatMoney(2,'.',',')+')');

    //traspaso
    if (info[24] == 1) {
        $("#trasp-submenu").html('<i class="fa fa-check green-ligth-text"></i>');
    }else if (info[24] == 0){
        $("#trasp-submenu").html('<i  class="fa fa-times red-text"></i>');
    }

    //negociable
    if (info[25] == 1) {
        $("#nego-submenu").html('<i class="fa fa-check green-ligth-text"></i>');
    }else if (info[25] == 0){
        $("#nego-submenu").html('<i  class="fa fa-times red-text"></i>');
    }

    //cambio
    if (info[26] == 1) {
        $("#camb-submenu").html('<i class="fa fa-check green-ligth-text"></i>');
    }else if (info[26] == 0){
        $("#camb-submenu").html('<i  class="fa fa-times red-text"></i>');
    }

    //motivoventa
    if (info[27] == '') {
        $("#mventa-submenu").html('Motivo de venta no definido');
        $("#comentario").html('Sin comentario');
    }else{
        $("#mventa-submenu").html(info[27]);
        $("#comentario").html(info[27]);
    }

    // $("#esp-prov").html(p[28]); //urlrecord

    //rtvaldia
    if (info[29] == 1) {
        $("#rtv-submenu").html('<i class="fa fa-check green-ligth-text"></i>');
    }else if (info[29] == 0){
        $("#rtv-submenu").html('<i  class="fa fa-times red-text"></i>');
    }
    $("#mesRTV-submenu").html(info[18]);

    //marchamoaldia
    if (info[30] == 1) {
        $("#marchamo-submenu").html('<i class="fa fa-check green-ligth-text"></i>');
    }else if (info[30] == 0){
        $("#marchamo-submenu").html('<i  class="fa fa-times red-text"></i>');
    }
    var year = new Date().getFullYear();
    $("#aniommarchamo-submenu").html(year);

    //gravamenes
    if (info[31] == 1) {
        $("#gravamen-submenu").html('<i class="fa fa-check green-ligth-text"></i>');
    }else if (info[31] == 0){
        $("#gravamen-submenu").html('<i  class="fa fa-times red-text"></i>');
    }

    //detallegravamenes
    if (info[32] == '') {
        $("#gravcomment-submenu").html('N/A');
    }else{
        $("#gravcomment-submenu").html(info[32]);
    }

    // p[9] CONFORT
    // p[10] SEGURIDAD

    var arrconf = info[9].substr(0,info[9].length -1);
    cresult = arrconf.split(',');

    var arrseg = info[10].substr(0,info[10].length -1);
    sresult = arrseg.split(',');

    $.each(cresult, function( key, value ) {
        var q = arr('login',4,'nombre',118,'id = '+value)[0][0][0];
        $("#confcarro").append('<div class="large-2 medium-2 small-1 columns"><i class="fa fa-check green-ligth-text"></i></div><div class="large-10 medium-10 small-11 columns"><p class="left-text">'+q+'</p></div>');
    });

    $.each(sresult, function( key, value ) {
        var q = arr('login',4,'nombre',117,'id = '+value)[0][0][0];
        $("#segcarro").append('<div class="large-2 medium-2 small-1 columns"><i class="fa fa-check green-ligth-text"></i></div><div class="large-10 medium-10 small-11 columns"><p class="left-text">'+q+'</p></div>');
    });
});
// END INFORMACION POR VEHICULO

}); //FUNCTION

    var chart1 = AmCharts.makeChart( "chartdiv1", {
    "type": "pie",
    "theme": "light",
    "allLabels": [{
    "x": "50%",
    "y": "45%",
    "text": "Sellos",
    "size": 16,
    "align": "middle",
    "color": "#FAFAFA"
    }],
    "dataProvider": [ {
        "title": "Nulos",
        "value": 60,
        "color": "#616161"
    }, {
        "title": "Activos",
        "value": 40,
        "color": '#95DD37'
    } ],

    "titleField": "title",
    "valueField": "value",
    "labelRadius": 0,
    "color": "#FAFAFA",
    "colorField": "color",
    "radius": "38%",
    "innerRadius": "85%",
    "labelText": "[[title]]",
    "export": {
    "enabled": true
    }
});

var chart2 = AmCharts.makeChart( "chartdiv2", {
  "type": "pie",
    "theme": "light",
    "allLabels": [{
    "x": "50%",
    "y": "45%",
    "text": "Talleres",
    "size": 16,
    "align": "middle",
    "color": "#FAFAFA"
    }],
    "dataProvider": [ {
        "title": "Taller1",
        "value": 40,
        "color": "#bebdc3"
    }, {
        "title": "Taller2",
        "value": 25,
        "color": '#95DD37'
    }, {
        "title": "Taller3",
        "value": 35,
        "color": '#616161'
    } ],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 0,
    "color": "#FAFAFA",
    "colorField": "color",
    "radius": "38%",
    "innerRadius": "85%",
    "labelText": "[[title]]",
    "export": {
    "enabled": true
    }
});

var chart3 = AmCharts.makeChart( "chartdiv3", {
    "type": "pie",
    "theme": "light",
    "allLabels": [{
    "x": "50%",
    "y": "45%",
    "text": "Dueños",
    "size": 16,
    "align": "middle",
    "color": "#FAFAFA"
    }],
    "dataProvider": [ {
        "title": "Dueño1",
        "value": 12,
        "color": "#bebdc3"
    }, {
        "title": "Dueño2",
        "value": 40,
        "color": '#95DD37'
    }, {
        "title": "Dueño3",
        "value": 48,
        "color": '#616161'
    } ],

    "titleField": "title",
    "valueField": "value",
    "labelRadius": 0,
    "color": "#FAFAFA",
    "colorField": "color",
    "radius": "38%",
    "innerRadius": "85%",
    "labelText": "[[title]]",
    "export": {
    "enabled": true
    }
});

$(document).foundation({
    accordion: {
      callback : function (accordion) {
        console.log(accordion);
      }
    }
});

$(document).on("click","#Iadd",function(){
    deadclear('galeria');
});

function validar (varreglo,vmodulo) {
    
    var salida = {}
    
        /*VALIDACION FRONT END*/
    
    switch(vmodulo['modulo']) {
        case 'galeria':
            if (vmodulo['tip'] == '') {
                err = validargaleria();
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

function validargaleria() {


    return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


    switch(vmodulo['modulo']) {
        case 'galeria':
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