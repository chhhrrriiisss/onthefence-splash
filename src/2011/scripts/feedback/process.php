<?php
 if (isset($_GET['comments']))
 {
	$comments = $_GET["comments"];

	    
include_once("Google_Spreadsheet.php");
 
$u = "scapenz@gmail.com";
$p = "r0flm0n5t3rw1n54g41n";
 
$ss = new Google_Spreadsheet($u,$p);
$ss->useSpreadsheet("On The Fence - Feedback");
  
$row = array
(
    "name" => 'test'
    , "email" => 'test'
    , "comments" => $comments
);
 
if ($ss->addRow($row)) echo "Form data successfully stored using Google Spreadsheet";
else echo "Error, unable to store spreadsheet data";
 
 }
 else {
	 echo "Variables not set";
 }
?>