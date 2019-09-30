$(function(){

	$("#fcliente_confs").submit(function(){return false});

		$(".pic-contain").click(function(){
			// ------------------------------------------//
			var id = $(this).attr('id').substr(1);
	    	$("#vidvehiculo").val(id);
			// ------------------------------------------//
			$(".pic-contain").removeAttr('name');
			$(this).attr('name','active');

			var p = arr('login', 4, '', 134, $(this).attr('id').substr(1),0,0,0)[0][0];
			// console.log(p);

			$("#nombremarca").val(p[4]);
			$("#idmarca").val(p[3]);
			$("#nombremodelo").val(p[6]);
			$("#idmodelo").val(p[5]);
			$("#idanio").val(p[10]);
			$("#idplaca").val(p[9]);
			$("#idcolore").val(p[23]);
			$("#idcolori").val(p[24]);
			$("#nombreestilo").val(p[8]);
			$("#idestilo").val(p[7]);
			$("#nombretransmision").val(p[13]);
			$("#idtransmision").val(p[12]);
			$("#idccmotor").val(p[11]);
			$("#nombrecombustible").val(p[18]);
			$("#idcombustible").val(p[17]);
			$("#idplazas").val(p[19]);
			$("#idpuertas").val(p[20]);
			$("#cantkilom").val(p[14]);
			$("#idkilom").val(p[13]);
			$("#nombremesrtv").val(p[22]);
			$("#idmesrtv").val(p[21]);
			$("#nombreprovincia").val(p[26]);
			$("#idprovincia").val(p[25]);

			$("[name=editar]").attr('id','edit'+p[2]);
	});

	$("#btn-datopersonal").click(function(){
		var p = arr('login',4,'',161,'@@usr',0,0,0)[0];    
		var t = arr('login',4,'telefono',135,'idfila = @@usr','','','')[0];

		$("#aliasusuario").val(p[0][1]);
		$("#nombreusuario").val(p[0][2]);
		$("#telusuario").val(p[0][3]);
		$("#correousuario").val(p[0][4]);
		$("#provinciausuario option:selected").val(p[0][7]);
		$("#telefonousuario1").val(t[0]);
		$("#telefonousuario2").val(t[1]);
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

    $("#btn-cambiarproveedor").click(function(){
        var id = $("#vidvehiculo").val();
        var a = arr('login',4,'',159,id,0,0)[0][0];
        $("#provi").val(a[0]);
        $("#provexprovi").html('<option id="opt'+a[1]+'" value="'+a[2]+'">'+a[2]+'</option>');

        var image = $("#v"+id).attr('src');
        $("#fvehi").attr('src',image);
        $("#marca").text( $("#nombremarca").val() );
        $("#modelo").text( $("#nombremodelo").val() );
	    $("#anio").text( $("#idanio").val() );
    });

    $("#changeproveedor").click(function(){
        var idvehiculo = $("#vidvehiculo").attr('vehid');
        var idtaller = $("#provexprovi option:selected").attr('id').substr(3);
        //ACT TALLER
        var i = arr('login',7,2,119,'idtaller = '+idtaller,'id = '+idvehiculo+'',0,0);
        foundation_notify('success','Datos actualizados correctamente', 4000);
    });

	$("#verpass").mousedown(function(){
		$("#newpass").attr('type','text');
		$("#cnewpass").attr('type','text');
	});

	$("#verpass").mouseup(function(){
		$("#newpass").attr('type','password');
		$("#cnewpass").attr('type','password');
	});

	$("#newpass").keyup(function(){
		var k = $(this).val();
		var psize = $("#newpass").val().length;

		var longitud = false,
	    minuscula = false,
	    numero = false,
	    mayuscula = false;
		
	    if (k.length < 6) {
	      $("#length").css({'color':'#DB5050','transition':'0.1s ease'});
	      longitud = false;
	    } else {
	      $("#length").css({'color':'#6FCA1F','transition':'0.1s ease'});
	      longitud = true;
	    }

	    //validate letter
	    if (k.match(/[A-z]/)) {
	      $("#letter").css({'color':'#6FCA1F','transition':'0.1s ease'});
	      minuscula = true;
	    } else {
	      $("#letter").css({'color':'#DB5050','transition':'0.1s ease'});
	      minuscula = false;
	    }

	    //validate capital letter
	    if (k.match(/[A-Z]/)) {
	      $("#capital").css({'color':'#6FCA1F','transition':'0.1s ease'});
	      mayuscula = true;
	    } else {
	      $("#capital").css({'color':'#DB5050','transition':'0.1s ease'});
	      mayuscula = false;
	    }

	    //validate number
	    if (k.match(/\d/)) {
	      $("#number").css({'color':'#6FCA1F','transition':'0.1s ease'});
	      numero = true;
	    } else {
	      $("#number").css({'color':'#DB5050','transition':'0.1s ease'});
	      numero = false;
	    }

	    if (longitud && minuscula && mayuscula && numero) {
	    	$("#verifypass").css({'color':'#6FCA1F','transition':'0.3s ease'});
	    }else{
	    	$("#verifypass").css({'color':'#DB5050','transition':'0.3s ease'});
	    }
	}).focus(function() {
    	$('#pswd_info').show();
  	}).blur(function() {
    	$('#pswd_info').hide();
  });

  	$("#cnewpass").keyup(function(){
  		
  		var confirm = $(this).val();
  		$(this).css('color','#fff');

  		if ($("#newpass").val() == confirm) {
  			$("#circle-verify").css({'color':'#6FCA1F','transition':'0.2s ease'});
  		}else{
  			$("#circle-verify").css({'color':'#fff','transition':'0.2s ease'});
  		}
  	});

  	$("#newpass").keyup(function(){
  		
  		var confirm = $(this).val();
  		$(this).css('color','#fff');

  		if ($("#cnewpass").val() == confirm) {
  			$("#circle-verify").css({'color':'#6FCA1F','transition':'0.2s ease'});
  		}else{
  			$("#circle-verify").css({'color':'#fff','transition':'0.2s ease'});
  		}
  	});


	$("#newuser").keyup(function(){
		var m = $(this).val();
		var contkey = $("#newuser").val().length;

			var q = arr('login',4,'user',1,'user = "'+m+'" and id > 0',0,0,0)[0][0];
			if (q == undefined) {
				if (contkey > 5) {
					$("#size").css('color','#6FCA1F');
				}else{
					$("#size").css('color','#DB5050');
				}
				$("#dispon").css('color','#6FCA1F');
				$("#available").css('color','#6FCA1F');
				$("#available").html(m+' está disponible');
			}else{
				$("#dispon").css('color','#DB5050');
				$("#available").css('color','#DB5050');
				$("#available").html('<strong>'+m+'</strong> no está disponible');
			}

			if (m.match(/^[a-zA-Z0-9- ]*$/)) {
				$("#simbol").css('color','#6FCA1F');
			}else{
				$("#simbol").css('color','#DB5050');
			}
	}).focus(function() {
    	$('#user_info').show();
  	}).blur(function() {
    	$('#user_info').hide();
  });

	$("#changeuser").click(function(){
		var newusr = $("#newuser").val().length;

		if (newusr < 5) {
			$("#messuser").show();
			$("#messuser").addClass('ambar-text');
			$("#messuser").removeClass('red-text');
			$("#messuser").removeClass('green-text');
			$("#messuser").html('Nombre de usuario muy corto!');
		}else{
				// VALIDACION CARACTER ESPECIAL
			var str = $('#newuser').val();
			if(/^[a-zA-Z0-9- ]*$/.test(str) == false) {
				$("#messuser").show();
				$("#messuser").addClass('ambar-text');
				$("#messuser").removeClass('red-text');
				$("#messuser").removeClass('green-text');
			    $("#messuser").html('El usuario no puede contener caracteres especiales');
			}else{
				// CAMBIO USUARIO
				arr('login',7,2,1,'user = "'+$("#newuser").val()+'"','id = @@usr');
			}
		}
	});

	$("#changepass").click(function(){
		var newpass = $("#newpass").val().length;
		var str1 = $('#newpassr').val();
		var str2 = $('#cnewupass').val();

		$("#messpass").html('');

		if (str1 == str2) {
			$("#messpass").html('IGUALES');
		}else{
			$("#messpass").html('NO SON IGUALES');
		}

	});

	$("#changeperdata").click(function(){
		var nom = $("#nombreusuario").val();
		var cedu = $("#telusuario").val();
		var mail = $("#correousuario").val();
		// var prov = $("#provinciausuario").val();
		// var tel1 = $("#telefonousuario1").val();
		// var tel2 = $("#telefonousuario2").val();

		console.log(arr('login',7,2,1,'nombre='+nom+',telefono='+cedu+',mail='+mail,0,0));
	});


}); //FIN READY

$(document).on("click",".pic-contain",function(){
	//VEHICULOS
	arr('login',7,2,119,'idmarca='+$("#idmarca").val()+',idmodelo=,idestilo=,placa=,anio=');

	//DETALLEVEHICULOS
	arr('login',7,2,120,'ccmotor=,idtransmision=,idrecorrido=,idcombustible=,plazas=,puertas=,idmesrtv=,colorext=,colorint=,idprovincia=');
});

$(document).on("click","#Iadd",function(){
	deadclear('cliente_conf');
});

$(document).on("click",".btn-green-conf",function(){
	var id = $(this).attr('id').substr(4);

	$("#"+id).removeClass('hide');
	
	$(".close-reveal-modal").click(function(){
		$("#"+id).addClass('hide');
	});
});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'cliente_conf':
			if (vmodulo['tip'] == '') {
				err = validarcliente_conf();
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

function validarcliente_conf() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'cliente_conf':
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