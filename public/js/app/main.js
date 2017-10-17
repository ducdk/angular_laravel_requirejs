require.config({
	paths: {
		'angular': '../bower_components/angular/angular',
		'ngRoute': '../bower_components/angular-route/angular-route',
		'ngResource': '../bower_components/angular-resource/angular-resource',
		'jquery': '../bower_components/jquery/dist/jquery',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
		'bootstrap-switch': '../bower_components/bootstrap-switch/js/bootstrap-switch',
		'jquery-slimscroll': '../bower_components/jquery-slimscroll/jquery.slimscroll',
		'jquery-blockui': '../bower_components/jquery.blockui.min',
		'js-cookie': '../bower_components/js.cookie.min',
		'quick-sidebar': '../bower_components/quick-sidebar',
		'bootstrap-hover-dropdown': '../bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown',
		'app': 'app',
		'coreModule': 'core/coreModule',
		'themeModule': 'theme/themeModule',
		'demo': '../bower_components/demo',
		'layout': '../bower_components/layout',
		'app.min': '../bower_components/app',
		'jquery.min': '../bower_components/jquery.min',
	},

	shim: {
		'angular': {
			deps: [
			'jquery.min',
			'jquery',
			'bootstrap',
			'bootstrap-hover-dropdown',
			'bootstrap-switch',
			'jquery-slimscroll',
			'jquery-blockui',
			'js-cookie',
			'quick-sidebar',
			'demo',
			'layout',
			'app.min',
			
			]
		},
		'app': {
			deps: ['angular','coreModule']
		},
		'ngRoute': {
			deps: ['angular']
		},
		'ngResource': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'quick-sidebar': {
			deps: ['jquery']
		},
		'bootstrap-hover-dropdown': {
			deps: ['jquery']
		},
		'bootstrap-switch': {
			deps: ['jquery']
		},
		'jquery-slimscroll': {
			deps: ['jquery.min']
		},
		'jquery-blockui': {
			deps: ['jquery']
		},
		'js-cookie': {
			deps: ['jquery']
		},
		'coreModule': {
			deps: ['angular','themeModule','ngRoute','ngResource']
		},
		'themeModule': {
			deps: ['angular']
		},
		'demo': {
			deps: ['app.min','layout','jquery.min']
		},
		'layout': {
			deps: ['app.min','jquery.min','bootstrap','jquery-slimscroll']
		},
		'app.min': {
			deps: ['jquery','jquery.min','bootstrap']
		}
	}
});


require(
	['coreModule']
	,function() {
		
	}
);