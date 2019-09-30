$(function(){
	$("#fregasesors").submit(function(){return false});
	// $("#data-table-regasesors").dataTable();

	$(".nombreapellido").blur(function(){
		var n = $("#inombre").val();
		var a = $("#iapellido").val();

		$("#vnombre").val(n + ' ' + a);
	});

	$("#imail").blur(function(){
		var u = $("#imail").val();
		var a = $("#imail").val()+'@saicor.com';

		$("#vmail").val(a);
		$("#vuser").val(u);
	});

	$("#iprov").change(function(){
		var id = $('#iprov option:selected').attr('id');
		$("#vprovincia").val(id);

		var a = arr('login',4,'id, idprovincia, nombre',9,'idprovincia = '+id,0,0,0)[0];

		$("#icant").html('');
		for (var i = 0; i < a.length; i++) {
			$("#icant").append('<option id="'+a[i][0]+'">'+a[i][2]+'</option>');
		}
	});

	$("#icant").change(function(){
		var id = $('#icant option:selected').attr('id');
		$("#vcanton").val(id);

		var a = arr('login',4,'id, idcanton, nombre',10,'idcanton = '+id,0,0,0)[0];

		$("#idist").html('');
		$("#vdistrito").val(id);
		for (var i = 0; i < a.length; i++) {
			$("#idist").append('<option id="'+a[i][0]+'">'+a[i][2]+'</option>');
		}
	});

});

$(document).on("click","#Iadd",function(){
	deadclear('regasesor')

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'regasesor':
			if (vmodulo['tip'] == '') {
				err = validarregasesor();
				if ( err ) {
					return err;
				}
			}
		break;

		case 'usuario':
			if (vmodulo['tip'] == '') {
				err = validarusuario();
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

function validarregasesor() {


	return false;
}

function validarusuario() {


	return false;
}

function endDetail(vid,acc,modulo){

	var vtele = $("#itelefono").val();
	// var vdist = $("#idist option:selected").attr('id');
	var a = arr('login',7,1,135,'','null,1,'+vid[0][0]+',1,"'+vtele+'"',0,0);
	// var q = arr('login',7,1,144,'','',0,0);

	deadclear(modulo);

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'regasesor':
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

function randompass() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}