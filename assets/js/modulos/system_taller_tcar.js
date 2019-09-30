$(function(){
    $("#ftaller_tcars").submit(function(){return false});
    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 480px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }   

    // media query change
    function WidthChange(mq) {
      if (mq.matches) {
        // window width <= 480px
        $("#sectTcar1").html("");
        $("#sectTcar1").html('<div class="row"><div class=" large-6 med ium-6 columns"><div class="large-12 medium-12 small-12 columns"><img src="../assets/img/carro_taller.svg" width="23%"><br><br><div class="row collapse"><div class="small-10 columns"><input type="text" id="placa" class="input" placeholder="Placa"></div><div class="small-2 columns"><a href="#" class="button postfix postround"><i class="fa fa-search"></i></a></div></div></div></div>       <div class=" large-6 medium-6 columns"><div class="large-4 medium-4 small-12 columns"><img src="../assets/img/sello_tcar.png" width="50%"><br>Tcar<br><input type="text" id="sellos" class="input input-sello" value="" disabled style="background: #686868 !important; color: #FAFAFA !important"></div><div class="large-4 medium-4 small-12 columns"><img src="../assets/img/sello_tcarplus.png" width="50%"><br>Tcar plus<br><input type="text" id="sellos_plus" class="input input-sello" value="" disabled style="background: #686868 !important; color: #FAFAFA !important"></div>     <div class="large-4 medium-4 small-12 columns"><img src="../assets/img/sello_tcarblue.png" width="50%"><br>Tcar blue<br><input type="text" id="sellos_blue" class="input input-sello" value="" disabled style="background: #686868 !important; color: #FAFAFA !important"></div></div></div>');
           // <div class="large-4 medium-4 small-12 columns"><input type="text" id="placa" class="input" placeholder="Seleccione la placa"></div>
      } else {
        // window width > 480px
        $("#sectTcar1").html("");
        $("#sectTcar1").html('<div class="row"><div class=" large-6 medium-6 columns"><div class="large-12 medium-12 small-12 columns"><img src="../assets/img/carro_taller.svg" width="23%"><br><br><div class="row collapse"><div class="small-10 columns"><input type="text" id="placa" class="input" placeholder="Placa"></div><div class="small-2 columns"><a href="#" class="button postfix postround"><i class="fa fa-search"></i></a></div></div></div></div>       <div class=" large-6 medium-6 columns"><div class="large-4 medium-4 small-4 columns"><img src="../assets/img/sello_tcar.png" width="50%"><br>Tcar<br><input type="text" id="sellos" class="input input-sello" value="" disabled style="background: #686868 !important; color: #FAFAFA !important"></div><div class="large-4 medium-4 small-4 columns"><img src="../assets/img/sello_tcarplus.png" width="50%"><br>Tcar plus<br><input type="text" id="sellos_plus" class="input input-sello" value="" disabled style="background: #686868 !important; color: #FAFAFA !important"></div>  <div class="large-4 medium-4 small-4 columns"><img src="../assets/img/sello_tcarblue.png" width="50%"><br>Tcar blue<br><input type="text" id="sellos_blue" class="input input-sello" value="" disabled style="background: #686868 !important; color: #FAFAFA !important"></div></div></div>');
      }

    }

        $(".rpostfix").click(function(){
            var tipo = $(this).attr('valor');

            if (tipo == 1) {
                $(this).html('mi');
                $(this).attr('valor',2);

            }else if (tipo == 2) {
                $(this).html('km');
                $(this).attr('valor',1);
            }
            $("#vidtiporecorrido").val($(this).attr('valor'));
        });

    $(".btn-accept").click(function(){
    	var idvehi = $("#idtcar").val();
		var vtiposello = $("#tiposello").val();
        var tcar = 0;
        var tcar_plus = 0;
        var tcar_blue = 0;

		var a = arr('login',4,'sello',119,'id = '+idvehi,0,0)[0][0];
		if (vtiposello == 1) {
    		$("#selloTabla").html('<img src="../assets/img/sello_tcar.png" class="ico-table">');
    	    $('#modalEvaluate').foundation('reveal', 'close');
            tcar = 1; tcar_plus = 0; tcar_blue = 0;
        }else if (vtiposello == 2) {
            $("#selloTabla").html('<img src="../assets/img/sello_tcarplus.png" class="ico-table">');
            $('#modalEvaluate').foundation('reveal', 'close');
            tcar = 0; tcar_plus = 1; tcar_blue = 0;
        }else if (vtiposello == 3) {
            $("#selloTabla").html('<img src="../assets/img/sello_tcarblue.png" class="ico-table">');
            $('#modalEvaluate').foundation('reveal', 'close');
            tcar = 0; tcar_plus = 0; tcar_blue = 1;
        }else {
            $("#selloTabla").html('');
        }

        var p = arr('login',4,'',150,idvehi+',@@usr,'+vtiposello);
        if (!p['succed']) {
            console.log(p[0]['ERROR'])
            notify(p[0]['ERROR']);
        }else{
            $("#sellos").val(p[0][0][0]);
            $("#sellos_plus").val(p[0][0][1]);

            var idusr = $("#hidusr"). val();
            var fulltevaluacion = arr('login',4,'',181,'1,0,'+idusr+','+idvehi+',now(),1,1,0,0,1,1',0,0,0);
            getCantsellos();
            
            // registro de sellos vendidos
            var s = arr('login',4,'',184,'1,0,@@usr,'+tcar+','+tcar_plus+','+tcar_blue+',now(),'+idvehi,0,0,0);
            console.log(s);
        }

    });

    $(".btn-cancel").click(function(){
    	$('#modalEvaluate').foundation('reveal', 'close');
    });

    // var km = 18750;
    // var r = (km / 1000);
    // var rs = Math.round(r) * 1000;
    // console.log(rs)

    $("#btnkilom").click(function(){
        var placa = $("#placa").val();
        var infoPlaca = arr('login',4,'',149,'"'+placa+'"',0,0,0)[0][0];
        var ultkm = $("#ultkmtcar").text();
        var newkm = parseInt( $("#typedist").val() );
        var typedist = $("#typedist").val();

        if ( typedist == '') {
            foundation_notify('alert','Debe digitar primero un kilometraje nuevo', 4000);
        }else if ( newkm <= infoPlaca[9] ){
            foundation_notify('alert','El valor introducido no puede ser menor a '+ultkm+'', 4000);
        }else{
            arr('login',7,2,120,'recorridoold = '+infoPlaca[9],'idvehiculo = '+infoPlaca[8]+'',0,0);
            arr('login',7,2,120,'idrecorrido = '+newkm,'idvehiculo = '+infoPlaca[8]+'',0,0);
            foundation_notify('success','El kilometraje se ha actualizado correctamente!', 4000);

            var oldmant = newkm - ultkm;
            var mant = oldmant / 5;
            console.log('km: '+mant);
            if (mant > 0 && mant <=5000) {
                $("#mantapl").html('5,000 km');
            }else if (mant > 5001 && mant <=20000) {
                $("#mantapl").html('20,000 km');
            }else if (mant > 20001 && mant <=25000) {
                $("#mantapl").html('25,000 km');
            }else if (mant > 25001 && mant <=30000) {
                $("#mantapl").html('30,000 km');
            }else if (mant > 30001 && mant <=35000) {
                $("#mantapl").html('35,000 km');
            }else if (mant > 35001 && mant <=60000) {
                $("#mantapl").html('60,000 km');
            }else if (mant > 60000) {
                $("#mantapl").html('60,000 km');
            }
        }
    });

}); //READY

$(document).on("click","#addpagoclientes",function(){
    var idclie = $("#hidusr").val();
    var placa = $("#placatcar").text();
    var monto = $("#montocompra").val();
    var pago = arr('login',4,'',187,'1,0,'+idclie+',"'+placa+'",now(),'+monto+',@@usr',0,0,0);
    console.log(pago);
});

$(document).on("click","#Iadd",function(){
    deadclear('taller_tcar')
});

$(document).on("click",".adjsel",function(){
    var id = $(this).attr('id');
    
    if (id == 'adjsello') {
        $("#modalTitle").html('Sello Tcar');
        $("#imtitle").html('Tcar');
        $("#tiposello").val(1);
    }else if (id == 'adjselloplus') {
         $("#modalTitle").html('Sello Tcar Plus');
         $("#imtitle").html('Tcar Plus');
         $("#tiposello").val(2);
    }else if (id == 'adjselloblue') {
        $("#modalTitle").html('Sello Tcar Blue');
         $("#imtitle").html('Tcar Blue');
         $("#tiposello").val(3);
    }
});

$(document).ready(function(){
    getCantsellos();
});

function getCantsellos(){
    var sellos = arr('login',4,'',166,'@@usr',0,0,0)[0][0][2];
    var sellos_plus = arr('login',4,'',166,'@@usr',0,0,0)[0][0][11];
    var sellos_blue = arr('login',4,'',166,'@@usr',0,0,0)[0][0][12];

    $("#sellos").val(sellos);
    $("#sellos_plus").val(sellos_plus);
    $("#sellos_blue").val(sellos_blue);
}


$(document).on("click",".postround",function(){
    cargarDatosTaller();
});

$(document).on("keyup","#placa",function(e){
    var code = e.which || e.keyCode;
    if (code == 13) {
        cargarDatosTaller();
    }
});

function validar (varreglo,vmodulo) {
    
    var salida = {}
    
        /*VALIDACION FRONT END*/
    
    switch(vmodulo['modulo']) {
        case 'taller_tcar':
            if (vmodulo['tip'] == '') {
                err = validartaller_tcar();
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

function validartaller_tcar() {


    return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


    switch(vmodulo['modulo']) {
        case 'taller_tcar':
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

function cargarDatosTaller(){
    var placa = $("#placa").val();
    var infoClie = arr('login',4,'',149,'"'+placa+'"',0,0,0)[0][0];

    if (infoClie == undefined) {
    	$("#hidusr").val("");
        $("#idtcar").val("");
        $("#nomtcar").text("- - -");
        $("#cedtcar").text("- - -");
        $("#placatcar").text("- - -");
        $("#marcatcar").text("- - -");
        $("#modelotcar").text("- - -");
        $("#tallertcar").text("- - -");
        $("#ultkmtcar").text("- - -");
        $("#nomb").text("- - -");
        $("#plak").text("- - -");
		$("#mark").text("- - -");
		$("#mode").text("- - -");
        $("#plak").text("- - -");
        $("#msjAlert").text('No existe información asociada a ese numero de placa!');
        $("#typedist").attr('disabled',true);
        $("#btnkilom").attr('disabled',true);
        // $(".htd").addClass('hide');
    }else{
        $("#msjAlert").text('');
        $("#hidusr").val(infoClie[0]);
        $("#idtcar").val(infoClie[8]);
        $("#nomtcar").text(infoClie[1]);
        $("#cedtcar").text(infoClie[2]);
        $("#placatcar").text(infoClie[3]);
        $("#marcatcar").text(infoClie[4]);
        $("#modelotcar").text(infoClie[5]);
        $("#tallertcar").text(infoClie[6]);
        $("#ultkmtcar").text(infoClie[9]);

        $("#nomb").text(infoClie[1]);
        $("#plak").text(infoClie[3]);
		$("#mark").text(infoClie[4]);
		$("#mode").text(infoClie[5]);
        $("#typedist").attr('disabled',false);
        $("#btnkilom").attr('disabled',false);
        $("#montocompra").attr('disabled',false);
        $("#addpagoclientes").attr('disabled',false);
        // $(".htd").removeClass('hide');

    }

    var selloClie = infoClie[7];
    if (selloClie == 1) {
    	 $("#selloTabla").html('<img src="../assets/img/sello_tcar.png" class="ico-table">');
    }else if (selloClie == 2) {
         $("#selloTabla").html('<img src="../assets/img/sello_tcarplus.png" class="ico-table">');
    }else if (selloClie == 3){
         $("#selloTabla").html('<img src="../assets/img/sello_tcarblue.png" class="ico-table">');
    }else {
    	$("#selloTabla").html('<div class="row"> <div class="columns small-4"> <a href="#" id="adjsello" class="adjsel white-text" data-reveal-id="modalEvaluate">Tcar</a> </div> <div class="columns small-4"> <a href="#" id="adjselloplus" class="adjsel white-text" data-reveal-id="modalEvaluate">Tcar Plus</a> </div>    <div class="columns small-4"> <a href="#" id="adjselloblue" class="adjsel white-text" data-reveal-id="modalEvaluate">Tcar Blue</a> </div> </div>');
    }
}