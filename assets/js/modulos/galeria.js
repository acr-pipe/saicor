var d = new Date();

$(function(){

	$("#fgalerias").submit(function() { return false; });
	$("#opt-filter").click(function() {
		var estado = $("#div-filter").attr('estado');
		if (estado == 0) {
			$("#div-filter").attr('estado',1);
		}else{
			$("#div-filter").attr('estado',0);
		}
		$("#div-filter").fadeToggle("slow");
	});

	// var arr = {}
 //    arr['sel'] = 'min(preecioventa)';
 //    arr['tbl'] = 128;
 //    arr['where'] = 'id > 0';
 //    var precMin = mantenimiento('login',4,arr)[0][0][0];
 //    console.log(precMin)

 //    var arr = {}
 //    arr['sel'] = 'max(preecioventa)';
 //    arr['tbl'] = 128;
 //    arr['where'] = 'id > 0';
 //    var precMax = mantenimiento('login',4,arr)[0][0][0];
 //    console.log(precMax)

	var limitSlider = document.getElementById('range');
	noUiSlider.create(limitSlider, {
		start: [ 2000, d.getFullYear() ],
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		behaviour: 'drag',
		connect: true,
		range: {
			'min': 1970,
			'max': d.getFullYear() + 1
		}
	});

	var input0 = document.getElementById('anio1');
	var input1 = document.getElementById('anio2');
	var inputs = [input0, input1];

	limitSlider.noUiSlider.on('update', function( values, handle ) {
		inputs[handle].value = Math.trunc(values[handle]);
	});
	
	// console.log(precMin+' '+precMax)
	// var limitSlider = document.getElementById('rangeP');
	// noUiSlider.create(limitSlider, {
	// 	start: [ 0, 0 ],
	// 	tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
	// 	behaviour: 'drag',
	// 	connect: true,
	// 	range: {
	// 		'min': precMin,
	// 		'max': precMax
	// 	}
	// });

	// var input0 = document.getElementById('price1');
	// var input1 = document.getElementById('price2');
	// var inputs = [input0, input1];

	// limitSlider.noUiSlider.on('update', function( values, handle ) {
	// 	inputs[handle].value = Math.trunc(values[handle]);
	// });

	

	paginate($(".pagination").attr('vtbl'));

});


$(document).ready(function() {

	$(document).foundation();
	if ($("#usr_session").val() == '') {
		$("#favoritos").addClass('hide');
	}else{
		$("#favoritos").removeClass('hide');
	}
});

$(document).on("keyup","#search_carros",function(e){
    var code = e.which || e.keyCode
    if (code == 13) {
    	var filtro = $(this).val();
	    var isfavorito = $("#isFavorite").is(":checked") == true ? 1 : 0;
        var usr = $("#usr_session").val();
		var tipo = $("#tdisplay").val();
		if (usr == '') {
			usr = 0;
		}else{
			usr = '@@usr';
		}
		var arr = {};
		arr['sel'] = '';
		arr['tbl'] = 177;
		arr['where'] = '"'+filtro+'",'+usr+',0,'+isfavorito+',"0,12"';
		arr['tipo'] = tipo;
		arr['frame'] = 'frames';
		$("#listacarros").html('');
		$("#preload").show();
		// var p = mantenimiento('galeria',1,arr,0);
		mantenimiento_async('galeria',1,arr,0,cargarGaleria);
    }
});

function whrsearch() {
    var num1 = 0,num2 = 12;
    var zona = $("#zona").val();
    var marca = $("#hmarca").val();
    var modelo = $("#hmodelo").val();
    var estilo = $("#estilo").val();
    var anio1 = $("#anio1").val();
    var anio2 = $("#anio2").val();
    var transm = $("#transmision").val();
    var combustible = $("#combustible").val();
    var puertas = $("#puertas").val();
    var idusuario = '@@usr';
    var isfavorito = $("#isFavorite").is(":checked") == true ? 1 : 0;
    var usr = $("#usr_session").val();
	if (usr == '') {
		usr = 0;
	}else{
		usr = '@@usr';
	}
	return num1+','+num2+','+zona+','+marca+','+modelo+','+estilo+','+anio1+','+anio2+','+transm+','+combustible+','+puertas+','+usr+','+isfavorito;
}

$(document).on("click","#search",function() {
	var usr = $("#usr_session").val();
	if (usr == '')
		usr = 0;
	else
		usr = '@@usr';

	var fav = 0;
	if ($("#isFavorite").is(":checked"))
		fav = 1;
	else
		fav = 0;

	var arr = {};
	arr['sel'] = '';
	arr['tbl'] = 131;
	arr['where'] = '1,12,'+$("#zona option:selected").val()+','+$("#hmarca").val()+','+$("#hmodelo").val()+','+$("#estilo option:selected").val()+','+$("#anio1").val()+','+$("#anio2").val()+','+$("#transmision option:selected").val()+','+$("#combustible option:selected").val()+','+$("#puertas option:selected").val()+','+usr+',0';
	arr['tipo'] = $("#hdisplay").val();
	arr['frame'] = 'frames';
	$("#listacarros").html('');

	var p = mantenimiento('galeria',1,arr,0);
	$("#listacarros").html(p);
	$("#div-filter").attr('estado',0).fadeToggle("slow");
});

$(document).on("change","#isFavorite",function(){
	var usr = $("#usr_session").val();
	if (usr == ''){
		usr = 0;
		foundation_notify('warning', 'Debe iniciar sesión para elegir un vehículo favorito', 4000);
	}else{
		usr = '@@usr';
	}

	var fav = 0;
	if ($(this).is(":checked"))
		fav = 1;
	else
		fav = 0;
	
	arr = {};
	arr['sel'] = '';
	arr['tbl'] = 131;
	arr['where'] = '1,12,0,0,0,0,0,0,0,0,0,'+usr+','+fav;
	arr['tipo'] = $("#hdisplay").val();
	arr['frame'] = 'frames';
	$("#listacarros").html('');

	var p = mantenimiento('galeria',1,arr,0);
	$("#listacarros").html(p);
	// console.log('A1= '+arr('login',4,'',131,'1,12,0,0,0,0,0,0,0,0,0,'+usr+','+fav,0,0,0))
});

$(document).on("click",".hlike",function(){
    var estado = $(this).attr('estado');
    var idvehi = $(this).attr('id').substr(4);
    var usr = $("#usr_session").val();

    if (usr == ''){
    	foundation_notify('warning','Debe iniciar sesión para elegir un vehículo favorito',4000);
    }else{
    	// var a = arr('login',7,1,168,'','0,@@usr,'+idvehi,0,0,0);
	    if (estado == 0) {
	    	var fav = arr('login',4,'',171,'1,'+idvehi+',@@usr',0,0,0,0);
	    	console.log(fav)
	        $(this).removeClass('far fa-heart');
	        $(this).addClass('animated pulse fas fa-heart');
	        $(this).attr('style','color: #F18888');
	        estado = 1;
	        $(this).attr('estado',estado);
	    }else if (estado == 1) {
	    	var fav = arr('login',4,'',171,'2,'+idvehi+',@@usr',0,0,0,0);
	    	console.log(fav)
	        $(this).removeClass('animated pulse fas fa-heart');
	        $(this).addClass('far fa-heart');
	        $(this).attr('style','color: #FAFAFA');
	        estado = 0;
	        $(this).attr('estado',estado);
	    }
    }
});

$(document).on("click",".btn-car-info",function(){
	var id = $(this).attr('id').substr(9);
	var vist = arr('login',4,'vistas',128,'idvehiculo = '+id,0,0)[0][0];
	var newv = parseInt(vist[0]) + 1;
	// Act vistas
	var a = arr('login',7,2,128,'vistas = '+newv,'idvehiculo  = '+id,0,0,0);
	// Sello
});
	
$(".display").click(function(){
	var usr = $("#usr_session").val();
	if (usr == '') {
		usr = 0;
	}else{
		usr = '@@usr';
	}
	var tipo = $(this).attr('val');
	arr = {};
	arr['sel'] = '';
	arr['tbl'] = 131;
	arr['where'] = '1,10,0,0,0,0,0,0,0,0,0,'+usr+',0';
	arr['tipo'] = tipo;
	arr['frame'] = 'frames';

	$("#listacarros").html('');

	// PRELOAD
	$("#preload").show();
	$("#tdisplay").val(tipo);

	// var p = mantenimiento('galeria',1,arr,0);
	mantenimiento_async('galeria',1,arr,0,cargarGaleria);
	
});

	$("#display-cuadricula").click();
	// $("#display-lista").click();

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

$(document).on("blur","#marcavehi",function(){
	var options = {
		url: "../assets/json/modelos.php?marca="+$("#eac-container-marcavehi ul li.selected .eac-item .mval").val(),
		getValue: "id",
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
		},theme: "square"
	};
	$("#modelovehi").easyAutocomplete(options);
	$("#hmarca").val($("#eac-container-marcavehi ul li.selected .eac-item .mval").val());
});

$(document).on("blur","#modelovehi",function(){
	$("#hmodelo").val($("#eac-container-modelovehi ul li.selected .eac-item .mval").val())
});

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'galeria':
			if (vmodulo['tip'] == '') {
				err = validargaleria();
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

function validargaleria() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'galeria':
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

function cargarGaleria(vdata){
	// var p;

	// try {
        // p = JSON.parse(vdata);
		var tipo = $(".display").attr('val')

        $("#listacarros").html(vdata);
		$("#hdisplay").val(tipo);
		$("#preload").hide();
    // }
    // catch(err){
    //     p = vdata;
    // }
}

function paginate(vtbl,len) {
    $(".pagination").html('');
    var countpag = 0;
    if (len == undefined) {
        var usr = $("#usr_session").val();
        var isfavorito = $("#isFavorite").is(":checked") == true ? 1 : 0;
        if (usr == '') {
            usr = 0;
        }else{
            '@@usr';
        }
        var arr = {}
        arr['sel'] = '';
        arr['tbl'] = 177;
        arr['where'] = '"'+$("#search_carros").val()+'",'+usr+',1,'+isfavorito+',"0,12"';
        var countpag = mantenimiento('login',4,arr);
        countpag = countpag[0][0];
    }else
    countpag = len;
    
    if (countpag >= 9) {
        $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-left prv"></i></a></li><li class="active paginate" id="z1" limit="0,12"><a href="#!">1</a></li><li class="waves-effect paginate" id="z2" limit="10,12"><a href="#!">2</a></li><li class="waves-effect paginate" id="z3" limit="20,12"><a href="#!">3</a></li><li class="waves-effect paginate" id="z4" limit="30,12"><a href="#!">4</a></li><li class="waves-effect paginate" id="z5" limit="40,12"><a href="#!">5</a></li><li class="waves-effect paginate" id="z6" limit="50,12"><a href="#!">6</a></li><li class="waves-effect paginate" id="z7" limit="60,12"><a href="#!">7</a></li><li class="waves-effect paginate" id="z8" limit="70,12"><a href="#!">8</a></li><li class="waves-effect paginate" id="z9" limit="80,12"><a href="#!">9</a></li><li class="waves-effect"><a href="#!"><i class="fa fa-arrow-right nxt"></i></a></li>');
        $(".pagination").attr('ultimo', 9);
    }else if (parseInt(countpag) == 0 || parseInt(countpag) < 1) {
        return false;
    }else{
        $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-left prv"></i></a></li>');
        for (var i = 1; i <= Math.ceil(countpag); i++) {
            i = parseInt(i);
            if (i == 1)
                $(".pagination").append('<li class="active paginate" id="z' + i + '" limit="0,12"><a href="#!">' + i + '</a></li>');
            else
                $(".pagination").append('<li class="waves-effect paginate" id="z'+i+'" limit="'+(i-1)+'0,12"><a href="#!">' + i + '</a></li>');
            
            $(".pagination").attr('ultimo', i);
        }
        $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-right nxt"></i></a></li>');
    }
}

$(document).on("click", ".paginate", function () {
    var modulo = $("ul.pagination").attr('modulo');
    var vtbl = $("ul.pagination").attr('vtbl');
    var cambio = $("ul.pagination").attr('cambio') == undefined ? 0 : $("ul.pagination").attr('cambio');
    var id = $(this).attr('id').substr(1);
    var limit = $(this).attr('limit');
    var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
    var usr = $("#usr_session").val();
    var tipo = $("#tdisplay").val();
    var favorito = $("#isFavorite").is(":checked") == true ? 1 : 0;
    $(".paginate").removeClass('active')
    $(this).addClass('active');
    $("#lista"+modulo).html('');
    if (usr == '') {
    	usr = 0;
    }else{
    	usr = '@@usr';
    }

    var arr = {};
	arr['sel'] = '';
	arr['tbl'] = vtbl;
	arr['where'] = '"'+filtro+'",'+usr+',0,'+favorito+',"'+limit+'"';
	arr['tipo'] = tipo;
	arr['frame'] = 'frames';
	$("#listacarros").html('');
	$("#preload").show();
	// var p = mantenimiento('galeria',1,arr,0);
	mantenimiento_async('galeria',1,arr,0,cargarGaleria);
});

$(document).on("click",".nxt",function() {
    var modulo = $("ul.pagination").attr('modulo');
    var vtbl = $("ul.pagination").attr('vtbl');
    var ultimo = $(".pagination").attr('ultimo');
    var cambio = $("ul.pagination").attr('cambio') == undefined ? 0 : $("ul.pagination").attr('cambio');
    var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
    var id = parseInt($("ul.pagination > li.active").attr('id').substr(1));
    var usr = $("#usr_session").val();
    var favorito = $("#isFavorite").is(":checked") == true ? 1 : 0;
    var next = id + 1;
    var pags = next - 8;

    if (usr == '') {
    	usr = 0;
    }else{
    	usr = '@@usr';
    }

    if (pags <= 0)
        pags = 1;

    if (ultimo == id) {
    	var arr = {}
        arr['sel'] = '';
        arr['tbl'] = 177;
        arr['where'] = '"'+$("#search_carros").val()+'",'+usr+',1,'+favorito+',""';
        var count = mantenimiento('login',4,arr)[0][0];
        if (Math.ceil(count) != ultimo) {
            $(".pagination").html('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-left prv"></i></a></li>');
            for (var i = pags; i <= next; i++) {
                i = parseInt(i);
                $(".pagination").append('<li class="waves-effect paginate" id="z'+i+'" limit="'+(i-1)+'0,10"><a href="#!">' + i + '</a></li>');
                if (i == next)
                    $(".pagination").attr('ultimo', i);
            }
            $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-right nxt"></i></a></li>');
            $(".paginate").removeClass('active');
            $("#z" + next).addClass('active');
            var limit = $("#z" + next).attr('limit');
            var arr = {};
			arr['sel'] = '';
			arr['tbl'] = vtbl;
			arr['where'] = '"'+filtro+'",'+usr+',0,'+favorito+',"'+limit+'"';
			arr['tipo'] = tipo;
			arr['frame'] = 'frames';
			$("#listacarros").html('');
			$("#preload").show();
			// var p = mantenimiento('galeria',1,arr,0);
			mantenimiento_async('galeria',1,arr,0,cargarGaleria);
        }   
    }else{
        var limit = $("#z" + next).attr('limit');
        $(".paginate").removeClass('active');
        $("#z" + next).addClass('active');
        var limit = $("#z" + next).attr('limit');
        var arr = {};
		arr['sel'] = '';
		arr['tbl'] = vtbl;
		arr['where'] = '"'+filtro+'",'+usr+',0,'+favorito+',"'+limit+'"';
		arr['tipo'] = tipo;
		arr['frame'] = 'frames';
		$("#listacarros").html('');
		$("#preload").show();
		// var p = mantenimiento('galeria',1,arr,0);
		mantenimiento_async('galeria',1,arr,0,cargarGaleria);
    }
});

$(document).on("click", ".prv", function () {
    var modulo = $("ul.pagination").attr('modulo');
    var vtbl = $("ul.pagination").attr('vtbl');
    var count = $(".pagination").attr('ultimo');
    var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
    var cambio = $("ul.pagination").attr('cambio') == undefined ? 0 : $("ul.pagination").attr('cambio');
    var id = parseInt($("ul.pagination > li.active").attr('id').substr(1));
    var usr = $("#usr_session").val();
    var favorito = $("#isFavorite").is(":checked") == true ? 1 : 0;
    var prev = id - 1;
    var prv = prev - 8;

    if (usr == '') {
    	usr = 0;
    }else{
    	usr = '@@usr';
    }

    if (prev == 0) {
        return false;
    }else{
        if (count == id) {
            if (prv > 0 && prev > 0) {
                $(".pagination").html('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-left prv"></i></a></li>');
                if (prv != 0) {
                    for (var i = prv; i <= prev; i++) {
                        i = parseInt(i);
                        $(".pagination").append('<li class="waves-effect paginate" id="z' + i + '" limit="'+(i-1)+'0,10"><a href="#!">' + i + '</a></li>');
                        if (i == prev)
                            $(".pagination").attr('ultimo', i);
                    }
                    $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-right nxt"></i></a></li>');
                }else{
                    $(".pagination").html('<li class="waves-effect"><a href="#!"><i class="fa fa-arrow-left prv"></i></a></li><li class="active paginate" id="z1" limit="0,10"><a href="#!">1</a></li><li class="waves-effect paginate" id="z2" limit="10,10"><a href="#!">2</a></li><li class="waves-effect paginate" id="z3" limit="20,10"><a href="#!">3</a></li><li class="waves-effect paginate" id="z4" limit="30,10"><a href="#!">4</a></li><li class="waves-effect paginate" id="z5" limit="40,10"><a href="#!">5</a></li><li class="waves-effect paginate" id="z6" limit="50,10"><a href="#!">6</a></li><li class="waves-effect paginate" id="z7" limit="60,10"><a href="#!">7</a></li><li class="waves-effect paginate" id="z8" limit="70,10"><a href="#!">8</a></li><li class="waves-effect paginate" id="z9" limit="80,10"><a href="#!">9</a></li><li class="waves-effect"><a href="#!"><i class="fa fa-arrow-right nxt"></i></a></li>');
                    $(".pagination").attr('ultimo', 9);
                }
                $(".paginate").removeClass('active');
                $("#z" + prev).addClass('active');
                var limit = $("#z" + next).attr('limit');
	            var arr = {};
				arr['sel'] = '';
				arr['tbl'] = vtbl;
				arr['where'] = '"'+filtro+'",'+usr+',0,'+favorito+',"'+limit+'"';
				arr['tipo'] = tipo;
				arr['frame'] = 'frames';
				$("#listacarros").html('');
				$("#preload").show();
				// var p = mantenimiento('galeria',1,arr,0);
				mantenimiento_async('galeria',1,arr,0,cargarGaleria);
            }else{
                $(".paginate").removeClass('active');
                $("#z" + prev).addClass('active');
                var limit = $("#z" + next).attr('limit');
		        var arr = {};
				arr['sel'] = '';
				arr['tbl'] = vtbl;
				arr['where'] = '"'+filtro+'",'+usr+',0,'+favorito+',"'+limit+'"';
				arr['tipo'] = tipo;
				arr['frame'] = 'frames';
				$("#listacarros").html('');
				$("#preload").show();
				// var p = mantenimiento('galeria',1,arr,0);
				mantenimiento_async('galeria',1,arr,0,cargarGaleria);
            }
        }else{
            var limit = $("#z" + prev).attr('limit');
            $(".paginate").removeClass('active');
            $("#z" + prev).addClass('active');
            var limit = $("#z" + next).attr('limit');
	        var arr = {};
			arr['sel'] = '';
			arr['tbl'] = vtbl;
			arr['where'] = '"'+filtro+'",'+usr+',0,'+favorito+',"'+limit+'"';
			arr['tipo'] = tipo;
			arr['frame'] = 'frames';
			$("#listacarros").html('');
			$("#preload").show();
			// var p = mantenimiento('galeria',1,arr,0);
			mantenimiento_async('galeria',1,arr,0,cargarGaleria);
        }
    }
});