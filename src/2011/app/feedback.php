<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>On The Fence | Feedbaaack</title>
		
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<style type="text/css">
body {
	background:#111;
	margin:0px;
}
.rounded-corners {
  -moz-border-radius: 10px; /* Firefox */
  -webkit-border-radius: 10px; /* Safari, Chrome */
  border-radius: 10px; /* CSS3 */
}
#wrap {margin:0 auto; width:580px; height:390px; margin-top:0px; background-image: url(images/feedback_bg.jpg);}
#ta-wrap-close {position:absolute; top:0px; margin:0px auto;  }
#ta { position:relative; top:105px;  left:20px; min-width:500px; max-width:500px; width:500px; background:#fff; border:0px; font-family:Georgia, "Times New Roman", Times, serif; font-style:italic; font-weight:bold; size:20px; outline: none;  resize: none; overflow: auto; margin:0px; }
#sb {position:relative; top:127px; left:24px; width:535px; text-align:right; 	cursor: pointer;
	-webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out; }
#ta-wrap {padding:20px; }
.clear {clear:both; width:100%; height:1px;}
.scale {
		cursor: pointer;
	-webkit-transition: all .1s ease-in-out;
    -moz-transition: all .1s ease-in-out;
    -o-transition: all .1s ease-in-out;
    -ms-transition: all .1s ease-in-out;
}
</style>
</head>
<body>

<?php
  $to='feedbaaack@onthefence.co.nz';
  $messageSubject='On The Fence | Feedback';
  $body='';
  $displayForm=true;
  if ($_POST){
    $body=stripslashes($_POST['body']);

    $crack=eregi("(\r|\n)(to:|from:|cc:|bcc:)",$body);
    if ($body && !$crack){
      if (mail($to,$messageSubject,$body,'From: On The Fence Mailer')
          ){
        $displayForm=false;
?>

<div id="wrap"><img src="../images/close_bg.jpg" /></div>

<?php
        echo '<p>'.htmlspecialchars($body).'</p>';
      }else{ // the messages could not be sent
?>

<?php
      }
    }else if ($crack){ // cracking attempt
?>

<?php
    }else{ // form not complete
?>

<?php
    }
  }
  if ($displayForm){
?>

<div id="wrap">
<form name="contactform" action"URL" method="post">
<div id="ta-wrap"><textarea placeholder="Let us know what you think!" id="ta" name="body" class="rounded-corners" maxlength="1000" rows="10"></textarea></div>
<div class="clear"></div>
<div id="sb"><input type="image" src="images/submit_btn.png" onclick="closeIt()" class="scale" value="Submit"></div>
</form>
</div>

<?php
  }
?>


</body>
</html>