<?php /* Smarty version 2.6.17, created on 2019-07-09 19:42:47
         compiled from ajax/ajaxcuadricula.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'math', 'ajax/ajaxcuadricula.tpl', 26, false),)), $this); ?>
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/galeria-cuadricula.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/libs/amcharts/plugins/export/export.css?v=0.1"/>
<link rel="stylesheet" type="text/css" href="../assets/libs/iconos/css/fontawesome-all.min.css?v=0.1">
<br><br>

<?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['CARROS']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
$this->_sections['LE']['show'] = true;
$this->_sections['LE']['max'] = $this->_sections['LE']['loop'];
$this->_sections['LE']['step'] = 1;
$this->_sections['LE']['start'] = $this->_sections['LE']['step'] > 0 ? 0 : $this->_sections['LE']['loop']-1;
if ($this->_sections['LE']['show']) {
    $this->_sections['LE']['total'] = $this->_sections['LE']['loop'];
    if ($this->_sections['LE']['total'] == 0)
        $this->_sections['LE']['show'] = false;
} else
    $this->_sections['LE']['total'] = 0;
if ($this->_sections['LE']['show']):

            for ($this->_sections['LE']['index'] = $this->_sections['LE']['start'], $this->_sections['LE']['iteration'] = 1;
                 $this->_sections['LE']['iteration'] <= $this->_sections['LE']['total'];
                 $this->_sections['LE']['index'] += $this->_sections['LE']['step'], $this->_sections['LE']['iteration']++):
$this->_sections['LE']['rownum'] = $this->_sections['LE']['iteration'];
$this->_sections['LE']['index_prev'] = $this->_sections['LE']['index'] - $this->_sections['LE']['step'];
$this->_sections['LE']['index_next'] = $this->_sections['LE']['index'] + $this->_sections['LE']['step'];
$this->_sections['LE']['first']      = ($this->_sections['LE']['iteration'] == 1);
$this->_sections['LE']['last']       = ($this->_sections['LE']['iteration'] == $this->_sections['LE']['total']);
?>

<?php if ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2] != $this->_tpl_vars['idvehi']): ?>
<?php $this->assign('idvehi', ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2])); ?>
<div class="large-4 medium-4 small-6 columns" style="padding: 0.5em;">
  <!-- PREV ORBIT -->
    <ul class="example-orbit" data-orbit data-options="animation:slide; pause_on_hover:true; animation_speed:500; navigation_arrows:true; bullets:false;" id="prev-orbit">
    <li>
      <img src="<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][22]; ?>
" alt="slide <?php echo $this->_tpl_vars['cont']; ?>
" class="pic-orbit card-img" /><?php $this->assign('cont', '1'); ?>
      <!-- <img src="https://static.iris.net.co/dinero/upload/images/2018/1/9/253939_1.jpg" alt="slide <?php echo $this->_tpl_vars['cont']; ?>
" class="pic-orbit card-img" /> -->
      <?php $this->assign('cont', '1'); ?>
    </li>
<?php else: ?>
    <li class="active">
      <img src="<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][22]; ?>
" alt="slide <?php echo $this->_tpl_vars['cont']; ?>
" class="pic-orbit card-img" />
      <!-- <img src="https://static.iris.net.co/dinero/upload/images/2018/1/9/253939_1.jpg" alt="slide <?php echo $this->_tpl_vars['cont']; ?>
" class="pic-orbit card-img" /> -->
    </li>
<?php endif; ?>


<?php echo smarty_function_math(array('assign' => 'sig','equation' => "x+y",'x' => $this->_sections['LE']['index'],'y' => 1), $this);?>

<?php if ($this->_tpl_vars['CARROS'][$this->_tpl_vars['sig']][2] != $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2]): ?>

  </ul>

<!-- SECOND MODAL -->
<div id="modalMinicard" class="reveal-modal bg-dark" data-reveal aria-labelledby="modalMinicardTitle" aria-hidden="true" role="dialog" align="center">
  <h3 id="modalMinicardTitle" class="white-text">Vendedor</h3><br>
  <img src="<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][35]; ?>
" class="pict-vendedor-tab-modal" title="Vendedor">
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
<div class="card bg-dark">
  <!-- <img class="card-img" src="http://placehold.it/350x300" alt="header" /> -->
  <div class="card-info">
  <h6 class="card-title"><?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][3]; ?>
 <b><?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][4]; ?>
</b></h6>
  <div class="card-icon pbtn btn-car-info <?php if ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][36] == 1): ?>crd-ic-borders<?php elseif ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][36] == 2): ?>crd-ic-bordery<?php elseif ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][36] == 3): ?>crd-ic-borderb<?php else: ?>crd-ic-borderg<?php endif; ?>" id="modal-inf<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2]; ?>
" data-reveal-id="modal-car">
    <a class="iinfo btn-car-info" id="modal-car<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2]; ?>
"><i class="fa fa-info white-text"></i></a>
  </div>
  <section class="card-author" align="center">
    <table class="white-text tablewnb">
    <tr>
      <td class="bg-dark white-text"><img src="../assets/img/ico/ico_cal-l.svg" width="20px"> <?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][7]; ?>
</td>
      <td class="bg-dark white-text"><img src="../assets/img/ico/ico_trans-l.svg" width="20px"> <?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][12]; ?>
</td>
    </tr>
    <tr>
      <td class="bg-dark white-text"><img src="../assets/img/ico/ico_kilom-l.svg" width="20px"> <?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][13]; ?>
</td>
      <td class="bg-dark white-text"><img src="../assets/img/ico/ico_tcombus-l.svg" width="20px"> <?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][15]; ?>
</td>
    </tr>
    <tr>
      <td class="bg-dark white-text" colspan="2">
        <span class="green-text"> ¢ <?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][23]; ?>
 </span>
      </td>
    </tr>
    </table>
  </section>
     <!-- <span class="green-text"> ¢ <?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][23]; ?>
 </span> -->
    <p class="card-stats"><br>
      <i class="far fa-handshake" aria-hidden="true" title="Negociable"></i>
      <?php if ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][25] == 1): ?>
          <span class="txtInfo" id="pnegociable" title="Negociable">SI</span> <br>
      <?php else: ?>
          <span class="txtInfo" id="pnegociable" title="Negociable">NO</span> <br>
      <?php endif; ?>
      <i class="fas fa-exchange-alt" aria-hidden="true" title="Acepta cambios"></i>

      <?php if ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][26] == 1): ?>
        <span class="txtInfo" id="pnegociable" title="Acepta cambios">SI</span> <br>
      <?php else: ?>
        <span class="txtInfo" id="pnegociable" title="Acepta cambios">NO</span> <br>
      <?php endif; ?>
      <?php if ($this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][34] == 0): ?>
        <i id="like<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2]; ?>
" class="far fa-heart hlike pbtn" aria-hidden="true" estado="0" title="Agregar a Favoritos"></i>
      <?php else: ?>
        <i id="like<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2]; ?>
" class="fas fa-heart hlike animated pulse pbtn" aria-hidden="true" estado="1" title="Agregar a Favoritos" style="color: #F18888"></i>
      <?php endif; ?>
    </p>
    <!-- <a class="button btn-car-info" data-reveal-id="modal-car" id="modal-car<?php echo $this->_tpl_vars['CARROS'][$this->_sections['LE']['index']][2]; ?>
">Más <span class="hide-for-small-only">información</span></a> -->
  </div>
</div>
</div>
</div>

<?php endif; ?>

<?php endfor; endif; ?>


<!-- MODAL GALERY -->
<div id="modal-car" class="reveal-modal large bg-dark reveal-modal-white" data-reveal aria-labelledby="modalTitle" aria-hidden="false" role="dialog">
<div class="row">
  <div class="large-4 medium-4 small-12 columns text-center">
    <h5><span id="marca-car" class="white-text"></span> <b> <span id="model-car" class="white-text"> </span><span class="white-text"> - </span><span id="anio-car" class="white-text"></span></b></h5>
  </div>
  <div class="large-4 medium-4 small-12 columns text-center">
    <p class="lead">Vende: <a href="#" class="nomuser"><!-- data-reveal-id="secondModal" -->
    <span id="nom-propietario" data-reveal-id="modalMinicard"></span></a></p>
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
  
<ul class="tabs" id="tabs-evaluation" data-tab align="center">
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><label class="text-center white-text">Fotos</label><a align="center" href="#panel7"><img src="../assets/img/registro/garaje/foto.svg" title="Fotos" class="pict-tab"></a></div>
<!--   <div class="large-2 medium-6 small-12 columns tab-title tab-submenu active" align="center"><a align="center" href="#panel1" id="btn-grafico"><img src="../assets/img/registro/garaje/graphic.svg" title="Gráfico" class="pict-tab"><p class="text-center white-text">Gráfico</p></a></div> -->
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><label class="text-center white-text">Detalle</label><a align="center" href="#panel2"><img src="../assets/img/registro/garaje/detalle.svg" title="Detalle" class="pict-tab"></a></div>
  <!-- <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><label class="text-center white-text">Récord</label><a align="center" href="#panel3"><img src="../assets/img/registro/garaje/record.svg" title="Récord" class="pict-tab"></a></div> -->
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu btn-enventa" align="center"><label class="text-center white-text">Condiciones</label><a align="center" href="#panel4" id="btn-condiciones"><img src="../assets/img/registro/garaje/condiciones.svg" title="Condiciones" class="pict-tab"></a></div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu btn-enventa" align="center"><label class="text-center white-text">Circulación</label><a align="center" href="#panel5" id="btn-circulacion"><img src="../assets/img/registro/garaje/recorrido.svg" title="Circulación" class="pict-tab"></a></div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu btn-enventa" align="center"><label class="text-center white-text">Sello</label><a align="center" href="#" id="btn-sello"><img id="tp_sello" src="" title="Circulación" class="pict-tab"></a></div>
  <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"></div>

<!--   <div class="large-2 medium-6 small-12 columns tab-title tab-submenu" align="center"><a href="#panel6"><img src="https://randomuser.me/api/portraits/men/71.jpg" class="pict-vendedor-tab" title="Vendedor"><p class="text-center white-text">Vendedor</p></a></div> -->

</ul>
<div class="tabs-content">
  <section role="tabpanel" aria-hidden="true" class="content" id="panel1">
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
      <?php if ($this->_tpl_vars['RECORD'][$this->_sections['LE']['index']][1] == 1): ?>
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
      <?php else: ?>
        <div class="large-12 medium-12 small-12 columns" align="center">
          <br><br>
          <h4 class="white-text">Éste vehículo no posee récords</h4>
          <br><br>
        </div>
      <?php endif; ?>
    </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content" id="panel4">
  <div class="row" align="center">
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6 style="font-size: 0.9em; padding-bottom: 2px">Traspaso incluido</h6></div>
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6 style="font-size: 0.9em; padding-bottom: 2px">Precio negociable</h6></div>
   <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Acepta cambios</h6></div>
   <div class="large-6 medium-6 small-12 columns bg-green-ligth"><h6>Comentario</h6></div>
 </div>
 <div class="row" align="center"><br>
   <div class="large-2 medium-2 small-12 columns"><span id="trasp-submenu"></span></div>
   <div class="large-2 medium-2 small-12 columns"><span id="nego-submenu"></span></div>
   <div class="large-2 medium-2 small-12 columns"><span id="camb-submenu"></span></div>
   <div class="large-6 medium-6 small-12 columns"><p id="mventa-submenu"></p></div>
 </div>
  </section>
<!-- ................................ -->
  <section role="tabpanel" aria-hidden="true" class="content" id="panel5">
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
  <section role="tabpanel" aria-hidden="false" class="content active" id="panel7">
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

<!-- ............................... -->
<!--  -->
<input type="hidden" id="inf-placa">


<script src="../assets/js/asgard.js?v=0.1"></script>
<script src="../assets/js/modulos/vistavehiculos.js?v=0.1"></script>