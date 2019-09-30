<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Contacto</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/formcontactus.css?v=0.1">

  </head>
  <body>
  {$NAV}
<div id="main-contactus" class="container">
    <section class="show-for-xlarge-up"><br><br></section>
  <div class="row" align="center">
    <h1 class="mailing-list white-text"><b>Entra en contacto con nosotros!</b></h1>
    <section class="show-for-xlarge-up"><br><br></section><br>
  </div>

  <div class="row">
    <div class="small-12 medium-6 columns small-order-1 medium-order-2">
      <img src="../assets/img/moon.png" id="imgmoon">
    </div>

    <div class="small-12 medium-6 columns small-order-1 medium-order-2 mailing-container">
      <p class="white-text">Gracias por estar con nosotros. Puedes ponerte en contacto a través de este formulario: </p>
      <input id="nomcliente" type="text" placeholder="Nombre y Apellidos">
      <input  id="mailcliente" type="text" placeholder="Direccion de correo electrónico">
      <textarea id="msjcliente" type="text" placeholder="Mensaje"></textarea>
      <a class="button expanded subscribe-button btn-green" href="#" id="sendcontactus" data-reveal-id="sendModal">Enviar   <i class="fa fa-send"></i></a>
    </div>

      
  </div>
</div>

<div id="sendModal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">Esto tardará unos segundos...</h2>
  <div class="row">
    <div class="large-6 medium-6 columns"><br>
      <p class="lead">Estamos procesando tu mensaje!</p>
      <p>Gracias por comunicarte con nosotros!</p>
    </div>

    <div class="large-6 medium-6 columns">
      <img id="imgSobre" src="../assets/img/sendmail.png" width="90%"><br><br>
    </div>
  </div>
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

    {$FOOT}

    <script src="../assets/js/modulos/formcontactus.js?v=0.1"></script>
  </body>
</html>