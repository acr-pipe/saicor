<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Configuración de cliente</title>

    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_cliente_conf.css?v=0.1">

  </head>
  <body>
    {$NAV}
    <div class="container-sm bg-greyl3" align="center">
      <div class="row container-x">
        <div class="large-6 medium-6 small-12 columns">Datos Personales</div>
        <div class="large-6 medium-6 small-12 columns">
          <a href="#!" data-reveal-id="modal-config" class="btn-green-conf" id="btn-datopersonal">
            <span class="white-text opt-gal">Editar</span>
          </a>
          <!-- <button class="btn-green-conf">Editar</button> -->
        </div>
      </div><br>
      <hr>
      <div class="row container-x">
        <div class="large-6 medium-6 small-12 columns">Datos de Vehículo</div>
        <div class="large-6 medium-6 small-12 columns">
          <a href="#!" data-reveal-id="modal-config" class="btn-green-conf" id="btn-datovehiculo">
            <span class="white-text opt-gal">Editar</span>
          </a>
          <!-- <button class="btn-green-conf">Editar</button> -->
        </div>
      </div><br>
      <hr>
      <input type="hidden" id="vidvehiculo" value="">
      <!-- <div class="row container-x">
        <div class="large-6 medium-6 small-12 columns">Cambiar Proveedor</div>
        <div class="large-6 medium-6 small-12 columns">
          <a href="#!" data-reveal-id="modal-config" class="btn-green-conf" id="btn-cambiarproveedor">
            <span class="white-text opt-gal">Editar</span>
          </a>
        </div>
      </div><br>
      <hr> -->
      <div class="row container-x">
        <div class="large-6 medium-6 small-12 columns">Cambiar Contraseña</div>
        <div class="large-6 medium-6 small-12 columns">
          <a href="#!" data-reveal-id="modal-config" class="btn-green-conf" id="btn-cambiarcontrasena">
            <span class="white-text opt-gal">Editar</span>
          </a>
          <!-- <button class="btn-green-conf">Editar</button> -->
        </div>
      </div><br>
      <hr>
      <div class="row container-x">
        <div class="large-6 medium-6 small-12 columns">Cambiar Usuario</div>
        <div class="large-6 medium-6 small-12 columns">
          <a href="#!" data-reveal-id="modal-config" class="btn-green-conf" id="btn-cambiarusuario">
            <span class="white-text opt-gal">Editar</span>
          </a>
          <!-- <button class="btn-green-conf">Editar</button> -->
        </div>
      </div>

      <div id="modal-config" class="reveal-modal bg-dark" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" style="border: 1px solid #333;">
        <section id="datopersonal" class="hide">
          <h4 id="modalTitle" class="green-ligth-text">Datos Personales</h4>
          <p class="lead"><small class="grey-text">Configuración de los datos personales.</small></p>
          <div class="row">
            <div class="large-12 medium-12 small-12 columns">

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Usuario:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="text" id="aliasusuario" class="input" placeholder="Alias" value="" disabled/>
            </div>

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Nombre:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="text" id="nombreusuario" class="input" placeholder="Nombre de Usuario" value=""/>
            </div>

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Teléfono:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="text" id="telusuario" class="input" value=""/>
            </div>

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Correo:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="email" id="correousuario" class="input" placeholder="correo@ejemplo.com" value=""/>
            </div>

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Provincia:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <select id="provinciausuario" class="opt-garaje" style="width: 70%;">
                {section name=LE loop=$PROV}
                <option value="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
                {/section}
              </select>
            </div>

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Teléfono 1:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="email" id="telefonousuario1" class="input" placeholder="8888-8888" data-mask="9999-9999"/>
            </div>

            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Teléfono 2:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="email" id="telefonousuario2" class="input" placeholder="8888-8888" data-mask="9999-9999"/>
            </div>
            </div>

            <div class="large-12 medium-12 small-12 columns" align="right">
              <button class="btn-green edit" id="changeperdata">Actualizar</button>
            </div>
          </div>
        </section>
        <section id="datovehiculo" class="hide">
          <h4 id="modalTitle" class="green-ligth-text">Datos de Vehículo</h4>
          <p class="lead"><small class="grey-text">Configuración de los datos del Vehículo.</small></p>
            <div class="row" id="vehiculosingarage">
              {section name=LE loop=$VEHI}
                <div class="large-1 medium-1 small-3 columns"><img src="{$VEHI[LE][0]}" class="pic-contain" name="nonactive" id="v{$VEHI[LE][2]}"></div>
              {/section}
              {if $VEHI|@count eq 0}
                <div class="large-12 medium-12 small-12 columns text-center">
                <br>
                <p class="float-text">No hay vehículos ingresados en este Garaje, para ingresar un nuevo vehícuo de click <a href="cliente-registro-vehiculo">aquí</a></p>
                <br>
                </div>
              {/if}
            </div>
            <div class="row" id="reveal-car"><br><br>
              <div class="large-12 medium-12 small-12 column">
                <div class="row">
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov">&nbsp;Marca</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="text" class="input-conf" id="nombremarca"/>
                      <input type="hidden" value="0" id="idmarca">
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov">&nbsp;Modelo</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="text" class="input-conf" id="nombremodelo"/>
                      <input type="hidden" value="0" id="idmodelo">
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov">Año</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="number" class="input-conf" id="idanio" />
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Placa</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="text" class="input-conf" id="idplaca" />
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Color Exterior</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="text" class="input-conf" id="idcolore" />
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Color Interior</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="text" class="input-conf" id="idcolori" />
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Estilo</span></span>
                    </div>
                    <div class="small-8 columns">
                      <select id="idestilo" class="opt-garaje">
                      {section name=LE loop=$ESTILOS}
                        <option value="{$ESTILOS[LE][0]}">{$ESTILOS[LE][1]}</option>
                      {/section}
                      </select>
                      <!-- <input type="text" class="input-conf" id="nombreestilo"/> -->
                      <!-- <input type="hidden" value="0" id="idestilo"> -->
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Transimisión</span></span>
                    </div>
                    <div class="small-8 columns">
                     <select id="idtransmision" class="opt-garaje">
                    {section name=LE loop=$TRANS}
                      <option value="{$TRANS[LE][0]}">{$TRANS[LE][1]}</option>
                    {/section}
                    </select>
                      <!-- <input type="text" class="input-conf" id="nombretransmision"/>
                      <input type="hidden" value="0" id="idtransmision"> -->
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> C.C Motor</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="number" class="input-conf" id="idccmotor"/>
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Combustible</span></span>
                    </div>
                    <div class="small-8 columns">
                      <select id="idcombustible" class="opt-garaje">
                      {section name=LE loop=$COMBUS}
                        <option value="{$COMBUS[LE][0]}">{$COMBUS[LE][1]}</option>
                      {/section}
                      </select>
                      <!-- <input type="text" class="input-conf" id="nombrecombustible" />
                      <input type="hidden" value="0" id="idcombustible"> -->
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Plazas</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="number" class="input-conf" id="idplazas" />
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Puertas</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="number" class="input-conf" id="idpuertas" />
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Kilometraje</span></span>
                    </div>
                    <div class="small-8 columns">
                      <input type="text" class="input-conf" id="cantkilom"/>
                      <input type="hidden" value="0" id="idkilom">
                    </div>
                  </div>
                </div>
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Mes de RTV</span></span>
                    </div>
                    <div class="small-8 columns">
                      <select id="idmesrtv" class="opt-garaje">
                      {section name=LE loop=$MES}
                        <option value="{$MES[LE][0]}">{$MES[LE][1]}</option>
                      {/section}
                      </select>
                      <!-- <input type="text" class="input-conf" id="nombremesrtv" />
                      <input type="hidden" value="0" id="idmesrtv"> -->
                    </div>
                  </div>
                </div>
                <!--  -->

                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-4 columns">
                      <span class="postfix"><span class="tit-datov"> Provincia</span></span>
                    </div>
                    <div class="small-8 columns">
                      <select id="idprovincia" class="opt-garaje">
                      {section name=LE loop=$PROV}
                        <option value="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
                      {/section}
                      </select>
                      <!-- <input type="text" class="input-conf" id="nombreprovincia" />
                      <input type="hidden" value="0" id="idprovincia"> -->
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="large-6 medium-6 small-12 columns">
                  <div class="row collapse">
                    <div class="small-12 columns" align="center">
                      <button class="btn-green edit" name="editar" id="edit">Actualizar</button>
                    </div>
                  </div>
                </div>
                <!--  -->

              </div>
            </div>
            </div>
        </section>
        <section id="cambiarproveedor" class="hide">
          <h4 id="modalTitle" class="green-ligth-text">Cambiar Proveedor</h4>
          <p class="lead"><small class="grey-text">Cambiar de Proveedor.</small></p>
          <div class="row">
            <div class="large-12 medium-12 small-12 columns" align="center"><img src="" alt="IMG VEHICULO" id="fvehi" width="25%" style="border: solid 2px orange"></div>
            <div class="large-12 medium-12 small-12 columns" align="center">Cambio de taller para: <b><span id="marca"></span> <i><span id="modelo"></span></i>, <span id="anio"></span></i></div><br><br>
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Filtrar por Provincia:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <select id="provi" class="opt-conf">
              {section name=LE loop=$PROV}
                <option value="{$PROV[LE][0]}">{$PROV[LE][1]}</option>
              {/section}
              </select>
            </div>
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Nombre del Proveedor:</p></div>
            <div class="large-7 medium-7 small-12 columns">
            <select class="opt-conf" id="provexprovi">
            <!-- option -->
            </select>
            </div>
            <div class="large-12 medium-12 small-12 columns" align="right">
              <button class="btn-green" id="changeproveedor">Cambiar</button>
            </div>
          </div>
        </section>
        <section id="cambiarcontrasena" class="hide">
          <h4 id="modalTitle" class="green-ligth-text">Cambiar Contraseña</h4>
          <p class="lead"><small class="grey-text">Carmbiar contraseña de usuario para el SAICOR<sub>TM</sub> Green Hope.</small></p>

          <div class="row">
            {section name=LE loop=$DATOUSR}
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Usuario:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="text" value="{$DATOUSR[LE][1]}" class="input" id="userpass" disabled>
            </div>
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Contraseña Actual:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="password" value="" class="input" id="actualpass" placeholder="Introuzca su contraseña actual">
            </div>
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Contraseña Nueva:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <div class="small-10 columns">
                <input type="password" value="" class="input passs" name="password" id="newpass" placeholder="Contraseña">
              </div>
              <div class="small-2 columns">
                <span class="postfix postp"><i id="verifypass" class="fa fa-lock"></i></span>
              </div>
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
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Confirmar Contraseña:</p></div>
            <div class="large-7 medium-7 small-12 columns collapse">
              <div class="small-10 columns">
                <input type="password" id="cnewpass" class="passs input" name="password" placeholder="Contraseña" />
              </div>
              <div class="small-2 columns" id="verpass">
                <span class="postfix postp"><i class="fa fa-circle" id="circle-verify"></i></span>
              </div>
              <span class="red-text" id="messpass"></span>
            </div>
            {/section}
            <div class="large-12 medium-12 small-12 columns" align="right">
              <button class="btn-green" id="changepass">Cambiar</button>
            </div>
          </div>
        </section>
        <section id="cambiarusuario" class="hide">
          <h4 id="modalTitle" class="green-ligth-text">Cambiar Usuario</h4>
          <p class="lead"><small class="grey-text">Cambiar de usuario para el SAICOR<sub>TM</sub> Green Hope.</small></p>

          <div class="row">
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Usuario actual:</p></div>
            <div class="large-7 medium-7 small-12 columns">
            {section name=LE loop=$DATOUSR}
              <input type="text" id="actuser" value="{$DATOUSR[LE][1]}" class="input" readonly>
            {/section}
            </div>
            <div class="large-3 large-offset-2 medium-3 medium-offset-2 small-12 columns"><p>Usuario Nuevo:</p></div>
            <div class="large-7 medium-7 small-12 columns">
              <input type="text" value="" class="input" placeholder="usuario" id="newuser" maxlength="25">
              <span class="red-text" id="messuser"></span>
            </div>
            <!--  -->
            <div id="user_info" class="info_div">
            <h6>El nombre de usuario debe contemplar los siguientes elementos:</h6>
              <ul>
                <li id="size" class="invalid">Debe contener al menos <strong>6 caracteres</strong>
              </li>
                <li id="simbol" class="invalid"><strong>NO</strong> debe contener caracteres especiales
              </li>
              <li id="dispon" class="invalid"> Nombre de usuario <span id="available"></span>
              </li>
              </ul>
            </div>
            <!--  -->
            <div class="large-12 medium-12 small-12 columns" align="right">
              <button class="btn-green" id="changeuser">Cambiar</button>
            </div>
          </div>
        </section>
        <a class="close-reveal-modal" aria-label="Close">&#215;</a>
      </div>

    </div>

    {$FOOT}

    <script src="../assets/js/modulos/system_cliente_conf.js?v=0.1"></script>
  </body>
</html>
