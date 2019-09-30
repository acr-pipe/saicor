<?php 

     if (isset($_SERVER['HTTP_ORIGIN'])) {  
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");  
        header('Access-Control-Allow-Credentials: true');  
        header('Access-Control-Max-Age: 86400');   
    }  
  
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {  
  
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))  
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");  
      
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))  
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");  
    }  
    
    require_once '../dashboard/model/m_login.php';
    $log = new _login();

    // $file = fopen("respuestabac/".date('YmdHis').".txt", "w+");
    //      fwrite($file, implode(" ", $_POST));
    
    // fclose($file);

    if (isset($_REQUEST['response'])) {
        // Respuesta del BAC
        $rs = $log->genkidama(1,165,'','null,@@usr,null,"'.$_REQUEST['orderid'].'",0,now(),"'.$_REQUEST['response'].'","'.$_REQUEST['responsetext'].'","'.$_REQUEST['transactionid'].'"');
        print_r($rs);
        // $rs = $DB->ejecutar("call shadow(2,165,'respuesta = ".$_REQUEST['response'].",descrespuesta = \"".$_REQUEST['responsetext']."\",transaccionid = \"".$_REQUEST['orderid']."\"','ordenid = \"".$_REQUEST['transactionid']."\"')");
    }else{
        
        if (isset($_REQUEST['orden'])) {
            echo "NO HABILITADO";
        //     $RS = $DB->ejecutar("call krattos('valor',15,\"descr in('CommerceId','codafil','urlback')\")")->fetch_all();

        //     $usr = str_replace("\0","",$cy->decy($_SESSION['USR']));

        //     $url = 'https://www.bookingplacecostarica.com/BotonPago/BookNow.aspx';

        //     $hash = $_REQUEST['orden'].'|'.$RS[0][0].'|'.str_replace('.', '', $_REQUEST['monto']).'|'.$_REQUEST['currency'];
        //     $hash = MD5($hash);

        //     $data = array('orden' => $_REQUEST['orden'], 'CommerceId' => $RS[0][0], 'descr' => $_REQUEST['descr'], 'monto' => $_REQUEST['monto'], 'lang' => $_REQUEST['lang'], 'type' => $_REQUEST['type'], 'fuente' => 'Boton Pago', 'URL' => $RS[2][0], 'currency' => $_REQUEST['currency'], 'hash' => $hash, 'email' => $_REQUEST['email'], 'codafil' => $RS[1][0] );

        //     $postData = "";

        //     foreach($data as $k => $v)
        //     {
        //        $postData .= $k . '='.urlencode($v).'&';
        //     }

        //     $postData = rtrim($postData, '&');

        //     $ch = curl_init();
        //     // curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        //     curl_setopt($ch, CURLOPT_URL, 'https://www.bookingplacecostarica.com/BotonPago/BookNow.aspx');
        //     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        //     // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //     // curl_setopt($ch, CURLOPT_HEADER, false);
        //     // curl_setopt($ch, CURLOPT_HEADER,'Content-Type: application/x-www-form-urlencoded');
        //     // curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
        //     // curl_setopt($ch, CURLOPT_POST, true);
        //     $result = curl_exec($ch);
        //     echo $result;
        //     curl_close($ch);
        //     // $info = curl_getinfo($ch);

        }else{

<<<<<<< HEAD
           echo "HOLA";
=======
                   
>>>>>>> fceddaacc59ceea1ff26ce937880232ade21d07e

        }

    }
 ?>