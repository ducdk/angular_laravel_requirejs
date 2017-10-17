define([
	'jquery',
	'core/model/app'
	],function($, App) {
	var coreModule = angular.module('coreModule');
	coreModule.controller('SidebarController', ['$scope', function($scope){
		$scope.openNavItem = function() {
			App.openNavItem(event.target);
		}
	}]);
});