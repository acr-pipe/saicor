var crr = '';
Dropzone.autoDiscover = false;
var myDropzone;

$(function(){

     myDropzone = new Dropzone("#registro-upload", {
        url: '../cargausuario.php',
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

    // $("select").multiselect();
    $("#verpass").mousedown(function(){
        $(".passs").attr('type',"text");
    });

    $("#verpass").mouseup(function(){
        $(".passs").attr('type',"password");
    });

    $("#fusuarios .zelda").data('triforce',{vid : 0, vaccion : 0, vtelefono : '', vbcambioPSSW : 0, vcodigo: 0, vnombre : '', vclave : ''});

    $("#vidprovincia").change(function(){
        var valprov = $(this).val();
        
        $("#vidcanton").html('');
        
        var p = arr('login',4,'id,nombre',9,'idprovincia ='+valprov,0,0,0)[0];

        for (var i = 0; i < p.length; i++) {
            $("#vidcanton").append('<option class="textopc" value="'+p[i][0]+'">'+p[i][1]+'</option>');
        }
    });

    $("#vidcanton").change(function(){
        var valcanton = $(this).val();
        
        $("#viddistrito").html('');
        
        var p = arr('login',4,'id,nombre',10,'idcanton ='+valcanton,0,0,0)[0];

        for (var i = 0; i < p.length; i++) {
            $("#viddistrito").append('<option class="textopc" value="'+p[i][0]+'">'+p[i][1]+'</option>');
        }
                 
    });

    $("#clave").keyup(function(){
        var k = $(this).val();
        var psize = $("#clave").val().length;

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

    $("#passconfirm").keyup(function(){
        
        var confirm = $(this).val();
        $(this).css('color','#333333');

        if ($("#clave").val() == confirm) {
            $("#circle-verify").css({'color':'#6FCA1F','transition':'0.2s ease'});
        }else{
            $("#circle-verify").css({'color':'#333333','transition':'0.2s ease'});
        }
    });

    $("#modaltyc").click(function(){
        var p = arr('login',9,'','','','','','');

        $("#termycondiciones").html('');
        $("#termycondiciones").html(p);
    });

    $("#accepttyc").click(function(){
        $("#checktyc").click();
    });

    $(".selserv").click(function(){
        $("#lista").addClass('hide');
        $(".listaa").removeClass('hide');
        $(".listab").removeClass('hide');
        $(".listac").removeClass('hide');
        $("#back").attr('lista',1);
        $("#chk0").attr('desc','Todos los servicios');
        $("#mtext1").text('servicios');
        $("#mtext2").text('los servicios que ofrece');
        $("#mtext3").text('Servicios');
        $("#mtext4").text('Seleccionar todo');
        var a = arr('login',4,'id,nombre',16,'id > 0 and clase = 1',0,0,0)[0];
        var b = arr('login',4,'id,nombre',16,'id > 0 and clase = 2',0,0,0)[0];
        var c = arr('login',4,'id,nombre',16,'id > 0 and clase = 3',0,0,0)[0];
        $("#listaa").html('');
        $("#listab").html('');
        $("#listac").html('');
        for (var i = 0; i < a.length; i++) {
            $("#listaa").append('<div class="large-12 columns"> <input id="chk'+a[i][0]+'" desc="'+a[i][1]+'" type="checkbox" class="check"><label for="chk'+a[i][0]+'"><span>'+a[i][1]+'</span></label></div>');
        }
        for (var o = 0; o < b.length; o++) {
            $("#listab").append('<div class="large-12 columns"> <input id="chk'+b[o][0]+'" desc="'+b[o][1]+'" type="checkbox" class="check"><label for="chk'+b[o][0]+'"><span>'+b[o][1]+'</span></label></div>');
        }
        for (var u = 0; u < c.length; u++) {
            $("#listac").append('<div class="large-12 columns"> <input id="chk'+c[u][0]+'" desc="'+c[u][1]+'" type="checkbox" class="check"><label for="chk'+c[u][0]+'"><span>'+c[u][1]+'</span></label></div>');
        }
    });

    $(".selmarc").click(function(){
        $("#lista").removeClass('hide');
        $(".listaa").addClass('hide');
        $(".listab").addClass('hide');
        $(".listac").addClass('hide');
        $("#back").attr('lista',2);
        $("#chk0").attr('desc','Multimarca');
        $("#mtext1").text('marcas');
        $("#mtext2").text('las marcas que atiende en');
        $("#mtext3").text('Marcas');
        $("#mtext4").text('Multimarca');
        var a = arr('login',4,'id,nombre',22,'id > 0',0,0,0)[0];
        $("#lista").html('');
        for (var i = 0; i < a.length; i++) {
            $("#lista").append('<div class="large-4 columns"> <input id="chk'+a[i][0]+'" desc="'+a[i][1]+'" type="checkbox" class="check"><label for="chk'+a[i][0]+'"><span>'+a[i][1]+'</span></label></div>');
        }
    });

    $(".checkall").click(function(){
        var estado = $(this).attr('estado');

        if (estado == 0) {
            $(".check").prop('checked',true);
            $(".checkall").attr('estado',1);
        }else{
            $(".check").prop('checked',false);
            $(".checkall").attr('estado',0);
        }
    });

    $("#back").click(function(){
        var lista = $(this).attr('lista');

        if (lista == 1) {
            var servicios = '';

            $("input:checkbox:checked").each(function() {
                 servicios += $(this).attr('desc') + ' | ';
            });

            $("#serv").val(servicios.substring(0,servicios.length -1));    
        }else{
            var marcas = '';

            $("input:checkbox:checked").each(function() {
                 marcas += $(this).attr('desc') + ' | ';
            });

            $("#vmarcas").val(marcas.substring(0,marcas.length -1));
        }
        
    });

}); //END READY

$(document).on("click","#register",function(){
    $("#tu2").click();
});

$(document).on("click",".tusuario",function(){
    var id = $(this).attr('id').substr(2);
    $("#idtipousr").val(id);
    if (id == 2) {
        $("#tu2").css('background','#99CD56');
        $("#tu3").css({'background':'transparent','box-shadow':'3px 5px rgba(0,0,0,0.1)'});
        $(".sectionTaller").addClass('hide');
        $("#nombre").attr('placeholder','Nombre');
        $("#vuser").attr('placeholder','Usuario de sistema');
        $("#vtelefono").attr('placeholder','Teléfono');
        $("#submit").html('Registrar');
        $(".ncomercial").addClass('hide');
        $(".colmail").addClass('large-12 medium-12');
        $(".colmail").removeClass('large-6 medium-6');
        // $("#submit").addClass('add');
        $("#vsolicitud").val(0);

    }else if (id == 3) {
        $("#tu3").css('background','#99CD56');
        $("#tu2").css({'background':'transparent','box-shadow':'3px 5px rgba(0,0,0,0.1)'});
        $(".sectionTaller").removeClass('hide');
        $("#nombre").attr('placeholder','Nombre Propietario');
        $("#vuser").attr('placeholder','Nombre de usuario');
        $("#vtelefono").attr('placeholder','Teléfono');
        $("#submit").html('Enviar Solicitud');
        $(".ncomercial").removeClass('hide');
        $(".colmail").addClass('large-6 medium-6');
        $(".colmail").removeClass('large-12 medium-12');
        // $("#submit").removeClass('add');
        $("#vsolicitud").val(2);
    }
});

$(document).ready(function(){
    // Materialize.updateTextFields();
    // $('select').foundationSelect();
    $("#user").focus();
    $("#logF").submit(function(){
        return getIn();
    });

    $("#changepssw").click(function(){
        var val = validarcambio();
        if (val == false) {
            arr('login',4,'',56,'\"'+$("#vuser").val()+'\",\"'+$("#vclave").val()+'\"','',0,'');
            var p = mantenimiento('login',4,arr)[0];
            if (p == "[object Object]") {
                foundation_notify('alert',p['ERROR'], 4000);
            }else{
                foundation_notify('success','Contraseña Cambiada Correctamente', 4000);
                $("#salir").click();
                $("#user").focus();
            }
        }else{
            foundation_notify('alert',val, 4000);
        }
    });

    $("#recupss").click(function(){
        if ($("#user").val() == '') {
            foundation_notify('warning','Usuario no existe, por favor verifique los datos e intente de nuevo', 4000);
            $("#user").focus();
        }else{
            var result = arr('login',4,'mail, concat(substring(mail,1,3),"****@", substring_index(mail,"@",-1))',1,'user = "'+$("#user").val()+'" and id > 0','',0,'');

            if (result[0].length) {

                $("#msjrecupss").html('<img src="../assets/img/mail_recovery.svg" width="100px"><br><h5 class="white-text"><b>Recuperar Contraseña</b></h5><p>Enviar código de recuperación al correo:<br><b class="truncate">'+result[0][0][1]+'</b></p><a href="#!" id="sendrecupss" class="button btn-blue">Enviar</a><a href="#!" class="button cancelrecupss">Cancelar</a>');
                crr = result[0][0][0];
            }else{
                foundation_notify('alert','Usuario no existe, por favor verifique los datos e intente de nuevo', 4000);
                $("#user").focus(); 
            }
        }
    });
});

$(document).on("click","#sendrecupss",function(){
    var bdy = '<table border="0" cellpadding="0" cellspacing="0" style="max-width:600px"><tbody><tr><td><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left"><img height="32" src="https://www.saicor.co.cr/assets/img/logo_d.gif" style="display:block;width:92px;height:32px" width="92" class="CToWUd"></td><td align="right"><img height="32" src="https://ci4.googleusercontent.com/proxy/lAhs1ZWkhk-sePp91w_WRU8JbwObkz_f8JYQgcmDkfp7jLel0CgtX7EYABb6xsGt24NeIH4pJkCRax5hoAvA7UvbMgV1uXoptJYoWQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/shield.png" style="display:block;width:32px;height:32px" width="32" class="CToWUd"></td></tr></tbody></table></td></tr><tr height="16"></tr><tr><td><table bgcolor="#C0D935" border="0" cellpadding="0" cellspacing="0" style="min-width:332px;max-width:600px;border:1px solid #f0f0f0;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px" width="100%"><tbody><tr><td colspan="3" height="72px"></td></tr><tr><td width="32px"></td><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:24px;color:#ffffff;line-height:1.25;min-width:300px">Solicitud de cambio de contraseña</td><td width="32px"></td></tr><tr><td colspan="3" height="18px"></td></tr></tbody></table></td></tr><tr><td><table bgcolor="#FAFAFA" border="0" cellpadding="0" cellspacing="0" style="min-width:332px;max-width:600px;border:1px solid #f0f0f0;border-bottom:1px solid #c0c0c0;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px" width="100%"><tbody><tr height="16px"><td rowspan="3" width="32px"></td><td></td><td rowspan="3" width="32px"></td></tr><tr><td><table border="0" cellpadding="0" cellspacing="0" style="min-width:300px"><tbody><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;padding-bottom:4px">Hola, SAICOR:</td></tr><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;padding:4px 0">La contraseña de tu cuenta de SAICOR <a>'+crr+'</a> ha solicitado un cambio de contraseña.<br><br><b>¿No reconoces esta actividad?</b><br>Haz clic <a href="#!">aquí</a> para obtener más información sobre cómo recuperar la cuenta.</td></tr><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5;padding-top:28px">El equipo de Cuentas de SAICOR</td></tr><tr height="16px"></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;color:#b9b9b9;line-height:1.5"><tbody><tr><td>Esta dirección de correo electrónico no admite respuestas. Para obtener más información, visita el <a href="https://www.saicor.co.cr" style="text-decoration:none;color:#4285f4" target="_blank" data-saferedirecturl="#!">www.saicor.co.cr</a>.</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr height="32px"></tr></tbody></table></td></tr><tr height="16"></tr><tr><td style="max-width:600px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#bcbcbc;line-height:1.5"></td></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#666666;line-height:18px;padding-bottom:10px"><tbody><tr><td>Te hemos enviado este correo electrónico de anuncio de servicio obligatorio para informarte sobre una serie de cambios importantes que afectan a tu cuenta o producto de SAICOR.</td></tr><tr height="6px"></tr><tr><td><div style="direction:ltr;text-align:left">© 2018 SAICOR VS., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</div><div style="display:none!important;max-height:0px;max-width:0px">1531165673661971</div></td></tr></tbody></table></td></tr></tbody></table>';
    enviarCorreo(1,crr,'SAICOR VS - Cambio de Contraseña',bdy);
});

$(document).on("click",".cancelrecupss",function(){
    $("#msjrecupss").html('');
});

function validarcambio(){
    if ($("#vuser").val() == '') {
        $("#vuser").focus();
        return "Usuario Requerido";
    }

    if ($("#vclave").val() == '') {
        $("#vclave").focus();
        return "Contraseña Requerida";
    }

    if ($("#clave").val() == '') {
        $("#clave").focus();
        return "Repetir Contraseña";
    }

    if ($("#vclave").val() != $("#clave").val()) {
        return "Contraseñas Deben Coincidir";
    }

    return false;

}

function getIn(){
    var salida = true;

    if ($('#pass').val() == '') {
        foundation_notify('alert','Contraseña no válida', 4000);
        $('#pass').focus();
        return false;
    }

    if ($('#user').val() == '') {
        foundation_notify('alert','No a Ingresado Usuario', 4000);
        $('#user').focus();
        return false;
    }
    
    var p = mantenimiento('login',3,{id: $('#user').val(), pss: $('#pass').val()});

    if(p[0].length == 2){
        foundation_notify('alert',p[0][0], 4000);
        $('#pass').select();
        switch(parseInt(p[0][1])){
        case 1:
        $.getJSON("http://ip-api.com/json", function (data) {

        var correo = '';
        var varibale = $('#user').val();

        if ($('#user').val().indexOf('@') > 0) {
            rs = arr('login',4,'*',92,'correos like \"%'+ $('#user').val() +'%\"',0,0,'')[0];
            correo = rs[0][0];
            varibale = rs[0][1];
        }else
            correo = arr('login',4,'mail',1,'user = \"'+ $('#user').val() +'\"',0,0,'')[0][0][0];

            if (correo != ''){
                var bdy = '<table border="0" cellpadding="0" cellspacing="0" style="padding-bottom:20px;max-width:600px;min-width:220px"><tbody><tr><td><table cellpadding="0" cellspacing="0"><tbody><tr><td></td><td><table border="0" cellpadding="0" cellspacing="0" style="direction:ltr;padding-bottom:7px" width="100%"><tbody><tr><td align="left"><img height="32" src="https://www.saicor.co.cr/assets/img/logo_d.gif" style="width:92px;height:32px" width="92" class="CToWUd"></td><td align="right" style="font-family:Roboto-Light,Helvetica,Arial,sans-serif">'+varibale+'</td><td align="right" width="35"><img height="28" src="https://ci5.googleusercontent.com/proxy/6NSREpM_-WhRjzfatLPCRhciZraXl3AMbeFU3GLfke5Fd1h9L4wL7VSpz498N2riQzzfhqPOCadJSXvL07dfBvHo1B4zOoPMq3uSfzYJ62QHcbChiXGBB3D-uIne=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png" style="width:28px;height:28px;border-radius:50%" width="28" class="CToWUd"></td></tr></tbody></table></td><td></td></tr><tr><td height="5" style="background:url("https://ci5.googleusercontent.com/proxy/Ky9uO0L4rCGl_EWbkifDjpWLd1NFKfi-7b0JFxdVNqqFxNiBhPWyAqs1qKnPjpW5SaR1r77z_cI3vg96-jP6lpbwEfA67jtQsf_zpAF_QNGPg11GKPcs=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-nw.png") top left no-repeat" width="6"><div></div></td><td height="5" style="background:url("https://ci4.googleusercontent.com/proxy/gXzgRO1K9pWfZAogBcrVQnvwQSkX2I8jcnx4g-SvUNfv82pak_4MS_c1aUDeM40soy4koxNBI_ked6U7zrdBUTjETr518K7PLsfDQqhgTKSF2StiCg=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-n.png") top center repeat-x"><div></div></td><td height="5" style="background:url("https://ci5.googleusercontent.com/proxy/FCthMIcyUgO8YTLL_W5YLLOf8y-W7iePJhbY6RQcus60exGI_nmzO0_hpSJ3NY-IfXIgy7OGWAcb9gi34GE4UjaXoVwU99DLo_R6kdVlVf90Yw0S5N6J=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-ne.png") top right no-repeat" width="6"><div></div></td></tr><tr><td style="background:url("https://ci4.googleusercontent.com/proxy/nt_AIB8tvZvtjQ12K1IxqaM2XPLvZjk-KfB0zxDCUh74WW4hggtOwVMhqJjCPlfdv-7695plB1wt2DOjd6bfj9g6YSYsIWkLks-Sp2OOLZrCHVSNqA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-w.png") center left repeat-y" width="6"><div></div></td><td><div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;padding-left:20px;padding-right:20px;border-bottom:thin solid #f0f0f0;color:rgba(0,0,0,0.87);font-size:24px;padding-bottom:38px;padding-top:40px;text-align:center;word-break:break-word"><div class="m_2555750532299399455v2sp">Intento de inicio de sesión&nbsp;en<br><a style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.87);font-size:16px;line-height:1.8">'+correo+'</a></div></div><div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:rgba(0,0,0,0.87);line-height:1.6;padding-left:20px;padding-right:20px;padding-bottom:32px;padding-top:24px"><div class="m_2555750532299399455v2sp">Has intentado iniciar sesión en tu cuenta de SAICOR desde un dispositivo nuevo. <b>Direccion IP:</b> '+data['query']+' <b>ISP:</b> '+data['isp'] +' | '+ '['+ data['countryCode']+'] ' + data['city'] +', '+ data['regionName']+ ' '+data['country']+'. Te hemos enviado este correo electrónico para comprobar que la has iniciado tú. De no ser tú, por favor dirígete a <a href="https://www.saicor.co.cr">www.saicor.co.cr</a> y realiza el cambio de contraseña como medida de seguridad.<div style="padding-top:24px;text-align:center"><a href="https://accounts.google.com/AccountChooser?Email=saicorvs@gmail.com&amp;continue=https://myaccount.google.com/alert/nt/1531165673000?rfn%3D31%26rfnc%3D1%26eid%3D6968181021774130818%26et%3D0%26asae%3D2%26anexp%3D-control--hsc-control_a" style="display:inline-block;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://accounts.google.com/AccountChooser?Email%3Dsaicorvs@gmail.com%26continue%3Dhttps://myaccount.google.com/alert/nt/1531165673000?rfn%253D31%2526rfnc%253D1%2526eid%253D6968181021774130818%2526et%253D0%2526asae%253D2%2526anexp%253D-control--hsc-control_a&amp;source=gmail&amp;ust=1531252153129000&amp;usg=AFQjCNGvUoceqqoQA8STGWaX5JIgn0zpWQ"></a></div></div></div></td><td style="background:url("https://ci6.googleusercontent.com/proxy/nl-bhiVKfxoOB7l8fKJYsYxLGDXboVNAkOuVf2Uvp0gH24jKX-8iA4BRlejLgTxLKrMUJ_-Bl4tXJPbWh4qe7du3j2u-XwOc4vXL4K7JsVPWNAup3A=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-e.png") center left repeat-y" width="6"><div></div></td></tr><tr><td height="5" style="background:url("https://ci3.googleusercontent.com/proxy/jfAHFNbb5XE9oYVyuunjwVJtgqc_knoooAotgLuxEgfAyq_Wjxon4zP-UeAI9LypsjsmD4LIbAkRu_ypi36lEngdVUx92ToChAkh_jvPYFWG0yrUFZu5=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-sw.png") top left no-repeat" width="6"><div></div></td><td height="5" style="background:url("https://ci5.googleusercontent.com/proxy/RniWkHAniZgi6tGOh-m_jRAhJfDZPUcI07_qMnA2H3lz_OgKL92-fTeRX-hGfY0Xe7vmSdFV8JegmJHRXnoFCJ8AHeqnb0WRxPQLPmjroNPBoVQoHg=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-pixel-s.png") top center repeat-x"><div></div></td><td height="5" style="background:url("https://ci6.googleusercontent.com/proxy/4eP0Q0IrdbbpIB09xEGV4oCRL6wZSSIR3WUel-pqjhdIMo4ehQk3f-p8izrdtEcVBkwKnVQYEh39DC6hMooGoc7H-q6EL3UH39aLF_9OSzX48i-BopOl=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/hodor/4-corner-se.png") top left no-repeat" width="6"><div></div></td></tr><tr><td></td><td><div style="text-align:left"><div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:12px;line-height:20px;padding-top:10px"><div>Te hemos enviado este correo electrónico para informarte de cambios importantes en tu cuenta y en los servicios de SAICOR VS.</div><div style="direction:ltr">© 2018 SAICOR VS.,<a class="m_2555750532299399455afal" style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.54);font-size:12px;line-height:20px;padding-top:10px">1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</a></div></div><div style="display:none!important;max-height:0px;max-width:0px">1531165673000000</div></div></td><td></td></tr></tbody></table></td></tr></tbody></table>';

                enviarCorreo(1,correo,'Alerta de seguridad',bdy);
            }
        });
        break;
        }
        salida = false;
    }
    if (salida){
        direccion = window.location.pathname;
        direccion = direccion.substring(direccion.lastIndexOf('/')+1)
        $("#vdir").val(direccion)
    }else{
        $("#vdir").val('')
    }
    
    return salida;
}

function validar (varreglo,vmodulo) {
    
    var salida = {}
    
        /*VALIDACION FRONT END*/
    
    switch(vmodulo['modulo']) {
        case 'usuario':
            if (vmodulo['tip'] == '') {
                err = validarusuario();
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

function validarusuario(){
    if($("#nombre").val() ==''){
        $("#nombre").focus();
        return 'Nombre Requerido';
    }else{
         $("#fusuarios .zelda").data('triforce')['vnombre'] = $("#nombre").val() +' '+ $("#apellidos").val();
    }

    if($("#vuser").val() ==''){
        $("#vuser").focus();
        return 'Alias Requerido';
    }
//     if($("#vmail").val().match(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i)){

    if ( !$("#vmail").val().match(/\b[\w\.-]+@+[\w\.-]+\.\w{2,4}\b/gi) ){
        
        $("#vmail").focus().select();
        return 'Correo Inválido';
    }
    
    if (!$("#checktyc").is(":checked")) {
        return 'Debe aceptar los Términos y Condiciones';
    }
    $("#fusuarios .zelda").data('triforce')['vclave'] = $("#clave").val();

    $("#fusuarios .zelda").data('triforce')['vprovincia'] = $("#vidprovincia").val();

    $("#fusuarios .zelda").data('triforce')['vcanton'] = $("#vidcanton").val();

    $("#fusuarios .zelda").data('triforce')['vdistrito'] = $("#viddistrito").val();

    $("#fusuarios .zelda").data('triforce')['vdireccion'] = $("#vdireccion").val();

    $("#fusuarios .zelda").data('triforce')['vidTipoUsuario'] = $("#idtipousr").val();

    if ( $(".dz-filename").text() == '' ) { 
        $("#fusuarios .zelda").data('triforce')['vimgusr'] = 0;
    }else{
        $("#fusuarios .zelda").data('triforce')['vimgusr'] = 1;
    }


    return false;
}

function endDetail(vid,acc,modulo){
    switch(modulo){
        case 'usuario':
            if ($(".dz-preview").length > 0) {
                $("input[name='idusuario']").val(vid);
                myDropzone.processQueue();
            }else{
                arr('login',7,1,178,'','null,"../assets/imgupload/users/user.png",'+vid,0,0);
            }
            deadclear(modulo);
        break;
    }
    return false;
}

// ----------------------------------------------------

$('.button .front').click(function() {
    $(this).parents('.flip').toggleClass('flipped');
    if (document.location.pathname.indexOf('fullcpgrid') == -1){
        $(this).parents('.flip').find('input:eq(0)').focus();
    }
    return false;
});

$('.btn-close').click(function(){
    $(this).parents('.flip').toggleClass('flipped');
    return false;
});


function demo(){
    /***
      Add your demo script here...
    ***/

    setTimeout(function(){
      $('.button .front').click();
    }, 2000);
}
