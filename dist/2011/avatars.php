<?php 
session_start(); 
?><!doctype html public "-//W3C//DTD HTML 4.0 //EN"> 
<html> 
<head> 
       <title>On The Fence | Avatars</title> 
       
       <style type="text/css">
	   body {background:#000; margin:0px;}
	   .container-wrap {width:100%; float:left; padding-top:30px;}
	   p.highlight {color:#fff; font: Georgia, "Times New Roman", Times, serif; size:12px; font-style:italic;}
	   .clear {width:100%; clear:both;}
	   
div.counter {position:absolute; padding:10px; float:left; top:0px; left:0px; background:#000;  moz-opacity:.8; filter:alpha(opacity=80); opacity:.8; width:100%;}

ul#grid li img:hover {
	-moz-opacity:.8; filter:alpha(opacity=80); opacity:.8;
}

ul#grid li img:hover {
	-moz-opacity:1; filter:alpha(opacity=100); opacity:1;
}

	ul#grid li {
			list-style: none outside;
			float: left;
			margin-right: 20px;
			margin-bottom: 20px;
			font-size: 50px;
			width: 5em;
			height: 5em;
			line-height: 5em;
			text-align: center;
		}
			ul#grid li img {
				vertical-align: middle;
			}
		.ui-slider-handle { left: 45%; }
		
#grid_slider {position:absolute;}

	   </style>
       
       <link type="text/css" href="css/jquery-ui.css" rel="stylesheet" />	

         <script type="text/javascript" src="js/jquery-latest.min.js"></script>
         <script type="text/javascript" src="js/lazykarl.min.js"></script>
         <script src="js/jquery-ui.min.js" type="text/javascript"></script>

	<script>

	

	$().ready(function() {  

		$(".lazyloader").lazyKarl();

	}); 
	
$(document).ready(initializeGrid);

function initializeGrid() {
  $("ul#grid li img").each(function() {
    var width = $(this).width() / 100 + "em";
    var height = $(this).height() / 100 + "em";
    $(this).css("width",width);
    $(this).css("height",height);
  });
}
$("#grid_slider").slider({
  value: 50,
  max: 100,
  min: 10,
  slide: function(event, ui) {
    $('ul#grid li').css('font-size',ui.value+"px");
  }
});

	</script>

</head> 

<body> 

<div class="counter">
<div id="grid_slider">
  <div class='ui-slider-handle'></div>
</div>
</div>

<?php 


$dirname = "app/avatars/"; 
$images = scandir($dirname); 
$count = 0;

echo "<ul id='grid' class='container-wrap lazyloader'>";

foreach($images as $curimg){ 
	$url=getimagesize("app/avatars/$curimg");
if(!is_array($url))
{

}
else {
	$count++;
	if ($count > 30) {
		break;
	}
	echo "<li><a href='app/avatars/$curimg'><img rel='app/avatars/$curimg' class='thumb' alt='$curimg' /></a></li>"; 
}

}; 

echo "</ul> ";
     
?> 