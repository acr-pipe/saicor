<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Talleres afiliados</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/talleres.css?v=0.1">

  </head>
  <body>
    {$NAV}
    <div class="container bg-greyl3" style="position: fixed; z-index: 1000; width: 100%">
      <div class="row" align="center"><br>
        <div class="large-8 medium-8 small-10 columns">
          <input class="search" type="text" name="" placeholder="Buscar por nombre comercial">
        </div>
        <div class="large-2 medium-2 small-2 columns" align="center">
          <a class="btn" id="opt-filter"><i class="fa fa-filter fa-2x"></i></a>
          <span class="hide-for-small-only" style="font-size: 0.8em; margin-top: 8px">FILTRAR</span>
        </div>
        <div class="large-2 medium-2 small-2 columns" align="left">
          <a href="" class="btn btn-search"><i class="fa fa-search fa-2x"></i></a>
          <span class="hide-for-small-only" style="font-size: 0.8em; margin-top: 8px">BUSCAR</span>
        </div>
        <!-- <div class="large-12 medium-12 small-12 columns"><span class="radius secondary label">Regular Label</span></div> -->
      </div>

      <div class="container bg-greyl5" id="div-filter" estado="0" style="z-index: 9000; position: relative;">
        <div class="row" align="center"><br>
        <div class="large-3 medium-3 columns">&nbsp;</div>
          <div class="large-2 medium-2 small-4 columns">
            <label><img src="../assets/img/map_talleres.svg" class="ico-gal">
              <select class="opt-talleres">
                <option class="opt-talleres" value="1">Provincia</option>
                {section name=LE loop=$PROV}
                <option class="opt-talleres" value="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
                {/section}
              </select>
            </label>
          </div>
    <!-- <div class="large-2 medium-2 small-4 columns">
            <label><img src="../assets/img/user_talleres.svg" class="ico-gal">
              <select class="opt-talleres">
                <option class="opt-talleres" value="">Tipo</option>
              </select>
            </label>
          </div> -->
<!--           <div class="large-2 medium-2 small-4 columns">
            <label><img src="../assets/img/config_talleres.svg" class="ico-gal">
              <select class="opt-talleres"> 
                <option class="opt-talleres" value="">Especialización</option>
              </select>
            </label>
          </div> -->
          <div class="large-3 medium-3 columns">&nbsp;</div>
        </div>
      </div>

  </div>
  <br><br><br><br>
  <div id="preload" align="center"><i class="fa fa-circle-o-notch fa-spin fa-4x" style="margin-top: 15%"></i></div>
  <div class="container bg-greyl3">
  <div class="wrapper" align="center">
    <table>
      <section id="tallerautorizado">
        
      </section>
    </table>
    
    </div>
  </div>

    {$FOOT}

    <script src="../assets/js/modulos/talleres.js?v=0.1"></script>
  </body>
</html>