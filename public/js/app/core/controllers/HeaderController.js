define([
	'core/model/app'
	],function(App) {
	var coreModule = angular.module('coreModule');

	coreModule.controller('HeaderController', ['$scope', function($scope){
		console.log(App);
		$scope.openQuickSidebar= function() {
			App.quickSideBar = 'true';
			App.openQuickSidebar();
		}
	}]);
});