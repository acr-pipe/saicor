<?php
    session_start();
    require_once '_config/ecy.php';
    $cy = new _cy();

    if(!empty($_FILES)){
        require_once '_config/mysqlDB.php';
        $base = new DBClass();

        if (isset($_REQUEST['idusuario'])) {
            for ($i=0; $i < sizeof($_FILES['file']['name']); $i++) { 

                $temp = $_FILES['file']['tmp_name'][$i];
                $dir_separator = DIRECTORY_SEPARATOR;
                $folder = 'assets/imgupload/users';
                $bname = '../assets/imgupload/users/';

                $destination_path = dirname(__FILE__).$dir_separator.$folder.$dir_separator;

                $index = $base->ejecutar('select lpad(count(id)+1, 2,0) from fotousuarios where idusuario = '.$_REQUEST['idusuario'])->fetch_all()[0][0];
                $name = $_FILES['file']['name'][$i];
                $ext = end(explode('.', $name));
                $target_path = $destination_path.'img'.$_REQUEST['idusuario'].$index.'.'.$ext;
                $svg_path = $destination_path.'img'.$_REQUEST['idusuario'].$index.'.svg';
                
                $bname .= 'img'.$_REQUEST['idusuario'].$index.'.'.$ext;

                $base->ejecutar('insert into fotousuarios values(null,"'.$bname.'",'.$_REQUEST['idusuario'].')');

                print_r(move_uploaded_file($temp, $target_path));
            }
        }
    }
?>
