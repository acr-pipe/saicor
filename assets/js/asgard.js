acc = 1;

$(function(){
    $('head').append('<link href="../assets/img/favicon16.ico" rel="shortcut icon" type="image/x-icon"/>');
});

$(document).foundation('alert', 'reflow');

$(document).on("click",".load",function(){
    var modulo = $(this).attr('modulo');
    var arreglo = {};
    arreglo['modulo'] = modulo;
    deadclear(modulo);
    var varreglo = loadpool(arreglo,$(this).attr('id').substr(1),$(this).attr('varias'));
});

$(document).on("click",".add",function(){
    var modulo = $(this).attr('modulo');
    var varias = $(this).attr('varias');
    doGlobal(1,modulo,'',varias);
});

$(document).on("click",".edit",function(){
    var modulo = $(this).attr('modulo');
    var varias = $(this).attr('varias');
    doGlobal(2,modulo,'',varias);
});

$(document).on("click",".delete",function(){
    var modulo = $(this).attr('modulo');
    var id = $(this).attr('id').substr(1);
    vari = $(this).attr('tip') == undefined ? 'vid' : $(this).attr('tip') ;
    doGlobal(3,modulo,id,0);
});

// $(document).on("keyup","[id^=search_]",function(e){
//     var code = e.which || e.keyCode
//     if (code == 13) {
//         var a = $(this).val().replace(/"/g,'\\\"');
//         var b = $(this).prop('id').substr(7);
//         var c = $(this).attr('num').substr(1);
//         // var d = $(this).attr('num').substring(0,1).replace('+','');
//         var e = $(this).attr('var');

//         // tabla = $("#data-table-"+b).DataTable();
//         // tabla.destroy();
//         arr('login',6,'',c,whrsearch(),0,1,$("#cargar"+b));
        
//         // $("#data-table-"+b).DataTable({
//         //     bFilter :  false,
//         //     bLengthChange : false,
//         //     order : []
//         // });
//     }
// });

function doGlobal(accion,modulo,tip,varias){

    var arreglo = {}
    arreglo['modulo'] = modulo;
    console.log(arreglo['modulo'])
    arreglo['tip'] = tip;
    arreglo['atributos'] = baseValidar(1,arreglo);
    if (varias == 1) {
        arreglo['varios'] = {};

        $("#f"+modulo+"s [vtabla]").each(function(index){
            var arr = {}
            
            arr['modulo'] = $(this).attr('vtabla');
            arr['tip'] = tip;
            arr['atributos'] = baseValidar(1,arr);
            arr['hasTabla'] = $(this).attr('hasTabla') == undefined ? 0 : 1;

            arreglo['varios'][index] = arr;
        });
    }

    if (arreglo['atributos'] == "[object Object]"){
        arreglo['atributos']['vaccion'] = accion;

        var p = mantenimiento('login',2,arreglo);
        console.log(p)
        if (p['succed'] == 0) {
            
            foundation_notify('alert',p[0]['ERROR'], 4000);
        }else{
           
            var tmsj = "Ingresado";
            if (accion == 2){
                tmsj = "Actualizado";
                acc = 2;
            }else if(accion == 3){
                tmsj = "Eliminado";
                acc = 3;
            }

            foundation_notify('success','Registro '+tmsj+' Correctamente', 4000);

            id = p[0][0];
            endDetail(id,acc,modulo);
        }

    }else{
        foundation_notify('alert',arreglo['atributos'], 4000);
    }
};

function baseValidar(vaccion,vmodulo){
    
    var salida = {}
    var varreglo = mantenimiento('login',vaccion,vmodulo);
    if (varreglo == "[object Object]"){
        salida = validar(varreglo[0],vmodulo);
        
        if (vmodulo['tip'] != '') {
            salida[vari] = vmodulo['tip'];
        }
        // console.log(salida)
    }else{
        console.error('error en Base Validar')
        return varreglo;
    }

    return salida;
}

function loadpool(vmodulo,vid,vvarias){
    vmodulo = cargar(vmodulo,vid);
    vform = 'f'+vmodulo['modulo']+'s';

    var columns = mantenimiento('login',5,vmodulo);

    for (var i = 0; columns[0][1].length > i; i++) {

        switch($("#"+vform+" #"+columns[0][1][i]['name']).attr("type")){

            case 'select':
                
                $("#"+vform+" #"+columns[0][1][i]['name']).val(columns[0][0][0][i]);
                // $("#"+vform+" #"+columns[0][1][i]['name']).material_select('update');
                
                if (columns[0][0][0][i] != '') 
                    $("#"+vform+" #"+columns[0][1][i]['name']).change();

                if ($("#"+vform+" #"+columns[0][1][i]['name']).attr('defecto') != undefined)
                    $("#"+vform+" #"+columns[0][1][i]['name']).attr('defecto',columns[0][0][0][i])

                break;

            case 'radio':
            case 'checkbox':
                $("#"+vform+" input[name="+columns[0][1][i]['name']+']:checked').val(columns[0][0][0][i]);
                break;

            case 'html':
                $("#"+vform+" #"+columns[0][1][i]['name']).html(columns[0][0][0][i]);
                break;

            case 'date':
                $("#"+vform+" #"+columns[0][1][i]['name']).pickadate().pickadate('picker').set('select', columns[0][0][0][i]);
                break;
            case 'textarea':
            case 'text':
            case 'number':
                $("#"+vform+" #"+columns[0][1][i]['name']).val(columns[0][0][0][i]);
                break;

            case 'hidden':
                if ($("#"+vform+" #"+columns[0][1][i]['name']).attr("fill") == undefined)
                    $("#"+vform+" #"+columns[0][1][i]['name']).val(columns[0][0][0][i]);
                else
                    arr('login',6,'',$("#"+vform+" #"+columns[0][1][i]['name']).attr("fill"),$("#vid").val(),0,1,$("#"+vform+" #"+columns[0][0][0][i]))
                break;
            default:
                break;

        };           
        
    }

    if (vvarias != undefined)
        $("#"+vform+" [vtabla][detalle]").each(function(){
            
            var tpdetail = $(this).attr('detalle')
            var tbl = $(this).attr('vnum');
            
            switch(tpdetail){
                case "1"://ENVIA DATOS EN FORMA DE ARREGLO
                    arr('login',6,'-',tbl,columns[0][0],0,1,$("#fdetalle"+vmodulo['modulo']+"s"));
                default:
                    break;
            }
            
        });

    // Materialize.updateTextFields();

}

function mantenimiento(vmodulo,vaccion,varreglo,vjson){
    var p;
    var stack = new Error().stack || '';
    stack = stack.split('\n').map(function (line) { return line.trim(); });
    stack = stack.splice(stack[0] == 'Error' ? 2 : 1);
    if(stack.length <= 2){
        p = 'Get Lost';
    }else{
        vframe = varreglo['frame'] == undefined ? 'dashboard/' : varreglo['frame']+'/';  
        $.ajax({
                async: false,
                url: '../'+vframe+vmodulo,
                type: 'POST',
                data: {accion: vaccion,arreglo : varreglo}
                })
                .done(function(data) {
                    try {
                        p = JSON.parse(data);
                    }
                    catch(err){
                        p = data;
                    }
                });
    }
    return p;
}

function arr(vref,vaccion,vsel,vtbl,vwhere,vcambio,vch,velemto,vjson){
    var salida = 1;
    var arr = {};


    if(vref == 'login' && vaccion == 7){
        arr['accion'] = vsel;
        arr['tabla'] = vtbl;
        arr['arg1'] = vwhere;
        arr['arg2'] = vcambio;
    }else{
        arr['sel'] = vsel;
        arr['tbl'] = vtbl;
        arr['where'] = vwhere;
        if (vcambio != '') 
            arr['cambio'] = vcambio;

        if (vjson != undefined)
            arr['JSON'] = vjson;
    }

    if (vch){
        velemto.html(mantenimiento(vref,vaccion,arr,vjson));
        return true;
    }
    else
        salida = mantenimiento(vref,vaccion,arr,vjson);
    
    return salida;
}

 function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function enviarCorreo(vaccion,vto,vsubject,vbody,vadjunto) {
     $.ajax({
        url: '../_config/correoAjax.php',
        type: 'POST',
        data: {accion: vaccion,to : vto, subject : vsubject, body : vbody, adjunto : vadjunto}
        })
        .done(function(data) {
            console.log(data);
            try {
                p = JSON.parse(data);
            }
            catch(err){
                p = data;
            }
        });
}

function odin(varreglo,vform) {
    
    var salida = {};
    console.log($("#"+vform).attr('tp'))
    switch($("#"+vform).attr('tp')){
    case "1":
    //LLENADO DE VARIABLES POR ATRIBUTO EN DETALLE
        $("#"+vform+" .ciclos").each(function(index){
            salida[index] = {};
            for (var i = 0; i < varreglo.length; i++) {
                salida[index][varreglo[i]] = $(this).attr(varreglo[i]);
            }// end FOR
        });//end EACH
    break;

    case "2":
    //LLENADO DE VARIABLES POR ATRIBUTO SIN DETALLE
        for (var i = 0; i < varreglo.length; i++) {
            salida[varreglo[i]] = $("#"+vform+" .uniq").attr(varreglo[i]);
        }// end FOR
    break;

    case "3":
    //LLENADO DE VARIABLES POR ID EN DETALLE
        $("#"+vform+" .ciclos").each(function(index){
            salida[index] = {};
            for (var i = 0; i < varreglo.length; i++) {
            if ($("#"+vform+" #"+varreglo[i]).attr('hid') != undefined)
                salida[index][varreglo[i]] = $("#"+vform+" #"+varreglo[i]).attr('hid');
            else{
            switch(varreglo[i]) {
                case 'vidusuario':                
                    if (typeof $("#"+vform+" #vidusuario").val() == 'undefined') {
                        salida[index][varreglo[i]] = '';
                    }else{
                        salida[index][varreglo[i]] = $("#"+vform+" #vidusuario").val();
                    }
                    break;
                case 'vid':
                    if (typeof $("#"+vform+" #vid").val() == 'undefined') {
                        salida[index][varreglo[i]] = 0;
                    }else{
                        salida[index][varreglo[i]] = $("#"+vform+" #vid").val();
                    }
                    break;
                case 'vaccion':
                    salida[index][varreglo[i]] = 0;
                    break
                case 'vidtabla':
                case 'vidfila':
                    salida[index][varreglo[i]] = 0;//$("#"+vform+" #vtabla").val();
                    break;
                default:

                    if (/vfecha/.test(varreglo[i])){
                        if (typeof $("#"+vform+" #"+varreglo[i]) == 'undefined') {
                            salida[index][varreglo[i]] = '1990-01-01';
                        }else{
                            salida[index][varreglo[i]] = $("#"+vform+" #"+varreglo[i]).pickadate().pickadate('picker').get('select', 'yyyy-mm-dd') == '' ? 
                            '1990-01-01' : $("#"+vform+" #"+varreglo[i]).pickadate().pickadate('picker').get('select', 'yyyy-mm-dd');
                        }
                    }else{
                        switch($("#"+vform+" #"+varreglo[i]).attr("type")){
                            case 'select':
                                salida[index][varreglo[i]] =    $("#"+vform+" #"+ varreglo[i]+" option:selected").val() == undefined ? $("#"+vform+" #"+ varreglo[i]+" option").val() : $("#"+vform+" #"+ varreglo[i]+" option:selected").val();
                                break;
                            case 'text':
                            case 'textarea':
                            case 'hidden':
                            case 'number':
                                salida[index][varreglo[i]] = $("#"+vform+" #"+varreglo[i]).val();
                                break;
                            case 'html':
                                salida[varreglo[i]] = $("#"+vform+" #"+varreglo[i]).html();
                                break;
                            case 'radio':
                                salida[index][varreglo[i]] = $("#"+vform+" input[name='"+varreglo[i]+"']:checked").val();
                                break;
                            case 'checkbox':
                                salida[index][varreglo[i]] = $("#"+vform+" input[name='"+varreglo[i]+"']").is(":checked") ? 1 : 0;
                                break;
                            default:

                                try{
                                    salida[index][varreglo[i]] = $("#"+vform+" .zelda").data('triforce')[varreglo[i]];
                                }
                                catch(e){
                                    console.log(varreglo[i]+" No Existe");
                                    return "Error en Interno, Codigo: Odin"
                                } 
                                break;
                        }//END SWITCH
                }//end if
                }//end SWITCH
            }//end IF
            console.log(varreglo[i]+' '+salida[index][varreglo[i]])
            }// end FOR
        });//end EACH
    break;

    case "4":
    //LLENADO DE VARIABLES POR DATA EN DETALLE
        $("#"+vform+" .ciclos").each(function(index){
            salida[index] = {};
            for (var i = 0; i < varreglo.length; i++) {
                salida[index][varreglo[i]] = $(this).data('triforce')[varreglo[i]];
            }// end FOR
        });//end EACH
    break;

    default:
    //LLENADO DE VARIABLES POR ID SIN DETALLE
    
    for (var i = 0; i < varreglo.length; i++) {
        if ($("#"+vform+" #"+varreglo[i]).attr('hid') != undefined){
            salida[varreglo[i]] = $("#"+vform+" #"+varreglo[i]).attr('hid');
        }
        else{
            switch(varreglo[i]) {
                case 'vidusuario':             
                    if (typeof $("#"+vform+" #vidusuario").val() == 'undefined') {
                        salida[varreglo[i]] = '';
                    }else{
                        salida[varreglo[i]] = $("#"+vform+" #vidusuario").val();
                    }
                    break;
                case 'vid':
                    if (typeof $("#"+vform+" #vid").val() == 'undefined') {
                        salida[varreglo[i]] = 0;
                    }else{
                        salida[varreglo[i]] = $("#"+vform+" #vid").val();
                    }
                    break;
                case 'vaccion':
                    salida[varreglo[i]] = 0;
                    break
                case 'vidtabla':
                    salida[varreglo[i]] = $("#"+vform+" #vtabla").val();
                    break;
                default:
                    if (/vfecha/.test(varreglo[i])){
                        if (typeof $("#"+vform+" #"+varreglo[i]) == 'undefined') {
                            salida[varreglo[i]] = '1990-01-01';
                        }else{
                            salida[varreglo[i]] = $("#"+vform+" #"+varreglo[i]).pickadate().pickadate('picker').get('select', 'yyyy-mm-dd') == '' ? 
                            '1990-01-01' : $("#"+vform+" #"+varreglo[i]).pickadate().pickadate('picker').get('select', 'yyyy-mm-dd');
                        }
                    }else{
                    switch($("#"+vform+" #"+varreglo[i]).attr("type")){
                        case 'select':
                            salida[varreglo[i]] = $("#"+vform+" #"+ varreglo[i]+" option:selected").val() == undefined ? $("#"+vform+" #"+ varreglo[i]+" option").val() : $("#"+vform+" #"+ varreglo[i]+" option:selected").val();
                            break;
                        case 'text':
                        case 'textarea':
                        case 'hidden':
                        case 'number':
                            
                            salida[varreglo[i]] = $("#"+vform+" #"+varreglo[i]).val();
                            break;
                        case 'html':
                            salida[varreglo[i]] = $("#"+vform+" #"+varreglo[i]).html();
                            break;
                        case 'radio':
                            salida[varreglo[i]] = $("#"+vform+" input[name='"+varreglo[i]+"']:checked").val() == undefined ? 0 : $("#"+vform+" input[name='"+varreglo[i]+"']:checked").val();
                            break;
                        case 'checkbox':
                            salida[varreglo[i]] = $("#"+vform+" input[name='"+varreglo[i]+"']").is(":checked") ? 1 : 0;
                            break;
                        default:
                            try{
                                salida[varreglo[i]] = $("#"+vform+" .zelda").data('triforce')[varreglo[i]];
                            }
                            catch(e){
                                console.log(varreglo[i]+" No Existe");
                                return "Error en Interno, Codigo: Odin"
                            } 
                            break;
                    }
                    }
                          
                    break;
            }//end SWITCH
        }//end IF
        // console.log(varreglo[i]+" "+salida[varreglo[i]])
    }//end FOR
    break;
    }//end SWITCH
    return salida;
}

function deadclear(vform) {
    if (acc == 1) {
        vform = "#f"+vform+"s";
        console.log('DEADCLEAR');
        /*REGLAS PARA VACIAR CAMPOS*/
        $(vform+" :input").each(function(){
            if ($(this).attr('noClear') == undefined && $(this).prop('id') != '') { 
                switch($(this).attr('type')){
                    case 'checkbox':
                        $(vform+" :input[name='"+$(this).prop('name')+"'][stay='1']").prop('checked', true);
                        $(vform+" :input[name='"+$(this).prop('name')+"'][stay='0']").prop('checked',false);
                        
                        $(this).change();
                        break;
                    case 'radio':
                    //SI ES RADIO SOLO PONER ATRIBUTO PRINCIPAL PARA EL CUAL QUIERE MANTENER CHECKED
                        $(vform+" :input[name='"+$(this).prop('name')+"'][principal='1']").click();
                        break;
                    case 'number':
                    case 'textarea':
                    case 'text':
                        $(vform+" #"+$(this).prop('id')).val('');
                        break;
                    case 'select':
                        $(vform+" #"+$(this).prop('id')).val(1);
                        // $(vform+" #"+$(this).prop('id')).material_select('update');
                        break;
                    default:
                        break;
                };
            
            }
        });
        // Materialize.updateTextFields();
    
    } else
        acc = 1;
}

function thorload(vtabla) {
    vtabla += "s";

    if ($("#search_"+vtabla).val() != undefined && $("#search_"+vtabla).val() != ""){
        var e = jQuery.Event("keyup");
        e.which = 13;
        $("#search_"+vtabla).trigger(e);
    }
    else{
        var arreglo = cargarSintax(vtabla);
        var tbl = mantenimiento('login',6,arreglo);
        var tabla = $("#data-table-"+vtabla).DataTable();
        tabla.destroy();
        $("#lista"+vtabla).html(tbl);
        $("#data-table-"+vtabla).DataTable({
            bFilter :  false,
            bLengthChange : false,
            order : []
        });
    }

}

function addZero(n, len) {
    return (new Array(len + 1).join('0') + n).slice(-len);
}

function permisos(vnumber,vnumber2) {
    $.ajax({
            async: false,
            url: '../_config/permisos.php',
            type: 'POST',
            data: {x1 : vnumber, x2 : vnumber2}
            })
            .done(function(data) {
                p = JSON.parse(data);
                for (var i = 0; i < p.length; i++) {
                    var op = parseInt(p[i][1]);

                    switch(op){
                        case 1:
                            $(".per"+p[i][0]).css('display','in-line');
                            break;
                        case 2:
                            $(".per"+p[i][0]).attr('disabled',true);
                            break;
                        case 3:
                            $(".per"+p[i][0]).css('display','none');
                            break;
                    }
                };
            })
            .fail(function(x,y,z) {
                
            });
}

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function change_load(vto,vtabla,vval,vset){
    if (vto != '') {
        var tmp = $('#'+vto+' option').first().html();
        $('#'+vto).html('<option value="">'+tmp+'</option>');
        var res = arr('login',4,vval,vtabla,vset,0,0,0)[0];
        for (var i = 0; i < res.length; i++) {
            $('#'+vto).append('<option value="'+res[i][0]+'">'+res[i][1]+'</option>');
        }
        // $('#'+vto).material_select('update');
    }
};

$(document).on("change","._det",function(){
    var vto = $(this).attr('id');
    // ver xq putas sale el undefined
    if (vto != undefined) {
        var vprev = $("[det='"+vto.substr(3)+"']").attr('prev');
        var vsig = $("[det='"+vto.substr(3)+"']").attr('sig');
        var vtabla = $("[det='"+vsig.substr(3)+"']").attr('d-b');
        var vprimary = $(this).attr('primary');

        if (vprimary && vprev == '' && $("#"+vsig).val() != '') {
            $("._det[primary!=1]").val(0);
            // $("select").material_select();
        }
        change_load(vsig,vtabla,'id,nombre','id > 0 and '+vto.substr(1)+' = '+$('option:selected',this).val());
    }
    
});

$(document).on('click',"[det]",function(){
    var vdet = $(this).attr('det');
    var tabla = $(this).attr('d-b');
    var previo = $(this).attr('prev');

    if ($("."+vdet).is(":visible")) {
        $("."+vdet).hide();
        $("."+vdet).parent().append('<div class="_'+vdet+'"><a class="prefix btn-floating red btn-small tooltipped" data-position="button" data-tooltip="Ingresar" href="#!" style="width: 2.5rem" det="'+vdet+'" prev="'+previo+'" d-b="'+tabla+'" id="_'+vdet+'"><i class="fa fa-plus" id="icon'+vdet+'"></i></a> <label for="ing_'+vdet+'">'+vdet.toUpperCase()+'</label> <input type="text" id="ing_'+vdet+'" d-b="'+tabla+'" prev="'+previo+'" d-e-t="'+vdet+'"></div>');
        $("#icon"+vdet).removeClass('fa-plus');
        $("#icon"+vdet).addClass('fa-arrow-left');
        $('#ing_'+vdet).focus();
    }else{
        $("._"+vdet).remove();
        var set = 'id > 0';
        if (previo != '')
            set += " and "+previo.substr(1)+" = "+$("#"+previo+" option:selected").val(); 
        change_load('vid'+vdet,tabla,'id,nombre',set);
        $("."+vdet).show();
    }
    
});

$(document).on("keyup","[id^=ing_]",function(e){
    var code = e.wich || e.keyCode
    if (code == 13) {
        if($(this).val() == ''){
            foundation_notify('alert',"Valor Incorrecto",4000);
            $(this).select();
        }else{
            var tabla = $(this).attr('d-b');
            var insert = 'nombre,idusuario,idsucursal';
            var values = '"'+$(this).val()+'",@@usr,@@impresa';
            if($(this).attr('prev') != ''){
                insert += ','+$(this).attr('prev').substr(1);
                values += ','+$('#'+$(this).attr('prev')+' option:selected').val();
            }
            arr('login',7,1,tabla,insert,values,0,0);
            $("#_"+$(this).attr('d-e-t')).click();
        }
    }
});

// pagination
// function paginate(vtbl,len,whr) {
//     $(".pagination").html('');
//     var countpag = 0;
//     if (len == undefined) {
//         var usr = $("#usr_session").val();
//         if (usr == '') {
//             usr = 0;
//         }else{
//             '@@usr';
//         }
//         var arr = {}
//         arr['sel'] = '';
//         arr['tbl'] = 
//         arr['where'] = 
//         countpag = arr('login',4,'',vtbl,whr,0,0,0)[0][0];
//     }else
//     countpag = len;
    
//     if (countpag >= 9) {
//         $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="mdi-chevron-left mdi mdi-24px prv"></i></a></li><li class="active paginate" id="z1" limit="0,10"><a href="#!">1</a></li><li class="waves-effect paginate" id="z2" limit="10,10"><a href="#!">2</a></li><li class="waves-effect paginate" id="z3" limit="20,10"><a href="#!">3</a></li><li class="waves-effect paginate" id="z4" limit="30,10"><a href="#!">4</a></li><li class="waves-effect paginate" id="z5" limit="40,10"><a href="#!">5</a></li><li class="waves-effect paginate" id="z6" limit="50,10"><a href="#!">6</a></li><li class="waves-effect paginate" id="z7" limit="60,10"><a href="#!">7</a></li><li class="waves-effect paginate" id="z8" limit="70,10"><a href="#!">8</a></li><li class="waves-effect paginate" id="z9" limit="80,10"><a href="#!">9</a></li><li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-right nxt"></i></a></li>');
//         $(".pagination").attr('ultimo', 9);
//     } else if (parseInt(countpag) == 0 || parseInt(countpag) < 1) {
//         return false;
//     } else {
//         $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-left prv"></i></a></li>');
//         for (var i = 1; i <= Math.ceil(countpag); i++) {
//             i = parseInt(i);
//             if (i == 1)
//                 $(".pagination").append('<li class="active paginate" id="z' + i + '" limit="0,10"><a href="#!">' + i + '</a></li>');
//             else
//                 $(".pagination").append('<li class="waves-effect paginate" id="z'+i+'" limit="'+(i-1)+'0,10"><a href="#!">' + i + '</a></li>');
            
//             $(".pagination").attr('ultimo', i);
//         }
//         $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-right nxt"></i></a></li>');
//     }
// }

// $(document).on("click", ".paginate", function () {
//     var modulo = $("ul.pagination").attr('modulo');
//     var vtbl = $("ul.pagination").attr('vtbl');
//     var cambio = $("ul.pagination").attr('cambio') == undefined ? 0 : $("ul.pagination").attr('cambio');
//     var id = $(this).attr('id').substr(1);
//     var limit = $(this).attr('limit');
//     var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//     $(".paginate").removeClass('active')
//     $(this).addClass('active');
//     var tabla = $("#data-table-"+modulo).DataTable();
//     tabla.destroy();
//     $("#lista"+modulo).html('');
//     arr('login',6,'',vtbl,'0,0,"'+filtro+',@@impresa","'+limit+'"', cambio, 1, $("#lista"+modulo));

//     $("#data-table-"+modulo).DataTable({
//         bFilter: false,
//         bScrollInfinite: true,
//         bSort: false,
//         bLengthChange: false,
//         order: [],
//         bPaginate: false,
//         info: false
//     });
// });

// $(document).on("click", ".nxt", function () {
//     var modulo = $("ul.pagination").attr('modulo');
//     var vtbl = $("ul.pagination").attr('vtbl');
//     var ultimo = $(".pagination").attr('ultimo');
//     var cambio = $("ul.pagination").attr('cambio') == undefined ? 0 : $("ul.pagination").attr('cambio');
//     var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//     var id = parseInt($("ul.pagination > li.active").attr('id').substr(1));
//     var next = id + 1;
//     var pags = next - 8;

//     if (pags <= 0)
//         pags = 1;

//     if (ultimo == id) {
//         var count = arr('login',4,'',vtbl,'0,1,"'+filtro+',@@impresa",""',0,0,0)[0][0];
//         if (Math.ceil(count) != ultimo) {
//             $(".pagination").html('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-left prv"></i></a></li>');
//             for (var i = pags; i <= next; i++) {
//                 i = parseInt(i);

//                 $(".pagination").append('<li class="waves-effect paginate" id="z'+i+'" limit="'+(i-1)+'0,10"><a href="#!">' + i + '</a></li>');
//                 if (i == next)
//                     $(".pagination").attr('ultimo', i);
//             }
//             $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-right nxt"></i></a></li>');
//             $(".paginate").removeClass('active');
//             $("#z" + next).addClass('active');
//             var limit = $("#z" + next).attr('limit');
//             var tabla = $("#data-table-"+modulo).DataTable();
//             tabla.destroy();
//             var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//             arr('login',6,'',vtbl,'0,0,"'+filtro+'","'+limit+'"',cambio,1,$("#lista"+modulo));
//             $("#data-table-"+modulo).DataTable({
//                 bFilter: false,
//                 bScrollInfinite: true,
//                 bSort: false,
//                 bLengthChange: false,
//                 order: [],
//                 bPaginate: false,
//                 info: false
//             });
//         }   
//     } else {
//         var limit = $("#z" + next).attr('limit');
//         $(".paginate").removeClass('active');
//         $("#z" + next).addClass('active');
//         var tabla = $("#data-table-"+modulo).DataTable();
//         tabla.destroy();
//         var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//         arr('login', 6, '', vtbl, '0,0,"'+filtro+',@@impresa","'+limit+'"', cambio, 1, $("#lista"+modulo));
//         $("#data-table-"+modulo).DataTable({
//             bFilter: false,
//             bScrollInfinite: true,
//             bSort: false,
//             bLengthChange: false,
//             order: [],
//             bPaginate: false,
//             info: false
//         });
//     }
// });

// $(document).on("click", ".prv", function () {
//     var modulo = $("ul.pagination").attr('modulo');
//     var vtbl = $("ul.pagination").attr('vtbl');
//     var count = $(".pagination").attr('ultimo');
//     var cambio = $("ul.pagination").attr('cambio') == undefined ? 0 : $("ul.pagination").attr('cambio');
//     var id = parseInt($("ul.pagination > li.active").attr('id').substr(1));
//     var prev = id - 1;
//     var prv = prev - 8;
//     if (prev == 0) {
//         return false;
//     }else{
//         if (count == id) {
//             if (prv > 0 && prev > 0) {
//                 $(".pagination").html('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-left prv"></i></a></li>');
//                 if (prv != 0) {
//                     for (var i = prv; i <= prev; i++) {
//                         i = parseInt(i);
//                         $(".pagination").append('<li class="waves-effect paginate" id="z' + i + '" limit="'+(i-1)+'0,10"><a href="#!">' + i + '</a></li>');
//                         if (i == prev)
//                             $(".pagination").attr('ultimo', i);
//                     }
//                     $(".pagination").append('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-right nxt"></i></a></li>');
//                 }else{
//                     $(".pagination").html('<li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-left prv"></i></a></li><li class="active paginate" id="z1" limit="0,10"><a href="#!">1</a></li><li class="waves-effect paginate" id="z2" limit="10,10"><a href="#!">2</a></li><li class="waves-effect paginate" id="z3" limit="20,10"><a href="#!">3</a></li><li class="waves-effect paginate" id="z4" limit="30,10"><a href="#!">4</a></li><li class="waves-effect paginate" id="z5" limit="40,10"><a href="#!">5</a></li><li class="waves-effect paginate" id="z6" limit="50,10"><a href="#!">6</a></li><li class="waves-effect paginate" id="z7" limit="60,10"><a href="#!">7</a></li><li class="waves-effect paginate" id="z8" limit="70,10"><a href="#!">8</a></li><li class="waves-effect paginate" id="z9" limit="80,10"><a href="#!">9</a></li><li class="waves-effect"><a href="#!"><i class="mdi mdi-24px mdi-chevron-right nxt"></i></a></li>');
//                     $(".pagination").attr('ultimo', 9);
//                 }
//                 $(".paginate").removeClass('active');
//                 $("#z" + prev).addClass('active');
//                 var limit = $("#z" + prev).attr('limit');
//                 var tabla = $("#data-table-"+modulo).DataTable();
//                 var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//                 tabla.destroy();
//                 arr('login', 6, '', vtbl, '0,0,"'+filtro+',@@impresa","'+limit+'"', cambio, 1, $("#lista"+modulo));
//                 $("#data-table-"+modulo).DataTable({
//                     bFilter: false,
//                     bScrollInfinite: true,
//                     bSort: false,
//                     bLengthChange: false,
//                     order: [],
//                     bPaginate: false,
//                     info: false
//                 });
//             }else{
//                 $(".paginate").removeClass('active');
//                 $("#z" + prev).addClass('active');
//                 var limit = $("#z" + prev).attr('limit');
//                 var tabla = $("#data-table-"+modulo).DataTable();
//                 var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//                 tabla.destroy();
//                 arr('login',6,'',vtbl,'0,0,"'+filtro+',@@impresa","'+limit+'"',cambio,1,$("#lista"+modulo));
//                 $("#data-table-"+modulo).DataTable({
//                     bFilter: false,
//                     bScrollInfinite: true,
//                     bSort: false,
//                     bLengthChange: false,
//                     order: [],
//                     bPaginate: false,
//                     info: false
//                 });
//             }
//         }else{
//             var limit = $("#z" + prev).attr('limit');
//             $(".paginate").removeClass('active');
//             $("#z" + prev).addClass('active');
//             var tabla = $("#data-table-"+modulo).DataTable();
//             var filtro = $("#search_"+modulo).val().replace(/"/g,'\\\"');
//             tabla.destroy();
//             arr('login',6,'',vtbl,'0,0,"'+filtro+'@@impresa","'+limit+'"',cambio,1,$("#lista"+modulo));
//             $("#data-table-"+modulo).DataTable({
//                 bFilter: false,
//                 bScrollInfinite: true,
//                 bSort: false,
//                 bLengthChange: false,
//                 order: [],
//                 bPaginate: false,
//                 info: false
//             });
//         }
//     }
// });
//pagination

//TELEFONOS Y CORREOS

$(document).on('click','.del_mail',function(){
    vid = $(this).attr('id').substr(1);
    if (vid.indexOf('_') != 0)
        $(this).parent().parent().remove();
    else{
        //CONFIRMACION
        arr('login',7,3,17,'id = '+vid,'',0,0);
        $(this).parent().parent().remove();
    }
});

$(document).on('click','.del_phone',function(){
    vid = $(this).attr('id').substr(1);
    if (vid.indexOf('_') != 0)
        $(this).parent().parent().remove();
    else{
        //CONFIRMACION
        arr('login',7,3,17,'id = '+vid,'',0,0);
        $(this).parent().parent().remove();
    }
});

function foundation_notify(sass,msj,tiempo){

    var position = 'body';

   if ($("[nocarga='1']").length)
        position = '.login';

    var myrnd = parseInt(Math.random()*1000000);
    $(position).append('<div data-alert class="alert-box '+sass+' mynotify" id="n'+myrnd+'">'+msj+'<a href="#" class="close">&times;</a></div>');
    setTimeout(function(){ $('#n'+myrnd).hide(300) }, tiempo);
}

function mantenimiento_async(vmodulo,vaccion,varreglo,vjson,vidasync){
    var p;
    var stack = new Error().stack || '';
    stack = stack.split('\n').map(function (line) { return line.trim(); });
    stack = stack.splice(stack[0] == 'Error' ? 2 : 1);
    if(stack.length <= 2){
        p = 'Get Lost';
    }else{
        vframe = varreglo['frame'] == undefined ? 'dashboard/' : varreglo['frame']+'/';  
        $.ajax({
                url: '../'+vframe+vmodulo,
                type: 'POST',
                data: {accion: vaccion,arreglo : varreglo}
                })
                .done(function(data) {
                    vidasync(data);
                });
    }
    return p;
}

// Login Technologies S.A.
