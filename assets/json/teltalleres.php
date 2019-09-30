<?php
    include_once '../../_config/mysqlDB.php'; 

    $base = new DBClass();
    $rs =$base->ejecutar('Select * from usuarios where idTipoUsuario = 3 and id > 0 and solicitud = 1 order by nombre');
    if (isset($rs->num_rows)) {
        $salida = [];
        while ($fila = $rs->fetch_assoc()) {
            array_push($salida, $fila);
        }
    }

    echo json_encode($salida);
 ?>