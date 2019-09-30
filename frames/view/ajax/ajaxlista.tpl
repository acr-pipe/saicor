<link rel="stylesheet" type="text/css" href="../assets/css/modulos/galeria-lista.css?v=0.1">
<br><br>

{section name=LE loop=$CARROS}

{if $CARROS[LE][2] neq $idvehi}
{assign var ="idvehi" value ="$CARROS[LE][2]"}
<section style="padding: .5em;">
    <div class="row bg-dark main-row" style="padding: .5em;">
        <div class="large-12 medium-12 small-12 columns">

<div class="large-3 medium-3 small-3 columns">
    <div class="card img-gal">
    <span class="tit-img-gal">{$CARROS[LE][3]} <b>{$CARROS[LE][4]}</b></span>&nbsp;&nbsp;
    <i id="like{$CARROS[LE][2]}" class="far fa-heart hlike pbtn" estado="0" title="Añadir este vehículo a Favoritos"></i>
    <!-- PREV ORBIT -->
    <ul class="example-orbit" data-orbit data-options="animation:slide; pause_on_hover:true; animation_speed:500; navigation_arrows:true; bullets:false;" id="prev-orbit">
        <li>
            <img src="{$CARROS[LE][22]}" alt="slide {$cont}" style="max-height:200px"/>
            <!-- <img src="https://static.iris.net.co/dinero/upload/images/2018/1/9/253939_1.jpg" alt="slide {$cont}" style="max-height:200px"/> -->
            {assign var ="cont" value ="1"}
        </li>
    {else}
        <li class="active">
            <img src="{$CARROS[LE][22]}" alt="slide {$cont}" style="max-height:200px"/>
            <!-- <img src="https://static.iris.net.co/dinero/upload/images/2018/1/9/253939_1.jpg" alt="slide {$cont}" style="max-height:200px"/> -->
        </li>
{/if}

{math assign ="sig" equation ="x+y" x=$smarty.section.LE.index y=1}
{if $CARROS[$sig][2] neq $CARROS[LE][2]}

    </ul>

      <!-- SECOND MODAL -->
      <div id="secondModal" class="reveal-modal bg-dark" data-reveal aria-labelledby="secondModalTitle" aria-hidden="true" role="dialog" align="center">
        <h3 id="secondModalTitle" class="white-text">Vendedor</h3><br>
        <img src="{$CARROS[LE][35]}" class="pict-vendedor-tab-modal" title="Vendedor">
        <br><br>
        <h4 id="nom-propietario2" class="white-text" style="text-decoration: underline;"></h4>
        <br>
        <div class="container" align="left">
            <p>
              <i class="fa fa-phone green-ligth-text"></i>&nbsp;&nbsp;<span id="telefonos"></span>
            </p>
            <p>
              <i class="fa fa-inbox green-ligth-text"></i>&nbsp;&nbsp;<span id="correo"></span>
            </p>
            <p>
              <i class="fa fa-globe green-ligth-text"></i>&nbsp;&nbsp;<span id="provincia"></span>
            </p>
        </div>
        <a class="close-reveal-modal" data-reveal-id="modal-car" aria-label="Close">&#171;</a>
      </div>
      <!--  -->

           <!-- /PREV ORBIT -->
           <span>¢ <span id="preciocol">{$CARROS[LE][23]}</span></span>&nbsp;&nbsp;
           <i class="fas fa-circle btn-car {if $CARROS[LE][36] eq 1}crd-ic-borders{elseif $CARROS[LE][36] eq 2}crd-ic-bordery{elseif $CARROS[LE][36] eq 3}crd-ic-borderb{else}crd-ic-borderg{/if}"></i>
           <!-- <span class="white-text"><i style="font-size: 0.6em">($ 41,600.00)</i></span> -->
           </div>
      </div>
            <!-- *************************************** -->
            <div class="large-4 medium-4 small-4 columns"><br>
                <div class="large-6 medium-6 small-6 columns">
                    <div class="container-sm border-bottom border-right">
                        <img src="../assets/img/ico/ico_cal-l.svg" width="35px">
                        <p class="white-text" style="font-size: 0.9em">{$CARROS[LE][7]}</p>
                    </div>
                    <div class="container-sm border-bottom border-right">
                        <img src="../assets/img/ico/ico_trans-l.svg" width="35px">
                        <p class="white-text" style="font-size: 0.9em">{$CARROS[LE][12]}</p>
                    </div>
                </div>
                <div class="large-6 medium-6 small-6 columns">
                    <div class="container-sm border-bottom border-right">
                        <img src="../assets/img/ico/ico_kilom-l.svg" width="35px">
                        <p class="white-text" style="font-size: 0.9em">{$CARROS[LE][13]}</p>
                    </div>
                    <div class="container-sm border-bottom border-right">
                        <img src="../assets/img/ico/ico_tcombus-l.svg" width="35px">
                        <p class="white-text" style="font-size: 0.9em">{$CARROS[LE][15]}</p>
                    </div>
                </div>
            </div>
            <!-- *************************************** -->
            <div class="large-3 medium-3 small-3 columns border-right"><br>
                    <div class="large-6 medium-6 small-6 columns" align="left">
                        <p class="white-text" style="font-size: 0.9em">
                        <span class="green-ligth-text">CC:</span><label class="white-text" id="inf" style="font-size: 0.8em">{$CARROS[LE][11]}</label></p>
                        <p class="white-text" style="font-size: 0.9em">
                        <span class="green-ligth-text">Estilo:</span><label class="white-text" id="inf" style="font-size: 0.8em">{$CARROS[LE][5]}</label></p>
                        <p class="white-text" style="font-size: 0.9em">
                        <span class="green-ligth-text">Placa:</span><label class="white-text" id="inf-placa" style="font-size: 0.8em">{$CARROS[LE][6]}</label></p>
                    </div>
                    <div class="large-6 medium-6 small-6 columns" align="left">
                        <p class="white-text" style="font-size: 0.9em">
                        <span class="green-ligth-text">Exterior:</span><label class="white-text" id="inf" style="font-size: 0.8em">{$CARROS[LE][19]}</label></p>
                        <p class="white-text" style="font-size: 0.9em">
                        <span class="green-ligth-text">Interior:</span><label class="white-text" id="inf" style="font-size: 0.8em">{$CARROS[LE][20]}</label></p>
                        <p class="white-text" style="font-size: 0.9em">
                        <span class="green-ligth-text">Provincia:</span><label class="white-text" id="inf" style="font-size: 0.8em">{$CARROS[LE][21]}</label></p>
                    </div>

            </div>
            <!-- *************************************** -->
            <div class="large-2 medium-2 small-2 columns">    
                <div class="container">
                <br>
                    <img src="{$CARROS[LE][35]}" width="65%" class="user">
                    <!-- <img src="https://static.iris.net.co/dinero/upload/images/2018/1/9/253939_1.jpg" width="65%" class="user"> -->
                </div>
                <div class="container">
                    <a href="#" class="nomuser"><span id="nom-propietario" data-reveal-id="secondModal" class="nomusuario" disabled>{$CARROS[LE][33]}</span></a><!-- data-reveal-id="secondModal" -->
                </div><br>
                <a class="pbtn btn-car-info vermas white-text" data-reveal-id="modal-car" id="modal-car{$CARROS[LE][2]}">Ver más</a>
            </div>
    </div>
</div>
</section>
{/if}

{/section}



<!-- MODAL GALERY -->
<div id="modal-car" class="reveal-modal large bg-dark reveal-modal-white" data-reveal aria-labelledby="modalTitle" aria-hidden="false" role="dialog">
<div class="row">
  <div class="large-4 medium-4 small-12 columns text-center">
    <h5><span id="marca-car" class="white-text"></span> <b> <span id="model-car" class="white-text"> </span><span class="white-text"> - </span><span id="anio-car" class="white-text"></span></b></h5>
  </div>
  <div class="large-4 medium-4 small-12 columns text-center">
    <p class="lead">Vende:  <a href="#" data-reveal-id="secondModal" class="nomuser">
    <span id="nom-propietario1"></span></a></p>
  </div>
  <div class="large-4 medium-4 small-12 columns text-center">
    <p class="lead">&nbsp;<span id="preciocol-modal"></span>
    <i><label class="white-text" id="preciodol-modal"></label></i></p>
  </div>
  <!-- IMAGES -->
  <p><b>Comentario: </b><span class="comentario"></span></p>
  <a class="close-reveal-modal" aria-label="Close" style="color: #FAFAFA !important;">&#215;</a>
  <hr>
</div>

<ul class="tabs" id="tabs-evaluation" data-tab align="center" align="center">
<!--   <div class="large-2 medium-6 small-12 columns tab-title tab-submenu active" align="center"><a href="#panel1" id="btn-grafico"><img src="../assets/img/registro/garaje/graphic.svg" title="Gráfico" class="pict-tab"><p class="text-center white-text">Gráfico</p></a></div> -->
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><a href="#panel7"><img src="../assets/img/registro/garaje/foto.svg" title="Fotos" class="pict-tab"><p class="text-center white-text">Fotos</p></a></div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><a href="#panel2"><img src="../assets/img/registro/garaje/detalle.svg" title="Detalle" class="pict-tab"><p class="text-center white-text">Detalle</p></a></div>
  <!-- <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><a href="#panel3"><img src="../assets/img/registro/garaje/record.svg" title="Récord" class="pict-tab"><p class="text-center white-text">Récord</p></a></div> -->
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu btn-enventa" align="center"><a href="#panel4" id="btn-condiciones"><img src="../assets/img/registro/garaje/condiciones.svg" title="Condiciones" class="pict-tab"><p class="text-center white-text">Condiciones</p></a></div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu btn-enventa" align="center"><a href="#panel5" id="btn-circulacion"><img src="../assets/img/registro/garaje/recorrido.svg" title="Circulación" class="pict-tab"><p class="text-center white-text">Circulación</p></a></div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center">&nbsp;</div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu btn-enventa" align="center"><a align="center" href="#" id="btn-sello"><img id="tp_sello" src="" title="Circulación" class="pict-tab"></a><p class="text-center white-text">Sello</p></div>
  <!-- <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><a href="#panel6"><img src="https://randomuser.me/api/portraits/men/71.jpg" class="pict-vendedor-tab" title="Vendedor"><p class="text-center white-text">Vendedor</p></a></div> -->

</ul>
<div class="tabs-content">
  <section role="tabpanel" aria-hidden="false" class="content" id="panel1">
    <div class="row">
      <div class="large-4 medium-4 small-12 columns">
        <div id="chartdiv1"></div>
      </div>
      <div class="large-4 medium-4 small-12 columns">
        <div id="chartdiv2"></div>
      </div>
      <div class="large-4 medium-4 small-12 columns">
        <div id="chartdiv3"></div>
      </div>
    </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content" id="panel2">
      <div class="row" align="center">
    <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Especificaciones</h6></div>
    <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Seguridad</h6></div>
    <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Confort</h6></div>
  </div>
  <div class="row" align="left">
    <div class="large-4 medium-4 small-12 columns">
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Marca</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-marca"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Modelo</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-modelo"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Estilo</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-estilo"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Placa</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text">Termina en <span id="esp-placa"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Año</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-anio"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Cilindraje</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-ccmotor"></span> c.c</p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Transmisión</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-trans"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Recorrido</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-recorrido"></span> <span id="esp-tiporecorrido"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Combustible</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-combus"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Plazas</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-plazas"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Puertas</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-puertas"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">RTV</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-rtv"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Exterior</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-ext"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Interior</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-int"></span></p>
        </div>
        <div class="large-6 medium-6 small-1 columns text-right">
          <p class="esp">Ubicación</p>
        </div>
        <div class="largee-6 medium-6 small-11 columns text-left">
          <p class="left-text"><span id="esp-prov"></span></p>
        </div>
    </div>
    <div class="large-4 medium-4 small-12 columns bg-darkl3" id="seguridad">
      <section id="segcarro">
        <!--  -->
      </section>
    </div>
    <div class="large-4 medium-4 small-12 columns" id="confort">
      <section id="confcarro">
        <!--  -->
      </section>
    </div>
  </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content" id="panel3">
      <div class="row">
    <div class="large-7 medium-7 small-12 columns">
      <!-- <h1 class="white-text">
        Agregue aquí el archivo PDF con el récord de su vehículo
      </h1> -->
      <section class="hide-for-small-only"><br><br></section>
      <p class="float">Descargue por favor el récord del auto para que pueda pueda evaluar mejor éste vehículo de SAICOR<sup>TM</sup> para la compra.</p>
      <p>Para descargar presione el botón</p>
      <section class="text-center">
        <button class="btn-green expand">Descargar Récord</button>
      </section>
    </div>
    <div class="large-5 medium-5 small-12 columns" align="center">
    <!--  -->
    <img src="../assets/img/registro/garaje/adobe.svg" width="50%">
    <!--  -->  
    </div>
    </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content" id="panel4">
  <div class="row" align="center">
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Precio de venta</h6></div>
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6 style="font-size: 0.9em; padding-bottom: 2px">Traspaso incluido</h6></div>
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6 style="font-size: 0.9em; padding-bottom: 2px">Precio negociable</h6></div>
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Acepta cambios</h6></div>
   <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Comentario</h6></div>
 </div>
 <div class="row" align="center"><br>
  {section name=LE loop=$CAMBIO}
   <div class="large-2 medium-2 small-12 columns">
   <p id="preciocol-submenu"></p>
   <i><abbr><p id="preciodol-submenu" class="white-text" title="Banco Central de Costa Rica: {$CAMBIO[LE][0]}"></p></abbr></i>
   </div>
   {/section}
   <div class="large-2 medium-2 small-12 columns"><span id="trasp-submenu"></span></div>
   <div class="large-2 medium-2 small-12 columns"><span id="nego-submenu"></span></div>
   <div class="large-2 medium-2 small-12 columns"><span id="camb-submenu"></span></div>
   <div class="large-4 medium-4 small-12 columns"><p id="mventa-submenu"></p></div>
 </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="false" class="content" id="panel5">
    <div class="row" align="center">
       <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>RTV al día</h6></div>
       <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Marchamo al día</h6></div>
       <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Gravámenes</h6></div>
     </div>
     <div class="row" align="center"><br>
       <div class="large-4 medium-4 small-12 columns">
          <div class="row">
            <div class="large-6 medium-6 small-6 columns" align="right">
              <span id="rtv-submenu"></span>
            </div>
            <div class="large-6 medium-6 small-6 columns" align="left">
              <span id="mesRTV-submenu"></span>
            </div>
          </div>
        </div>
       <div class="large-4 medium-4 small-12 columns">
        <div class="row">
           <div class="large-6 medium-6 small-6 columns" align="right">
              <span id="marchamo-submenu"></span>
            </div>
            <div class="large-6 medium-6 small-6 columns" align="left">
              <span id="aniommarchamo-submenu"></span>
            </div>
          </div>
        </div>
       <div class="large-4 medium-4 small-12 columns" align="center">
        <span id="gravamen-submenu"></span>
       </div>
      </div><br>
      <div class="row">
      <b class="green-ligth-text">Detalle Gravámen:</b>
       <div class="large-12 medium-12 small-12 columns bg-darkl2" align="left">
        <p id="gravcomment-submenu"></p>
       </div>
     </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content" id="panel6">
    <div class="row">
      <p>INFORMACION DE VENDEDOR</p>
    </div>
  </section>
  <!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content active" id="panel7">
    <div id="panel1a" class="content bg-dark">
        <!-- ORBIT -->
        <div id="modal-orbit">
        <ul class="example-orbit-content" id="fotosvehiculos" data-orbit>

        </ul>
        <!-- SUB ORBIT -->
        <div class="container cont-sub-image-orbit" align="center" id="modal-suborbit">
          <section id="fvehiculos">

          </section>
        </div>
        <!-- /SUB ORBIT -->
        </div>
        <!-- /ORBIT -->
      </div>
  </section>
</div>

</div>
<!--  -->

<script src="../assets/js/asgard.js?v=0.1"></script>
<script src="../assets/js/modulos/vistavehiculos.js?v=0.1"></script>