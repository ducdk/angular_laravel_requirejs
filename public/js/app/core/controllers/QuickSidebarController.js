define([
	'jquery',
	'core/model/app',
	'core/model/services/userService',
	'jquery-slimscroll',
	],function($, App, userService) {
	var coreModule = angular.module('coreModule');
	coreModule.controller('QuickSidebarController', ['$scope','userService', function($scope, userService){
		
		userService.init();
		$scope.users = userService;

		$scope.closeQuickSidebar= function() {
			App.quickSideBar = 'false';
			App.closeQuickSidebar();
		}
	}]);
});