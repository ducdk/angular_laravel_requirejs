<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Index</title>
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/global/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/global/plugins/simple-line-icons/simple-line-icons.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/global/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css') }}" rel="stylesheet" type="text/css" />
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN DYMANICLY LOADED CSS FILES(all plugin and page related styles must be loaded between GLOBAL and THEME css files ) -->
	<link id="ng_load_plugins_before" />
	<!-- END DYMANICLY LOADED CSS FILES -->
	<!-- BEGIN THEME STYLES -->
	<!-- DOC: To use 'rounded corners' style just load 'components-rounded.css') }}' stylesheet instead of 'components.css') }}' in the below style tag -->
	<link href="{{ asset('public/assets/global/css/components.min.css') }}" id="style_components" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/global/css/plugins.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/layouts/layout/css/layout.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/assets/layouts/layout/css/themes/darkblue.min.css') }}" rel="stylesheet" type="text/css" id="style_color" />
	<link href="{{ asset('public/assets/layouts/layout/css/custom.min.css') }}" rel="stylesheet" type="text/css" />
	<link href="{{ asset('public/css/custom-style.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('public/assets/pages/css/login.min.css') }}" rel="stylesheet" type="text/css" />
	<!-- END THEME STYLES -->
	<link rel="shortcut icon" href="favicon.ico" /> </head>

</head>
<body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white page-sidebar-closed" ng-controller="MainController">
	<div ng-view></div>
	<!-- BEGIN FOOTER -->
    <div class="page-footer">
        <div class="page-footer-inner"> 2014 &copy; Metronic by keenthemes.
            <a title="Theme" target="_blank">Purchase Metronic!</a>
        </div>
        <div class="scroll-to-top">
            <i class="icon-arrow-up"></i>
        </div>
    </div>
    <!-- END FOOTER -->
    <!-- requirejs -->
    <script data-main="public/js/app/main" src="{{ asset('public/js/bower_components/requirejs/require.js') }}"></script>
</body>
</html>