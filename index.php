<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" ng-app="WeddingApp"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>

        <meta name="description" content="Meg and Don are getting married. This site is devoted to sharing their story and keeping you informed on any news or details regarding said wedding.">
        <meta name="keywords" content="Meg, Meaghan, Don, Donald, Desroches, Bishop, Bishroches, Wedding, Bishrocheswedding">
        <meta name="robots" content="INDEX,FOLLOW">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:title" content="Meg & Don"/>
        <meta property="og:description" content="Meg and Don's wedding website."/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="http://www.bishrocheswedding.com/"/>
        <meta property="og:image" content="http://bishrocheswedding.com/_/img/fb_image.jpg"/>
        <meta property="og:site_name" content="Meg & Don"/>

        <link rel="apple-touch-icon" href="apple-touch-icon-precomposed.png">
        <link rel="stylesheet" href="_/css/normalize.min.css">
        <link rel="stylesheet" href="_/css/main.css">
        <link rel="stylesheet" href="_/fonts/avenir.css">
        <link rel="stylesheet" href="_/fonts/bishroches/style.css">
        <link href='//fonts.googleapis.com/css?family=Playfair+Display' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="bower_components/photoswipe/dist/photoswipe.css">
        <link rel="stylesheet" href="bower_components/photoswipe/dist/default-skin/default-skin.css">

        <script src="_/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
	<script>
		GLOBAL_CONST_USER_IP = '<?php echo $_SERVER['SERVER_ADDR']; ?>';
	</script>
    </head>
    <body class="{{$state.current.name}}" ng-cloak ng-controller="WeddingAppController">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        
        <div class="header-container">
            <img src="_/img/frontpage-meg.png" alt="" class="frontpage-meg"/>
            <header class="wrapper clearfix">
                <div class="header-content" ui-sref="home">
                    <h1 class="title">Meg<span class="amp">&amp;</span>Don</h1>
                    <p class="subtitle">October 9<sup>th</sup>, 2016</p>
                </div>
                <nav>
                    <ul>
                        <li><a ui-sref="about" ng-class="{'active': $state.current.name === 'about'}"><i class="bishroches-icon-about"></i></a></li>
                        <li><a ui-sref="registry" ng-class="{'active': $state.current.name === 'registry'}"><i class="bishroches-icon-registry"></i></a></li>
                        <li><a ui-sref="hotel" ng-class="{'active': $state.current.name === 'hotel'}"><i class="bishroches-icon-hotel"></i></a></li>
                    </ul>
                </nav>

                <count-down date="10/9/2016 16:00:00" class="text-light text-shadow"></count-down>
            </header>
            <img src="_/img/frontpage-don.png" alt="" class="frontpage-don"/>
        </div>
        <music-request></music-request>
        <div ui-view class="main"></div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="_/js/vendor/jquery-1.11.1.min.js"><\/script>')</script>
        <script src="bower_components/angular/angular.js"></script>
        <script src="bower_components/angular-animate/angular-animate.js"></script>
        <script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
        <script src="bower_components/photoswipe/dist/photoswipe.min.js"></script>
        <script src="bower_components/photoswipe/dist/photoswipe-ui-default.min.js"></script>

        <script src="_/js/main.js"></script>
        <script src="_/js/app/app.js"></script>
        <script src="_/js/app/index.js"></script>
        <script src="_/js/app/countdownDirective.js"></script>
        <script src="_/js/app/instagramTwitterImages.js"></script>
        <script src="_/js/app/about.js"></script>
        <script src="_/js/app/hotel.js"></script>
        <script src="_/js/app/photos.js"></script>
        <script src="_/js/app/registry.js"></script>
        <script src="_/js/app/engagement-party.js"></script>
        <script src="_/js/app/musicRequest.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61063932-1', 'auto');
  ga('send', 'pageview');

</script>
    </body>
</html>
