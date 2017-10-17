define(function(){
	var coreModule = angular.module('coreModule',['themeModule','ngRoute'], function($interpolateProvider) {
		// $interpolateProvider.startSymbol('<%');
		// $interpolateProvider.endSymbol('%>');
	});
	return coreModule;
});