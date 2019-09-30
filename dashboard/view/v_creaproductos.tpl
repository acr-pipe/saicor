<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Registro Asesor</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_creaproductos.css?v=0.1">

  </head>
  <body>
    {$NAV}
    <div class="container bg-green" align="center">
      <h6 class="dark-text">Productos</h6>
    </div>
    <input id="hid" type="hidden" value="">
    <div class="container bg-darkd2 bubble first">
      <div class="wrapper" align="center">
        <p class="white-text">Cree los productos que se muestran en la tienda en linea para los clientes de tipo <b>Taller</b></p><br>
      </div>

      <div class="row bg-darkd2" id="headmod">
        <input type="hidden" id="lastprod" value="">
        <div class="small-12 medium-6 large-6 columns">
          <div class="large-2 medium-2 small-3 columns">
            <label>&nbsp;</label>
            <input class="dark-text" type="text" id="prodid" value="" disabled>
          </div>
          <div class="large-10 medium-10 small-9 columns">
            <label class="white-text">Nombre</label>
            <input class="dark-text" type="text" id="pnombre" value="">
          </div>
          <div class="large-12 medium-12 small-12 columns">
            <label class="white-text">Descripción</label>
            <textarea class="dark-text" type="text" id="pdescrip" style="max-height: 125px; min-height: 125px; min-width: 100%; height: 125px"></textarea>
          </div>
          <div class="large-12 medium-12 small-12 columns" align="center">
            <!-- <a href="#" id="addvarprod" class="btn-orange button" title="Agregar variacion de producto"><i class="fa fa-arrow-right"></i></a> -->
            <button id="creaprod" class="btn-orange">Crear Producto</button>
            <a href="#" data-reveal-id="listProd"  id="verprod" class="btn-orange button" title="Lista de productos"><i class="fa fa-list"></i></a>
          </div>
        </div>

        <div class="actdetprod small-12 medium-6 large-6 columns hide">
        <div class="large-12 medium-12 small-12 columns">
          <label class="white-text">Precio</label>
          <input class="dark-text" type="number" id="pprecio" value="">
        </div>
        <div class="large-12 medium-12 small-12 columns">
            <label class="white-text">Cantidad por cliente
              <select id="cantprod">
                <option id="c0" value="0">Seleccione una cantidad</option>
                <option id="c1" value="1">1</option>
                <option id="c2" value="2">2</option>
                <option id="c3" value="3">3</option>
                <option id="c4" value="4">4</option>
                <option id="c5" value="5">5</option>
                <option id="c10" value="10">10</option>
                <option id="c15" value="15">15</option>
                <option id="c30" value="30">30</option>
              </select>
            </label>
        </div>
        <div class="large-12 medium-12 small-12 columns hide">
          <label class="white-text">Imagen</label>
          <input type="hidden" id="pimagen" value="">
        </div>
        <div class="large-12 medium-12 small-12 columns">
          <label class="white-text">Source</label>
          <textarea class="dark-text" type="text" id="purl" style="max-height: 55px; min-height: 55px; min-width: 100%; height: 55px"></textarea>
        </div>
        <div class="large-12 medium-12 small-12 columns" align="center">
          <button id="btndetalle" class="btn-orange">Actualizar Detalle</button>
          <a href="#" id="addvarprod" class="btn-orange button" title="Agregar variacion de producto"><i class="fa fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
    </div>
    
    <div class="container bg-darkd3" align="center"><br>
      <div class="newdetprod large-4 medium-4 small-12 columns">
        <table class="striped" align="center">
          <input type="hidden" id="hidprod" value="">
          Variación de producto
          <thead style="background: #F6AC1D">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="table-n">
            <tr>
              <td style="text-align: center">Variaciones por producto</td>
            </tr>
          <!-- JS -->
          </tbody>
        </table>
      </div>

      <div class="large-8 medium-8 small-12 columns">
      <table class="striped">
        <thead style="background: #99CD56">
          Productos sin detalle
          <tr align="center">
            <th class="th-t" width="5%">#</th>
            <th class="th-t" width="20%">Nombre</th>
            <th class="th-t" width="70%">Descripción</th>
            <th class="th-t" width="5%">Acciones</th>
            <th class="th-t"><a id="vreg" href="#" data-reveal-id="reg-modal"><i class="fa fa-list viewreg" aria-hidden="true" printreg title="Productos ingresados recientemente"></i></a></th>
          </tr>
        </thead>
        <tbody id="table-t">
          <tr id="trremove">
            <td colspan="6" style="text-align: center">
              <label id="labelmsj">Agregue un producto para visualizar un resumen de los productos creados</label>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>

<!-- MODAL -->
  <div id="listProd" class="reveal-modal" data-reveal aria-labelledby="firstModalTitle" aria-hidden="true" role="dialog">
  <h4 id="modalTitle" align="center">Lista de Procutos</h4>
    <span class="text-center">Se muestra un máximo de 100 registros</span>
    <div class="container center" style="height: 600px;max-height: 600px;overflow-y: scroll;">
      <table class="grid hover" width="100%">
      <thead>
        <tr style="background: #F5BD34">
          <th class="th-t">#</th>
          <th class="th-t">Nombre</th>
          <th class="th-t">Descripción</th>
          <th class="th-t">Acciones</th>
        </tr>
      </thead>
      <tbody id="table-l">
      <!-- JS -->
      </tbody>
    </table>
    </div>
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

  <div id="reg-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
    <h4 id="modalTitle" align="center">Procutos Ingresados Recientemente</h4>
    <span class="text-center">Se muestra un máximo de 100 registros</span>
    <div class="container center" style="height: 600px;max-height: 600px;overflow-y: scroll;">
      <table class="grid hover" width="100%">
      <thead>
        <tr style="background: #F5BD34">
          <th class="th-t">#</th>
          <th class="th-t">Nombre</th>
          <th class="th-t">Descripción</th>
          <th class="th-t">Cantidad</th>
          <th class="th-t">Precio</th>
          <th class="th-t">Imagen</th>
          <th class="th-t">Acciones</th>
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

    <script src="../assets/js/modulos/system_creaproductos.js?v=0.1"></script>
  </body>
</html>