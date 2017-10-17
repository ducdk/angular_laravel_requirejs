define([
	'core/module/module',
	'angular'
	],function(module,angular) {
	module.directive('mainContent', function() {
		return {
			restrict: 'AECM',
			templateUrl: 'public/js/app/core/views/directives/mainContent.html',
			replace: true,
			scope: true
		}
	});
});