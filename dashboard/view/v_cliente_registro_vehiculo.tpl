<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Registro vehículo</title>
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-cliente_registro_vehiculo.css?v=0.1">
  </head>
  <body>
  {$NAV}
  <div id="fvehiculos">
  <input type="hidden" class="zelda">
  <div class="container bg-greyl3">
  <div class="row text-center">
  <div class="large-12 medium-12 small-12 columns">
  <b>Formulario de registro de vehículo</b>
  <p>Completa todos los datos solicitados en el siguiente formulario para registrar de manera correcta tu vehículo en el Sistema de SAICOR Green Hope</p>
  </div>
  </div>
  <div id="fdetallevehiculos" vtabla="detallevehiculo" tp="3">
  <input type="hidden" class="zelda">
  <div class="ciclos">

  <div class="row text-center">
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/marca.svg" class="ico-reg">
  <input type="text" name="" class="input-reg-vehiculo" placeholder="Marca" id="marcavehi">
  <input type="hidden" id="vidmarca" value="">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/modelo.svg" class="ico-reg">
  <input type="text" name="" class="input-reg-vehiculo" placeholder="Modelo" id="modelovehi">
  <input type="hidden" id="vidmodelo" value="">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/anio.svg" class="ico-reg">
  <input type="number" name="" class="input-reg-vehiculo" placeholder="Año" id="vanio">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/placa.svg" class="ico-reg">
  <input type="text" name="" class="input-reg-vehiculo" maxlength="6" placeholder="Placa" id="vplaca">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/color.svg" class="ico-reg">
  <input type="text" name="" class="input-reg-vehiculo color" placeholder="Color Exterior" id="vcolorext">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/color.svg" class="ico-reg">
  <input type="text" name="" class="input-reg-vehiculo" placeholder="Color Interior" id="vcolorint">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/estilo.svg" id="estilo-carro" class="ico-reg">
  <select class="input-reg-vehiculo" id="videstilo" type="select">
  <option class="opt-reg" value="1" name="Sedan">Estilo</option>
  {section name=LE loop=$ESTILOS}
  <option class="opt-reg" value="{$ESTILOS[LE][0]}" name="{$ESTILOS[LE][1]}">{$ESTILOS[LE][1]}</option>
  {/section}
  </select>
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/transmision.svg" class="ico-reg">
  <select class="input-reg-vehiculo" id="vidtransmision" type="select">
  <option class="opt-reg" value="1">Transmisión</option>
  {section name=LE loop=$TRANS}
  <option class="opt-reg" value="{$TRANS[LE][0]}">{$TRANS[LE][1]}</option>
  {/section}
  </select>
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/motor.svg" class="ico-reg">
  <input type="text" name="" class="input-reg-vehiculo" placeholder="C.C Motor" id="vccmotor">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/combustible.svg" class="ico-reg">
  <select class="input-reg-vehiculo" id="vidcombustible" type="select">
  <option class="opt-reg" value="1">Combustible</option>
  {section name=LE loop=$COMBUS}
  <option class="opt-reg" value="{$COMBUS[LE][0]}">{$COMBUS[LE][1]}</option>
  {/section}
  </select>
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/plazas.svg" class="ico-reg">
  <input type="number" name="" class="input-reg-vehiculo" placeholder="Plazas" id="vplazas" min="0">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/puertas.svg" class="ico-reg">
  <input type="number" name="" class="input-reg-vehiculo" placeholder="Puertas" id="vpuertas" min="0">
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/kilom.svg" class="ico-reg">
  <div class="row collapse">
  <div class="small-9 columns">
  <input type="number" name="" class="input-regr-vehiculo" placeholder="Recorrido" id="vidrecorrido" min="0">
  </div>
  <div class="small-3 columns">
  <span class="postfix rpostfix" valor="1">km</span>
  <input type="hidden" id="vidtiporecorrido" value="1">
  </div>
  </div>
  </label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/rtv.svg" class="ico-reg">
  <select class="input-reg-vehiculo" id="vidmesrtv" type="select">
  <option class="opt-reg" value="1">Mes de RTV</option>
  {section name=LE loop=$MES}
  <option class="opt-reg" value="{$MES[LE][0]}">{$MES[LE][1]}</option>
  {/section}
  </select>
  </label>
  <label class="modRTV"><a href="#!" data-reveal-id="modalRTV" class="modRTV" style="font-size: 0.8em;">Ayuda</a></label>
  </div>
  <div class="large-2 medium-2 small-6 columns">
  <label><img src="../assets/img/registro/provincia.svg" class="ico-reg">
  <select class="input-reg-vehiculo" id="vidprovincia" type="select">
  <option class="opt-reg" value="1">Provincia</option>
  {section name=LE loop=$PROV}
  <option class="opt-reg" value="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
  {/section}
  </select>
  </label>
  </div>
  <div class="large-6 medium-6 small-12 columns picture-upload">
  <form action="../cargar.php"  id="registro-upload" class="dropzone needsclick dz-clickable">
  <input type="hidden" name="idvehiculo">
  <span class="dz-message needsclick text-center"><img src="../assets/img/registro/foto.svg" class="ico-reg" style="margin-top: 15px; width: 80px;"></span>
  </form>
  </div>
  </div> <!-- row text-center -->
  <div class="container bg-greyl2">
  <div class="row">
  <div class="large-6 medium-6 small-6 columns">
  <h5>Seguridad</h5>
  <label>Seleccione elementos de la lista</label><br>
  <label for="segtodos"><input class="ckbox" id="segtodos" estado="0" type="checkbox">&nbsp;Seleccionar todos</label><hr>
  {section name=LE loop=$SEG}
  <label for="seg{$SEG[LE][0]}"><input class="ckbox" id="seg{$SEG[LE][0]}" name="seguridadchk" type="checkbox" estado="0">&nbsp;{$SEG[LE][1]}</label>
  {/section}
  </div>
  <div class="large-6 medium-6 small-6 columns">
  <div class="large-6 medium-6 small-12 columns">
  <h5>Confort</h5>
  <label>Seleccione elementos de la lista</label><br>
  <label for="conftodos"><input class="ckbox" id="conftodos" estado="0" type="checkbox">&nbsp;Seleccionar todos</label><hr>
  {section name=LE loop=$CONF1}
  <label for="conf{$CONF1[LE][0]}"><input class="ckbox" id="conf{$CONF1[LE][0]}" name="confortchk" type="checkbox" estado="0">&nbsp;{$CONF1[LE][1]}</label>
  {/section}
  </div>
  <div class="large-6 medium-6 small-12 columns">
  <section class="hide-for-small-only"><br><br><br><br><br><br></section>
  {section name=LE loop=$CONF2}
  <label for="conf{$CONF2[LE][0]}"><input class="ckbox" id="conf{$CONF2[LE][0]}" name="confortchk" type="checkbox" estado="0">&nbsp;{$CONF2[LE][1]}</label>
  {/section}
  </div>
  </div>
  </div>
  <div class="row">
  <div class="large-6 medium-6 small-12 columns">
  <div class="row collapse">
  <label>Otras características de <i>seguridad</i></label>
  <div class="small-3 columns">
  <span class="postfix">Otros</span>
  </div>
  <div class="small-9 columns">
  <input type="text" id="seguridad_otro" class="input" placeholder="Ejm: ejemplo1, ejemplo2,...">
  </div>
  </div>
  </div>
  <div class="large-6 medium-6 small-12 columns">
  <div class="row collapse">
  <label>Otras características de <i>confort</i></label>
  <div class="small-3 columns">
  <span class="postfix">Otros</span>
  </div>
  <div class="small-9 columns">
  <input type="text" id="confort_otro" class="input" placeholder="Ejm: ejemplo1, ejemplo2,...">
  </div>
  </div>
  </div>
  </div>
  </div>
  <!-- btn-registrar -->
  <div class="container bg-greyl3">
  <div class="row" align="center"><br>
  <div class="large-12 medium-12 small-12 columns">
  <button class="btn btn-grey btn-radius add" modulo="vehiculo" varias="1" id="btn-registrou" style="padding: 8px 80px;">Registrar</button>
  </div>
  </div>
  </div>
  <!-- btn-registrar -->
  </div> <!-- ciclos -->
  </div> <!-- fdetallevehiculos -->
  </div> <!-- container bg-greyl3 -->
  </div> <!-- fvehiculos -->
  <!-- MODALS -->
  <div id="modalRTV" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
    <div class="modal-content" align="center">
      <h4>Frecuencias de RTV según tipo de vehículo.</h4>
      <br>
      <h6 id="modalTitle">¿Con qué frecuencia debe pasar su vehículo la RTV?</h6>
      <table role="grid">
        <thead>
          <th>Antigüedad (año de fabricación)*</th>
          <th>Frecuencia de revisión</th>
        </thead>
        <tbody>
          <tr>
            <td>Menor de 5 años</td><td>Bienal</td>
          </tr>
          <tr>
            <td>Mayor de 5 años</td><td>Anual</td>
          </tr>
          <tr>
            <td>Trasporte público</td><td>Semestral</td>
          </tr>
        </tbody>
      </table>
      <h6 id="modalTitle">¿En qué mes debe pasarla?</h6>
      <p style="font-size: 0.9em;">Último dígito del nº de placa de matrícula</p>
      <table role="grid">
      <thead>
      <th>Mes</th>
      <th>Uso particular</th>
      <th>Servicio público</th>
      </thead>
      <tbody>
      {section name=LE loop=$MESRTV}
      <tr>
      <td>{$MESRTV[LE][0]}</td><td>{$MESRTV[LE][1]}</td><td>{$MESRTV[LE][2]}</td>
      </tr>
      {/section}
      </tbody>
      </table>
    </div>
    <a class="close-reveal-modal" aria-label="Close">&#215;</a>
  </div>
{$FOOT}
<script src="../assets/js/modulos/cliente_registro_vehiculo.js?v=0.1"></script>
</body>
</html>