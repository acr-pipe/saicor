<?php
    include_once '../../_config/mysqlDB.php'; 

    $marca = isset($_GET['marca']) ? $_GET['marca'] : 0;

    if ($marca == 0 || $marca == '' || $marca == 'undefined' ) {
        $salida = [];
    }else{
        $base = new DBClass();
        $rs =$base->ejecutar('Select * from modelos where id > 0 and idmarca = '.$marca.' order by nombre');
        if (isset($rs->num_rows)) {
            $salida = [];
            while ($fila = $rs->fetch_assoc()) {
                array_push($salida, $fila);
            }
        }
    }
    echo json_encode($salida);
 ?>