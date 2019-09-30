<?php  
	    require_once 'model/m_general.php';
	    $kakaroto = new _general();

	    if (!isset($_REQUEST['accion'])) {
	   	require '../_config/mySmarty.php';
	   
	   	$smarty  = new mySmarty();
	   	$smarty->setModule('dashboard');
	   	$pg = $smarty->fetch('../view/menuSmarty.php');
        $fot = $smarty->fetch('../view/footerSmarty.php');
		$smarty->assign('PROV',$kakaroto->kamehameha('id,nombre',8,'id > 0 order by nombre'));
        $smarty->assign('FOOT',$fot);
	   	$smarty->assign('NAV',$pg);
	   	$smarty->assign('VEHI',$kakaroto->kamehameha('',130,$kakaroto->usrDecy()));
	   	$smarty->assign('ESTILOS',$kakaroto->kamehameha('id,nombre',121,'id > 0 order by id'));
	   	$smarty->assign('TRANS',$kakaroto->kamehameha('id,nombre',122,'id > 0 order by id'));
	   	$smarty->assign('COMBUS',$kakaroto->kamehameha('id,nombre',123,'id > 0 order by id'));
	   	$smarty->assign('MES',$kakaroto->kamehameha('id,nombre',126,'id > 0 order by id'));
	   	$smarty->assign('PROVEDOR',$kakaroto->kamehameha('id,nombre',1,'idTipoUsuario = 3 order by nombre'));
	   	$smarty->assign('DATOUSR',$kakaroto->kamehameha('*',1,'id = '.$kakaroto->usrDecy()));
	   	$smarty->display('v_cliente_conf.tpl');
	   }else{
	   $pagina = 0;
	   	switch ($_REQUEST['accion']) {
	   		case 1:

	   			break;
	   		case 2:

	   			break;
	   		case 3:
				
	   			break;
	   		case 4:
	   			
	   			break;
	   		case 5:
	   			
	   			break;
	   	}
		if(!$pagina){
		   	if (is_array($transaccion)){
				$marcas = $transaccion;
				$succed = 1;
				}else{
					$marcas = array('ERROR'=>$transaccion);
					$succed = 0;
				}
		
				$salida = array('succed'=>$succed);
				array_push($salida, $marcas);
				print_r(json_encode($salida));	
		
		   }
	    }	
			   
?>