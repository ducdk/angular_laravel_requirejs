define([
	'core/module/module',
	'angular'
	],function(module,angular) {
	module.directive('containerHome', function() {
		return {
			restrict: 'AECM',
			templateUrl: 'public/js/app/core/views/directives/containerHome.html',
			replace: true,
			scope: true
		}
	});
});