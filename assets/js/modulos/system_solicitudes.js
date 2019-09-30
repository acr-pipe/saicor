$(function(){
	
	$("#fregistrotalleress").submit(function(){return false});
	// $("#data-table-registrotalleress").dataTable();

	$("[name=tsolicitud]").click(function(){
		var opt = $(this).val();
		var stipo = 0;
		var hide = '';
		$("#tsolicitud").html('');

		if (opt == "pendi") {
			var stipo = 2;
		}else if (opt == "aprov") {
			stipo = 1;
		}

		var a = arr('login',4,'',151,stipo,0,0,0)[0];
		var cont = 1;

		var c = arr('login',4,'*',152,'id > 0',0,0,0)[0];
		var combo = '<select class="slect">';

		if (a == '') {
			$("#tsolicitud").append('<tr><td colspan="9"><p align="center" class="dark-text">No existen solicitudes recientes</p></td></tr>');
		}else{

			for (var i = 0; i < c.length; i++) {
				combo += '<option value="'+c[i][0]+'">'+c[i][1]+'</option>';
			}
			combo += '</select>';

			for (var i = 0; i < a.length; i++) {

				if (stipo == 1) {
					hide = 'hide';
				}else{
					hide = '';
				}	

				$("#tsolicitud").append('<tr id="tr'+a[i][0]+'"><td><span id="idsol'+a[i][0]+'">'+cont+'</span></td><td><span id="clietaller'+a[i][0]+'">'+a[i][1]+'</span></td><td><span id="nomtaller'+a[i][0]+'">'+a[i][4]+'</span></td><td><span id="dirtaller'+a[i][0]+'">'+a[i][5]+', '+a[i][6]+', '+a[i][7]+', '+a[i][8]+'</span></td><td><span id="mailtaller'+a[i][0]+'">'+a[i][3]+'</span></td><td><span id="teletaller'+a[i][0]+'">'+a[i][9]+' | '+a[i][10]+'</span></td><td id="clastaller'+a[i][0]+'">'+combo+'</td><td><a href="#" data-reveal-id="modalConfirm" id="c'+a[i][0]+'" class="icon aprov aprovTaller '+hide+'"><i class="fa fa-check pbtn"></i></a>&nbsp;<a href="#" data-reveal-id="modalConfirm" id="t'+a[i][0]+'" class="icon desaprov"><i class="fa fa-times pbtn"></i></a></td></tr>');

				cont ++;
			}

			$(".aprov").click(function(){
				var id = $(this).attr('id').substr(1);

				var taller = $("#clastaller"+id).children().val();
				// Actualiza el estado
				var a = arr('login',7,2,1,'solicitud = 1','id  = '+id,0,0,0);

				// Categoriza cliente
				var clase = arr('login',7,2,147,'clase = '+taller,'idtaller  = '+id,0,0,0);

				$("#tr"+id).remove();

				$("#mmessage").html('Excelente! <br> Bienvenido a SAICOR!');
				$("#mmessage").removeClass('red-text');
				$("#mmessage").addClass('green-text');
				$("#leyenda").html('El taller de <b> '+$("#clietaller"+id).text()+' </b>, <b> '+$("#nomtaller"+id).text()+' </b> en <b> '+$("#dirtaller"+id).text()+' </b> ha sido aprovado con éxito! Ya puedes buscarlo en la sección de talleres autorizados por SAICOR en el GreenHope!');
				$("#mimg").attr('src','../assets/img/aprov.png');
			});

			$(".desaprov").click(function(){
				var id = $(this).attr('id').substr(1);
				// var taller = $("#clastaller"+id).children().val();
				// Actualiza el estado
				var a = arr('login',7,2,1,'solicitud = -1','id  = '+id,0,0,0);

				$("#tr"+id).remove();

				$("#mmessage").html('Lo sentimos! <br> No ha sido aprovado!');
				$("#mmessage").removeClass('green-text');
				$("#mmessage").addClass('red-text');
				$("#leyenda").html('El taller de <b> '+$("#clietaller"+id).text()+' </b>, <b> '+$("#nomtaller"+id).text()+' </b> en <b> '+$("#dirtaller"+id).text()+' </b>no ha podido ser aprovado. Gracias por querer ser parte de la familia de SAICOR en el GreenHope!');
				$("#mimg").attr('src','../assets/img/desaprov.png');
			});

		}
	});

});


$(document).on("click","#Iadd",function(){
	deadclear('registrotalleres')

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'registrotalleres':
			if (vmodulo['tip'] == '') {
				err = validarregistrotalleres();
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

function validarregistrotalleres() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'registrotalleres':
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