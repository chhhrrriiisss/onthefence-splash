<?php

/******* VALIDATION *******/

if ($_GET['name'] == "" || $_GET['email'] == "" || $_GET['message'] == "") {  //Check if user filled in all fields
	echo 'Please fill in all fields!';    			//message that will be shown when the user hasn't filled in all fields
	exit;
}

if (!preg_match("/^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)*\.([a-zA-Z]{2,6})$/", $_GET['email'])) {		//check if the user filled in a valid email address
	echo 'Please enter a valid email address!';			//message that will be shown when the user filled in an invalid email address
	exit;
}

if (strlen($_GET['name']) < 3) {			//check if the user's name is atleast 3 characters long
	echo 'Your name should be atleast 3 characters long!';			//message that will be shown when the user's name is shorter than 3 characters. To change this limit, replace the 3 by whatever you want.
	exit;
}

if (strlen($_GET['message']) < 10) {			//check if the user's message is atleast 10 characters long
	echo 'Your message should be atleast 10 characters long!';			//message that will be shown when the user's message is shorter than 10 characters. To change this limit, replace the 10 by whatever you want.
	exit;
}

/****** END VALIDATION ****/

//Put in your email address below:
$to = 'support@247hosting.co.nz';


//User info (DO NOT EDIT!)
$name = stripslashes($_GET['name']); //sender's name
$email = stripslashes($_GET['email']); //sender's email

//The subject
$subject  = "[Website Query] "; //The default subject. Will appear by default in all messages. Change this if you want.

//The message you will receive in your mailbox
//Each parts are commented to help you understand what it does exaclty.
//YOU DON'T NEED TO EDIT IT BELOW BUT IF YOU DO, DO IT WITH CAUTION!
$msg  = "From:".$name."\r\n";  //add sender's name to the message
$msg .= "e-Mail:".$email."\r\n";  //add sender's email to the message
$msg .= "Subject:".$subject."\r\n\n"; //add subject to the message (optional! It will be displayed in the header anyway)
$msg .= "---Message--- \r\n".nl2br(stripslashes($_GET['message']))."\r\n\n";  //the message itself

$mail = mail($to, $subject, $msg, "From:".$email);  // This command sends the e-mail to the e-mail address contained in the $to variable

if($mail) {
	echo 'We will be in touch shortly!';  //This is the message that will be shown when the message is successfully send
} else {
	echo 'Error: Message could not be sent!';   //This is the message that will be shown when an error occured: the message was not send
}

?>