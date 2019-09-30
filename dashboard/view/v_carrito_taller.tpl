<!DOCTYPE html>
<html lang="es">
  <head class="head">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Tienda Saicor</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_carrito_taller.css?v=0.1">

    
  </head>

  <body>
    {$NAV}
<!-- <div class="headkart" id="headkart">
  <div class="large-12 medium-12 small-12 columns bg-dark" align="center">
    <br>
    <div class="small-6 columns" align="right">
      <a href="#!" data-reveal-id="modal-cart" class="carticon button bg-orange">
        <i class="fa fa-shopping-cart fa-2x"></i>
        <b><span class="qtyitem">&nbsp;&nbsp;</span></b>
      </a>
    </div>
    <div class="small-6 columns" align="left">
      <label class="white-text">TOTAL:</label>
      <h4 class="white-text"><b><span id="smoned">₡</span><span class="totcart">0.00</span></b></h4>
    </div>
  </div>
</div> -->
  <div class="row"><br><br><br><br><br>

  <div class="product-details columns medium-6 center-text-for-small-only">
    <br>
    <div class="row">

      <div class="column small-12 large-5">
        <h6 class="product-color-title">Producto</h6>
          <form class="product-option-selection">
            <section id="listproduct">
              <!-- JS -->
            </section>
          </form>
      </div>

      <div class="column small-12 large-7">
        <h6 class="product-color-title">Descripción</h6>
          <form class="product-option-selection">
            <span id="desciprod" align="text-justify" style="font-size: 13px; color: #7F7F7F">Seleccione un producto para ver la descripción...</span>
          </form>
      </div>
    </div>
    <p class="shipping" align="center">La compra de estos sellos es inmediata y su disponibilidad es digital.</p>
  </div>
  
  <div class="small-12 medium-6 columns">
    <!-- <div class="product-details-add-to-cart"> -->
      <p><span class="in-stock">Seleccione un producto...</span> <!-- <span class="dim-text">(₡<span id="p1item">0.00</span> precio unitario)</span> --></p>
      <hr>
      <section id="sectcant">
        <!-- JS -->
      </section>
      <section id="prodxid">
        <!-- JS -->
      </section>
      <!-- <p class="price">$<span id="p2item">0.00</span></p>
      <p> <span>Cantidad:</span> <input class="qty" type="text" value="1" min="1"> </p>
      <button class="button expanded" id="btnagregar">Agregar al Carrito</button>
    </div> -->
  </div>
  </div>

<!-- <div id="modal-cart" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
<br>
    <div class="row">
      <div class="small-12 columns"><h4>Carrito de compras</h4></div>
    </div>
    <hr style="margin-top: -15px !important">
    <section id="listaproductos" align="center">
    
    </section>
    <div class="row">
      <div class="small-6 columns" align="right">
        <b style="text-align: center">Subtotal<br>(<span id="cantart">0</span> artículos)</b>
      </div>
      <div class="small-6 columns">
        <span style="font-size: 1.3em;">$ <span class="subtotcart">0.00</span></span>
      </div>
    </div>
    <div class="row">
      <div class="large-7 columns">&nbsp;</div>

      <div class="large-5 columns" align="center"><br><br>
        <button class="button success" id="btnrpago2">Realizar Pago</button>
      </div>
    </div>
    <a class="close-reveal-modal" aria-label="Close" style="color: #686868 !important">&#215;</a>
</div> -->
    
    {$FOOT}

    <script src="../assets/js/modulos/system_carrito_taller.js?v=0.1"></script>
    <script src="https://www.bookingplacecostarica.com/BotonPago/Scripts/md5.js?v=0.1"></script>


  </body>
</html>
