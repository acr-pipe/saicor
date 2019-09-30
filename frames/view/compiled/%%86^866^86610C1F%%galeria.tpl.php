<?php /* Smarty version 2.6.17, created on 2019-07-09 19:42:46
         compiled from galeria.tpl */ ?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Galería de autos</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/galeria.css?v=0.1">

  </head>
  <body>
  <?php echo $this->_tpl_vars['NAV']; ?>

  <input type="hidden" value="<?php echo $_SESSION['USR']; ?>
" id="usr_session">
  <div class="container bg-greyl3 text-center" style="position: fixed; z-index: 20; width: 100%; height: 15%;">
    <div class="row" align="center"><br>
      <div class="large-6 medium-6 small-6 columns" align="right">
        <!-- <input class="search" type="text" name="" placeholder="Buscar vehículo por marca, modelo, transmisión, combustible..."> -->
        <input class="search" type="text" id="search_carros" maxlength="100" num="131" var="0,1" placeholder="Buscar vehículo por marca, modelo, estilo y transmisión" autocomplete="off">
      </div>

      <div class="large-2 medium-2 small-2 columns" align="center">
        <div class="switch round small">
          <i class="far fa-heart swlab"></i>
          <input id="isFavorite" name="vgravamenes" value="0" type="checkbox">
          <label for="isFavorite"></label>
          <i class="fas fa-heart swlab"></i>
        </div>
<!--           <div class="switch tiny" id="favoritos">
            <input class="switch-input" id="isFavorite" type="checkbox">
            <label class="switch-paddle" for="isFavorite">
              <span class="switch-active"><i class="fas fa-heart dark-text"></i></span>
              <span class="switch-inactive"><i class="far fa-heart dark-text"></i></span>
            </label>
          </div> -->
      </div>

      <div class="large-1 medium-1 small-1 columns" align="center" title="Filtrar">
        <a class="btn" id="opt-filter"><i class="fa fa-filter" style="font-size: 1.5em"></i></a>
        <!-- <span class="hide-for-small-only" style="font-size: 0.8em; margin-top: 8px">FILTRAR</span> -->
      </div>
      <div class="large-1 medium-1 small-1 columns" align="left">
        <a class="btn btn-search" id="search"><i class="fa fa-search" style="font-size: 1.5em"></i></a>
        <!-- <span class="hide-for-small-only" style="font-size: 0.8em; margin-top: 8px">BUSCAR</span> -->
      </div>
      <div class="large-2 medium-2 small-2 columns hide-for-small-only" align="right" style="position: fixed; right: 5px;">
        <i class="fa fa-th-large fa-2x display pbtn" val="1" id="display-cuadricula" style="color: #4F4F4F"></i>
        <i class="fa fa-th-list fa-2x display pbtn" val="2" id="display-lista" style="color: #4F4F4F"></i>
      </div>
       <div class="large-12 medium-12 small-12 columns show-for-small-only" align="center">
        <i class="fa fa-th-large fa-2x display pbtn" val="1" id="display-cuadricula-small" style="color: #4F4F4F"></i>
        <i class="fa fa-th-list fa-2x display pbtn" val="2" id="display-listas-small" style="color: #4F4F4F"></i>
      </div>
      <input type="hidden" id="tdisplay" value="1">
      <!-- <div class="large-12 medium-12 small-12 columns"><span class="radius secondary label">Regular Label</span></div> -->
    </div>

    <div class="container bg-greyl5 hide" id="div-filter" estado="0" style="z-index: 9000; position: relative">
    <div class="row"><br>
    <!-- <div class="large-2 medium-2 columns">&nbsp;</div> -->
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/zona_geo.svg" class="ico-gal">
          <select class="opt-gal" id="zona">
            <option class="opt-gal" value="0">Zona Geo</option>
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
            <option class="opt-gal" value="<?php echo $this->_tpl_vars['PROV'][$this->_sections['LE']['index']][0]; ?>
"><?php echo $this->_tpl_vars['PROV'][$this->_sections['LE']['index']][1]; ?>
</option>
          <?php endfor; endif; ?>
          </select>
        </label>
      </div>
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/marca.svg" class="ico-gal">
          <!-- <select class="opt-gal">
              <option class="opt-gal" value="1">Marca</option>
          </select> -->
          <input type="text" name="" class="search-vehiculo" placeholder="Marca" id="marcavehi" style="margin-top: 3px;">
          <input type="hidden" id="hmarca" value="0">
        </label>
      </div>
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/modelo.svg" class="ico-gal">
<!--           <select class="opt-gal">
            <option value="husker">Modelo</option>
          </select> -->
          <input type="text" name="" class="search-vehiculo" placeholder="Modelo" id="modelovehi">
          <input type="hidden" id="hmodelo" value="0">
        </label>
      </div>
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/estilo.svg" class="ico-gal">
          <select class="opt-gal" id="estilo">
            <option class="opt-gal" value="0" valor="Estilo">Estilo</option>
            <?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['ESTILOS']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
            <option class="opt-gal" value="<?php echo $this->_tpl_vars['ESTILOS'][$this->_sections['LE']['index']][0]; ?>
" valor="<?php echo $this->_tpl_vars['ESTILOS'][$this->_sections['LE']['index']][1]; ?>
"><?php echo $this->_tpl_vars['ESTILOS'][$this->_sections['LE']['index']][1]; ?>
</option>
            <?php endfor; endif; ?>
          </select>
        </label>
      </div>
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/transmision.svg" class="ico-gal">
          <select class="opt-gal" id="transmision">
            <option class="opt-gal" value="0">Transmisión</option>
            <?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['TRANS']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
              <option class="opt-gal" value="<?php echo $this->_tpl_vars['TRANS'][$this->_sections['LE']['index']][0]; ?>
"><?php echo $this->_tpl_vars['TRANS'][$this->_sections['LE']['index']][1]; ?>
</option>
            <?php endfor; endif; ?>
          </select>
        </label>
      </div>
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/combustible.svg" class="ico-gal">
         <select class="opt-gal" id="combustible">
            <option class="opt-gal" value="0" >Combustible</option>
            <?php unset($this->_sections['LE']);
$this->_sections['LE']['name'] = 'LE';
$this->_sections['LE']['loop'] = is_array($_loop=$this->_tpl_vars['COMBUS']) ? count($_loop) : max(0, (int)$_loop); unset($_loop);
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
              <option class="opt-gal" value="<?php echo $this->_tpl_vars['COMBUS'][$this->_sections['LE']['index']][0]; ?>
"><?php echo $this->_tpl_vars['COMBUS'][$this->_sections['LE']['index']][1]; ?>
</option>
            <?php endfor; endif; ?>
          </select>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/n_puertas.svg" class="ico-gal">
          <select class="opt-gal" id="puertas">
            <option value="0">N° Puertas</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
<!--       <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/anio.svg" class="ico-gal">
          <div class="row">
            <div class="large-12 medium-12 small-12">
              <br><br>
              <div type="" id="rangeP"></div><br>
              <div class="row">
                <div class="large-6 medium-6 small-6 columns">
                  <label>Desde</label>
                  <input type="text" id="price1" class="search" value="">
                </div>
                <div class="large-6 medium-6 small-6 columns">
                  <label>Hasta</label>
                  <input type="text" id="price2" class="search" value="">
                </div>
              </div>
            </div>
          </div>
        </label>
      </div> -->
      <div class="large-2 medium-2 small-3 columns">&nbsp;</div>
      <div class="large-2 medium-2 small-3 columns">
        <label><img src="../assets/img/anio.svg" class="ico-gal">
          <div class="row">
            <div class="large-12 medium-12 small-12">
              <br><br>
              <!-- Start noUiSlider -->
              <div type="" id="range"></div><br>
              <div class="row">
                <div class="large-6 medium-6 small-6 columns">
                  <label>F. Inicial</label>
                  <input type="text" id="anio1" class="search" value="">
                </div>
                <div class="large-6 medium-6 small-6 columns">
                  <label>F. Final</label>
                  <input type="text" id="anio2" class="search" value="">
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
      
      <div class="large-2 medium-2 small-3 columns"></div>
      <div class="large-2 medium-2 small-3 columns"></div>
    </div>

    <div class="row">
      <div class="large-12 medium-12 small-12 columns">


      </div>
    </div>

    </div><!-- container-opt-filter -->

</div> <!-- main-container -->
<br><br><br><br>
<div id="preload" align="center"><i class="fas fa-circle-notch fa-spin fa-4x" style="margin-top: 15%"></i></div>

<div class="container bg-greyl3">
<input type="hidden" id="hdisplay">

  <div id="listacarros" class="row text-center">
    
  </div>
  <ul class="pagination right" vtbl="172" modulo="carros"></ul><br>
  <!-- <div class="row">
    <div class="large-12 medium-12 small-12 columns" style="padding: 0.5em;">
      <nav aria-label="Pagination" style="float: right">
        <ul class="pagination" role="navigation" aria-label="Pagination">
          <li class="disabled">Anterior <span class="show-for-sr">page</span></li>
          <li><a href="#0">1</a></li>
          <li><a href="#0">2</a></li>
          <li><a href="#0">3</a></li>
          <li><a href="#0">4</a></li>
          <li class="ellipsis"></li>
          <li><a href="#0">12</a></li>
          <li><a href="#0">13</a></li>
          <li><a href="#0">Siguiente <span class="show-for-sr">page</span></a></li>
        </ul>
      </nav>
    </div>
  </div> -->

</div>

    <?php echo $this->_tpl_vars['FOOT']; ?>


    <script src="../assets/js/modulos/galeria.js?v=0.1"></script>
  </body>
</html>