<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>SAICOR GreenHope</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_sgreenhope.css?v=0.1">

  </head>
  <body>
    {$NAV}
    <div class="container bg-dark">
      <div class="row"><br><br><br>
      <div class="columns small-12 medium-5 large-5" align="center">
      <h5 class="green-text">Infomación de Beneficios</h5>
        <table style="border: none; background: transparent;">
          <thead>
            <tr class="tab1-trh">
              <th colspan="5">
                Detalle mensual de compra de sellos
              </th>
            </tr>
            <tr class="tab1-tr">
              <th class="tab1-th" width="100">Período</th>
              <th class="tab1-th" width="150">Sellos adjudicados</th>
              <th class="tab1-th" width="100">Tcar Coins</th>
              <!-- <th class="tab1-th" width="150" colspan="2">Mensualidad</th> -->
            </tr>
          </thead>
          
          <tbody id="repSellosUsr">
            <!-- JS -->
          </tbody>

          <tfoot class="bg-green">
            <tr>
            <!-- <td class="tab1-td" colspan="5"><a href="" class="btn-download" title="Descargar en PDF">Descargar&nbsp;<img src="../assets/img/adobe.svg" width="5%" class="btn-adobde"></a></td> -->
            <!-- <td class="tab1-td"></td> -->
          </tr>
          </tfoot>
        </table><br><br><br><br><br><br><br><br><br><br>
      </div>
      <div class="columns small-12 medium-7 large-7" align="center">
        <h5 style="color: #8AC3FF">Sellos vendidos</h5>
        <table style="border: none; background: transparent;">
          <thead>
            <tr class="tab2-trh">
              <th colspan="5">
                Detalle mensual de venta de sellos
              </th>
            </tr>
            <tr class="tab2-tr">
              <th class="tab2-th" width="100">Período</th>
              <th class="tab2-th" width="200">Tcar</th>
              <th class="tab2-th" width="200">Tcar Plus</th>
              <th class="tab2-th" width="200">Tcar Blue</th>
              <th class="tab2-th" width="250">Sellos vendidos</th>
              <!-- <th class="tab1-th" width="150" colspan="2">Mensualidad</th> -->
            </tr>
          </thead>
          
          <tbody id="repSellosVend">
            <!-- JS -->
          </tbody>
        </table><br><br><br><br><br><br><br><br><br><br>
      </div>
      </div>
    </div>
    <div class="container bg-darkd3 hide" align="center">
      <h5 class="green-text">Infomación General</h5>
      <table style="border: none;">
        <thead>
          <tr class="tab2-tr">
            <th class="tab2-trh">Sellos por mes</th>
            <th class="tab2-trh">Tcar Coins por sello</th>
            <th class="tab2-trh" colspan="2">Más benficios</th>
            <th class="tab2-trh">Descuento</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tab2-tr">
            <td class="tab2-td">1 a 9</td>
             <td class="tab2-td">1500</td>
            <td class="tab2-td">- - -</td>
            <td class="tab2-td">- - -</td>
            <td class="tab2-td">- - -</td>
          </tr>
          <tr class="tab2-tr">
            <td class="tab2-td">10 a 19</td>
             <td class="tab2-td">1750</td>
            <td class="tab2-td">SAICOR Green Hope</td>
            <td class="tab2-td">¢ 35,000.00</td>
            <td class="tab2-td">75%</td>
          </tr>
          <tr class="tab2-tr">
            <td class="tab2-td">20 o más</td>
             <td class="tab2-td">2000</td>
             <td class="tab2-td">SAICOR Green Hope</td>
            <!-- <td class="tab2-td">SAICOR Soft<br>(2 usuarios)</td> -->
            <td class="tab2-td">¢ 35,000.00</td>
            <td class="tab2-td">100%</td>
          </tr>
        </tbody>
      </table>
      </div>

    {$FOOT}

    <script src="../assets/js/modulos/system_sgreenhope.js?v=0.1"></script>
  </body>
</html>