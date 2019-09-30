$(function(){
	$("#fasesoress").submit(function(){return false});
	$("#data-table-asesoress").dataTable();


});

$(document).on("click",".asesinfo",function(){
	var id = $(this).attr('id').substr(4);
	var visible = $(this).attr('view');

	if (id == 1 && visible == 0) {
		$("#ases1").html('+(506) 7105 6075');
		$("#ases2").html('CONTACTAR');
		$("#ases3").html('CONTACTAR');
		$(this).attr('view',1);
	}else /*if (id == 2 && visible == 0) {
		$("#ases1").html('CONTACTAR');
		$("#ases2").html('+(506) 8888 8888');
		$("#ases3").html('CONTACTAR');
		$(this).attr('view',1);
	}else */if (id == 3 && visible == 0) {
		$("#ases1").html('CONTACTAR');
		$("#ases2").html('CONTACTAR');
		$("#ases3").html('+(506) 8513 2871');
		$(this).attr('view',1);
	}else{
		$(this).html('CONTACTAR');
		$(this).attr('view',0);
	}

});

$(document).on("click","#Iadd",function(){
	deadclear('asesores')

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'asesores':
			if (vmodulo['tip'] == '') {
				err = validarasesores();
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

function validarasesores() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'asesores':
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