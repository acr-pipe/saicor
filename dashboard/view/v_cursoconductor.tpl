<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="max-age=86400"/>
    <title>Conductor Tcar</title>
   
    <link rel="stylesheet" type="text/css" href="../assets/css/modulos/system_cursoconductor.css?v=0.1">

  </head>
  <body>
    {$NAV}

<header class="subnav-hero-section">
  <h1 class="subnav-hero-headline">Conductor <small>Tcar</small></h1>
  <ul class="subnav-hero-subnav tabs" data-tab role="tablist">
    <li class="tab-title active" role="presentation"><a href="#quees" class="li-a is-active"><span id="paso1">Objetivos</span></a></li>
    <li><a href="#paraquesirve" class="li-a "><span id="paso2">Preguntas</span></a></li>
    <!-- <li><a href="#iniciarexamen" class="li-a "><span id="paso3">Actualidad</span></a></li> -->
    <li><a href="#!" class="li-a "><span class="ayuda pbtn">Ayuda</span></a></li>
  </ul>
</header>

<p id="ayud" align="center">Debes responder a todas las preguntas para continuar</p>


<div class="tabs-content">
  <section role="tabpanel" aria-hidden="false" class="content active" id="quees">
    <div class="wrapper-x3"><br>
      <h3>Bievenid@</h3><br>
      <h4>Proximamente...</h4>
      <p style="text-align: justify;">...estamos trabajando en el curso de conductor.</p>
      <br>
      <p>Solicitamos su colaboración contestando las siguientes 2 preguntas para completar la evaluación como conductor.</p>
    </div>
  </section>

  <section role="tabpanel" aria-hidden="true" class="content" id="paraquesirve">
    <div class="wrapper-x2"><br>
        <li id="pregunta1">¿Cuál es su opinión sobre el proyecto SAICOR Vehículo Sustentable?</li>
        <div class="row">
          <div class="large-12 columns">
            <label>Respuesta
              <textarea class="resp" id="respuesta1"></textarea>
            </label>
          </div>
        </div>
        <li id="pregunta2">¿Qué mejoraría o agregaría en el proyecto de SAICOR Vehículo Sustentable?</li>
          <div class="row">
            <div class="large-12 columns">
              <label>Respuesta
                <textarea class="resp" id="respuesta2"></textarea>
              </label>
            </div>
          </div>
        </p>

        <div align="center">
          <button class="btnevnresp btn-green is-hide" class="btn-green" disabled>Enviar Respuestas</button>
          <br>
        </div>
    </div>
  </section>

<!--   <section role="tabpanel" aria-hidden="true" class="content" id="iniciarexamen">
    <div class="wrapper-x2"><br>
      <h5>Actualidad del automóvil en Costa Rica</h5>
      <br><br>
      <h6>Principales causas de rechazo en RTV</h6><br>
      <p style="text-align: justify;">
      <li>El vehículo presenta emisiones contaminantes superior a lo permitido (hc y co).</li>
      <li>Desequilibrio de las fuerzas de frenado entre las ruedas de un mismo eje, superior al 35%.</li>
      <li>Profundidad de ranura de la llanta inferior a lo legislado.</li>
      <li>El vehículo presenta deriva en el eje delantero superior a 15 m/km.</li>
      <li>Eficacia de frenado inferior al mínimo permitido.</li>
      <li>El vehículo presenta emisiones con opacidad de los humos superior a lo permitido.</li>
      <li>Holguras anormales con peligro de desprendimiento en brazos, tijeretas y rótulas de suspensión.</li></p><br>
      <p>En la actualidad la contaminación encabeza las fallas mas communes en la flota vehicular y se suma a la inseguridad mecánica del auto.
      <li id="pregunta3">¿Qué cambios o acciones estaría dispuesto hacer, para disminuir el consumo de combustibles fósiles y realizar un aporte positivo a favor del Cambio Climático?</li>
      <i style="font-size: 0.8em; color: #737373">(Ejemplo, darle mantenimiento programado al auto, utilizar más el transporte público, en los tramos cortos: caminar o ir en bicicleta…)</i>
      <div class="row">
        <div class="large-12 columns">
          <label>Respuesta
            <textarea class="resp" id="respuesta3"></textarea>
          </label>
        </div>
      </div>
      </p>

      <div align="center">
        <button class="btnevnresp btn-green is-hide" class="btn-green" disabled>Enviar Respuestas</button>
        <br>
      </div>
    </div>
  </section> -->

</div>

<ol class="joyride-list" data-joyride>
  <li data-id="" data-text="Siguiente" data-options="tip_location: top; prev_button: false">
    <br><h4>Hola!</h4><br>
    <p>Bienvenido al <b>Curso de Conductor Tcar</b> de SAICOR VS<br>
    </p><br>
  </li>
  <li data-id="paso1" data-class="custom so-awesome" data-text="Siguiente" data-prev-text="Anterior">
    <br><h4>Objetivos</h4><br>
    <p>Lee esta pequeña información para entender el porqué de este Curso de conducción vial, y ayúdanos a mejorar la seguridad de todos los que transitamos por las carreteras de nuestro país y del mundo!.</p><br>
  </li>
  <li data-id="paso2" data-button="Siguiente" data-prev-text="Anterior" data-options="tip_location:top;tip_animation:fade">
    <br><h4>Contestar Preguntas</h4><br>
    <p>Contesta las preguntas para colaborar con la mejora del proyecto SAICOR Vehículo Sustentable</p><br>
  </li>
<!--     <li data-id="paso3" data-button="Siguiente" data-prev-text="Anterior" data-options="tip_location:top;tip_animation:fade">
    <br><h4>Actualidad</h4><br>
    <p>Haz click! sobre la pestaña de <b>Actualidad</b>, responde una última pregunta y con esto terminamos nuestro recorrido!</p><br>
  </li> -->
  <li data-button="Finalizar" data-prev-text="Volver">
    <br><h4>Fin</h4><br>
    <p>Gracias por colaborar con SAICOR Vehículo Sustentable, su opición es muy importante para nosotros!</p><br>
  </li>
</ol>


    {$FOOT}

 

    <script src="../assets/js/modulos/system_cursoconductor.js?v=0.1"></script>
  </body>
</html>