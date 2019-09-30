<?php
    include_once '../../_config/mysqlDB.php'; 

    $base = new DBClass();
    $rs =$base->ejecutar('Select * from marcas where id > 0 order by nombre');
    if (isset($rs->num_rows)) {
        $salida = [];
        while ($fila = $rs->fetch_assoc()) {
            array_push($salida, $fila);
        }
    }

    echo json_encode($salida); 
 ?>