<link rel="stylesheet" type="text/css" href="../assets/css/normalize.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/foundation.min.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/jquery.miltiselect.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/libs/iconos/css/fontawesome-all.min.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-main.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-menu.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/fonts/avenir.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/easy-autocomplete.min.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/animate.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/dropzone.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/cropper.css?v=0.1"/>
<link rel="stylesheet" type="text/css" href="../assets/css/nouislider.css?v=0.1">

{if $smarty.session.TIPO eq 1}
<!-- MENU ADMINISTRADOR -->
<header>
<div class="contain-to-grid fixed" style="opacity: 0.95">
  <nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="brand">
      <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo hide-for-small-only" style="margin-top: 8%;margin-left: 4%;"></a>
      <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo show-for-small-only" style="margin-top: 2%;margin-left: 4%;"></a>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>&nbsp;</span></a></li>
  </ul>
  <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="right">
      <li><a href="logout">Cerrar Sesión</a></li>
    </ul>

    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="regasesor">Registrar Asesor</a></li>
      <li><a href="solicitudes">Solicitudes</a></li>
      <li><a href="mantenimiento">Control Sellos</a></li>
      <li><a href="creaproductos">Productos</a></li>
      <!-- <li><a href="#!" disabled>Formularios</a></li> -->
      <!-- <li><a href="#!">Reportes</a></li> -->
    </ul>
  </section>
</nav>
</div>
<!--  -->
</header>
{elseif $smarty.session.TIPO eq 2}
<!-- MENU CLIENTE -->
<header>
  <div class="contain-to-grid fixed" style="opacity: 0.95">
    <nav class="top-bar" data-topbar role="navigation">
      <ul class="title-area">
        <li class="brand">
          <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo hide-for-small-only" style="margin-top: 8%;margin-left: 4%;"></a>
          <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo show-for-small-only" style="margin-top: 2%;margin-left: 4%;"></a>
        </li>
        <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
        <li class="toggle-topbar menu-icon"><a href="#"><span>&nbsp;</span></a></li>
      </ul>

    <section class="top-bar-section">
    <!-- Right Nav Section -->
      <ul class="right">
        <li id="linomuser">
          <a href="#" data-options="align:left" data-dropdown="drop" class="tiny button nomuser">{$smarty.session.NOM} <!-- <span class="badge">1</span> --></a>
        </li>
        <!-- <li><a href="logout">{$smarty.session.NOM}</a></li> -->
        <!-- <li><a href="../frames">GreenHope</a></li> -->
      </ul>

      <ul id="drop" class="f-dropdown" data-dropdown-content aria-hidden="true" tabindex="-1">
        <li style="width: 100%"><a href="../frames"><i class="fa fa-home green-ligth-text"></i>&nbsp;Green Home</a></li>
        <li style="width: 100%"><a href="cliente_conf"><i class="fas fa-cogs"></i>&nbsp;Configuración</a></li>
        <!-- <li style="width: 100%"><a href="#!"><span class="badge">1</span>&nbsp;&nbsp;Notificaciones</a></li> -->
        <li style="width: 100%"><a href="#!"><i class="fa fa-heart red-text"></i>&nbsp;Favoritos</a></li>
        <!-- clie_favoritos -->
        <li style="width: 100%"><a href="logout">&nbsp;Cerrar Sesión</a></li>
      </ul>
      <!-- Left Nav Section -->
      <ul class="left">
        <li><a href="garaje">Garaje</a></li>
        <li><a href="cursoconductor">Conductor Tcar</a></li>
        <li><a href="compensarco2">Compensar CO<sub>2</sub></a></li>
        <li><a href="cliente-registro-vehiculo">Registrar Vehículo</a></li>
        <li class="hide"><a href="#!">Subasta</a></li>
        <li><a href="cliente_conf">Configuración</a></li>
      </ul>
    </section>
    </nav>
  </div>
<!--  -->
</header>
{elseif $smarty.session.TIPO eq 3}
<!-- MENU TALLER -->
<header>
<div class="contain-to-grid fixed" style="opacity: 0.95">
  <nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="brand">
      <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo hide-for-small-only" style="margin-top: 8%;margin-left: 4%;"></a>
      <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo show-for-small-only" style="margin-top: 2%;margin-left: 4%;"></a>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>&nbsp;</span></a></li>
  </ul>

  <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="right">
      <li><a href="logout">Cerrar Sesión</a></li>
    </ul>
    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="taller_tcar">Sellos Tcar</a></li>
      <!-- <li><a href="#!">SAICOR Soft</a></li> -->
      <li><a href="sgreenhope">Reporte</a></li>
      <!-- <li align="center"><a href="carrito_taller" class="carttaller">Tienda</a></li> -->
      <!-- href="carrito_taller" --> <!-- href="https://yappexperience.com/eventos/saicor1493047677775" -->
      <!-- <li><a href="reportes_talleres">Reportes</a></li> -->
      <!-- <li><a href="#!">Configuración</a></li> -->
    </ul>
  </section>
</nav>

</div>
<!--  -->
</header>
{elseif $smarty.session.TIPO eq 4}
<!-- MENU ASESOR -->
<header>
<div class="contain-to-grid fixed" style="opacity: 0.95">
  <nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="brand">
      <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo hide-for-small-only" style="margin-top: 8%;margin-left: 4%;"></a>
      <a href="../dashboard"><img src="../assets/img/logo.png" class="nav-logo show-for-small-only" style="margin-top: 2%;margin-left: 4%;"></a>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>&nbsp;</span></a></li>
  </ul>

  <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="right">
      <li><a href="logout">Cerrar Sesión</a></li>
    </ul>
    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="#!">Registrar Taller</a></li>
      <li><a href="reportes_asesor">Reportes</a></li>
      <li><a href="#!">Configuración</a></li>
    </ul>
  </section>
</nav>
</div>
<!--  -->
</header>
{else}
{/if}