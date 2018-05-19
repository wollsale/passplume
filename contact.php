<?php

$config = array();

$config['email']= "info@passplume.be";

$config['page_merci']= 'confirmation.html';

// Messages d'erreur
$config['no_name']="J'ai besoin de votre nom";
$config['no_email']="J'ai besoin de votre adresse email";
$config['wrong_email']="Veuillez vérifier votre adresse email";
$config['no_message']= "Veuillez entrer votre message";
$config['no_legal']= "Veuillez lire et acceptez les mentions légales avant d'envoyer votre message";



$errors= array();



if(isset($_POST) && count($_POST)>0){

	// si la requête ne vient pas de ce serveur, l'interrompre, quelqu'un tente de l'utiliser pour envoyer du spam.
	if(!strpos($_SERVER['HTTP_REFERER'],$_SERVER['HTTP_HOST'])){
		die("you should'nt be here.");
	}


	$nom = trim($_POST['name']);
	$email = trim($_POST['email']);
	$message = trim($_POST['message']);
	$sujet = trim($_POST['subject']);
	$legal = $_POST['legal'];

	// echo $nom . '<br/>';
	// echo $email . '<br/>';
	// echo $message . '<br/>';
	// echo $sujet . '<br/>';


	$config['sujet']= $sujet;


	if(empty($nom)){
		// Le nom a-t-il bien été introduit?
		$errors[]=  $config['no_name'];
	}

	if(empty($message)){
		// Le message a-t-il bien été introduit?
		$errors[]= $config['no_message'];
	}

	if(empty($email)){
		// L'adresse email a-t-elle bien été encodée?
		$errors[]= $config['no_email'];
	}

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		// l'adresse email est-elle valide?
		$errors[]= $config['wrong_email'];
	}

	if(empty($email)){
		$errors[]= $config['no_legal'];
	}



	if(count($errors)<1){

		$message= "$nom ($email) vous a contacté via www.passplume.be.\n\rVoici son message : \n\r\n\rBonjour,\n\r\n\r$message\n\r\n\rBien à vous,\n\r\n\r$nom ($email)\n\r\n\r[Message envoyé à partir de votre site internet (passplume.be)]";

		foreach ($_POST as $k=>$v){
			if (!in_array($k, array('name','email','message'))){
				if(is_array($v)){
					$message.="\n\r$k = ".implode(',', $v);
				}else{
					$message.="\n\r$k = $v";
				}
			}
		}

		$message = wordwrap($message, 70, "\r\n");

		// send the email
		if(empty($config['email'])){
			die("tu as oublié d'encoder l'adresse email. (regarde pour config['email']) dans le code php");
		}

		// mail('info@passplume.be', $config['sujet'], $message);
		mail('passplume@yopmail.com', $config['sujet'], $message);

		echo 'mail sent';

		// redirect to thank you page
		header("Location: ".$config['page_merci']);
		exit;
	}

	else {
		echo 'error occured';
	}
}

?>
