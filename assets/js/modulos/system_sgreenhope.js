$(function(){
	
	// var info = arr('login',6,'',167,'@@usr',0,0,0);
	// var tot = arr('login',4,'',149,'@@usr',0,0,0)[0][0];
	// tot == undefined ? tot = 0 : true;

	// $("#repSellosUsr").append(info);
	// $("#totmem").text('¢ '+tot);

});

$(document).ready(function(){
	var sellosadj = arr('login',6,'',182,'@@usr',0,0,0);
	$("#repSellosUsr").append(sellosadj);

	var sellosvend = arr('login',6,'',185,'@@usr',0,0,0);
	$("#repSellosVend").append(sellosvend);

	// var a = arr('login',4,'sellos',147,'idtaller = @@usr',0,0)[0][0];
	// $("#sellodisp").text(a);
});

$(document).on("click","#Iadd",function(){
	deadclear('sgreenhope');

});

function validar (varreglo,vmodulo) {

	var salida = {}

		/*VALIDACION FRONT END*/

	switch(vmodulo['modulo']) {
		case 'sgreenhope':
			if (vmodulo['tip'] == '') {
				err = validarsgreenhope();
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

function validarsgreenhope() {

	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {

	switch(vmodulo['modulo']) {
		case 'sgreenhope':
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