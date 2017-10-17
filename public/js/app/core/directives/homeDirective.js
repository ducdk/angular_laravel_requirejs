define([
	'core/module/module'
	],function(module) {
		console.log("mainContent");
	module.directive('mainContent', function() {
		return {
			restrict: 'AECM',
			templateUrl: 'public/js/app/core/views/directives/mainContent.html',
			replace: true,
			scope: {
				personName: '@',
				personObject: '=',
				fomatNameFunction: '&'
			}

		}
	});
});