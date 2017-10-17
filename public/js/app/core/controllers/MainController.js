define([
	'jquery',
	'core/model/app',
	'core/model/services/jokeService',
	'jquery-slimscroll'
	],function($, App, jokeService) {

	var coreModule = angular.module(['coreModule']);

	coreModule.controller('MainController', ['$scope', 'jokeService', function($scope, jokeService){
		
		jokeService.init();
		$scope.jokes = jokeService;
		App.init();

		$scope.closeQuickSidebar = function() {
			App.quickSideBar = 'false';
			App.closeQuickSidebar();
		}

		$scope.nextPage = function() {
			jokeService.nextPage();
			$scope.jokes = jokeService;
		}

		$scope.prevPage = function() {
			jokeService.prevPage();
			$scope.jokes = jokeService;
		}
		
	}]);

	// $('.scroller').slimScroll({
 //        height: '400px'
 //    });

});