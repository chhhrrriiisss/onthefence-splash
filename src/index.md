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

            <!-- Google pagemaps -->

            <!--
            <PageMap>
                <DataObject type="document">
                    <Attribute name="title"><%= title %></Attribute>
                    <Attribute name="author"><%= name %></Attribute>
                    <Attribute name="description"><%= description %></Attribute>
                    <Attribute name="last_update"><%= date %></Attribute>
                    </DataObject>
                    <DataObject type="thumbnail">
                    <Attribute name="src" value="<%= thumbnail.src %>" />
                    <Attribute name="width" value="<%= thumbnail.width %>" />
                    <Attribute name="height" value="<%= thumbnail.height %>" />
                </DataObject>
            </PageMap>
            -->

        <!-- /build -->

        <link rel="stylesheet" href="css/screen.css">    

        <script src="js/vendor/skel.min.js">
            {
                prefix: "css/screen",
                resetCSS: true,
                boxModel: "border",
                grid: { gutters: 30 },
                breakpoints: {
                    wider: { range: "1400-", containers: 1400, grid: { gutters: 50 } },
                    wide: { range: "1200-1399", containers: 1200, grid: { gutters: 50 } },           
                    narrow: { range: '981-1199', containers: 930 },
                    narrower: { range: '601-980', containers: 720, lockViewport: false, grid: { collapse: true } },
                    mobile: { range: "-600", containers: "fluid", lockViewport: false, grid: { collapse: true } }
                }
            }
        </script>        

        <!-- Skel.js fallback -->
        <noscript>
            <link rel="stylesheet" href="css/no-script-skel.css" />
            <link rel="stylesheet" href="css/screen.css" />
            <link rel="stylesheet" href="css/screen-wide.css" />
            <link href="img/image.fallback.css" rel="stylesheet">
        </noscript>        

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->

    </head>
    <body class="loading">

        <!-- Font force preload fix -->
        <span style="font-family:'Otari'; color:transparent;">Otari</span>
        <span style="font-family:'Droid Serif'; color:transparent;">Droid Serif</span>

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div class="header-wrapper" class="sticky-menu">

            <div id="header">
                <!-- Header -->       

                <nav id="nav">
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Old Version</a>    
                </nav>  
      

                <div id="social">
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>  
                </div>

            </div>

        </div>

        <article class="main-wrapper">

          <section id="tweets" class="tweets">           

                <div class="container" style="display:none;">                
                  
                        <div class="row">

                            <div class="12u">

                                <div class="animated-title">
                                    
                                    <div class="flag flag-left image-flag flush" data-text="TEST">
                                        
                                        <span class="text-group">

                                            WHAT

                                        </span>
  
                                    </div>
                                    <div class="title"><img src="img/titles/about_2.png" alt="" /></div>
                                    <div class="flag flag-right image-flag flush" data-text="TEST">
                                        
                                        <span class="text-group">

                                            IS IT?

                                        </span>

                                    </div>

                                </div>    

                            </div>            

                        </div>

                        <div class="row">

                            <div class="2u">  
                                &nbsp;
                            </div>

                            <div class="8u">  

                                <div class="plaque">   

                                    <h3 class="title">ON THE FENCE IS A NIFTY NEW WEB TOOL, DESIGNED TO MAKE YOUR ELECTION VOTE COUNT!</h3>

                                    <p>Developed as part of an Honours year thesis at Massey University College of Creative Arts, Wellington, researching into the topic of youth voter participation in New Zealand. Our task was to explore what role Visual Communication Design can play in motivating inexperienced voters to interact with politics and vote. We believe this can become a model for future election-based community projects.</p>                       
                                </div>      

                            </div>

                            <div class="2u">  
                                &nbsp;
                            </div>

                        </div>
                            
                
                </div>

            </section>

             <section id="banner" class="banner">      

                <div class="arrow left"></div><div class="arrow right"></div>

                <div class="container">              

                      <div class="row">

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

                            <div class="2u">
                                &nbsp;
                            </div>

                            <div class="8u">

                                <h2 class="welcome">DON'T BE A SHEEP THIS ELECTION</h2>

                            </div>

                            <div class="2u">
                                &nbsp;
                            </div>

                        </div>



                    </div>    
    
                </div>

            </section>


            <section id="hill" class="hill image-hills">      


            </section>


            <section id="about" class="about">

                
                <div class="container">

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

                        <div class="4u not-mobile not-narrower">

                            <div class="character cow image-cow"></div>

                            <div class="character chicken image-chicken"></div>
                            
                        </div>
                       

                        <div class="8u">  

                            <div class="plaque">   

                                <h3 class="title">ON THE FENCE IS A NIFTY NEW WEB TOOL, DESIGNED TO MAKE YOUR ELECTION VOTE COUNT!</h3>

                                <p>Developed as part of an Honours year thesis at Massey University College of Creative Arts, Wellington, researching into the topic of youth voter participation in New Zealand. Our task was to explore what role Visual Communication Design can play in motivating inexperienced voters to interact with politics and vote. We believe this can become a model for future election-based community projects.</p>  

                            </div>      

                        </div>

                    </div>
                <!--     <div class="character cow image-cow"></div>

                    <div class="character chicken image-chicken"></div>
 -->
<!--                     <div class="plaque">   

                        <h3 class="title">ON THE FENCE IS A NIFTY NEW WEB TOOL, DESIGNED TO MAKE YOUR ELECTION VOTE COUNT!</h3>

                        <p>Developed as part of an Honours year thesis at Massey University College of Creative Arts, Wellington, researching into the topic of youth voter participation in New Zealand. Our task was to explore what role Visual Communication Design can play in motivating inexperienced voters to interact with politics and vote. We believe this can become a model for future election-based community projects.</p>                       
                    </div>      --> 

                    </div>  
   
            </section>


            <section id="play" class="play">   

                <div class="container">

                    <div class="row">

  
                        <div class="8u">
                                                      
                            <div class="animated-title">
                                
                                <div class="flag flag-left image-flag flush">
                                    
                                     <span class="text-group">

                                       OLDIE

                                    </span>

                                </div>
                                <div class="title image-about_title"></div>

                                <div class="flag flag-right image-flag flush">
                                    
                                     <span class="text-group">

                                       GOODIE

                                    </span>
                                </div>
                                
                            </div>    

                        </div>
           
                    </div>

                    <div class="row">


                        <div class="8u">
                        
                            <div class="plaque">   

                                <h3 class="title">CAN'T WAIT? &nbsp;WE'VE GOT YOU COVERED</h3>

                                <p>In 2011 we released a desktop-only version of On The Fence that has (and continues to be) helpful for heaps of young voters. We're keeping it available for use while the new version is in development. Aenean eros vel enim auctor adipiscing, enim magna, aenean porta, tincidunt, auctor magna!</p>  

                            </div>      

                        </div>

                        

                    </div>


                </div>
            
            </section>

        </article>

        <div class="footer-wrapper">
            <footer>
               
            </footer>
        </div>       

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

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