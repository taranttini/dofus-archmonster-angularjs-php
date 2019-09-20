<?php

require 'class.phpmailer.php';
require 'class.smtp.php';


function sendMail($to, $subject, $messageHTML, $message)
{
	$mail = new PHPMailer;

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->From = 'email@email.com'; //change to your data
    $mail->Host = 'smtp.email.com'; //change to your data
    $mail->Username = 'email@email.com';  //change to your data
    $mail->Password = 'email123'; //change to your data

    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 25;

	$mail->FromName = 'DOFUS';

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->addAddress($to);
	$mail->Subject = $subject;
	$mail->Body    = $messageHTML;
	$mail->AltBody = $message;

	return $mail->send();

	if(!$mail->send()) {
	    return 'OK';
	    //echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}
}