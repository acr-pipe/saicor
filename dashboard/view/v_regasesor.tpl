<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Registro Asesor</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_regasesor.css?v=0.1">

  </head>
  <body>
    {$NAV}
<div class="container bg-green" align="center">
  <h6 class="dark-text">Registro de Asesor</h6>
</div>
<section id="fusuarios">
  
<div class="container bg-darkd3">
  <div class="row">
    <div class="large-12 medium-12 small-12 columns" align="center">
      <div class="large-4 medium-4 small-12 columns">
          <label class="white-text">Provincia</label>
          <select id="iprov">
              <option id="0">Seleccione una opción...</option>
            {section name=LE loop=$PROV}
              <option id="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
            {/section}
          </select>
      </div>
      <div class="large-4 medium-4 small-12 columns">
          <label class="white-text">Cantón</label>
          <select id="icant">
            <!-- JS -->
          </select>
      </div>
      <div class="large-4 medium-4 small-12 columns">
          <label class="white-text">Distrito</label>
          <select id="idist">
            <!-- JS -->
          </select>
      </div>
      <div class="large-12 medium-12 small-12 columns">
          <textarea type="text" id="vdireccion" placeholder="Dirección exacta"></textarea>
      </div>
    </div>
    <div class="large-10 medium-10 small-12 columns">
      
      <div class="row"><br><br>
        <div class="large-4 medium-4 small-12 columns">
            <input type="text" id="vcedula" placeholder="Cédula">
        </div>
        <div class="large-4 medium-4 small-12 columns">
            <input type="text" id="inombre" class="nombreapellido" placeholder="Nombre">
        </div>
        <div class="large-4 medium-4 small-12 columns">
            <input type="text" id="iapellido" class="nombreapellido" placeholder="Apellidos">
        </div>

        
        <div class="large-4 medium-4 small-12 columns">
            <input type="text" id="itelefono" placeholder="Teléfono">
        </div>
        <div class="large-4 medium-4 small-12 columns">
          <div class="row collapse">
            <div class="small-7 columns">
              <input type="text" id="imail" placeholder="usuario">
            </div>
            <div class="small-5 columns">
              <span class="postfix">@saicor.com</span>
            </div>
          </div>
        </div>
                
        <input id="vuser" type="hidden" value="">
        <input id="vnombre" type="hidden" value="">
        <input id="vclave" type="hidden" value="">
        <input id="vcedula" type="hidden" value="">
        <input id="vmail" type="hidden" value="">
        <input id="vidTipoUsuario" type="hidden" value="4">
        <input id="vbcambioPSSW" type="hidden" value="0">
        <input id="vcodigo" type="hidden" value="">
        <input id="vprovincia" type="hidden" value="">
        <input id="vcanton" type="hidden" value="">
        <input id="vdistrito" type="hidden" value="">
      </div>

    </div>

    <!-- <div class="large-2 medium-2 small-12 columns">
      <div class="row">
        <div class="large-12 medium-12 small-12 columns" style="margin-top: -10%"> -->
        <!-- DROPZONE -->
        <!-- <br><br>
            <form class="dropzone needsclick dz-clickable" id="asesor-upload"> -->
            <!-- action="../cargar.php" -->
              <!-- <div class="dz-message needsclick text-center">
                <h6 class="white-text" style="z-index: 200">Foto de Asesor</h6>
              </div>
            </form> -->
        <!-- /DROPZONE -->
        <!-- </div>
      </div>
    </div> -->

    <div class="large-12 medium-12 small-12 columns" align="center">
        <button id="regasesor" class="btn-orange add" modulo="usuario">Registrar Asesor</button>
    </div>
</section>

  </div>
</div>

    {$FOOT}

    <script src="../assets/js/modulos/system_regasesor.js?v=0.1"></script>
  </body>
</html>