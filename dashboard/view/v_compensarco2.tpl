<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Compensar CO2</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_compensarco2.css?v=0.1">

  </head>
  <body>
    {$NAV}
    
  <div class="container bg-darkd2" align="center">
    <h6 class="white-text">Compensasión de CO<sub>2</sub></h6>
  </div>
    
<div class="container bg-darkd3">
  <div class="wrapper">
    <div class="row">
      <input type="hidden" id="vehih">
    <div class="large-12 medium-12 small-12 columns">
      <div id="vcunductor">
      <ul id="getvehiculo" class="small-block-grid-3 medium-block-grid-4 large-block-grid-8">

      </ul>
      </div>
    </div>

    </div>
  </div>
</div>

<div class="container bg-green" align="center">
  <h6>Calculadora de emisiones</h6>
  <label>LLene los datos según el tipo de combustible del vehículo</label>
</div>

  <div class="container large-6 medium-6 columns bggasolina">
    <div class="large-8 large-offset-2 medium-12 small-12 columns"  >
      <!-- GASOLINA -->
      <ul class="pricing-table">
        <li class="title">GASOLINA</li>
        <!-- <li class="price">$99.99</li> -->
        <!-- <li class="description">An awesome description</li> -->
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline"><b>Gasolina:</b> indique la cantidad de litros de que consume <b>MENSUALMENTE</b>
                </div>
                <div class="small-4 columns">
                  <input type="number" id="lgasolina" placeholder="0" style="margin-bottom: 0 !important">
                  <label id="btn-calcular1" class="calc">Calcular</label>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg CO2/L)">Dióxido de carbono
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="2.26" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(g CH4/L)">Metano
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="1.077" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg CH4/L)">Metano
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.001077" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(g N2O/L)">Óxido nitroso
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.104500" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg N2O/L)">Óxido nitroso
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.000104" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg CO2e)">Kilogramos de dióxido de carbono equivalente
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="2.31" disabled>
                </div>
              </div>
            </div>
          </div>
        </li> -->
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="anualgasolina" class="right inline" title="(t CO2e) (kg CO2e)">
                    Toneladas de Dióxido de Carbono equivalente <br> (t CO2e) anual
                  </label>
                </div>
                <div class="small-4 columns">
                  <input type="text" id="anualgasolina" placeholder="0" value="0" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="price">
        <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline"><h6><b>Total anual a compensar</b> ¢</h6>
                </div>
                <div class="small-4 columns">
                  <input type="text" id="totalgasolina" placeholder="0" value="0" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="cta-button"><a id="compg" class="btn-green-dark button compensar" data-reveal-id="mcompensar" href="#" name="compg">Compensar Emision</a></li> -->
      </ul>
    </div>
  </div>

  <div class="container large-6 medium-6 columns bgdiesel">
    <div class="large-8 large-offset-2 medium-12 small-12 columns">
      <!-- DIESEL -->
      <ul class="pricing-table">
        <li class="title">DIESEL</li>
        <!-- <li class="price">$99.99</li> -->
        <!-- <li class="description">An awesome description</li> -->
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline"><b>Diesel:</b> indique la cantidad de litros de que consume <b>MENSUALMENTE</b>
                </div>
                <div class="small-4 columns">
                  <input type="number" id="ldiesel" placeholder="0" style="margin-bottom: 0 !important">
                  <label id="btn-calcular2" class="calc">Calcular</label>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg CO2/L)">Dióxido de carbono
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="2.69" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(g CH4/L)">Metano
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.142" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg CH4/L)">Metano
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.000142" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(g N2O/L)">Óxido nitroso
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.141600" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg N2O/L)">Óxido nitroso
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="0.000142" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline" title="(kg CO2e)">Kilogramos de dióxido de carbono equivalente
                </div>
                <div class="small-4 columns">
                  <input type="text" id="right-label" placeholder="0" value="2.74" disabled>
                </div>
              </div>
            </div>
          </div>
        </li> -->
        <li class="bullet-item">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="anualdiesel" class="right inline" title="(t CO2e) (kg CO2e)">
                    Toneladas de Dióxido de Carbono equivalente <br> (t CO2e) anual
                  </label>
                </div>
                <div class="small-4 columns">
                  <input type="text" id="anualdiesel" placeholder="0" value="0" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="price">
          <div class="row">
            <div class="small-12 columns">
              <div class="row">
                <div class="small-8 columns">
                  <label for="right-label" class="right inline"><h6><b>Total anual a compensar</b> ¢</h6>
                </div>
                <div class="small-4 columns">
                  <input type="text" id="totaldiesel" placeholder="0" value="0" disabled>
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- <li class="cta-button"><a id="compd" class="btn-green-dark button compensar" href="#" name="compd">Compensar Emision</a></li> -->
      </ul>
    </div>
  </div>

 <!-- MODAL -->
<div id="mcompensar" class="container bg-dark" align="center">
  <h4 id="modalTitle" class="white-text">Compensar Emisiones</h4><br>
  <!-- <p class="lead white-text" style="font-size: 1em;">Cada año SAICOR Vehiculo Sustentable realiza un pago a <a class="hypfonafifo" target="_blank" href="http://www.minaet.go.cr/index.php/es/19-acerca-del-minaet/organizacion/32-fondo-nacional-de-financiamiento-forestal-fonafifo">FONAFIFO</a> <i>(Fondo Nacional de Financiamiento Forestal)</i> para colaborar con la compensacion de emisiones.</p> -->
  <p class="lead white-text" style="font-size: 1em;">Realice una transferencia a los siguientes números de cuenta con el monto indicado en la calculadora de emisiones, adjunte el número de placa en el detalle de transacción para obtener la aprobación de compensanción de emisiones</p>
<!-- <table width="60%">
  <thead>
    <tr>
      <th colspan="2">Reporte de compensación de emisiones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Periodo</td>
      <td>Desde: <b><span id="sdesde"></span></b> - Hasta: <b><span id="shasta"></span></b></td>
    </tr>
    <tr>
      <td>Placa de vehículo</td>
      <td><span id="placav"></span></td>
    </tr>
    <tr>
      <td>Cantidad UCC en Ton CO2</td>
      <td><span id="cton">5,6</span></td>
    </tr>
    <tr>
      <td>Monto FONAFIFO (UCC x $7,5)</td>
      <td>¢ <span id="mfonafifo">0.00</span></td>
    </tr>
    <tr>
      <td>Gastos administrativos SAICOR (UCC x $0.5)</td>
      <td>¢ <span id="msaicor">0.00</span></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <th>¢ <span id="mtotal">0.00</span></th>
    </tr>
    </tfoot>
</table>
 --><br>
<table>
  <thead>
    <tr>
      <th colspan="2">Grupo Molina y Chaves S.A / Ced Jurídica 3-101-646-394 / Cuenta en colones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="../assets/img/bncr.png" width="30%"></td>
      <td><img src="../assets/img/bcr.png" width="30%"></td>
    </tr>
    <tr>
      <td>C-Ahorros 200-01-004-125878-0</td>
      <td>C-Ahorros 001-1277482-0 </td>
    </tr>
    <tr>
      <td>C-Cliente 15100420011258781</td>
      <td>C-Cliente 15202001127748206</td>
    </tr>
  </tbody>
</table>

</div>
<!-- //MODAL -->

    {$FOOT}

    <script src="../assets/js/modulos/system_compensarco2.js?v=0.1"></script>
  </body>
</html>