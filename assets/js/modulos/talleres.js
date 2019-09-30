
$(function(){
	$("#fgalerias").submit(function(){return false});


	$("#opt-filter").click(function(){
		var estado = $("#div-filter").attr('estado');
		if (estado == 1) {
			$("#div-filter").fadeToggle('slow');
			$("#div-filter").attr('estado',0);
		}else{
			$("#div-filter").fadeToggle("slow");
			$("#div-filter").attr('estado',1);
		}
	});

	$("#opt-filter").click();

}); //END READY

$(document).ready(function(){
	
	var p = arr('login',4,'',148,'',0,0,0)[0];
	// PRELOAD
	$("#preload").show();

	for (var i = 0; i < p.length; i++) {
		$("#tallerautorizado").append('<tr id="tr'+p[i][0]+'" class="tr"><td width="30%"><img src="'+p[i][7]+'" class="img-taller"></td><td align="left"><div class="wrapper text-left"><h4 id="nom_taller'+p[i][0]+'">'+p[i][1]+'</h4> <label> <i class="fa fa-phone"></i> &nbsp;'+p[i][9]+' | <i class="fa fa-envelope"></i> &nbsp;'+p[i][12]+'</label><p id="desc_taller'+p[i][0]+'" class="hide-for-small-only">'+p[i][5]+', '+p[i][4]+', '+p[i][3]+'<br> <label class="greend-text"><i class="fa fa-map-marker"></i> &nbsp;'+p[i][6]+'</label></div></td></tr><br>');
	}

	$("#preload").hide();

});

$(document).on("click","#Iadd",function(){
	deadclear('talleres');

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'talleres':
			if (vmodulo['tip'] == '') {
				err = validartalleres();
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

function validartalleres() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'talleres':
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