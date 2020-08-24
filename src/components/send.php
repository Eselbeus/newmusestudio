You typed in: <?php print $_POST['myEmail'];?>

<?php
	$to = "eselbeus@gmail.com";
	$subject = "Email from my website";
	$body = "the user typed in ..." . $_POST['myEmail'];
	mail($to, $subject, $body);
?>
