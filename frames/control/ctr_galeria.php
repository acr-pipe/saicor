<?php  
	    require_once 'model/m_general.php';
	    $kakaroto = new _general();

	    if (!isset($_REQUEST['accion'])) {
	   	require '../_config/mySmarty.php';
	   
	   	$smarty  = new mySmarty();
	   	$smarty->setModule('frames');
	   	$pg = $smarty->fetch('../view/menuSmarty.php');
        $fot = $smarty->fetch('../view/footerSmarty.php');
        $smarty->assign('ESTILOS',$kakaroto->kamehameha('id,nombre',121,'id > 0 order by id'));
	   	$smarty->assign('TRANS',$kakaroto->kamehameha('id,nombre',122,'id > 0 order by id'));
	   	$smarty->assign('COMBUS',$kakaroto->kamehameha('id,nombre',123,'id > 0 order by id'));
	   	$smarty->assign('PROV',$kakaroto->kamehameha('id,nombre',8,'id > 0 order by id'));
	   	$smarty->assign('RECORD',$kakaroto->kamehameha('id,urlrecord',127,'id > 0 order by id'));
	   	$smarty->assign('year',date("Y")+2);
        $smarty->assign('NAV',$pg);
        $smarty->assign('FOOT',$fot);
	   	$smarty->display('galeria.tpl');
	   }else{
	   $pagina = 0;
	   	switch ($_REQUEST['accion']) {
	   		case 1:
	   			$pagina = 1;
	   			require '../_config/mySmarty.php';
	   			$smarty  = new mySmarty();
	   			$smarty->setModule('frames');

	   			$smarty->assign('CAMBIO',$kakaroto->kamehameha('valor',15,'id  = 7'));

	   			$smarty->assign('CARROS',$kakaroto->kamehameha($_REQUEST['arreglo']['sel'],$_REQUEST['arreglo']['tbl'],$_REQUEST['arreglo']['where']));
	   			// print_r($kakaroto->kamehameha($_REQUEST['arreglo']['sel'],$_REQUEST['arreglo']['tbl'],$_REQUEST['arreglo']['where']));
	   			$smarty->assign('idvehi',0);
	   			$smarty->assign('cont',0);

	   			if ($_REQUEST['arreglo']['tipo'] == 1) {
	   				$smarty->display('ajax/ajaxcuadricula.tpl');
	   			}else if ($_REQUEST['arreglo']['tipo'] == 2){
	   				$smarty->display('ajax/ajaxlista.tpl');
	   			}
	   			break;
	   		case 2:
	   			// desencriptar
	   			require_once '../_config/ecy.php';
            	$decrypt = new _cy();
            	$transaccion = $decrypt->decy($_SESSION['USR']);
            	// print_r($transaccion);
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