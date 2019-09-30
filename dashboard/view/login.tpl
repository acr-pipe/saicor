<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-main.css?v=0.1">
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-login.css?v=0.1">
    <link rel="stylesheet" type="text/css" href="../assets/css/foundation.css?v=0.1">
    <link rel="stylesheet" type="text/css" href="../assets/css/cropper.css?v=0.1"/>
</head>
<body>
<div class="container-login login">
<br><br>
<div class="container-sm">
    <form role="form" id="logF" action="../dashboard/index.php" method="POST">
    <input type="hidden" name="vdir" value="">
    <div class="row text-center fadeInDown animated">
        <div class="large-12 medium-12 small-12 columns">
            <img src="../assets/img/ghope.svg" width="28%">
            <h4 class="white-text">SAICOR Green Hope</h4>
        </div>
    </div><br><br>
    <div class="row">
        <div class="large-6 medium-6 small-12 columns fadeInLeft animated">
            <input id="user" type="text" name="usr" placeholder="Usuario">
        </div>
        <div class="large-6 medium-6 small-12 columns fadeInRight animated">
            <input id="pass" type="password" name="pss" placeholder="Contraseña">
        </div>
    </div>
    <div class="row">
        <div class="large-12 medium-12 small-12 columns fadeInUp animated">
            <button type="submit" class="button success" style="width: 100%;">Ingresar</button>
        </div>
    </div>
    </form>

    <div class="row">
        <div class="large-4 medium-4 small-12 columns columns large-text-left medium-text-left small-only-text-center fadeInUp animated">
            <a href="#!" id="register" data-reveal-id="modal1">Registrarse</a>
        </div>
        <section class="show-for-small-only"><br><br></section>
        <div class="large-8 medium-8 small-12 columns columns large-text-right medium-text-right small-only-text-center fadeInUp animated">
            <a href="#!" id="recupss">Olvidó su contraseña</a>
        </div>

    </div>
    <div class="row">
        <div class="large-12 medium-12 small-12 columns text-center">
            <div class="alert alert-danger err_" id="err1" align="center" style="display: none">
                <strong id="errm1"></strong>
            </div>
            <div class="alert alert-success suc_" id="suc1" align="center" style="display: none">
                <strong id="sucm1"></strong>
            </div>
        </div>
    </div><!-- row -->
    <footer>
        <div class="row text-center fadeInUp animated">
            <div class="large-12 medium-12 small-12 columns" style="bottom:0%;">
                <small class="greyd-text">© 2017. Copyright. Todos los derechos reservados. SAICOR S.A. </small>
            </div>
        </div>
    </footer>
    </div><!-- row -->

    <div id="msjrecupss" class="white-text" align="center">
    </div>

</div><!-- container sm-->
</div>


<div id="modal1" class="reveal-modal login" data-reveal aria-labelledby="firstModalTitle" aria-hidden="true" role="dialog">
  <h3 id="modalTitle">Formulario de registro</h3>
  <p class="lead">Para registrarse por favor rellene todos los campos que se le soliciten con información competente</p>
  <div class="row">

<section id="fusuarios">
<input type="hidden" class="zelda">
      <div class="large-12 medium-12 small-12 columns">
      <!-- <div class="large-7 medium-7 small-12 columns"> -->
          <div class="large-12 medium-12 small-12 columns">
            <div class="row">
              <div class="large-6 medium-6 small-6 columns" align="center">
               <p id="tu2" class="tusuario pbtn">Usuario</p>
               <!--  <img id="tu2" class="tusuario pbtn" src="../assets/img/user_talleres_g.svg" width="35%"> --><br>
              </div>
              <div class="large-6 medium-6 small-6 columns" align="center">
                <p id="tu3" class="tusuario pbtn">Taller</p>
                <!-- <img id="tu3" class="tusuario pbtn" src="../assets/img/config_talleres.svg" width="35%"><br> -->
              </div>
        <!-- <div class="large-4 medium-4 small-4 columns" align="center">
                <img id="tu5" class="tusuario pbtn" src="../assets/img/agencia_taller.svg" width="35%"><br>
              </div> -->
            </div>
          </div>

          <div class="large-12 medium-12 small-12 columns">
          <label class="sectionTaller hide" style="text-align: justify;">Si quieres formar parte de la gran familia de <i>Talleres Autorizados de <b>SAICOR Vehículo Sustentable</b></i>, debes primero solicitar la visita de uno de nuestos colaboradores certificados para el estudio respectivo de tu <b><i>Centro de Servicio</i>, muy pronto</b>.</label>
          <br class="sectionTaller hide">
          </div>


        <div class="large-4 medium-4 small-12 columns picture-upload">          
        <form action="../cargausuario.php"  id="registro-upload" class="dropzone needsclick dz-clickable">
          <input type="hidden" id="vsolicitud">
          <input type="hidden" name="idusuario">
          <input type="hidden" id="idtipousr" value="2">
          <span class="dz-message needsclick text-center"><img src="../assets/img/registro/foto.svg" class="ico-reg" style="margin-top: 15px; width: 100%;"></span>
        </form>
        </div>
        <div class="large-8 medium-8 small-12 columns">
          <div class="large-6 medium-6 small-12 columns">
          <label>Nombre
            <input type="text" id="nombre" placeholder="Nombre" />
          </label>
          </div>
          <div class="large-6 medium-6 small-12 columns">
          <label>Apellidos
            <input type="text" id="apellidos" placeholder="Apellidos" />
          </label>
          </div>
          <div class="large-6 medium-6 small-12 columns">
          <label>Teléfono
            <input type="text" id="vtelefono" placeholder="Teléfono" />
          </label>
          </div>
          <div class="large-6 medium-6 small-12 columns">
          <label>Alias
            <input type="text" id="vuser" placeholder="Usuario de sistema" />
          </label>
          </div>
          <div class="small-12 columns colmail">
          <label>Correo electrónico
            <input type="text"  id="vmail" placeholder="ejemplo@ejemplo.com" />
          </label>
          </div>
          <div class="large-6 medium-6 small-12 columns ncomercial">
          <label>Nombre Comercial
            <input type="text"  id="vnombrecomercial" placeholder="Nombre de Comercio" />
          </label>
          </div>
        <br>
        <div class="large-4 medium-4 small-12 columns">
          <label>Provincia
            <select id="vidprovincia">
            <option value="1">Provincia...</option>
            {section name=LE loop=$PROV}
              <option value="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
            {/section}
            </select>
          </label>
          </div>

          <div class="large-4 medium-4 small-12 columns">
          <label>Cantón
            <select id="vidcanton">
              <option value="1">Cantón...</option>
              <!--  -->
            </select>
          </label>
          </div>

          <div class="large-4 medium-4 small-12 columns">
          <label>Distrito
            <select id="viddistrito">
              <option value="1">Distrito...</option>
            </select>
          </label>
        </div>
          </div>
      <section class="sectionTaller hide">

          <div class="large-12 medium-12 small-12 columns">
            <label>Dirección exacta</label>
            <textarea id="vdireccion" style="min-height: 50px; max-height: 50px; min-width: 100%"></textarea>
          </div>

          <div class="large-12 medium-12 small-12 columns">
          <label for="vservicios">Servicios
            <a href="#!" data-reveal-id="modal-servicios" class="selserv"><input id="serv" type="text" placeholder="Seleccione servicios" readonly class="selserv"></a>
          </label>
          </div>

          <!-- <div class="large-12 medium-12 small-12 columns">
          <label>Marcas de vehículos especializados
            <a href="#!" data-reveal-id="modal-servicios" class="selmarc"><input type="text" id="vmarcas" placeholder="Seleccione marcas de vehículos" readonly class="selmarc"></input></a>
          </label>
          </div> -->

      </section>

          <div class="large-6 medium-6 small-12 columns">
          <label>Contraseña
            <input type="password" id="clave" class="passs" name="password" placeholder="Contraseña" />
          </label>
          </div>
          <!--  -->
            <div id="pswd_info" class="info_div">
            <h6>La contraseña debe contemplar los siguientes elementos:</h6>
              <ul>
                <li id="letter" class="invalid">Al menos <strong>una letra</strong>
              </li>
                <li id="capital" class="invalid">Al menos <strong>una letra mayúscula</strong>
              </li>
                <li id="number" class="invalid">Al menos <strong>un número</strong>
              </li>
                <li id="length" class="invalid">Al menos <strong>6 caracteres</strong>
              </li>
              </ul>
            </div>
            <!--  -->
          <div class="large-6 medium-6 small-12 columns">
            <div class="row collapse">
              <label>Confirmar Contraseña</label>
            <div class="small-9 columns">
              <input type="password" id="passconfirm" class="passs" name="password" placeholder="Contraseña" />
            </div>
            <div class="small-3 columns" id="verpass">
              <span class="postfix" ><i id="circle-verify" class="fa fa-circle"></i></span>
            </div>
            </div>
          </div>
</section>
      </div>
      <hr>
    <div class="row">
      <div class="large-6 medium-6 small-8 columns">
        <div class="container">
            <input id="checktyc" type="checkbox"><label for="checkbox1">Acepto los <a href="#!" data-reveal-id="termycond" id="modaltyc">Términos y Condiciones</a></label>

            <div id="termycond" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" align="right" style="background: #E8E8E8"><br>
              <h2 id="modalTitle" align="center">Términos y condiciones de registro en SAICOR Vehículo Sustentable</h2>
              <p class="lead" align="center">Al aceptar los términos y condiciones de SAICOR VS acepta los siguientes términos:</p>
              <section id="termycondiciones" class="wrapper">

                <button class="close-reveal-modal" id="accepttyc">Aceptar</button>
              </section><br>
              <a class="close-reveal-modal" aria-label="Close" data-reveal-id="modal1"><span style="color: black">&#215;</span></a>
            </div>

        </div>
      </div>
      <div class="large-6 medium-6 small-4 columns">
            <button class="button right add" id="submit" modulo="usuario">Registrar</button>
      </div>

  </div>
<a class="close-reveal-modal" aria-label="Close"><span style="color: black">&#215;</span></a>
</div>

<div id="modal-servicios" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h4 id="modalTitle">Lista de <span id="mtext1">servicios</span></h4>
  <p>Elija la lista de <span id="mtext2">servicios que ofrece</span> su Taller: </p>
  <!-- <p align="center"><b>Taller Clase A: Servicios 1,2 y 3</b> | <b>Taller Clase B: Servicios 1 y 2</b> | <b>Taller Clase C: Servicios 1</b></p> -->
  <div class="large-12 columns"> <input id="chk0" type="checkbox" class="checkall" estado="0" desc="Todos los servicios"><label for="chk0"><span id="mtext4">Seleccionar todo</span></label>

    <div class="container" id="lista">
      <!-- JS -->
    </div>
    <div class="container columns listaa">
      <!-- <h5>Servicios 1</h5> -->
      <section  id="listaa">
        <!-- JS -->
      </section>
    </div>
    <!-- <div class="container columns listab">
      <h5>Servicios 2</h5>
      <section  id="listab">
        
      </section>
    </div>
    <div class="container columns listac">
      <h5>Servicios 3</h5>
      <section  id="listac">
        
      </section>
    </div> -->
  </div>
  <a href="#!" id="back" lista="1" class="close-reveal-modal" data-reveal-id="modal1"><i class="fa fa-arrow-left dark-text" style="font-size: 0.6em"></i></a>
  
<script src="../assets/js/jquery.js?v=0.1"></script>
<script src="../assets/js/vendor/jquery.js?v=0.1"></script>
<script src="../assets/js/foundation.min.js?v=0.1"></script>
<script src="../assets/js/vendor/modernizr.js?v=0.1"></script>
<script src="../assets/js/foundation/foundation.alert.js?v=0.1"></script>

<script src="../assets/js/cropper.js?v=0.1"></script>
<script src="../assets/js/system.js?v=0.1"></script>
<script src="../assets/js/modulos/login.js?v=0.1"></script>

</body>
</html>
