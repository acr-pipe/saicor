$(function(){
	$("#fgarajes").submit(function(){return false});
    
    $("#btn-mygaraje").click();
    
    $(document).on("click",".pic-contain",function(){

        var p = arr('login', 4, '', 129, $(this).attr('id').substr(1),0,0,0);
        var fotos = p[0];
        var info = p[0][0];
        $("#vidvehiculo").attr('vehid',info[2]);
        $(".zelda").data('triforce')['vidvehiculo'] = info[2];

        $("#fechapublic").html(info[33]);
        $("#vistasgal").html(info[34]);

        // ***** //
        $("#formselectvehi1").removeClass('hide');
        $("#formselectvehi2").addClass('hide');
        $("#formselectvehi3").removeClass('hide');
        // ***** //
        $("#btn-grafico").click();
        $(".btn-modal-garaje").attr('disabled',false);
        $(".close-reveal-modal").click();
        $("#tabs").removeClass('hide');
        $("#content-tabs").removeClass('hide');
        $("#autoplaca").removeClass('hide');
        // ***********************************************************************//
        // fotos
        var idhead = 1;
        if (fotos == '') {
            $("#fotosvehiculos").html('Este vehículo no tiene fotos asociadas');
        }else{
            $("#fotosvehiculos").html('');
            $.each(fotos, function(index, valor){
                $("#fotosvehiculos").append('<li data-orbit-slide="headline-'+idhead+'"><img src='+valor[22]+' class="img-into-orbit"></li>');
                idhead += 1;
            });
        };
        $("#btn-subir-imagen").click(function(){
            $("#container-fotos").html('');
            for (var i = 0; i < fotos.length; i++) {
                $("#container-fotos").append('<div class="sm-container cont-img" id="df'+fotos[i][36]+'"><img src="'+fotos[i][22]+'" class="img-submenu" id="pic'+fotos[i][36]+'"><label class="del-pic" id="dl'+fotos[i][36]+'" aria-label="Close"><i class="fa fa-trash"></i></label></div>');
            }
        });
        
        if (info[8] == 0) {
            // $("#btn-enventa").addClass('hide');
            $(".btn-enventa").css('opacity',0.2);
            $("#btn-condiciones").attr('href','#!');
            $("#btn-circulacion").attr('href','#!');
            $("#btn-enventa").attr('href','#!');
        }else if (info[8] == 1){
             // $("#btn-enventa").removeClass('hide');
             $(".btn-enventa").css('opacity',1);
             $("#btn-condiciones").attr('href','#panel-submenu4');
             $("#btn-circulacion").attr('href','#panel-submenu5');
             $("#btn-enventa").attr('href','#panel-submenu7');
        }

        $(".picvendor").attr('src',info[37]);
        $("#automarca").html(info[3]);
        $("#automarca").html(info[3]);
        $("#automodelo").html(info[4]);
        $("#autoanio").html(info[7]);
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
        $("#preciocol-submenu").html('¢ '+precio.formatMoney(2,'.',','));
        var preciodol = (parseInt(info[23]) / $("#tcambio").val());
        $("#preciodol-submenu").html('($ '+preciodol.formatMoney(2,'.',',')+')');
        
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
        }else{
            $("#mventa-submenu").html(info[27]);
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
        // $("#confcarro").append('<div class="large-2 medium-2 small-1 columns"><i class="fa fa-check green-ligth-text"></i></div><div class="large-10 medium-10 small-11 columns"><p class="left-text"><span id="conf">'+VAR+'</span></p></div>');

        // tablaevaluacion
        var idvehi = $("#vidvehiculo").attr('vehid');
        
        var f = arr('login',4,'conductor',175,'idusuario = @@usr limit 1',0,0,0)[0][0][0];
        console.log(f);

        if (f == undefined) {
            $("#conductcar").html('<small>PENDIENTE</small>');
        }else{
            if (parseInt(f) == 1)
                $("#conductcar").html('<i class="fas fa-check"></i>');
            else
                $("#conductcar").html('<small>PENDIENTE</small>');
        }

        var e = arr('login',4,'id, idusuario, idvehiculo, DATE_FORMAT(fecha, "%Y"), taller, vehiculo, conductor, co2, sello, tecnico',175,'idvehiculo = '+idvehi+' and idusuario = @@usr',0,0,0)[0][0];

        var year = new Date().getFullYear();
        if (e == undefined) {
            $("#aniotcar").html(year);
            $("#tecnico-taller").html('<small>PENDIENTE</small>');
            $("#taller-tcar").html('<small>PENDIENTE</small>');
            $("#vehiculotcar").html('<small>PENDIENTE</small>');
            $("#codostcar").html('<small>PENDIENTE</small>');
            $("#sello-tcar").html('<small>PENDIENTE</small>');    
        }else{
            $("#aniotcar").html(e[3]);
                // $("#tecnico-taller").text(e[3]);
            if (e[4] == 1)
                $("#taller-tcar").html('<i class="fas fa-check"></i>');
            else
                $("#taller-tcar").html('<small>PENDIENTE</small>');
            
            if (e[5] == 1)
                $("#vehiculotcar").html('<i class="fas fa-check"></i>');
            else
                $("vehiculotcar").html('<small>PENDIENTE</small>');
            
            if (e[7] == 1)
                $("#codostcar").html('<i class="fas fa-check"></i>');
            else
                $("#codostcar").html('<small>PENDIENTE</small>');
            
            if (e[8] == 1)
                $("#sello-tcar").html('<i class="fas fa-check"></i>');
            else
                $("#sello-tcar").html('<small>PENDIENTE</small>');

            if (e[9] == 1)
                $("#tecnico-taller").html('<i class="fas fa-check"></i>');
            else
                $("#tecnico-taller").html('<small>PENDIENTE</small>');
        }

        $(".delete [modulo = condicionesventa]").attr('id','d'+info[2]);

    });

    $("#editanuncio").click(function(){
        $("#btn-vender").click();
    });

    $("#misautos").click(function(){
        $("#btn-mygaraje").click();
    });


    $("#vmarchamoaldia").click(function(){
        var chckmarchamoaldia = $("#vmarchamoaldia").val();
        if (chckmarchamoaldia == 0) {
            $("#vmarchamoaldia").val(1);
        }else if (chckmarchamoaldia == 1) {
            $("#vmarchamoaldia").val(0);
        }
    });

    $("#vrtvaldia").click(function(){
        var chckrtvaldia = $("#vrtvaldia").val();
        if (chckrtvaldia == 0) {
            $("#vrtvaldia").val(1);
        }else if (chckrtvaldia == 1) {
            $("#vrtvaldia").val(0);
        }
    });

    $("#vtraspaso").click(function(){
        var chcktraspaso = $("#vtraspaso").val();
        if (chcktraspaso == 0) {
            $("#vtraspaso").val(1);
        }else if (chcktraspaso == 1) {
            $("#vtraspaso").val(0);
        }
    });

    $("#vnegociable").click(function(){
        var chcknegociable = $("#vnegociable").val();
        if (chcknegociable == 0) {
            $("#vnegociable").val(1);
        }else if (chcknegociable == 1) {
            $("#vnegociable").val(0);
        }
    });

    $("#vcambio").click(function(){
        var chckvcambio = $("#vcambio").val();
        if (chckvcambio == 0) {
            $("#vcambio").val(1);
        }else if (chckvcambio == 1) {
            $("#vcambio").val(0);
        }
    });

    $(document).on("click","#publicar-venta",function(){
        $('#modal-garaje').foundation('reveal', 'close');
    });

    $(document).on("click","#btn-vender",function(){
        $("#guardar-info").hide();
        var idvehiculo = $("#vidvehiculo").attr('vehid');
        
        var enventa = arr('login',4,'enventa',119,'id = '+idvehiculo,0,0,0)[0][0];
        
        if (enventa == 1) {
            $("#publicar-venta").removeClass('add');
            $("#publicar-venta").addClass('edit');
            $("#publicar-venta").html('Editar anuncio');
            var cv = arr('login',4,'*',128,'idvehiculo = '+idvehiculo,0,0,0)[0][0];
            var dc = arr('login',4,'*',127,'idcondicion = '+cv[0],0,0,0)[0][0];
            
            
            $("#preecioventa").val(cv[2]);
            parseFloat($("#preecioventa").val().replace(/,/g,''));
            $("#preecioventa").keyup();
            $("#vtraspaso").val(cv[3]);
            if ($("#vtraspaso").val() == 1) {
                $("#vtraspaso").prop('checked',true);
            }else{
                $("#vtraspaso").prop('checked',false);
            }
            $("#vnegociable").val(cv[4]);
            if ($("#vnegociable").val() == 1) {
                $("#vnegociable").prop('checked',true);
            }else{
                $("#vnegociable").prop('checked',false);
            }
            $("#vcambio").val(cv[5]);
            if ($("#vcambio").val() == 1) {
                $("#vcambio").prop('checked',true);
            }else{
                $("#vcambio").prop('checked',false);
            }
            $("#vmotivo").val(cv[6]);

            $("#vrtvaldia").val(dc[3]);
            if ($("#vrtvaldia").val() == 1) {
                $("#vrtvaldia").prop('checked',true);
            }else{
                $("#vrtvaldia").prop('checked',false);
            }
            $("#vmarchamoaldia").val(dc[4]);
            if ($("#vmarchamoaldia").val() == 1) {
                $("#vmarchamoaldia").prop('checked',true);
            }else{
                $("#vmarchamoaldia").prop('checked',false);
            }
            $("#vgravamenes").val(dc[5]);
            if ($("#vgravamenes").val() == 1) {
                $("#vgravamenes").prop('checked',true);
            }else{
                $("#vgravamenes").prop('checked',false);
            }
            $("#vdetallegravamen").val(dc[6]);

        }else{
            deadclear('condicionesventa');
            
            $("#publicar-venta").removeClass('edit');
            $("#publicar-venta").addClass('add');
            $("#publicar-venta").html('Publicar');
        }
    });

    $("#guardar-taller").click(function(){
        var idvehiculo = $("#vidvehiculo").attr('vehid');
        var idtaller = $("#provexprovi option:selected").attr('id').substr(3);
        //ACT TALLER
        var i = arr('login',7,2,119,'idtaller = '+idtaller,'id = '+idvehiculo+'',0,0);
        foundation_notify('success','Datos actualizados correctamente', 4000);
    });

    $("#btn-elegir-taller").click(function(){
        var idvehiculo = $("#vidvehiculo").attr('vehid');
        var a = arr('login',4,'',159,idvehiculo,0,0)[0][0];
        $("#provi").val(a[0]);
        $("#provexprovi").html('<option id="opt'+a[1]+'" value="'+a[2]+'">'+a[2]+'</option>');
    });

    $("#traspasar-vehi").click(function(){
        var cliente = $("#vidclientetrasp").val();
        var vehiculo = $("#vidvehiculo").attr('vehid');
        var ref = $("#idtransaccion").val();
        
        //ACT DUEÑO
        arr('login',7,2,119,'idusuario = '+cliente,'id = '+vehiculo+'',0,0);
        //ING REGISTRO
        var i = arr('login',7,1,160,'','0,@@usr,'+vehiculo+','+cliente+',now(),"'+ref+'"',0,0);
        foundation_notify('success','Al auto ha sido tranferido en SAICOR a: '+$("#nomuser").val(), 4000);
    });

    $("#btn-traspaso").click(function(){
        var i = arr('login',4,'id',160,'id > 0 order by id desc limit 1',0,0,0)[0][0][0];
        var utrans = parseInt(i) +1;
        var u = rndm();
        var idtransac = 'T-'+u+ utrans;

        $("#idtransaccion").val(idtransac);
    });

    $("#vertodos").click(function(){
        $(".pic-contain").show();
    });
    $("#verventa").click(function(){
        $("[enventa='0']").hide();
    });

    $("#preecioventa").keyup(function(){
        var num = $(this).val().replace(/,/g,'');
        $(this).val(parseFloat( num ).formatMoney(0,'.',','));
        $(".zelda").data('triforce')['vpreecioventa'] = num;
    });

    $("#provi").change(function(){
        var idprov = $(this).val();
        var o = arr('login',4,'',158,idprov,0,0,0)[0];
        $("#provexprovi").html('');

        if (o == '') {
          $("#provexprovi").append('<option>No existe proveedores en esta Provincia</option>'); 
        }else{
            for (var i = 0; i < o.length; i++) {
                $("#provexprovi").append('<option id="opt'+o[i][2]+'" value="'+o[i][3]+'">'+o[i][3]+'</option>');
            }
        }
    });

    $("#cedula").keyup(function(e){
            var code = e.which || e.keyCode;
            if (code == 13) {
                $("#searchuser").click();
            }
        });

    $("#searchuser").click(function(){
        var sced = $("#cedula").val();
        var p = arr('login',4,'',7,sced,0,0,0)[0][0];

        $("#vidclientetrasp").val(p[0]);

        if (p == undefined) {
            foundation_notify('alert','No existe usuario relacionado a '+sced+'', 4000);
        }else{
            $("#nomuser").val(p[2]);
            $("#provincia").val(p[7]);
            $("#idtransaccion").val();
        }
    });
    
});

$("#fcondicionesventas .zelda").data('triforce',{vaccion: 0, vid: 0, vidvehiculo: 0, vpreecioventa: 0});
$("#fdetallecondicionesventas .zelda").data('triforce',{vaccion: 0, vid: 0, vidcondicion: '?',vurlrecord: '', vdetallegravamen: $("#vdetallegravamen").text()});

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

$('#tabs-evaluation').click(function(){
    $('html, body').animate({
        scrollTop: $('#tabs').position().top },
        1000
    );
});

$(document).on("click","#del",function(){
    var infocardel = $("#automarca").text() + ' ' + $("#automodelo").text() + ' ' + $("#autoanio").text() + ' ' + $("#autoplaca").text();
    $("#infocardel").text(infocardel);
});

$(document).on("click","#delcarverified",function(){
    var vehi = $("#vidvehiculo").attr('vehid');
    arr('login',7,3,119,'id = '+vehi);
    arr('login',7,3,120,'idvehiculo = '+vehi);
    foundation_notify('success','Vehículo eliminado correctamente!', 4000);
    setTimeout(function(){
        location.reload();
    }, 1500);
});

$(document).on("click",".del-pic",function(){
    //ELIMINA DE LA BASE DE DATOS
    var idfoto = $(this).attr('id').substr(2);
    arr('login',7,3,133,'id = '+idfoto,'','','');
    arr('login',7,3,133,$("#vcarro").val(),'idcarro','','','');

    var source = $("#pic"+idfoto).attr('src');
    mantenimiento('garaje',1,source);

    $("#df"+idfoto).remove();
});

$(document).on("keyup","#preecioventa",function(){
    calc_dolar();
});
$(document).on("blur","#preecioventa",function(){
    calc_dolar();
});



$(document).on("click",".btn-modal-garaje",function(){
	var id = $(this).attr('id').substr(4);
	
	$("#"+id).removeClass('hide');
	
	$(".close-reveal-modal").click(function(){
		$("#"+id).addClass('hide');	
	});
});

$(document).on("click","#mygaraje",function(){
	var estado = $(this).attr('estado');

	if (estado == 0) {
		$("#mygaraje").css('margin-top','0');
		$("#mygaraje").css('z-index','100');
		$(this).attr('estado',1);
	}else if(estado == 1){
		$("#mygaraje").css('margin-top','-15%');
		$("#mygaraje").css('z-index','0');
		$(this).attr('estado',0);
	}
});

$(document).on("click","#Iadd",function(){
	deadclear('garaje');

});

function calc_dolar(){
    var preciov = parseInt($("#preecioventa").val().replace(/,/g,''));
    var tipocambio = 560;
    var totalconvert = (preciov / tipocambio);
    $("#convert-dolar").html(totalconvert.formatMoney(0,'.',','));
}

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'garaje':
			if (vmodulo['tip'] == '') {
				err = validargaraje();
				if ( err ) {
					return err;
				}
			}
			
			break;

        case 'condicionesventa':
            if (vmodulo['tip'] == '') {
                    err = validarcondiciones();
                    if ( err ) {
                        return err;
                    }
                }
                
                break;

        case 'detallecondicionesventa':
            if (vmodulo['tip'] == '') {
                    err = validardetallecondiciones();
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

function validardetallecondiciones() {

    return false;
}


function validarcondiciones() {

    return false;
}


function validargaraje() {

	return false;
}

function endDetail(vid,vaccion,vmodulo){

    switch(vmodulo){
        case 'condicionesventas':
            var p = arr('login',4,'idvehiculo,date_format(fechapublicacion,"%d %M, %Y") as fecha, vistas',128,'id ='+vid,0,0,0)[0][0];

            $("#v"+p[0]).attr('enventa',1);
            $("#fechapublic").html(p[1]);
            $("#vistasgal").html(p[2]);
        break;

    }

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'garaje':
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

function rndm(){
    var letra = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    var numero = new Array('0','1','2','3','4','5','6','7','8','9');
    var letr = letra[Math.floor(Math.random()*letra.length)];
    var letr2 = letra[Math.floor(Math.random()*letra.length)];
    var num = numero[Math.floor(Math.random()*numero.length)];

    result = letr+num+letr2;

    return result;
}