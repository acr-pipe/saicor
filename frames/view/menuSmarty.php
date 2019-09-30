<link rel="stylesheet" type="text/css" href="../assets/css/normalize.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/foundation.min.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/libs/iconos/css/fontawesome-all.min.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/menu.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/main.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-login.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/modulos/style-main.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/fonts/avenir.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/easy-autocomplete.min.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/libs/amcharts/plugins/export/export.css?v=0.1" />
<link rel="stylesheet" type="text/css" href="../assets/css/animate.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/dropzone.css?v=0.1">
<link rel="stylesheet" type="text/css" href="../assets/css/nouislider.css?v=0.1">

<header>
<div class="contain-to-grid fixed" style="opacity: 0.95">
  <nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="brand">
      <a href="main"><img src="../assets/img/logo.png" class="nav-logo hide-for-small-only" style="margin-top: 8%;margin-left: 4%;"></a>
      <a href="main"><img src="../assets/img/logo.png" class="nav-logo show-for-small-only" style="margin-top: 2%;margin-left: 4%;"></a>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>&nbsp;</span></a></li>
  </ul>

  <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="right">
      {if $smarty.session.NOM}
      <li id="linomuser"><a href="#" data-options="align:left" data-dropdown="drop" class="tiny button nomuser">{$smarty.session.NOM}</a></li>
      {else}
      <li class="hlogin" id="linomuser"><a href="#!" data-reveal-id="login" title="Iniciar Sesión" id="btn-login"><i class="fas fa-user-astronaut"></i>&nbsp;&nbsp;Iniciar Sesión</a></li>
      {/if}
    </ul>
    <ul id="drop" class="f-dropdown" data-dropdown-content aria-hidden="true" tabindex="-1">
        <li style="width: 100%"><a href="../dashboard"><i class="fa fa-sitemap green-ligth-text"></i>&nbsp;Mi Sitio</a></li>
        <li style="width: 100%"><a href="../dashboard/cliente_conf"><i class="fa fa-gear"></i>&nbsp;Configuración</a></li>
        <li style="width: 100%"><a href="#!"><i class="fa fa-heart red-text"></i>&nbsp;Favoritos</a></li>
        <li style="width: 100%"><a href="../dashboard/logout"></i>&nbsp;Cerrar Sesión</a></li>
    </ul>
    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="nosotros">Empresa</a></li>
      <li><a href="productos">Productos Tcar</a></li>
      <li><a href="galeria">Autos Tcar</a></li>
      <li><a href="talleres">Talleres Tcar</a></li>
      <li><a href="asesores">Asesores</a></li>
      <li><a href="formcontactus">Contacto</a></li>
    </ul>
  </section>
</nav>
</div>
<!-- MODAL -->
<div id="login" class="reveal-modal modal-login" nocarga="1" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog" style="border: none !important; background-color: transparent !important; box-shadow: none !important;">
  <div id="login-content" style="margin-top: -10%;"></div>
</div>
<!--  -->

</header>