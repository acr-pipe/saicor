$(document).ready(function(){

    $("#btn-login").click(function(){
        $.ajax({
            async: false,
            url: '../dashboard/login',
            type: 'POST'
            })
            .done(function(data) {
                $("#login-content").html(data);
            });
    });


});

$(document).foundation();