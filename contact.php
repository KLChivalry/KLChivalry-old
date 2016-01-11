
<html>
	<body>
<a  href="index.html#contact">Click to return to the home page.</a>
</body>
	
</html>
<?php
require("SendGrid/sendgrid-php.php");

$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name." \r\n";
$body_message .= 'E-mail: '.$field_email." \r\n";
$body_message .= 'Message: '.$field_message." \r\n";
$body_message .= 'CHANGE EMAIL TO';

$headers = 'From: '.$field_email."  [ ".$field_name." ] \r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$headers .= 'Body: '.$body_message."\n\r";


/**/

$sendgrid = new SendGrid('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');
$email = new SendGrid\Email();
$email
    ->addTo('arendtjda@gmail.com', 'Jonathan Arendt')
    ->addTo('arendtsla@gmail.com', 'Sarah Arendt')
    ->setFrom($field_email)
    ->setSubject($subject)
    ->setText($body_message)
    ->setHtml($body_message)
;

//$sendgrid->send($email);

// Or catch the error

$mail_status = true;

try {
    $sendgrid->send($email);
} catch(\SendGrid\Exception $e) {
    echo $e->getCode();
    foreach($e->getErrors() as $er) {
        echo $er;
    }
    $mail_status = false;
}



if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html#contact';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to arendtjda@gmail.com');
		window.location = 'index.html#contact';
	</script>
<?php
}


?>



<?php
echo('')
?>
