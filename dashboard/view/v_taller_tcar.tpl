<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Taller Tcar</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_taller_tcar.css?v=0.1">

  </head>
  <body>
    {$NAV}

    <div class="container bg-dark" align="center">
      <div class="row" align="center">
        <div class="wrapper">
          <div class="row">
   
            <section id="sectTcar1">
            <!-- JS -->
            </section>

          </div><br>
        </div>
      </div>
    </div>

    <div class="container bg-greyl3" align="center">
    <!-- bubble second -->

    <div class="container"><span id="msjAlert" style="color: #F4AC00"></span></div>
    <input type="hidden" id="hidusr">
    <div class="row fullwidth" style="max-width: initial !important; margin-left: auto !important; margin-right: auto !important; padding-left: auto !important; padding-right: auto !important;">
      <div class="small-12 medium-5 columns">
        <table class="container-sm table-d" role="grid" id="table-taller">
        <tr class="tr-d">
          <td class="td-d text-center" width="20%"><b class="upp">Nombre</b></td>
          <td class="td-d"><span id="nomtcar">- - -</span></td>
        </tr>
        <tr class="tr-d">
          <td class="td-d text-center" width="20%"><b class="upp">Placa</b></td>
          <td class="td-d"><span id="placatcar">- - -</span></td>
        </tr>
        <tr class="tr-d">
          <td class="td-d text-center" width="20%"><b class="upp">Marca</b></td>
          <td class="td-d"><span id="marcatcar">- - -</span></td>
        </tr>
        <tr class="tr-d">
          <td class="td-d text-center" width="20%"><b class="upp">Modelo</b></td>
          <td class="td-d"><span id="modelotcar">- - -</span></td>
        </tr>
        <tr class="tr-d">
          <td class="td-d text-center" width="20%"><b class="upp">Taller</b></td>
          <td class="td-d"><span id="tallertcar">- - -</span></td>
        </tr>
        <tr class="tr-d">
          <td class="td-d text-center" width="20%"><b class="upp">Ultimo Kilometraje</b></td>
          <td class="td-d"><span id="ultkmtcar">- - -</span></td>
        </tr>
        <tr class="tr-d htd"><!-- hide -->
          <td class="td-d text-center" width="20%"><b class="upp">Kilometraje actual</b></td>
          <td class="td-d">
            <div class="row">
              <div class="small-12 columns">
                <div class="row collapse">
                  <div class="small-9 columns">
                    <input id="typedist" class="input" type="text" style="text-align: right" placeholder="0" disabled/>
                  </div>
                  <div class="small-3 columns">
                    <span class="postfix rpostfix" valor="1">km</span>
                    <input type="hidden" id="vidtiporecorrido" value="1">
                  </div>
                  <div class="small-12 columns" align="center">
                    <button type="button" id="btnkilom" disabled>Aplicar Kilometraje</button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
      </div>

      <div class="small-12 medium-3 columns">
        <!-- TABLA DE EVALUACION -->
            <div class="small-12 medium-12 columns">
              <section class="title tit-g" style="background: #34934A !important">
                Mantenimiento
              </section>
              <section class="cont-g" style="background: rgba(52, 147, 74, 0.1) !important">
                <span id="mantapl">- - -</span>
              </section>
            </div>
          <br>
            <div class="small-12 medium-12 columns">
              <div class="medium-6 large-6 columns title tit-g">
                Año
              </div>
              <div class="medium-6 large-6 columns cont-g">
               <span id="aniotcar">Enero-2017</span>
              </div>
            </div>
            <div class="small-12 medium-12 columns">
              <div class="medium-6 large-6 columns title tit-g2">
                Taller
              </div>
              <div class="medium-6 large-6 columns cont-g2">
                <span id="taller-tcar"><i class="fa fa-star star"></i></span>
              </div>
            </div>
            <div class="small-12 medium-12 columns">
              <div class="medium-6 large-6 columns title tit-g">
                Vehículo
              </div>
              <div class="medium-6 large-6 columns cont-g">
                <span id="vehiculotcar"><i class="fa fa-star star"></i></span>
              </div>
            </div>
            <div class="small-12 medium-12 columns">
              <div class="medium-6 large-6 columns title tit-g2">
                Conductor
              </div>
              <div class="medium-6 large-6 columns cont-g2">
                <span id="conductcar">
                  <a class="adjsel white-text">Evaluar</a>
                  <!-- <i class="fa fa-star fa-2x star"></i> -->
                </span>
              </div>
            </div>
            <div class="small-12 medium-12 columns">
              <div class="medium-6 large-6 columns title tit-g">
                 CO<sub>2</sub>
              </div>
              <div class="medium-6 large-6 columns cont-g">
                <span id="codostcar"><i class="fa fa-star star"></i><i class="fa fa-star star"></i></span>
              </div>
            </div>
            <div class="small-12 medium-12 columns">
              <section class="title tit-g2">
                Estado
              </section>
              <section class="cont-g1">
                <section id="selloTabla">
                  - - -
                  <!-- <a href="#" id="adjsello" class="white-text adjsel" data-reveal-id="modalEvaluate">Adjudicar sello</a> -->
                </section>
              </section>
            </div>
        <!-- /TABLA DE EVALUACION -->
      </div>
      
      <div class="small-12 medium-3 columns">
        <section class="title tit-g" style="background: #008CBA !important">
          Compra <i class="fa fa-info-circle der" title="Registrar las compras de cada cliente es importante para realizar un correcto manejo del beneficio de los puntos Tcar canjeables por beneficios y descuentos en compras a nuestros comercios asociados"></i>
        </section>
        <section>
          <input type="text" class="input" id="montocompra" placeholder="Monto de compra" disabled>
        </section>
        <section>
          <button type="button" id="addpagoclientes" disabled>Resgistrar Pago</button>
        </section>
      </div>
    </div>

    </div>


    <!-- MODAL -->
    <div id="modalEvaluate" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" align="center">
      <input type="hidden" id="idtcar">
      <input type="hidden" id="tiposello">
      <h4 id="modalTitle"><b>Sello Tcar</b></h4>
      <p class="lead">
        Adjudicar sello <i id="imtitle">Tcar</i> a:
      </p>
        <table>
        <thead>
        <tr>
          <td>Marca</td>
          <td>Modelo</td>
          <td>Vehículo</td>
          <td>Cliente</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><span class="textable" id="mark"></span></td>
          <td><span class="textable" id="mode"></span></td>
          <td><span class="textable" id="plak"></span></td>
          <td><span class="textable" id="nomb"></span></td>
        </tr>
        </tbody>
        </table>

      <p>
        <span class="btn btn-adj btn-accept">Aceptar</span>
        <span class="btn btn-adj btn-cancel">Denegar</span>
      </p>
      </div>
      <a class="close-reveal-modal" aria-label="Close">&#215;</a>
    </div>

    {$FOOT}

    <script src="../assets/js/modulos/system_taller_tcar.js?v=0.1"></script>
  </body>
</html>