<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Mantenimientos</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_mantenimiento.css?v=0.1">

  </head>
  <body>
    {$NAV}
    <div class="container bg-green" align="center">
      <h6 class="dark-text">Control de Sellos</h6>
    </div>
    <div class="container bg-darkd2 bubble first">
    <input id="hid" type="hidden" value="">
      <div class="wrapper" align="center">
        <p class="white-text">Digite el número de <b>cédula de taller</b> o <b>nombre de taller</b> para realizar la búsqueda y adjudicar los sellos correspondientes</p><br>
      </div>
      <div class="row">
        <div class="small-12 medium-12 large-12 columns">
        <div class="large-1 medium-1 small-12 columns">
          <br><i class="fa fa-search" id="btaller" style="font-size: 1.5em"></i>
        </div>
        <div class="large-4 medium-4 small-12 columns">
          <label class="white-text">Teléfono</label>
          <input type="text" id="itelefono" tipo="telefono">
        </div>
        <div class="large-4 medium-4 small-12 columns">
          <label class="white-text">Nombre Taller</label>
          <input type="text" id="inombre" tipo="nombre">
        </div>
        <div class="large-3 medium-3 small-12 columns">
          <label class="white-text">Fecha</label>
          <input type="text" id="ifecha" disabled>
        </div>
      </div>
      <div class="small-12 medium-12 large-12 columns">
        <div class="large-2 medium-2 small-12 columns" style="text-align: center;">
          <label class="white-text">Tcar Disponible</label>
          <input type="text" id="isdisp" disabled>
        </div>
        <div class="large-2 medium-2 small-12 columns" style="text-align: center;">
          <label class="white-text">Plus Disponible</label>
          <input type="text" id="isdisp_plus" disabled>
        </div>
        <div class="large-2 medium-2 small-12 columns" style="text-align: center;">
          <label class="white-text">Blue Disponible</label>
          <input type="text" id="isdisp_blue" disabled>
        </div>
        <div class="large-2 medium-2 small-12 columns" style="text-align: center;">
          <label class="white-text">Tcar</label>
          <input type="text" id="isellos">
        </div>
        <div class="large-2 medium-2 small-12 columns" style="text-align: center;">
          <label class="white-text">Plus</label>
          <input type="text" id="isellos_plus">
        </div>
         <div class="large-2 medium-2 small-12 columns" style="text-align: center;">
          <label class="white-text">Blue</label>
          <input type="text" id="isellos_blue">
        </div>

        <div class="large-12 medium-12 small-12 columns" align="center">
          <button id="adjsellos" class="btn-orange">Adjudicar Sellos</button>
        </div>
      </div>
      </div>
    </div>

    <div class="container bg-darkd3" align="center" id="tabla_sellos_adjudicados"><br><br>
      <table>
        <thead>
          <tr style="background: #99CD56">
            <th class="th-t" width="200">Taller</th>
            <th class="th-t" width="150">Período</th>
            <th class="th-t" width="50">Tcar Disponibles</th>
            <th class="th-t" width="100">Sellos Tcar</th>
            <th class="th-t" width="50">TcarPlus Disponibles</th>
            <th class="th-t" width="100">Sellos TcarPlus</th>
            <th class="th-t" width="50">TcarBlue Disponibles</th>
            <th class="th-t" width="100">Sellos TcarBlue</th>
            <th class="th-t" width="150"><b>Total</b></th>
            <th class="th-t" width="50"><a id="vreg" href="#" data-reveal-id="reg-modal"><i class="fa fa-list viewreg" aria-hidden="true" printreg title="Ver registro de sellos adjudicados"></i></a></th>
          </tr>
        </thead>
        <tbody id="table-t">
          <tr id="trremove">
            <td colspan="6" style="text-align: center">
              <label id="labelmsj">Adjudique sellos a talleres para visualizar un resumen de los sellos adjudicados</label>
            </td>
          </tr>
          <!-- JS -->
        </tbody>
      </table>  
    </div>

  <!-- MODAL -->
<div id="reg-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" style="max-width: 72.5rem !important;">
  <h4 id="modalTitle" align="center">Registro de Sellos Adjudicados</h4>
  <span class="text-center">Se muestra un máximo de 100 registros</span>
  <div class="container center"  style="height: 600px; max-height: 600px;overflow-y: scroll;">
    <table class="grid hover">
    <thead>
      <tr style="background: #F5BD34">
        <th class="th-t" width="50">#</th>
        <th class="th-t" width="500">Taller</th>
        <th class="th-t" width="200">Cédula</th>
        <th class="th-t" width="150">Período</th>
        <th class="th-t" width="50">Tcar Disponibles</th>
        <th class="th-t" width="100">Sellos Tcar</th>
        <th class="th-t" width="150"><b>Total Tcar</b></th>
        <th class="th-t" width="50">TcarPlus Disponibles</th>
        <th class="th-t" width="100">Sellos TcarPlus</th>
        <th class="th-t" width="100"><b>Total TcarPlus</b></th>
        <th class="th-t" width="50">TcarBlue Disponibles</th>
        <th class="th-t" width="100">Sellos TcarBlue</th>
        <th class="th-t" width="100"><b>Total TcarBlue</b></th>
      </tr>
    </thead>
    <tbody id="table-m">
    <!-- JS -->
    </tbody>
  </table>
  </div>
  <a class="close-reveal-modal" aria-label="Close" style="color: #232323 !important">&#215;</a>
</div>

    {$FOOT}

    <script src="../assets/js/modulos/system_mantenimiento.js?v=0.1"></script>
  </body>
</html>