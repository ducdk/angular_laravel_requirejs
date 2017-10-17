define([
	'core/module/module'
	],function(module){
		var Route = {
			init: function() {
				console.log('routes');
				module.config(['$routeProvider', function($routeProvider){
					$routeProvider.when(
						'/home',
						{
							// controller: 'MainController',
							templateUrl: 'public/js/app/core/views/home.html'
						}
					).when(
						'/',
						{
							templateUrl: 'public/js/app/core/views/login.html'
						}
					);
					}
				]);
			}
		}
		Route.init();
	}
);