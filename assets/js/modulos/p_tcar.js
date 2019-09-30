$(function(){
	$("#fp_tcars").submit(function(){return false});
	// $("#data-table-p_tcars").dataTable();

});

$(document).on("click","#Iadd",function(){
	deadclear('p_tcar')

});

$(document).on("click","#cabc",function(){
	$(".ca").css('color','#ECB83A');
	$(".cb").css('color','#ECB83A');
	$(".cc").css('color','#ECB83A');
});
$(document).on("click","#cab",function(){
	$(".ca").css('color','#ECB83A');
	$(".cb").css('color','#ECB83A');
	$(".cc").css('color','#222');
});
$(document).on("click","#ca",function(){
	$(".ca").css('color','#ECB83A');
	$(".cb").css('color','#222');
	$(".cc").css('color','#222');
});

$(document).on("click","#pint",function(){
	$(".pint").css('color','#ECB83A');
	$(".pese").css('color','#222');
	$(".pest").css('color','#222');
});
$(document).on("click","#pese",function(){
	$(".pint").css('color','#222');
	$(".pese").css('color','#ECB83A');
	$(".pest").css('color','#222');
});
$(document).on("click","#pest",function(){
	$(".pint").css('color','#222');
	$(".pese").css('color','#222');
	$(".pest").css('color','#ECB83A');
});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'p_tcar':
			if (vmodulo['tip'] == '') {
				err = validarp_tcar();
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

function validarp_tcar() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'p_tcar':
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