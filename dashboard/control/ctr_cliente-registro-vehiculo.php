<?php  
	    require_once 'model/m_general.php';
	    $kakaroto = new _general();

	    if (!isset($_REQUEST['accion'])) {
	   	require '../_config/mySmarty.php';
	   
	   	$smarty  = new mySmarty();
	   	$smarty->setModule('dashboard');
	   	$pg = $smarty->fetch('../view/menuSmarty.php');
	   	$fot = $smarty->fetch('../view/footerSmarty.php');

	   	$smarty->assign('SEG',$kakaroto->kamehameha('id,nombre',117,'id > 0 order by nombre'));
	   	$smarty->assign('CONF1',$kakaroto->kamehameha('id,nombre',118,'id <= 14 order by nombre'));
	   	$smarty->assign('CONF2',$kakaroto->kamehameha('id,nombre',118,'id > 14 order by nombre'));
	   	$smarty->assign('ESTILOS',$kakaroto->kamehameha('id,nombre',121,'id > 0 order by id'));
	   	$smarty->assign('TRANS',$kakaroto->kamehameha('id,nombre',122,'id > 0 order by id'));
	   	$smarty->assign('COMBUS',$kakaroto->kamehameha('id,nombre',123,'id > 0 order by id'));
	   	$smarty->assign('MESRTV',$kakaroto->kamehameha('*',125,''));
	   	$smarty->assign('PROV',$kakaroto->kamehameha('id,nombre',8,'id > 0 order by id'));
	   	$smarty->assign('MES',$kakaroto->kamehameha('id,nombre',126,'id > 0 order by id'));

        $smarty->assign('NAV',$pg);
        $smarty->assign('FOOT',$fot);
	   	$smarty->display('v_cliente_registro_vehiculo.tpl');
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