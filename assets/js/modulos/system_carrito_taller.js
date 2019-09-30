$(function(){
	$("#fcarrito_tallers").submit(function(){return false});
	// $("#data-table-carrito_tallers").dataTable();

	// $("#btnagregar").click(function(){
	// 	var item = $(".imgprod:checked").attr('id').substr(5);
	// 	var cant = $(".qty").val();
	// 	var precio = parseFloat( $("#p1item").text() );
	// 	// AGREGAR A CARRITO
	// 	var i = arr('login',7,1,163,'','0,@@usr,'+item+','+precio+','+cant,0,0);
 //        foundation_notify('success','El producto se ha agregado correctamente el carrito de compras', 3000);
	// });

	// $(".qty").keyup(function(e){
 //    var code = e.which || e.keyCode;	
	// 	if (code == 13) {
	// 	   $("#p2item").html(calctot);
	// 	}
	// });

	// $(".qty").blur(function(){
	// 	$("#p2item").html(calctot);
	// });

	// $(".carticon").click(function(){

	// 	var p = arr('login',4,'',164,'@@usr',0,0,0)[0];

	// 	$("#listaproductos").html('');

	// 	for (var i = 0; i < p.length; i++) {
	// 		var total = parseFloat(p[i][3]) * p[i][4];
	// 		$("#listaproductos").append('<div class="row" id="r'+p[i][0]+'">'+
	// 		'<div class="small-4 medium-4 columns text-center"><img src="'+p[i][5]+'" class="fottoprod" id="fotoprod'+p[i][0]+'" alt=""></div>'+
	// 		'<div class="small-8 medium-8 columns"><b><span class="tit-cart">'+p[i][1]+'</span></b><br>'+
	// 		'<span class="desc-cart">'+p[i][2]+'</span><br><a href="#!" class="del" id="d'+p[i][0]+'">Eliminar</a></div>'+'<hr style="border: 0.5px dashed #ECECEC">'+
	// 		'<div align="center" class="small-6 medium-6 columns"><label>Precio</label>$ <span class="precio-cart" id="pt'+p[i][0]+'"> '+total+'</span></div>'+
	// 		'<div align="center" class="small-6 medium-6 columns"><label>Cantidad</label><input type="hidden" id="hp'+p[i][0]+'" value="'+p[i][3]+'"><input type="number" id="c'+p[i][0]+'" class="cant-cart" value="'+p[i][4]+'" min="1"></div>'+
	// 		'<br><br>'+
	// 		'<hr style="border: 1.5px solid #DFDFDF">'+
	// 		'</div>');
	// 	}

	// 	var i = arr('login',4,'count(iduser)',163,'iduser = @@usr and id > 0',0,0,0)[0][0];
	// 	$("#cantart").html(i);

	// 	var a = 0;
	//     $(".precio-cart").each(function (){
	//         a += parseFloat( $(this).html());
	//     });

	//     $(".subtotcart").html(a.formatMoney(2,'.',','));
	// });



	// $("#btnrpago1").click(function(){
	// 	var d = arr('login',4,'',164,'@@usr',0,0,0)[0];
	// 	var detall = "";
	// 	for (var i = 0; i < d.length; i++) {
	// 		detall += d[i][1]+' | '+d[i][3]+' | '+d[i][4]+' | '+d[i][3]*d[i][4]+' --- ';
	// 	}

	// 	var orid = $("#idfact").text();
	// 	var clie = $("#nomclie").val();
	// 	var mail = $("#mailusr").val();
	// 	var ced = $("#cedusr").val();
	// 	var numt = $("#numtarj").val();
	// 	var segc = $("#segcode").val();

	// 	var tot = parseFloat($(".totcart").text());

 //    });

	// STICKY HEADER
// 	var startProductBarPos=-1;
// 	window.onscroll=function(){
// 	var bar = document.getElementById('headkart');
// 		if(startProductBarPos<0)startProductBarPos=findPosY(bar);

// 		if(pageYOffset>startProductBarPos){
// 			bar.style.position='fixed';
// 			bar.style.top=0;
// 		}else{
// 			bar.style.position='relative';
// 		}

// 	};

 }); //READY


// ******************

// $(document).on("click","#hashbtn",function(){
//     console.log('HASH');
//     var hash = $('#orden').val() + '|' + $('#CommerceId').val() + '|' + $('#monto').val().replace('.', '') + '|' + $('#currency').val();
//     var passhash = CryptoJS.MD5(hash);
//     $('#hash').val(passhash);
// });

// $(document).on("click","#sumbmitbtn",function(){
//     console.log('SUBMIT');
//     $("#formBTP").submit();
// });
// ******************


// $(document).ready(function(){
//     var p = arr('login',4,'',164,'@@usr',0,0,0)[0];
// 	var totkart = 0;
// 	for (var i = 0; i < p.length; i++) {
// 		totkart += parseFloat(p[i][3] * p[i][4]);
// 	}
//     $(".totcart").html( totkart.formatMoney(2,'.',',') );
// });

// $(document).on("click",".del",function(){
// 	var id = $(this).attr('id').substr(1);
// 	alert(id)
// 	var newid = (id*-1);

// 	//ACT ITEM DE CARRITO
//     arr('login',7,2,163,'id = '+newid,'id = '+id+' and iduser = @@usr',0,0);
//     alert(newid)
//     foundation_notify('warning','Se ha eliminado correctamente este producto del carrito', 3000);

// 	$("#r"+id).remove();
// });

// $(document).on("change",".cant-cart",function(){
// 	var id = $(this).attr('id').substr(1);
// 	var cant = $("#c"+id).val();
// 	var preciob = $("#hp"+id).val();

// 	var result = cant*preciob;
// 	$("#pt"+id).html(result.formatMoney(2,'.',','));

// 	arr('login',7,2,163,'cantidad = '+cant,'id = '+id,0,0);

// 	var a = 0;
// 	    $(".precio-cart").each(function (){
// 	        a += parseFloat( $(this).html());
// 	        console.log(a)
// 	    });
// 	    console.log(a)
// 	    $(".subtotcart").html(a.formatMoney(2,'.',','));
// });

$(document).on("click",".imgprod",function(){
	var id = $(this).attr('id').substr(5);
	var a = arr('login',4,'*',11,'id = '+id,0,0,0)[0][0];
	console.log(a)
	$("#prodxid ").html('');
	$("#sectcant").html('<label>Cantidad de <span></span><select class="cantprod" idprod="'+id+'"><option value="c0">Seleccione una cantidad</option><option value="c1">1</option><option value="c2">2</option><option value="c3">3</option><option value="c4">4</option><option value="c5">5</option><option value="c10">10</option><option value="c15">15</option><option value="c30">30</option></select></label>');
	$(".in-stock").html(a[1]);
	$("#desciprod").html(a[2]);
});

$(document).on("change",".cantprod",function(){
	var cant = $("option:selected", this).val().substr(1);
	var id = $(this).attr('idprod');

	var a = arr('login',4,'',174,id+','+cant,0,0,0)[0];
	console.log(a)

	$("#prodxid").html('');
	if (a.length == 0) {
		$("#prodxid").html('<div class="card"><div class="card-section"><h4>Lo sentimos...</h4><p>No existe variedad del producto para esta cantidad</p></div></div>');
	}else{
		for (var i = 0; i < a.length; i++) {
			$("#prodxid").append(a[i][8]);
		}
	}
	
});


$(document).ready(function(){

	// var i = arr('login',4,'count(iduser)',163,'iduser = @@usr and id > 0',0,0,0)[0][0];
	// $(".qtyitem").html(i);

	var a = arr('login',4,'*',11,'id > 0',0,0,0)[0];

	for (var i = 0; i < a.length; i++) {
		if (a[i][4] == "") {
			$("#listproduct").append('<input class="imgprod" type="radio" name="radios" value="red" id="radio'+a[i][0]+'"><label for="radio'+a[i][0]+'" class="dark-hollow expand"><img class="imgprodf" src="https://placehold.it/60x60" alt="'+a[i][1]+'" id="prod'+a[i][0]+'" /></label>');
		}else{
			$("#listproduct").append('<input class="imgprod" type="radio" name="radios" value="red" id="radio'+a[i][0]+'"><label for="radio'+a[i][0]+'" class="dark-hollow expand"><img class="imgprodf" src="'+a[i][4]+'" alt="'+a[i][1]+'" id="prod'+a[i][0]+'" /></label>');
		}
		// $("#desciprod").html(a[i][2]);
		// $("#p1item").html(a[3]);
		// $("#p2item").html(a[3]);
	}

// <iframe style="width: 210px;border: none;height: 325px; display: inline;" title="Payment Button IFrame" src="https://checkout.baccredomatic.com/payment_button?token=NGIzMDliNmRlMjkwNGQ1NmI2ZjcuOWExNTI1NzA2MzE3&color=%23ffffff&background=%23e4002b&text=Pagar%20ahora&hasimage=true"><p>Your browser does not support iframes.</p></iframe>
});

$(document).on("click","#Iadd",function(){
	deadclear('carrito_taller');
});

// FECHA DE TARJETA
// var start = new Date().getFullYear();
// var end = new Date().getFullYear() + 30;
// var options = "";
// for(var year = start; year <= end; year++){
//   options += "<option>"+ year +"</option>";
// }
// document.getElementById("year").innerHTML = options;
// 

function validar (varreglo,vmodulo) {
	
	var salida = {}
	
		/*VALIDACION FRONT END*/
	
	switch(vmodulo['modulo']) {
		case 'carrito_taller':
			if (vmodulo['tip'] == '') {
				err = validarcarrito_taller();
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

function validarcarrito_taller() {


	return false;
}

function endDetail(vid){

    return false;
}

function cargar(vmodulo,vid) {


	switch(vmodulo['modulo']) {
		case 'carrito_taller':
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

function calctot(){
	var cant = $(".qty").val();
	var precio = parseFloat( $("#p1item").text() );
	var result = cant * precio;;
	return result;
}

function findPosY(obj) {
	// FUNCION PARA STICK DE DIV HEADKART
  var curtop = 0;
  if (typeof (obj.offsetParent) != 'undefined' && obj.offsetParent) {
    while (obj.offsetParent) {
      curtop += obj.offsetTop;
      obj = obj.offsetParent;
    }
    curtop += obj.offsetTop;
  }
  else if (obj.y)
    curtop += obj.y;
  return curtop;
}