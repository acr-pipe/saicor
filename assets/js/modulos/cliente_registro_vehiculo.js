Dropzone.autoDiscover = false;
var myDropzone;

$(function(){

	myDropzone = new Dropzone("#registro-upload", {
	url: '../cargar.php',
	autoProcessQueue:false,
	maxFilesize: 3,
	addRemoveLinks:true,
	uploadMultiple: true,
	init: function() {
	  this.on("uploadprogress", function(file, progress) {
	    console.log("File progress", progress);
	  });
	}
	});


	$(document).on("blur","#vplaca",function(){
		var placa = $(this).val();
		var match = arr('login',4,'placa',119,'placa = "'+placa+'"',0,0,0)[0];

		if (match.length > 0 ) {
			foundation_notify('warning', 'La placa '+placa+' ya se encuentra registrada', 4000);
		}

	});

	$(".rpostfix").click(function(){
		var tipo = $(this).attr('valor');

		if (tipo == 1) {
			$(this).html('mi');
		$(this).attr('valor',2);

		}else if (tipo == 2) {
			$(this).html('km');
			$(this).attr('valor',1);
		}
		$("#vidtiporecorrido").val($(this).attr('valor'))
	});

	 $("input[name='seguridadchk'").click(function(){
		var estado = $(this).attr('estado');
	 	var id = $(this).attr('id');

	 	if (estado == 0) {
	 		$(this).prop('checked',true);
			$(this).attr('estado',1);
	 	}else if (estado == 1) {
	 		$(this).prop('checked',false);
	 		$(this).attr('estado',0);
	 	}
	 });

	 $("input[name='confortchk'").click(function(){
		var estado = $(this).attr('estado');
	 	var id = $(this).attr('id');

	 	if (estado == 0) {
	 		$(this).prop('checked',true);
			$(this).attr('estado',1);
	 	}else if (estado == 1) {
	 		$(this).prop('checked',false);
	 		$(this).attr('estado',0);
	 	}
	 });


	 $("#segtodos").click(function(){
	 	var estado = $(this).attr('estado');

	 	if (estado == 0) {
	 		$("input[name='seguridadchk']").prop('checked',true);
	 		$("input[name='seguridadchk']").attr('estado',1);
			$(this).attr('estado',1);
	 	}else if (estado == 1) {
	 		$("input[name='seguridadchk']").prop('checked',false);
	 		$("input[name='seguridadchk']").attr('estado',0);
	 		$(this).attr('estado',0);
	 	}
	 });

	$("#conftodos").click(function(){
	 	var estado = $(this).attr('estado');

	 	if (estado == 0) {
	 		$("input[name='confortchk']").prop('checked',true);
	 		$("input[name='confortchk']").attr('estado',1);
			$(this).attr('estado',1);
	 	}else if (estado == 1) {
	 		$("input[name='confortchk']").prop('checked',false);
	 		$("input[name='confortchk']").attr('estado',0);
	 		$(this).attr('estado',0);
	 	}
	 });

	$(".picture").click(function(){
		$("#pictureh").click();
		// $(".picture-upload").append('<img src="'+pic+'" class="foto-form">');
	});

	$("#videstilo").change(function(){
		var opt = $('option:selected',this).attr('name');
		var clean = '../assets/img/registro/mod/sedan.svg';
		$("#estilo-carro").attr('src',clean);
		var nuevo = '../assets/img/registro/mod/'+opt+'.svg';
		$("#estilo-carro").attr('src',nuevo);
	});


	var options = {
		url: "../assets/json/marcas.php",
		getValue: "nombre",
		list: {
		match: {
		enabled: true
		}
		},
		template: {
		    type: "custom",
		    method: function(value, item) {
		      return value+"<input type='hidden' class='mval' value='"+item.id+"'>";
		    }
		 },
		theme: "square"
	};

	$("#marcavehi").easyAutocomplete(options);

	$("#marcavehi").blur(function(){
		var options = {
			url: "../assets/json/modelos.php?marca="+$("#eac-container-marcavehi ul li.selected .eac-item .mval").val(),
			getValue: "nombre",
			list: {	
			match: {
			enabled: true
			}
			},
			template: {
			    type: "custom",
			    method: function(value, item) {
			      return value+"<input type='hidden' class='mval' value='"+item.id+"'>";
			    }
			 },
			theme: "square"
		};
		$("#vidmarca").val($("#eac-container-marcavehi ul li.selected .eac-item .mval").val())
		$("#modelovehi").easyAutocomplete(options);
	});

	$("#modelovehi").blur(function(){
		$("#vidmodelo").val($("#eac-container-modelovehi ul li.selected .eac-item .mval").val())
	});

	$("#fvehiculos .zelda").data('triforce',{vaccion: 0,vid: 0,vidusuario: '',vidmarca: 1,vidmodelo: 1,venventa: 0,vanio: '',vplaca: ''});
	$("#fdetallevehiculos .zelda").data('triforce',{vaccion: 0,vid: 0,vidvehiculo: '?',vidconfort: '',vidseguridad: '',vcolorext: '',vcolorint: '',vccmotor: '',vplazas: '',vpuertas: '',vidrecorrido: '',vidtallerasociado: 0,vrecorridoold: 0});

}); //FUNCTION


$(window).keydown(function(e){
	var code = e.wich || e.keyCode;
	if (code == 114) {
		$("#vcolorext").val('Negro');
		$("#vcolorint").val('Negro');
		$("#vccmotor").val('1200');
		$("#vplazas").val('4');
		$("#vpuertas").val('4');
		$("#vidrecorrido").val('90000');
		$("#vanio").val('2010');
		$("#vplaca").val('000000');
	}
});

$(document).on("click","#Iadd",function(){
	deadclear('cliente_registro_vehiculo');
});

function validar (varreglo,vmodulo) {
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'vehiculo':
			if (vmodulo['tip'] == '') {
				err = validarcliente_registro_vehiculo();
				if ( err ) {
					return err;
				}
			}
			break;
		case 'detallevehiculo':
			if (vmodulo['tip'] == '') {
				err = validarcliente_registro_detalle_vehiculo();
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

function validarcliente_registro_detalle_vehiculo(){
	var conf = '';
	var seg = '';

	$("input[name='seguridadchk']").each(function(){
	 	var estado = parseInt($(this).attr('estado'));
	 	var id = $(this).attr('id').substr(3);
	 	if (estado)
	 		seg += id+',';
	});

 	$("input[name='confortchk']").each(function(){
	 	var estado = parseInt($(this).attr('estado'));
	 	var id = $(this).attr('id').substr(4);	
	 	if (estado)
	 		conf += id+',';
	});

	$("#fdetallevehiculos .zelda").data('triforce')['vidconfort'] = conf;
	$("#fdetallevehiculos .zelda").data('triforce')['vidseguridad'] = seg;

	if($("#vcolorext").val() ==''){
		$("#vcolorext").focus();
		return 'Color externo Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vcolorext'] = $("#vcolorext").val();
	}

	if($("#vcolorint").val() ==''){
		$("#vcolorint").focus();
		return 'Color interno Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vcolorint'] = $("#vcolorint").val();
	}

	if($("#vccmotor").val() ==''){
		$("#vccmotor").focus();
		return 'Cilindraje de motor Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vccmotor'] = $("#vccmotor").val();
	}

	if($("#vplazas").val() ==''){
		$("#vplazas").focus();
		return 'Plazas disponibles en vehículo Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vplazas'] = $("#vplazas").val();
	}

	if($("#vpuertas").val() ==''){
		$("#vpuertas").focus();
		return 'Número de puertas Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vpuertas'] = $("#vpuertas").val();
	}

	if($("#vidrecorrido").val() ==''){
		$("#vidrecorrido").focus();
		return 'Recorrido Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vidrecorrido'] = $("#vidrecorrido").val();
	}

	return false;
}

function validarcliente_registro_vehiculo() {

	if($("#marcavehi").val() ==''){
		$("#marcavehi").focus();
		return 'Marca Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vidmarca'] = $("#eac-container-marcavehi ul li.selected .eac-item .mval").val();
	}

	if($("#modelovehi").val() ==''){
		$("#modelovehi").focus();
		return 'Modelo Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vidmodelo'] = $("#eac-container-modelovehi ul li.selected .eac-item .mval").val();
	}

	if($("#vanio").val() ==''){
		$("#vanio").focus();
		return 'Año Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vanio'] = $("#vanio").val();
	}

	if($("#vplaca").val() ==''){
		$("#vplaca").focus();
		return 'Placa Requerido';
	}else{
		 $("#fvehiculos .zelda").data('triforce')['vplaca'] = $("#vplaca").val();
	}

	return false;
}

function endDetail(vid,acc,modulo){
	switch(modulo){
		case 'vehiculo':
			if ($(".dz-preview").length > 0) {
				$("input[name='idvehiculo']").val(vid);
				myDropzone.processQueue();
			}else{
				arr('login',7,1,133,'','null,\"../assets/imgupload/cars/car.png\",'+vid,0,0);
			}
			deadclear(modulo);
			console.log(modulo);
		break;
	}
    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'cliente_registro_vehiculo':
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
