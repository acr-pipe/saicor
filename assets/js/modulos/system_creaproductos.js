$(function(){

    $("#creaprod").click(function(){
        var nomb = $("#pnombre").val();
        var desc = $("#pdescrip").val();
        var id = arr('login',4,'id',11,'id > 0 order by id desc limit 1',0,0,0)[0][0];
        id++;

        if (nomb == '') {
            foundation_notify('alert', 'Debe ingresar un nombre', 4000);
        }else if (desc == '') {
            foundation_notify('alert', 'Debe ingresar un detalle', 4000);
        }else{
            $("#trremove").remove();
            $("#table-t").append('<tr><td>'+id+'</td> <td id="nom'+id+'">'+nomb+'</td><td id="des'+id+'">'+desc+'</td><td><i class="fa fa-arrow-right pbtn prodetail" id="act'+id+'"></i></td></tr>');
            // INS REGISTRO
            var a = arr('login',4,'',78,'1,0,\"'+nomb+'\",\"'+desc+'\"',0,0,0);
            console.log(a);

            foundation_notify('success', nomb+ ' se ha creado correctamente', 4000);

            $("#pnombre").val('');
            $("#pdescrip").val('');
        }
    });

    $(document).on("click",".nedit",function(){
        var id = $(this).attr('id').substr(4);
        var idprod = $("#nhid"+id).val();
        var a = arr('login',4,'',173,'2,'+idprod+','+id,0,0,0)[0][0];

        $("#pprecio").val(a[5]);
        $("#cantprod").val(a[4]);
        $("#pimagen").val(a[6]);
        $("#purl").val(a[7]);
        $("#hidprod").val(id);
    });

    $("#btndetalle").click(function(){
        var prec = parseFloat( $("#pprecio").val() );
        var imag = $("#pimagen").val();
        var purl = '<iframe style=\'width: 210px;border: none;height: 325px; display: inline;\' title=\'Payment Button IFrame\' src=\''+$("#purl").val()+'\'><p>Your browser does not support iframes.</p></iframe>';
        var cant = $("#cantprod").val();
        var idprod = $("#prodid").val();
        var id = $("#hidprod").val();

        var i = arr('login',4,'idproducto',169,'idproducto = '+idprod,0,0,0)[0];

        if (i == '') {
            // INS REGISTRO
            var a = arr('login',4,'',170,'1,0,'+idprod+','+cant+','+prec+',\''+imag+'\',"'+purl+'"',0,0,0);
            console.log('INGRESO');
            console.log(a)
            foundation_notify('success','El detalle de '+ $("#pnombre").val() +' se ingresó correctamente!', 4000);
        }else{
            //ACT REGISTRO
            var p = arr('login',4,'',170,'2,'+id+','+idprod+','+cant+','+prec+',\''+imag+'\',"'+purl+'"',id);
            console.log('ACTUALIZO');
            console.log(p)
            foundation_notify('success',$("#pnombre").val()+' se ha actualizado correctamente!', 4000);
        }

            var nom = $("#lnom"+id).text();
            var des = $("#ldes"+id).text();

            lmprodetail(id, nom, des);

        // $("#prodid").val('');
        // $("#pnombre").val('');
        // $("#pdescrip").val('');
        $("#pprecio").val('');
        $("#pimagen").val('');
        $("#purl").val('');
        $("#cantprod").val('');
    });

    $("#vreg").click(function(){
        var p = arr('login',4,'',83,'',0,0,0)[0];
        var cont = 1;
        $("#table-m").html('');

        for (var i = 0; i < p.length; i++) {

            $("#table-m").append('<tr id="prod'+p[i][0]+'"><td>'+p[i][0]+'</td><td id="mnom'+p[i][0]+'">'+p[i][1]+'</td><td id="mdes'+p[i][0]+'">'+p[i][2]+'</td><td id="mcan'+p[i][0]+'">'+p[i][3]+'</td><td id="mpre'+p[i][0]+'">'+p[i][4]+'</td><td id="mimg'+p[i][0]+'">'+p[i][5]+'</td><td class="hide" id="msou'+p[i][0]+'">'+p[i][6]+'</td><td><i class="fa fa-arrow-right pbtn mprodetail" id="act'+p[i][0]+'"></i>&nbsp;<i class="fa fa-close pbtn del" id="del'+p[i][0]+'"></i></td></tr>');

            cont++;
        }
    });

    $("#verprod").click(function(){
        var p = arr('login',4,'*',11,'id > 0',0,0,0)[0];
        $("#table-l").html('');
        for (var i = 0; i < p.length; i++) {
            $("#table-l").append('<tr> <td id="lprod'+p[i][0]+'">'+p[i][0]+'</td> <td id="lnom'+p[i][0]+'">'+p[i][1]+'</td> <td id="ldes'+p[i][0]+'">'+p[i][2]+'</td> <td><i class="fa fa-arrow-right pbtn lmprodetail" id="lact'+p[i][0]+'"></i>&nbsp;<i class="fa fa-close pbtn ldel" id="ldel'+p[i][0]+'"></i></td></tr>');
        }
    });

        var p = arr('login',4,'',172,'',0,0)[0];
        if (p != undefined) {
            $("#table-t").html('');
        }
        for (var i = 0; i < p.length; i++) {
            $("#table-t").append('<tr> <td id="tid'+p[i][0]+'">'+p[i][0]+'</td> <td id="tnom'+p[i][0]+'">'+p[i][1]+'</td> <td id="tdesc'+p[i][0]+'">'+p[i][2]+'</td> <td><i class="fa fa-arrow-right pbtn pmprodetail" id="pact'+p[i][0]+'"></i>&nbsp;<i class="fa fa-close pbtn pdel" id="pdel'+p[i][0]+'"></i></td> </tr>' );
        }
        

});
    

    $(document).on("click",".pmprodetail",function(){
        $(".actdetprod").removeClass('hide');
        $("#btndetalle").text('Ingresar Detalle');
        var tid = $(this).attr('id').substr(4);
        var tnom = $("#tnom"+tid).text();
        var tdesc = $("#tdesc"+tid).text();

        $("#prodid").val(tid);
        $("#pnombre").val(tnom);
        $("#pdescrip").val(tdesc);

    });

    $(document).on("click",".mprodetail",function(){
        $(".actdetprod").removeClass('hide');
        $("#btndetalle").text('Actualizar Detalle');
        var id = $(this).attr('id').substr(3);
        $("#hid").val(id);
        var nom = $("#mnom"+id).text();
        var des = $("#mdes"+id).text();
        var can = $("#mcan"+id).text();
        var pre = $("#mpre"+id).text();
        var img = $("#mimg"+id).text();
        var sou = $("#msou"+id).html();

        $("#prodid").val(id);
        $("#pnombre").val(nom);
        $("#pdescrip").val(des);
        $("#pprecio").val(pre);
        $("#cantprod").val(can);
        $("#pimagen").val(img);
        $("#purl").val(sou);
        
        $('#reg-modal').foundation('reveal', 'close');

    });


    $(document).on("click",".lmprodetail",function(){
            
            var id = $(this).attr('id').substr(4);
            var nom = $("#lnom"+id).text();
            var des = $("#ldes"+id).text();

            lmprodetail(id, nom, des);
    });

    $(document).on("click",".prodetail",function(){
        $("#btndetalle").text('Ingresar Detalle');
        $(".actdetprod").removeClass('hide');
        var id = $(this).attr('id').substr(4);
        var nom = $("#nom"+id).text();
        var des = $("#des"+id).text();

        $("#hid").val(id);
        $("#pnombre").val(nom);
        $("#pdescrip").val(des);
    });


    $(document).on("click","#addvarprod",function(){
        var idprod = $("#prodid").val();

        if (idprod == '') {
            foundation_notify('warning','Debe haber un producto cargado&nbsp;&nbsp;<kbd><i class="fa fa-list"></i></kbd>', 4000);
        }
    });

    $(document).on("click",".del",function(){
        var id = $(this).attr('id').substr(3);

        var a = arr('login',4,'',170,'3,'+id+',0,0,0,0,0',0,0,0);

        foundation_notify('alert',$("#mnom"+id).text()+' se ha eliminado!', 4000);
        $("#prod"+id).remove();
    });

function endDetail(vid){

    return false;
}

function lmprodetail(vid, vnom, vdes){
        $(".actdetprod").removeClass('hide');
        $("#btndetalle").text('Actualizar Detalle');

        $("#prodid").val(vid);
        $("#pnombre").val(vnom);
        $("#pdescrip").val(vdes);

        $("#pprecio").val('');
        $("#cantprod").val('');
        $("#pimagen").val('');
        $("#purl").val('');

        $('#reg-modal').foundation('reveal', 'close');

        var a = arr('login',4,'',173,'1,'+vid+',0',0,0,0)[0];

        if (a == '') {
            $("#table-n").html('');
            $("#table-n").append('<tr> <td> No hay variación </td> </tr>');
        }else{
            $("#table-n").html('');
            for (var i = 0; i < a.length; i++) {
                $("#table-n").append('<tr> <td>'+a[i][0]+'<input type="hidden" id="nhid'+a[i][0]+'" value="'+a[i][1]+'"></td><td id="nnom'+a[i][0]+'">'+a[i][2]+'</td> <td id="ncant'+a[i][0]+'">'+a[i][4]+'</td> <td id="nprec'+a[i][0]+'">'+a[i][5]+'</td> <td><i class="fa fa-arrow-right nedit pbtn" id="nact'+a[i][0]+'"></i> <i class="fa fa-close ndel pbtn" id="ndel'+a[i][0]+'"></i></td> </tr>');
            }
        }
}

