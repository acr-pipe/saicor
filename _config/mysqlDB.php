<?php

if (session_status() !== PHP_SESSION_ACTIVE){
    session_start();
}
require_once 'ecy.php';

/**
* Clase de conexion a base de datos usando MYSQL 
* Se puede pensar a futuro crear clase Abstracta 
* Listo clase RUD creada
*/
class DBClass
{
	var $encrypt;
	var $db;
	var $usr;
	var $pss;
	var $host;
	var $mysql_conexion;

	function __construct()
	{
		$this->encrypt = new _cy();
		$this->db  = 'saicor';
		$this->usr = 'itech01';
	    $this->pss = 'Login2Help';
		$this->host = '127.0.0.1';
        // Pul$3CR.00 8IyGQL0V410DuhUeQPl/ksPFGqdCy2YzU1mxC6p6lGc=
        // Logni2Help 1eKYMc9PrUoktk7U7n5oiko86fKxQ/FiTOMD8SER7bY=
	}

	function conect(){
		$this->mysql_conexion = new mysqli($this->host,$this->usr,$this->pss,$this->db);
		
		if($this->mysql_conexion->connect_error){
			//die("ERROR DE CONEXION: ". $this->mysql_conexion->connect_errno.", " . $this->mysql_conexion->connect_error);
			$this->mysql_conexion->set_charset('utf8');
			return false;
		}
		else {
			return true;
		}
	}

	function close(){
		$this->mysql_conexion->close();
	}

	function open_Distic_Conection($host,$usr,$pss,$db){
		$this->db = $db;
		$this->usr = $usr;
		$this->pss = $pss;
		$this->host = $host;

	}

	function ejecutar($sql){
		$this->conect();
		$salida = $this->mysql_conexion->query($sql);
		/*CONOCER EL ERROR*/
		if (!$salida) {
			$salida = $this->mysql_conexion->error; 
		}
		$this->close();
		return $salida;
	}
}

?>
