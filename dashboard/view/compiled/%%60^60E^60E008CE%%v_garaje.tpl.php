<?php /* Smarty version 2.6.17, created on 2019-06-10 19:11:58
         compiled from v_garaje.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'count', 'v_garaje.tpl', 34, false),)), $this); ?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Garaje</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_garaje.css?v=0.1">

  </head>
  <body class="bg-darkl2">
    <?php echo $this->_tpl_vars['NAV']; ?>


<a id="btn-mygaraje" data-reveal-id="mygaraje" class="bg-orange hide-for-small-only">Mis Autos</a>

<div id="mygaraje" class="reveal-modal bg-dark" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">

<input type="hidden" id="vidvehiculo" name="vidvehiculo" vehid="">

<ul class="button-group round">
<li><a href="#!" class="tiny button secondary" id="vertodos">Todos</a></li>
<li><a href="#!" class="tiny button secondary" id="verventa">En Venta</a></li>
</ul>
<p class="white-text text-center bg-orange">Vehículos en Garaje</p>
<div class="row">
  <p style="margin-bottom: 10px !important">Seleccione el vehículo de su garaje para ver la información<!-- , recuerde seleccionar el taller donde quiere que revisen su auto --></p>
</div>
<div class="row" id="myvehiculos">
  <?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['VEHI']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
    <div class="large-1 medium-1 small-3 columns"><img src="<?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][0]; ?>
" class="pic-contain" enventa="<?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][1]; ?>
" id="v<?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][2]; ?>
" data-tooltip aria-haspopup="true" class="has-tip" title="<?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][3]; ?>
 <?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][4]; ?>
<br><?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][5]; ?>
<br><?php echo $this->_tpl_vars['VEHI'][$this->_sections['LE']['index']][6]; ?>
"></div>
  <?php endfor; endif; ?>
  <?php if (count($this->_tpl_vars['VEHI']) == 0): ?>
    <div class="large-12 medium-12 small-12 columns text-center">
    <br>
      <p class="float-text">No hay vehículos ingresados en este Garaje, para ingresar un nuevo vehícuo de click <a href="cliente-registro-vehiculo">aquí</a></p>
    <br>
    </div>
  <?php endif; ?>
</div>
<br>

<a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<div id="content-garaje">
  <div class="container bg-dark"> <!-- Main Container -->

<div class="row hide" id="formselectvehi1">
  <div class="large-12 medium-12 small-12 columns">  
    <span id="automarca"></span>&nbsp;
    <span id="automodelo"></span>&nbsp;
    <span id="autoanio"></span>&nbsp;
    &nbsp;<span id="autoplaca" class="hide">
    </span>
  </div>
  <hr>
</div>

<div class="row" align="center" id="formselectvehi2">
    <h3 class="white-text" style="margin-top: 15%">SELECCIONE<br>UN AUTO DE</h3><br>
    <h1 class="white-text pbtn" id="misautos">MIS AUTOS</h1>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
<div class="row hide" id="formselectvehi3">
  <br>
  <div class="large-3 medium-3 small-12 columns">
    <div class="row wrapper text-center">
<!--       <div class="large-6 medium-6 small-2 columns">
          <a href="#!" class="btn-modal-garaje" id="img-vendedor" disabled><img src="https://randomuser.me/api/portraits/men/71.jpg" class="pict-vendedor picvendor"></a>
          <span class="white-text opt-gal hide-for-small-only">Vendedor</span></div> -->
      <!-- <div class="large-6 medium-6 small-2 columns">
          <a href="#!" data-reveal-id="modal-garaje" class="btn-modal-garaje" id="btn-elegir-taller" disabled><img src="../assets/img/registro/garaje/taller.svg">
          <span class="white-text opt-gal hide-for-small-only">Elegir Taller</span></a></div> -->
      <div class="large-6 medium-6 small-2 columns">
          <a href="#!" data-reveal-id="modal-garaje" class="btn-modal-garaje" id="btn-vender" disabled><img src="../assets/img/registro/garaje/vender.svg">
          <span class="white-text opt-gal hide-for-small-only">Vender</span></a></div>
      <div class="large-6 medium-6 small-2 columns">
          <a href="#!" data-reveal-id="modal-garaje" class="btn-modal-garaje" id="btn-traspaso" disabled><img src="../assets/img/registro/garaje/traspaso.svg">
          <span class="white-text opt-gal hide-for-small-only">Traspaso</span></a></div>
      <div class="large-6 medium-6 small-2 columns">
          <a href="#!" data-reveal-id="modal-garaje" class="btn-modal-garaje" id="btn-eliminar" disabled><img src="../assets/img/registro/garaje/eliminar.svg">
          <span class="white-text opt-gal hide-for-small-only">Eliminar Vehículo</span></a></div>
      <div class="large-6 medium-6 small-2 columns">
          <a href="#!" data-reveal-id="modal-garaje" class="btn-modal-garaje" id="btn-subir-imagen" disabled><img src="../assets/img/registro/garaje/foto.svg">
          <span class="white-text opt-gal hide-for-small-only">Fotos</span></a></div>
    </div>

    <div class="container hide-for-small-only" id="container-publicidad">
    <br>
    <div class="container">
      <img id="pub-garaje" src="../assets/img/publicidad/ferrari.gif">
      <p class="darkl3-text" align="center"><b>PUBLICIDAD</b></p>
    </div>
    </div>

  </div>
<div class="large-9 medium-9 small-12 columns">
  <div class="container text-center">
    <div class="large-12 medium-12 small-12 columns" id="container-orbit">
<!-- ORBIT -->
<ul class="example-orbit-content" data-orbit id="fotosvehiculos">

</ul>
<!-- /ORBIT -->
<!-- TABLA EVALUACION -->
<table class="container-sm table-g" role="grid">
  <thead>
    <th class="th-g" width="14.28%"><img src="../assets/img/registro/garaje/anio.svg" class="ico-table" title="Año"><br></th>
    <th class="th-g" width="14.28%"><img src="../assets/img/registro/garaje/taller_.svg" class="ico-table" title="Taller"><br></th>
    <th class="th-g" width="14.28%"><i class="fas fa-user-cog fa-2x white-text" title="Técnico"></i><br></th>
    <th class="th-g" width="14.28%"><img src="../assets/img/registro/garaje/vehiculo.svg" class="ico-table" title="Vehículo"><br></th>
    <th class="th-g" width="14.28%"><img src="../assets/img/registro/garaje/conductor.svg" class="ico-table" title="Conductor"><br></th>
    <th class="th-g" width="14.28%"><img src="../assets/img/registro/garaje/compensacion.svg" class="ico-table" title="Compensar CO 2"><br></th>
    <th class="th-g" width="14.28%"><img src="../assets/img/registro/garaje/estadosello.svg" class="ico-table" title="Estado del Sello"><br></th>
  </thead>
</table>
<section id="contenido-tabla-evaluacion">
  <table class="container-sm table-g" role="grid">
  <tbody>
    <tr class="tr-g">
      <td class="white-text td-g" width="14.28%"><span id="aniotcar"><small>AÑO</small></span></td>
      <td class="white-text td-g" width="14.28%"><span id="tecnico-taller"><small>PENDIENTE</small></span></td>
      <td class="white-text td-g" width="14.28%"><span id="taller-tcar"><small>PENDIENTE</small></span></td>
      <td class="white-text td-g" width="14.28%"><span id="vehiculotcar"><small>PENDIENTE</small></span></td>
      <td class="white-text td-g" width="14.28%"><span id="conductcar"><small>PENDIENTE</small></span></td>
      <td class="white-text td-g" width="14.28%"><span id="codostcar"><small>PENDIENTE</small></span></td>
      <td class="white-text td-g" width="14.28%"><span id="sello-tcar"><small>PENDIENTE</small></span></td>
      <!-- <img src="../assets/img/registro/garaje/sello.svg" class="ico-table"> -->
    </tr>
  </tbody>
  </table>
</section>
<!-- TABLA EVALUACION -->
</div>
</div>
</div>
</div>

</div> <!-- Main Container -->

<div id="tabs" class="container bg-dark hide" align="center"><br>
<!-- Info Container -->
<ul class="tabs small-block-grid-3 medium-block-grid-7" id="tabs-evaluation" data-tab align="center">
  <!-- <li class="tab-title tab-submenu active"><a href="#panel-submenu1" id="btn-grafico"><img src="../assets/img/registro/garaje/graphic.svg" title="Gráfico" style="width: 70px;"><p class="text-center white-text">Gráfico</p></a></li> -->
  <li class="tab-title tab-submenu"><a href="#panel-submenu2"><img src="../assets/img/registro/garaje/detalle.svg" title="Detalle" style="width: 70px;"><p class="text-center white-text">Detalle</p></a></li>
  <!-- <li class="tab-title tab-submenu"><a href="#panel-submenu3"><img src="../assets/img/registro/garaje/record.svg" title="Récord" style="width: 70px;"><p class="text-center white-text">Récord</p></a></li> -->
  <li class="tab-title tab-submenu btn-enventa"><a href="#panel-submenu4" id="btn-condiciones"><img src="../assets/img/registro/garaje/condiciones.svg" title="Condiciones" style="width: 70px;"><p class="text-center white-text">Condiciones</p></a></li>
  <li class="tab-title tab-submenu btn-enventa"><a href="#panel-submenu5" id="btn-circulacion"><img src="../assets/img/registro/garaje/recorrido.svg" title="Circulación" style="width: 70px;"><p class="text-center white-text">Circulación</p></a></li>
  <li class="tab-title tab-submenu"><a href="#"><img src="" class="pict-vendedor-tab picvendor" title="Vendedor"><p class="text-center white-text">Vendedor</p></a></li>
  <!-- panel-submenu6 -->
  <li class="tab-title tab-submenu btn-enventa"><a href="#panel-submenu7" id="btn-enventa"><img src="../assets/img/registro/garaje/auto_enventa.svg" title="VEÍCULO EN VENTA" style="width: 70px;"><p class="text-center white-text">En Venta</p></a></li>
</ul>
</div>
<div id="content-tabs" class="tabs-content bg-dark hide">
<!--   <div class="content bg-darkl2 active" id="panel-submenu1">
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
  </div> -->
  <div class="content bg-darkl2 active" id="panel-submenu2">
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
    <div class="large-4 medium-4 small-12 columns bg-darkl3">
      <section id="segcarro">
        <!--  -->
      </section>
    </div>
    <div class="large-4 medium-4 small-12 columns">
      <section id="confcarro">
        <!--  -->
      </section>
    </div>
  </div>
  </div>
  <div class="content bg-darkl2" id="panel-submenu3">
  <div class="row">
    <div class="large-12 medium-12 small-12 columns" align="center"><br>
      <h4 class="white-text">
        <i class="fa fa-comment-alt fa-3x green-text"></i><br><br>
        No existe récord registrado para éste vehículo
      </h4>
      <!-- <section class="hide-for-small-only"><br><br></section>
      <p class="float">Suba por favor el récord del auto para que los demás usuarios de SAICOR<sup>TM</sup> puedan evaluar su vehículo para la compra.</p>
      <p>Luego presione el botón</p>
      <section class="text-center">
        <button class="btn-green expand">Subir Récord</button>
      </section>
    </div>
    <div class="large-5 medium-5 small-12 columns" align="center">
      <form action="../cargar.php" class="dropzone needsclick dz-clickable" id="garaje-upload">
        <div class="dz-message needsclick text-center">
          <h5 class="white-text" style="z-index: 200">De click <b>aquí</b> o arrastre el archivo <b style="color: #ef0000; opacity: 0.4">PDF</b> de récord de su vehículo</h5>
          <img src="../assets/img/registro/garaje/adobe.svg" id="adobe-icon">
        </div>
      </form><br> -->
<!--       <span class="note needsclick">Suba por favor el récord del auto para que los demás usuarios de SAICOR<sup>TM</sup> puedan evaluar su vehículo para la compra.</span> -->
    <!--  -->  
    </div>
    </div>
  </div>
  <div class="content bg-darkl2" id="panel-submenu4">
     <div class="row" align="center">
       <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Precio de venta</h6></div>
       <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Traspaso incluido</h6></div>
       <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Precio negociable</h6></div>
       <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Acepta cambios</h6></div>
       <div class="large-4 medium-4 small-12 columns bg-green-ligth"><h6>Comentario</h6></div>
     </div>
     <div class="row" align="center"><br>
      <?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['CAMBIO']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
       <div class="large-2 medium-2 small-12 columns"><p id="preciocol-submenu"></p><abbr><p id="preciodol-submenu" title="Banco Central de Costa Rica: <?php echo $this->_tpl_vars['CAMBIO'][$this->_sections['LE']['index']][0]; ?>
"></p></abbr></div>
       <input type="hidden" id="tcambio" value="<?php echo $this->_tpl_vars['CAMBIO'][$this->_sections['LE']['index']][0]; ?>
">
       <?php endfor; endif; ?>
       <div class="large-2 medium-2 small-12 columns"><span id="trasp-submenu"></span></div>
       <div class="large-2 medium-2 small-12 columns"><span id="nego-submenu"></span></div>
       <div class="large-2 medium-2 small-12 columns"><span id="camb-submenu"></span></div>
       <div class="large-4 medium-4 small-12 columns"><p id="mventa-submenu"></p></div>
     </div>
  </div>
    <div class="content bg-darkl2" id="panel-submenu5">
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
  </div>
    <div class="content bg-darkl2" id="panel-submenu6">
    <div class="row">
    </div>
  </div>
    <div class="content bg-darkl2" id="panel-submenu7">
    <div class="row" align="center">
      <div class="large-3 medium-3 small-12 columns bg-green-ligth"><h6>Fecha publicación</h6></div>
      <div class="large-3 medium-3 small-12 columns bg-green-ligth"><h6>Vistas de galería</h6></div>
      <!-- <div class="large-2 medium-2 small-12 columns bg-green-ligth"><h6>Subasta</h6></div> -->
      <div class="large-3 medium-3 small-12 columns bg-green-ligth"><h6>Editar Anuncio</h6></div>
      <div class="large-3 medium-3 small-12 columns bg-green-ligth"><h6>Eliminar Anuncio</h6></div>
    </div>
    <div class="row" align="center"><br>
      <div class="large-3 medium-3 small-12 columns"><span id="fechapublic"></span></div>
      <div class="large-3 medium-3 small-12 columns"><span id="vistasgal"></span> vistas</div>
      <!-- <div class="large-2 medium-2 small-12 columns"><a href="#!"><span id="offers">4</span> Ofertas</a></div> -->
      <div class="large-3 medium-3 small-12 columns">
        <div class="row">
           <div class="large-6 medium-6 small-6 columns" align="right">
              <i class="fa fa-pencil blue-text"></i>
            </div>
            <div class="large-6 medium-6 small-6 columns" align="left">
              <a id="editanuncio" class="a-submenu">Editar</a>
            </div>
          </div>
      </div>
      <div class="large-3 medium-3 small-12 columns">
        <div class="row">
           <div class="large-6 medium-6 small-6 columns" align="right">
              <i class="fa fa-times red-text"></i>
            </div>
            <div class="large-6 medium-6 small-6 columns" align="left">
              <a id="" class="a-submenu delete" modulo="condicionesventa"> Eliminar</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
<!-- Info Container -->
</div>



<!-- MODAL -->
  <div id="modal-garaje" class="reveal-modal bg-dark" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" style="border: 1px solid #333;">
    <section id="elegir-taller" class="hide">
    <h4 id="modalTitle" class="green-ligth-text">Elegir Taller</h4>
    <p class="lead"><small class="grey-text">Elige el taller donde constantemente va a ser revisado tu vehículo para que los demás usuarios de SAICOR puedan tomar nota de ello!</small></p>
    <div class="row">
      <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Provincia:</p></div>
      <div class="large-7 medium-7 small-12 columns">
        <select id="provi" class="opt-garaje" style="width: 70%;">
          <?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['PROV']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
          <option value="<?php echo $this->_tpl_vars['PROV'][$this->_sections['LE']['index']][0]; ?>
"><?php echo $this->_tpl_vars['PROV'][$this->_sections['LE']['index']][1]; ?>
</option>
          <?php endfor; endif; ?>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Nombre del Taller:</p></div>
      <div class="large-7 medium-7 small-12 columns">
      <select id="provexprovi" class="opt-garaje" style="width: 70%;">
          <option value="tall_">Seleccione una opción...</option>

        </select>
      </div>

    </div><br>
    <button class="btn-green right" id="guardar-taller">Actualizar</button>
    </section>

<section id="fcondicionesventas">
<input type="hidden" class="zelda">

<section id="fdetallecondicionesventas" vtabla="detallecondicionesventa" tp="3">
<section class="ciclos">
<input type="hidden" class="zelda">

    <section id="vender" class="hide">
    <h4 id="modalTitle" class="green-ligth-text">Vender Vehículo</h4>
    <p class="lead"><small class="grey-text">Publica tu anuncio desde aquí para que aparezca disponible en la <a href="../frames/view/galeria.tpl">Galería de SAICOR<sub>TM</sub></a> y tengas la posibilidad de venderlo a uno de los miles usuarios de SAICOR.</small></p>
      <ul class="tabs" data-tab role="tablist">
        <li class="tab-title tab-modalventa active" role="presentation"><a href="#panel-modalventa1" role="tab" tabindex="0" aria-selected="true" aria-controls="panel2-1">Condiciones</a></li>
        <!-- <li class="tab-title tab-modalventa" role="presentation"><a href="#panel-modalventa2" role="tab" tabindex="0" aria-selected="false" aria-controls="panel2-2">Récord</a></li> -->
        <li class="tab-title tab-modalventa" role="presentation"><a href="#panel-modalventa3" role="tab" tabindex="0" aria-selected="false" aria-controls="panel2-3">Circulación</a></li>
      </ul>
      <div class="tabs-content">
        <div role="tabpanel" aria-hidden="false" class="content active" id="panel-modalventa1">
          <div class="row"><br>
          <div class="wrapper-x2">
          <div class="large-12 medium-12 small-12 columns">
            Precio
          </div>
          <div class="large-9 medium-9 small-12 columns">
            <input type="text" id="preecioventa" placeholder="Precio de venta en colones" />
          </div>
          <div class="large-3 medium-3 small-12 columns" title="Tipo de cambio del día: , Banco Central de Costa Rica">
            <span class="postfix cambiodolar"><i class="white-text">$ <span id="convert-dolar">0</span></i></span><br>
          </div>
<!--           <div class="large-4 medium-4 small-6 columns">
            <input type="text" class="text" placeholder="Precio de venta en ¢" name="">
          </div> -->
          <div class="large-6 medium-6 small-12 columns">
            Traspaso incluido 
          </div>
          <div class="large-6 medium-6 small-12 columns">
            <div class="switch round small">
              <b style="font-size: 0.8em;">NO</b>
              <input id="vtraspaso" name="vtraspaso" value="0" type="checkbox">
              <label for="vtraspaso"></label>
              <b style="font-size: 0.8em;">SI</b>
            </div>
          </div>
          <div class="large-6 medium-6 small-12 columns">
            Precio negociable
          </div>
          <div class="large-6 medium-6 small-12 columns">
            <div class="switch round small">
              <b style="font-size: 0.8em;">NO</b>
              <input id="vnegociable" name="vnegociable" value="0" type="checkbox">
              <label for="vnegociable"></label>
              <b style="font-size: 0.8em;">SI</b>
            </div>
          </div>
          <div class="large-6 medium-6 small-12 columns">
            Acepta cambios
          </div>
          <div class="large-6 medium-6 small-12 columns">
            <div class="switch round small">
              <b style="font-size: 0.8em;">NO</b>
              <input id="vcambio" name="vcambio" value="0" type="checkbox">
              <label for="vcambio"></label>
              <b style="font-size: 0.8em;">SI</b>
            </div>
          </div>
          <div class="large-12 medium-12 small-12 columns">
            Comentario
          </div>
          <div class="large-12 medium-12 small-12 columns">
              <textarea type="textarea" class="text-area" id="vmotivo" placeholder="Opcional"></textarea>
          </div>
          </div>
          </div>
        </div>
        <div role="tabpanel" aria-hidden="false" class="content" id="panel-modalventa2">
          <div class="row">
            <div class="wrapper">
            <div class="large-7 medium-7 small-12 columns">
              <section class="hide-for-small-only"><br><br></section>
              <p class="float">Suba por favor el récord del auto para que los demás usuarios de SAICOR<sup>TM</sup> puedan evaluar su vehículo para la compra.</p>
              <p>Luego presione el botón</p>
              <section class="text-center">
                <button class="btn-green expand">Subir Récord</button>
              </section>
            </div>
            <div class="large-5 medium-5 small-12 columns" align="center">
            <!--  -->
              <form action="../cargar.php" class="dropzone needsclick dz-clickable" id="garaje-upload">
                <div class="dz-message needsclick text-center">
                  <h5 class="white-text" style="z-index: 200">De click <b>aquí</b> o arrastre el archivo <b style="color: #ef0000; opacity: 0.4">PDF</b> de récord de su vehículo</h5>
                  <img src="../assets/img/registro/garaje/adobe.svg" id="adobe-icon-modal">
                </div>
              </form><br> 
            </div>
          </div>
          </div>
        </div>
        <div role="tabpanel" aria-hidden="false" class="content" id="panel-modalventa3">
          <div class="row"><br>
            <div class="wrapper-x2">
              <div class="large-6 medium-6 small-12 columns">
                RTV al día
              </div>
              <div class="large-6 medium-6 small-12 columns">
                <div class="switch round small">
                  <b style="font-size: 0.8em;">NO</b>
                  <input id="vrtvaldia" name="vrtvaldia" value="0" type="checkbox">
                  <label for="vrtvaldia"></label>
                  <b style="font-size: 0.8em;">SI</b>
                </div>
              </div>
              <div class="large-6 medium-6 small-12 columns">
                Marchamo al día
              </div>
              <div class="large-6 medium-6 small-12 columns">
                <div class="switch round small">
                  <b style="font-size: 0.8em;">NO</b>
                  <input id="vmarchamoaldia" name="vmarchamoaldia" value="0" type="checkbox">
                  <label for="vmarchamoaldia"></label>
                  <b style="font-size: 0.8em;">SI</b>
                </div>
              </div>
              <div class="large-6 medium-6 small-12 columns">
                Gravámenes
              </div>
              <div class="large-6 medium-6 small-12 columns">
                <div class="switch round small">
                  <b style="font-size: 0.8em;">NO</b>
                  <input id="vgravamenes" name="vgravamenes" value="0" type="checkbox">
                  <label for="vgravamenes"></label>
                  <b style="font-size: 0.8em;">SI</b>
                </div>
              </div>
              <div class="large-12 medium-12 small-12 columns" id="div-gravamen">
                <label class="white-text">Descripción de Gravámenes</label>
                <textarea id="vdetallegravamen" type="textarea" class="text-area" placeholder="Comentario"></textarea>
              </div>
            </div>
            </div>
            <button class="btn-green right add" modulo="condicionesventa" varias="1" id="publicar-venta">Publicar</button>
          </div>
        </div>
    </section>
    
    <section id="traspaso" class="hide">
    <h4 id="modalTitle" class="green-ligth-text">Traspasar Vehículo</h4>
    <p class="lead"><small class="grey-text">Elige el usuario al cuál deseas traspasar el vehículo de tu garaje al suyo! Adevertencia: El vehículo desaparecerá de tu garaje y aparecerá automáticamente  en la sección de <a href="#!">vehículos traspasados</a>.</small></p>
    <input type="hidden" id="vidclientetrasp" value="">
    <div class="row">
      <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Identificación:</p></div>
      <div class="large-6 medium-6 small-11 columns">
        <input id="cedula" type="text" placeholder="Identificación"> <!-- style="width: 80%;" -->
      </div>
      <div class="large-1 medium-1 small-1 columns">
        <i class="fa fa-search pbtn" id="searchuser"></i>
      </div>
      <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Traspasar a:</p></div>
      <div class="large-7 medium-7 small-12 columns">
        <input id="nomuser" type="text" readonly value="" placeholder="Nombre del usuario"> <!-- style="width: 80%;" -->
      </div>
      <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Provincia:</p></div>
      <div class="large-7 medium-7 small-12 columns">
        <input id="provincia" type="text" readonly value="" placeholder="Provincia"> <!-- style="width: 80%;" -->
      </div>
      <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Transacción:</p></div>
      <div class="large-7 medium-7 small-12 columns">
        <input id="idtransaccion" type="text" readonly value="" placeholder="ID TRANSACCION"> <!-- style="width: 80%;" -->
      </div>
    </div>
      <button class="btn-green right" id="traspasar-vehi">Traspasar</button>
    </section>
    <section id="eliminar" class="hide">
      <h4 id="modalTitle" class="green-ligth-text">Eliminar Vehículo</h4>
      <p class="lead"><small class="grey-text">Elimina un vehículo en caso de que ya no seas directamente el propietario, esto para que SAICOR pueda integrar en su historial un registro de vehículo de los cuales hayas sido poseedor y las transacciones satisfactorias para calificar tu puntuación.</small></p>
      <div class="row" align="center">
        <div class="large-12 medium-12 small-12 columns">
          <button class="btn-radius btn-border-red" data-reveal-id="modal-eliminar" align="center" style="width: 40%" id="del">Eliminar Vehículo</button>
        </div>
      </div>
      <!-- <button class="btn-green right" id="guardar-info">Guardar</button> -->
      <div id="modal-eliminar" class="reveal-modal bg-dark" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" style="border: 1px solid #333;" align="center">
        <h4 class="green-ligth-text">Seguro que quieres eliminar este vehículo...</h4>
        <br>
        <p id="infocardel"></p>
        <button class="btn-radius btn-grey">Cancelar</button>
        <button class="btn-radius btn-border-red" id="delcarverified">Eliminar</button>
        <a class="close-reveal-modal" aria-label="Close">×</a>
      </div>
    </section>
    <section id="subir-imagen" class="hide">
      <div class="wrapper container">
        <h4 class="white-text">Editar fotografías del vehículo</h4><hr><br>  
      </div>
      <div class="wrapper container">
        <div class="large-12 medium-12 small-12 columns picture-upload" align="center">
            <form action="../cargar.php" id="registro-upload" class="dropzone needsclick dz-clickable">
              <input type="hidden" name="idvehiculo">
              <span class="dz-message needsclick text-center">SUBIR FOTOGRAFIAS NUEVAS DEL VEHICULO</span>
            </form>
          </div>
      </div><br><br><br><br><br><br><br><br><br><br><br>
      <div class="wrapper container" id="container-fotos">
        
      </div>
      <!-- <button class="btn-green right" id="guardar-info">Salir</button> -->
    </section>
    <a class="close-reveal-modal" aria-label="Close">&#215;</a>
<!--  -->
  </section>
  </section>
  </section>
</div>

    <?php echo $this->_tpl_vars['FOOT']; ?>


    <script src="../assets/js/modulos/system_garaje.js?v=0.1"></script>
  </body>
</html>
