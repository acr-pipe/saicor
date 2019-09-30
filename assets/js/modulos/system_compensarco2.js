$(function(){
	$("#fcompensarco2s").submit(function(){return false});
	// $("#data-table-compensarco2s").dataTable();


	$(".compensar").click(function(){
		var day = getDate()[0];
		var month = getDate()[1];
		var year = getDate()[2];

		var idv = $('[name="active"]').attr('id').substr(3);

		var p = arr('login', 4, 'placa', 119, 'id = '+idv ,0,0,0)[0][0];

		$("#sdesde").text(day+'/'+month+'/'+year);
		$("#shasta").text(day+'/'+month+'/'+year+1);
		$("#placav").text(p);

		var id = $("#vehih").val();
		// Act
		var a = arr('login',7,2,175,'idvehiculo = '+id+', co2 = 1','idusuario = @@usr',0,0,0);
		// Ins
		var b = arr('login',7,1,176,'','0,'+id+',now(),1',0,0,0);

		console.log(b)
        foundation_notify('success', 'Tu vehículo ha compensado emisiones con éxito! Buen trabajo! <i class="fas fa-tree"></i>', 4000);
        // var a = arr('login',7,1,175,'','0,@@usr,0,now(),0,0,1,0,0',0,0,0);
        // foundation_notify('success', 'Curso de conductor aprobado! Buen trabajo! <i class="far fa-thumbs-up"></i>', 4000);

	});

	// cton UCC
	// mfonafifo UCC*7.5
	// msaicor UCC*0.5
	// mtotal (mfonafifo+msaicor)

}); //END READY

$(document).ready(function(){

	var p = arr('login', 4, '', 130, '@@usr',0,0,0);

	$("#getvehiculo").html('');

	for (var i = 0; i < p[0].length; i++) {
		if (p[0][i][7] == 0 || p[0][i][7] == null) {
			$("#getvehiculo").append('<li class="lipic" id="li'+p[0][i][2]+'" title="'+p[0][i][3]+' '+p[0][i][4]+' '+p[0][i][5]+'"><img id="pic'+p[0][i][2]+'" class="pic-contain" src="'+p[0][i][0]+'"> </li>');
		}else{
			$("#getvehiculo").append('<li class="lipic" id="li'+p[0][i][2]+'" title="'+p[0][i][3]+' '+p[0][i][4]+' '+p[0][i][5]+'"><img id="pic'+p[0][i][2]+'" class="pic-contain" src="'+p[0][i][0]+'"> <i class="fa fa-check-circle fa-1x chk"></i> </li>');
		}
		// '<li class="lipic"> <label id="info"> <span id="marca"><b class="text08em">'+p[0][i][3]+'</b></span></label> <img class="pic-contain" src="'+p[0][i][0]+'"> <label id="info2"> <span id="modelo" class="text08em">'+p[0][i][4]+'</span><br><span id="anio" class="text08em">'+p[0][i][5]+'</span></label></li>'
		// '<li class="lipic"> <img class="pic-contain" src="'+p[0][i][0]+'"> <label id="info" style="font-size: 0.8em"><b>Marca:</b> <span id="marca">'+p[0][i][3]+'</span><br><b>Modelo:</b> <span id="modelo">'+p[0][i][4]+'</span> <br><b>Año:</b> <span id="anio">'+p[0][i][5]+'</span></label> </li>'
		// '<li class="lipic"> <label id="info" style="font-size: 0.8em"> <span id="marca"><b>'+p[0][i][3]+'</b></span> <span id="modelo">'+p[0][i][4]+'</span></label> <img class="pic-contain" src="'+p[0][i][0]+'"> <label label id="info" style="font-size: 0.8em"> <span id="anio">'+p[0][i][5]+'</span></label> </li>'
	}
});

// '<i class="fa fa-check-circle fa-1x chk"></i>'

$(document).on("click","#btn-calcular1",function(){
	var lgaso = $("#lgasolina").val();
	var cons = 2.315;
	var totalanual = ((((lgaso *12) *cons) /1000 ));
	var total = ((((lgaso *12) *cons) /1000 ) *4800);
	$("#anualgasolina").val(totalanual.formatMoney(2,',','.'));
	$("#totalgasolina").val(total.formatMoney(2,',','.'));
});

$(document).on("click","#btn-calcular2",function(){
	var ldiesel = $("#ldiesel").val();
	var cons = 2.74;
	var totalanual = ((((ldiesel *12) *cons) /1000 ));
	var total = ((((ldiesel *12) *cons) /1000 ) *4800);
	$("#anualdiesel").val(totalanual.formatMoney(2,',','.'));
	$("#totaldiesel").val(total.formatMoney(2,',','.'));
});


$(document).on("keyup","#lgasolina",function(e){
	 var code = e.which || e.keyCode
    if (code == 13) {
    	var lgaso = $("#lgasolina").val();
		var cons = 2.315;
		var totalanual = ((((lgaso *12) *cons) /1000 ));
		var total = ((((lgaso *12) *cons) /1000 ) *4800);
	$("#anualgasolina").val(totalanual.formatMoney(2,',','.'));
	$("#totalgasolina").val(total.formatMoney(2,',','.'));
	}
});

$(document).on("keyup","#ldiesel",function(e){
	 var code = e.which || e.keyCode
    if (code == 13) {
    	var lgaso = $("#ldiesel").val();
		var cons = 2.74;
		var totalanual = ((((ldiesel *12) *cons) /1000 ));
		var total = ((((lgaso *12) *cons) /1000 ) *4800);
	$("#anualdiesel").val(totalanual.formatMoney(2,',','.'));
	$("#totaldiesel").val(total.formatMoney(2,',','.'));
	}
});

$(document).on("click",".pic-contain",function(){
		var id = $(this).attr('id').substr(3);
		$("#vehih").val(id);
		$("[name = compg]").attr('id', 'btncompg'+id);
		$("[name = compd]").attr('id', 'btncompd'+id);

		$(".pic-contain").removeAttr('name');
		$(this).attr('name','active');
		$(".pic-contain").addClass('blur');
		$(this).removeClass('blur');
});

$(document).on("click","#Iadd",function(){
	deadclear('compensarco2')

});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'compensarco2':
			if (vmodulo['tip'] == '') {
				err = validarcompensarco2();
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

function validarcompensarco2() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'compensarco2':
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

function getDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //Enero es 0!
	var yyyy = today.getFullYear();
	var fecha = new Array();

	if(dd<10) {dd='0'+dd} 

	if(mm<10) {mm='0'+mm} 

	var m = arr('login',4,'nombre',126,'id =' + mm)[0][0];

	// today = dd+'/'+m[0]+'/'+yyyy;

	fecha.push(dd);
	fecha.push(m[0]);
	fecha.push(yyyy);

	return fecha;
}