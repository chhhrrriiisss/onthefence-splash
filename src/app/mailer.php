<?php
// Contact subject
$subject ="On The Fence | Feedback"; 
// Details
$message="$detail";

// From 
$header="from: On The Fence Mailer";

// Enter your email address
$to ='feedbaaack@onthefence.co.nz';

$send_contact=mail($to,$subject,$message,$header);

// Check, if message sent to your email 
// display message "We've recived your information"
if($send_contact){
echo "We've recived your contact information";
}
else {
echo "ERROR";
}
?>