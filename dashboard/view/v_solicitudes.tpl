<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Solicitudes</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_solicitudes.css?v=0.1">

  </head>
  <body>
    {$NAV}


  <div class="container bg-green" align="center">
    <div class="grid-x grid-padding-x">
        <legend>Seleccione tipo de solicitud</legend>
        <input type="radio" name="tsolicitud" value="pendi" id="solpe" required><label for="solpe">Pendiente</label>
        <input type="radio" name="tsolicitud" value="aprov" id="solap"><label for="solap">Aprobada</label>
    </div>
<!--     <h6 class="dark-text">Solicitudes de talleres</h6> -->
  </div>

<div class="container bg-darkd2" align="center">
  <table role="grid">
    <thead>
      <tr>
        <th width="50">#</th>
        <th width="150">Nombre Cliente</th>
        <th width="150">Nombre Taller</th>
        <!-- <th width="100">Teléfono</th> -->
        <th width="250">Dirección</th>
        <th width="100">Correo</th>
        <th width="160">Teléfonos</th>
        <th width="100">Clasificación</th>
        <th width="50">Acciones</th>
      </tr>
    </thead>
    <tbody id="tsolicitud">
      <!-- JS -->
    </tbody>
  </table>
    </div>

  <div id="modalConfirm" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
    <!-- <h4 id="modalTitle">Awesome. I have it.</h4> -->
    <div class="row">
      <div class="large-6 medium-6 small-12 columns">
        <p class="lead"><span id="mmessage" class="">Excelente!</span></p>
        <span id="leyenda"></span>
      </div>
      <div class="large-6 medium-6 small-12 columns" align="center">
        <img id="mimg" src="../assets/img/aprov.png" width="40%">
      </div>
    </div>
    <a class="close-reveal-modal" aria-label="Close">&#215;</a>
  </div>

    {$FOOT}

    <script src="../assets/js/modulos/system_solicitudes.js?v=0.1"></script>
  </body>
</html>