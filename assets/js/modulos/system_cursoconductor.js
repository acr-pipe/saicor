$(function(){
	$("#fcursoconductors").submit(function(){return false});
	// $("#data-table-cursoconductors").dataTable();

    $("#btnmeter").click(function(){
        $(".meter").css({"width": "25%", "transition": "1.5s"});
    });

    $(".li-a").click(function(){
        $(".li-a").removeClass('is-active');
        $(this).addClass('is-active');
    });

    $(".ayuda").click(function(){
        $(document).foundation('joyride', 'start');
    });

    $(".resp").keyup(function(e){

        if ( $("#respuesta1").val() != '' && $("#respuesta2").val() != '' && $("#respuesta3").val() != '') { 
            //&& $("#respuesta2").val() == '' && $("#respuesta3").val() == ''
            $(".btnevnresp").removeAttr("disabled");
            $(".btnevnresp").removeClass("is-hide");
        }else{
            $(".btnevnresp").addClass("is-hide");
            $(".btnevnresp").attr('disabled','true');
        }

    });

    $(".btnevnresp").click(function(){
        // var vbody = '<div class="container" style="widht: 50%"><div class="container" style="background: #F7F7F7; padding:0.2em" align="center"><img src="../assets/img/formmail.png" width="50px" height="50px"><h3>Curso de Conductor <label>Tcar</label></h3></div><div padding:0.5em"><p>El formulario es enviado por:<br><br>Nombre: <b>@@nom</b><br>Usuario: <b>@@usr</b> </p><p><b>Pregunta 1.</b> '+$("#pregunta1").text()+'</p><p>'+$("#respuesta1").val()+'</p><br><p><b>Pregunta 2.</b> '+$("#pregunta2").text()+'</p><p>'+$("#respuesta2").val()+'</p><br><p><b>Pregunta 3.</b> '+$("#pregunta3").text()+'</p><p>'+$("#respuesta3").val()+'</p><br></div></div>';
        
        //     enviarCorreo(1,'saicorvs@gmail.com','Envio de Formulario',vbody,'');

            // Actualizar evaluacion
            // var a = arr('login',7,2,175,'conductor = 1, id = @@usr',0,0,0);
            // Ingresar evaluacion
            // var a = arr('login',7,1,175,'','0,@@usr,0,now(),0,0,1,0,0',0,0,0);
            var actevaluacion = arr('login',4,'',181,'2,0,@@usr,0,now(),0,0,1,0,0,0',0,0,0);
                                                    
            console.log(actevaluacion);
            if (actevaluacion['succed']) {
              foundation_notify('success', 'Curso de conductor aprobado! Buen trabajo! <i class="far fa-thumbs-up"></i>', 4000);
            }else{
              foundation_notify('danger', 'No pudo completarse correctamente el proceso de Curso de Conductor Tcar', 4000);
            }

    });


}); //END READY


$(document).on("click","#Iadd",function(){
	deadclear('cursoconductor')

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'cursoconductor':
			if (vmodulo['tip'] == '') {
				err = validarcursoconductor();
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

$(document).ready(function() {
  fixFooter();//at page load
});

$(window).resize(function() {
  fixFooter();//at page resize
});

function fixFooter() {
  footer=$("#footer");
  height=footer.height();
  paddingTop=parseInt(footer.css('padding-top'),10);//zero if is undefined
  paddingBottom=parseInt(footer.css('padding-bottom'),10);//zero if is undefined
  // totalHeight=(height+paddingTop+paddingBottom);
  // footerPosition=footer.position();
  // windowHeight=$(window).height();
  // height=(windowHeight - footerPosition.top)-totalHeight;
  if ( height > 0 ) {
    footer.css({
      'margin-top': (height) + 'px'
    });
  }
}








function validarcursoconductor() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'cursoconductor':
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