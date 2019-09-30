$(function(){
	$("#fformcontactuss").submit(function(){return false});
	// $("#data-table-formcontactuss").dataTable();

	$("#sendcontactus").click(function(){
        var vbody = '<div class="container" style="widht: 50%"><div class="container" style="background: #F7F7F7; padding:0.2em" align="center"><img src="https://www.saicor.co.cr/assets/img/formmail.png" width="50px" height="50px"><h3>Contacto de Cliente <label>Formulario</label></h3></div><div padding:0.5em"><p>El mensaje es enviado por:<br><br>Nombre: <b>'+$("#nomcliente").val()+'</b><br>Correo: <b>'+$("#mailcliente").val()+'</b> </p><p><b>Mensaje: </b> '+$("#msjcliente").val()+'</p><br></div></div>';

        	if ($("#nomcliente").val() == '') {
        		foundation_notify('warning','Introduzca su nombre para el formulario de contacto',4000);
        		return false;
        	}
        	if ($("#mailcliente").val() == '') {
				foundation_notify('warning','Introduzca un correo válido para el formulario de contacto',4000);
				return false;
        	}
        	if ($("#msjcliente").val() == '') {
        		foundation_notify('warning','Escriba un mensaje para el formulario de contacto',4000);
        		return false;
        	}
        	if ( $("#mailcliente").val().match(/\b[\w\.-]+@+[\w\.-]+\.\w{2,4}\b/gi) ){
        		enviarCorreo(1,'saicorvs@gmail.com','Contacto de cliente',vbody,'');
	
				setTimeout(function(){
			        $('#imgSobre').addClass('animated fadeOutRight');
				}, 1500);

				setTimeout(function(){
					$("#modalTitle").html('Listo!');
					$(".lead").html('Tu mensaje ha sido enviado con éxito!');
			    }, 2000);

				setTimeout(function(){
			        $('#sendModal').foundation('reveal', 'close');
			    }, 3000);
        	}else{
                $("#mailcliente").focus().select();
        		foundation_notify('warning','Introduzca un correo válido para el formulario de contacto',4000);
        		return false;
        	}

            $("#nomcliente").val('');
			$("#mailcliente").val('');
			$("#msjcliente").val('');
    });

});

$(document).on("click","#Iadd",function(){
	deadclear('formcontactus')

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'formcontactus':
			if (vmodulo['tip'] == '') {
				err = validarformcontactus();
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

function validarformcontactus() {

	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'formcontactus':
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