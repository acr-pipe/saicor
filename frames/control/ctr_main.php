<?php
        require_once 'model/m_general.php';
        $kakaroto = new _general();

        if (!isset($_POST['accion'])) {
        require '../_config/mySmarty.php';
       
        $smarty  = new mySmarty();
        $smarty->setModule('frames');
        $pg = $smarty->fetch('../view/menuSmarty.php');
        $fot = $smarty->fetch('../view/footerSmarty.php');
        // $smarty->assign('SUC',$kakaroto->kamehameha('id,nombre',39,'id > 0 order by nombre'));
        $smarty->assign('NAV',$pg);
        $smarty->assign('FOOT',$fot);
        $smarty->display('main.tpl');
        
        // require_once '../_config/ecy.php';
        // $cy = new _cy();
        // $decy = $cy->decy('1eKYMc9PrUoktk7U7n5oiko86fKxQ/FiTOMD8SER7bY=');
        // print_r($decy);

       }else{
       $pagina = 0;
        switch ($_POST['accion']) {
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
               
