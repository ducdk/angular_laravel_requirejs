define([
	'jquery',
	'core/model/app',
	'core/model/services/jokeService',
	'jquery-slimscroll'
	],function($, App, jokeService) {

	var coreModule = angular.module(['coreModule']);

	coreModule.controller('LoginController', ['$scope', 'jokeService', function($scope, jokeService){

		$scope.clickSubmit = function() {
			console.log("click");
		}
		
	}]);

	// $('.scroller').slimScroll({
 //        height: '400px'
 //    });

});