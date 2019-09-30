<?php
require_once '../assets/libs/swiftmail/swift_required.php';

class correo 
{
    var $mailer;
    var $message;

    function __construct($pr,$tit,$msj)
    {

      session_start();
      
      if (strpos($msj,'@nom')) {
        $msj = str_replace('@@nom', $_SESSION['NOM'], $msj);
      }

      if (strpos($msj,'@usr')) {
        // session_start();
        require_once '../_config/ecy.php';
        $cy = new _cy();
        $msj = str_replace('@@usr', $cy->decy($_SESSION['NUM']), $msj);
      }
        // ->embed(Swift_Image::fromPath('../assets/img/formmail.png'))
        $transport = Swift_SmtpTransport::newInstance('ssl://smtp.gmail.com','465')
          ->setUsername('saicorvs@gmail.com')
          ->setPassword('SaicorGreenHopeVS');

      $this->mailer = Swift_Mailer::newInstance($transport);
      $this->message = Swift_Message::newInstance($tit)
        ->setFrom(array('saicorvs@gmail.com' => 'SAICOR Vehículo Sustentable'))
        ->setTo(array( $pr ))
     		->setBody('<div style="min-height:250px; margin-left:15%; margin-right: 15%; color: #383838">'.$msj.'</div>','text/html');
    }

    function enviar(){
	     if ($this->mailer->send($this->message)) {
	        return 1;
	     } else {
	        return 0;
	     }
    }

    function enviar_adjunto($vAdjunto){
      $this->message->attach(Swift_Attachment::fromPath($vAdjunto));

      if ($this->mailer->send($this->message)) {
          return 1;
       } else {
          return 0;
       }

    }
}

?>