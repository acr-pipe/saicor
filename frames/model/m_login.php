<?php 
				
	require_once '../_config/RUD.php';
	require_once '../_config/ecy.php';

	class _login extends RUD
	{
		var $user;
		var $pass;

		function mantenimiento($arreglo){
			
			if (isset($arreglo['atributos']['vidusuario'])) {
				if ($arreglo['atributos']['vidusuario'] == '') {
					$cy = new _cy();
					$arreglo['atributos']['vidusuario'] = str_replace("\0","",base64_decode($_SESSION['USR']));
				}
			}

			if (isset($arreglo['atributos']['vidsucursal'])) {
				if ($arreglo['atributos']['vidsucursal'] == '') {
					$arreglo['atributos']['vidsucursal'] = $_SESSION['IMPRESA'];
				}
			}
		
			$id_new = $this->mant($arreglo['modulo'],$arreglo['atributos']);

			if (isset($arreglo['detalle'])) {
				$accion = $arreglo['atributos']['vaccion'];
				foreach ($arreglo['detalle']['registros'] as $obj) {
					$obj['vaccion'] = $accion;
					$rs = $this->mant($arreglo['detalle']['tabla'],$obj,$id_new[0][0]);
				}
			}
			
			if (isset($arreglo['varios'])) {
				$accion = $arreglo['atributos']['vaccion'];
				$id_tabla = $this->kamehameha('id',70,'nombre like "'.$arreglo['modulo'].'s"')[0][0];
				foreach ($arreglo['varios'] as $index => $varios) {
	
					$varios['atributos']['vidfila'] = $id_new[0][0];
					$varios['atributos']['vidtabla'] = $id_tabla;
					$varios['atributos']['vaccion'] = $accion;

					if ($accion != 1) {
						$varios['atributos']['vaccion'] = 3;
						$del = $this->mant($varios['modulo'],$varios['atributos'],$id_new[0][0]);
						$varios['atributos']['vaccion'] = 1;
					}

					$rs = $this->mant($varios['modulo'],$varios['atributos'],$id_new[0][0]);
					// echo $varios['modulo'];
					// print_r($rs);
				}
			}

			return is_array($id_new) ? array('0' => $id_new) : $id_new;
		}

		function analizarTabla($arreglo){
			$salida = array();
			$this->sql = "SHOW CREATE PROCEDURE sp_mant".$arreglo['modulo']."s";
			$rs = $this->ejecutarSelect()[0][2] or die("No existe SP asociado: ".$arreglo['modulo']."s");
			$rs = substr($rs, strpos($rs,"(")+1);
			$rs = substr($rs, 0,strpos($rs,"BEGIN"));
			$rs = str_replace("\n", " ", $rs);
			$rs = explode(',', $rs);

			$arreglo = $rs;

			foreach ($arreglo as $obj) {
				$primer = substr($obj, 0,1);
				
				if ($primer == ' ') 
					$obj = substr($obj, 1);
				elseif (is_numeric($primer)) {
					$obj = '';
				}

				$cadena = substr($obj, 0,strpos($obj," "));
				if (strlen($cadena) != 0)
					array_push($salida, $cadena);
				
			}

			return $salida;
		}

		function autenticar() {
	
			$this->sql = "CALL sp_Login('$this->user','$this->pass')";

			$resul = $this->ejecutarSelect();
			
			return $resul;
		}

		function ini($id,$pss){
			$this->user = $id;
			$this->pass = $pss;
		}
	}
			
?>