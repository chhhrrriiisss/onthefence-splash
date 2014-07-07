<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">        
        
        <!-- build:template -->           
            
        <!-- Defaults -->

        <title><%= title %></title>

        <meta name="description" content="<%= description %>">
        <meta name="keywords" content="<%= keywords %>">
        <meta name="copyright" content="Copyright © 2014 <%= name %>">  
        <meta name="author" content="<%= name %>"> 
        <meta name="last-modified" content="<%= date %>"> 
        <meta name="viewport" content="initial-scale=1, user-scalable=no">

        <!-- Facebook Opengraph -->
        <meta property="og:title" content="<%= title %>"/>
        <meta property="og:type" content="app"/>
        <meta property="og:url" content="<% url %>" />
        <meta property="og:description" content="<%= description %>">
        <meta property="og:image" content="<%= thumbnail.src %>" />
        <meta property="og:image:width" content="<%= thumbnail.width %>" />
        <meta property="og:image:height" content="<%= thumbnail.height %>" />
           
        <!-- /build -->

        <!-- Icons -->
        <link rel="shortcut icon" href="img/icons/favicon.ico?v=5" type="image/x-icon" />
        <!-- Apple Touch Icons -->
        <link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="img/icons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="img/icons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="img/icons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="img/icons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="img/icons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="img/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="img/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="img/icons/apple-touch-icon-152x152.png" />

        <!-- Main Stylesheet -->
        <link rel="stylesheet" href="css/screen.css">    

        <!-- Load web fonts -->
        <link href='http://fonts.googleapis.com/css?family=Droid+Serif' rel='stylesheet' type='text/css'>

        <script>
        window._skel_config = {
            prefix: "css/screen",
            resetCSS: true,
            boxModel: "border",
            grid: { gutters: 30 },
            breakpoints: {
                wider: { range: "1400-", containers: 1400, grid: { gutters: 50 } },
                wide: { range: "1200-1399", containers: 1200, grid: { gutters: 50 } },           
                narrow: { range: '981-1199', containers: 930 },
                small: { range: '601-980', containers: 720, lockViewport: false, grid: { collapse: true } },
                mobile: { range: "-600", containers: "fluid", lockViewport: false, grid: { collapse: true } }
            }
        };

        window.load = function() {

            skel.init();
        }
        </script>        

        <!-- Fallbacks -->
        <noscript>
            <link rel="stylesheet" href="css/no-script-skel.css" />
            <link rel="stylesheet" href="css/screen.css" />
            <link rel="stylesheet" href="css/screen-wide.css" />
            <link href="img/icons.fallback.css" rel="stylesheet" />
        </noscript>        

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->

    </head>
    <body class="loading">

        <!-- Font force preload fix -->
        <span class="preload" style="font-family:'Otari'; color:transparent;">Otari</span>
        <span class="preload" style="font-family:'Droid Serif'; color:transparent;">Droid Serif</span>

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="nav-header" class="header-wrapper">

            <div class="container">         

                <div class="row flush">
                    <!-- Header -->       

                    <div class="6u">

                        <nav id="nav">
                            <a href="#" id="nav-toggle" class="toggle">Menu</a>
                            
                            <a href="http://designdemocracy.ac.nz/onthefence" target="_new">Dev Blog</a>
                            <a href="#about">About</a> 
                            <a href="#play">2011 Version</a>                               
                        </nav> 

                    </div> 

                    <div class="6u">
          
                        <div id="social">
                            <a href="#" id="test"><div class="image-twitter_button"></div></a>
                            <a href="#"><div class="image-facebook_button"></div></a>  
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <article class="main-wrapper">

        <div class="static image-clouds"></div>        
        <div id="center1" class="static image-hill_center"></div>       
        <div id="center2" class="static image-hill_center"></div>   
       

        <div id="bl1" class="static image-bluebird"></div>   
<!--         <div id="br1" class="static image-brownbird"></div>  -->

        <div id="gr1" class="static image-grass"></div> 

  

        <div class="static image-signpost">
            <div class="static image-enrol_sign"></div>
        </div>        

        <section id="banner" class="banner">      

                <div class="arrow image-arrow left" id="slider-prev"></div><div class="arrow image-arrow right" id="slider-next"></div>

                <div class="slide-wrapper">

                    <div class="container active-slide-left slide" id="slide1">     

                        <div class="row">

                            <div class="-3u 6u">

                                                  
                            <div class="flag_banner image-flag_banner">                                       
                                <h4>COMING SOON</h4>
                            </div>

                            <div class="title image-onthefence_logo"></div>                              
                                                                          

                            </div>

                        </div>

                        <div class="row">

                            <div class="-2u 8u">
                                <h2 class="welcome" style="max-width:600px">A NIFTY NEW WEB TOOL, DESIGNED TO MAKE YOUR ELECTION VOTE COUNT.</h2>
                            </div>

                        </div>
                        
                    </div>    

                    <div class="container slide" id="slide2">                         

                        <div class="row flush">

                            <div class="12u">

                                <div class="animated-title">                                    
                                    <div class="flag flag-left image-flag flush">
                                        
                                        <span class="text-group">
                                            KIA ORA
                                        </span>

                                    </div>
                                    <div class="title image-hi_title"></div>
                                    <div class="flag flag-right image-flag flush">
                                        
                                         <span class="text-group">
                                            WELCOME
                                        </span>

                                    </div>
                                </div>    

                            </div>

                        </div>

                        <div class="row">

                            <div class="-2u 8u">
                                <h2 class="welcome" style="max-width:550px">POLITICS AIN'T JUST FOR GROWN UPS, IT'S FOR EVERYONE.</h2>
                            </div>

                        </div>

                    </div>

                    <div class="container slide" id="slide3">   
                        
                       <!--  <div class="row">

                            <div class="-2u 8u">

                                <img src="img/designdemocracy_logo.png" alt="Design &amp; Democracy" style="max-width:500px; margin: 0 auto;"/>
                            </div>

                        </div>

                        <div class="row flush">

                            <div class="-3u 6u">
                                
                                <h3 style="max-width:650px">ENHANCING PARTICIPATION AND CONVERSATION ON SOCIAL ISSUES THROUGH DESIGN.</h3>

                                <p style="max-width:650px;">The Design &amp; Democracy Project is a strategic research unit established within Massey University’s College of Creative Arts to enhance the role that design and design thinking has to play in dealing with social issues. The Project’s focus is on further developing and launching two previously successful online voter facilitation web tools, On the Fence and Ask Away for the 2014 New Zealand General Election.</p>

                        </div> -->

                        <div class="row">

                            <div class="12u">

                               

                                <div class="plaque-wrapper">   

                                <span class="image-corner top left"></span>   
                                <span class="image-corner top right"></span>
                                <span class="image-bar image-twirl top">
                                <span class="image-twirl"></span>
                                </span>

                                <div class="content flush">

                                <img src="img/designdemocracy_logo.png" alt="Design &amp; Democracy" style="max-width:500px; margin: 0 auto;"/>

                                <h3 class="title" style="max-width:600px; margin:0 auto;">A STRATEGIC RESEARCH UNIT WITHIN MASSEY UNIVERSITY'S COLLEGE OF CREATIVE ARTS</h3>

                                <p>The Design &amp; Democracy Project aims to enhance the role that design and design thinking has to play in dealing with social issues. The Project’s focus is on further developing and launching two previously successful online voter facilitation web tools, <a class="link" href="http://designdemocracy.ac.nz/onthefence" target="_new">On The Fence</a> and <a class="link" href="http://askaway.co.nz" target="_new">Ask Away</a> for the 2014 New Zealand General Election. See <a class="link" href="http://designdemocracy.ac.nz" target="_new">designdemocracy.ac.nz.</a></p>       

                                </div>

                                <span class="image-bar image-twirl bottom">
                                <span class="image-twirl"></span>
                                </span>
                                <span class="image-corner bottom left"></span>       
                                <span class="image-corner bottom right"></span>

                                </div>   

                                </div>
                                

                            </div>

                        </div>

                       
                    </div>

                </div>

            </section>


            <section id="hill" class="hill image-hills">      

                 <div class="static image-sheep_fence"></div>   

            </section>


            <section id="about" class="about">

                <a name="play" class="anchor"></a>

                <div class="container center">

                    <div class="row">                      

                        <div class="-4u 8u">
                                          
                            <div class="animated-title">
                                
                                <div class="flag flag-left image-flag flush">
                                    
                                    <span class="text-group">

                                       WHAT

                                    </span>

                                </div>
                                <div class="title image-about_title"></div>
                                <div class="flag flag-right image-flag flush">
                                    
                                    <span class="text-group">

                                        IS IT?

                                    </span>

                                </div>
                                
                            </div>     

                        </div>

                    </div>

                    <div class="row">

                        <div class="4u not-mobile not-small">

                            <div class="character cow image-cow"></div>

                            <div class="character chicken image-chicken">
                                
                                <div class="static image-vote_box"></div>

                            </div>
                            
                        </div>
                       

                        <div class="8u">  

                            <div class="plaque-wrapper">   
                                
                                <span class="image-corner top left"></span>   
                                <span class="image-corner top right"></span>
                                <span class="image-bar image-twirl top">
                                    <span class="image-twirl"></span>
                                </span>

                                <div class="content">
                                
                                    <h3 class="title">ON THE FENCE IS A NIFTY NEW WEB TOOL, DESIGNED TO MAKE YOUR ELECTION VOTE COUNT!</h3>

                                    <p>Originally developed as part of a student project at Massey University’s College of Creative Arts, On the Fence is a non-partisan online tool that educates and guides inexperienced voters to find a best match from New Zealand’s political parties.</p>

                                    <P>Our interactive tool matches the your values with the values of different political parties, as assessed by a panel of experts. Our hi-tech boffins then calculate to narrow down the options to present the most compatible parties to your values. We don’t tell a user how to vote or specifically who to vote for, but we put trainer wheels on the future for many young people who believe that politics has no shaping influence in their lives.</p>

                                    <p> We'll be back with a better, faster, stronger On the Fence web tool in early August, but for more information on what we're up to <a class="link" href="http://www.designdemocracy.ac.nz/onthefence" target="_new">visit our dev blog,</a><a class="link" href="#" target="_new">follow us on twitter</a> or you can<a class="link" href="#" target="_new">check our facebook page.</a></p>        

                                    <div class="image-shell left"></div><div class="image-shell right"></div><div class="image-decoration center"></div>

                                </div>



                                <span class="image-bar image-twirl bottom">
                                    <span class="image-twirl"></span>
                                </span>
                                <span class="image-corner bottom left"></span>       
                                <span class="image-corner bottom right"></span>

                            </div>     

                        </div>

                    </div>

                </div>  
   
            </section>

            <section id="spacer" class="spacer">   

                <div class="static image-sheep_seedy"></div>  

            </section>

            <section id="play" class="play">   

                <a name="play" class="anchor"></a>

                <div class="container center">

                    <div class="row">

  
                        <div class="8u">
                                                      
                            <div class="animated-title">
                                
                                <div class="flag flag-left image-flag flush">
                                    
                                     <span class="text-group">

                                       OLDIE

                                    </span>

                                </div>
                                <div class="title image-onthefence_title"></div>

                                <div class="flag flag-right image-flag flush">
                                    
                                     <span class="text-group">

                                       GOODIE

                                    </span>
                                </div>
                                
                            </div>    

                            <div class="plaque-wrapper">   

                                
                                <span class="image-corner top left"></span>   
                                <span class="image-corner top right"></span>
                                <span class="image-bar image-twirl top">
                                    <span class="image-twirl"></span>
                                </span>

                                <div class="content">
                                
                                    <h3 class="title">CAN'T WAIT? &nbsp;WE'VE GOT YOU COVERED.</h3>

                                    <p>In 2011 we released a desktop-only version of On The Fence that has (and continues to be) helpful for heaps of young voters. We're keeping it available for use while the new version is in development and because our sheep is seemingly always hungry.</p>

                                    <p><div id="launch-button" class="button large green"><a href="">LAUNCH IT!</a></div></p>

                    <!--                  <p>Be sure to check our development blog for updates, flick us a message on twitter and facebook, or alternatively email us at <a class="link" href="#" target="_new">&#102;&#101;&#101;&#100;&#098;&#097;&#097;&#097;&#099;&#107;&#064;&#111;&#110;&#116;&#104;&#101;&#102;&#101;&#110;&#099;&#101;&#046;&#099;&#111;&#046;&#110;&#122;</a></p> -->

                                   

                                    

                                </div>

                                <span class="image-shell"></span>

                                <span class="image-bar image-twirl bottom">
                                    <span class="image-twirl"></span>
                                </span>
                                <span class="image-corner bottom left"></span>       
                                <span class="image-corner bottom right"></span>


                            </div>      

                        </div>

                        <div class="4u not-mobile not-small">

                        <div class="static image-sheep_debris"></div>                        
                            
                        </div>
                        

                    </div>

                </div>
            
            </section>


            <section id="spacer2" class="spacer not-mobile not-narrow">   

            

            </section>


    


        </article>

    

        <div class="footer-wrapper">
            <div class="container center">

                <div class="row flush no-collapse">

                    <div class="4u">
                       
                        <a class="null" href="#" style="max-width:340px;">Authorised by Kieran Stowers, Design &amp; Democracy Project, Te Ara Hihiko, Wellington.</a>    

                    </div>    
                    
                    <div class="4u">
                       
                        <a class="link" href="#">&#102;&#101;&#101;&#100;&#098;&#097;&#099;&#107;&#064;<span class="obfuscate">null</span>&#111;&#110;&#116;&#104;&#101;&#102;&#101;&#110;&#099;&#101;&#046;&#099;&#111;&#046;&#110;&#122;</a>

                    </div>   
                 
                </div>

            </div>

        </div>       

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        
        <!-- build:remove:dist -->
        <script src="js/src/plugins.js"></script>
        <script src="js/src/main.js"></script>
        <!-- /build -->

        <!-- build:remove:dev -->
        <script src="js/script.min.js"></script>
        <!-- /build -->

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->

        <!-- build:template -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','<%= analytics %>');ga('send','pageview');
        </script>
        <!-- /build -->   

        <!-- build:remove:dist -->
        <script src="http://localhost:35729/livereload.js"></script>
        <!-- /build -->

    </body>
</html>