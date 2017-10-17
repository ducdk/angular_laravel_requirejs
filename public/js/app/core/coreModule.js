define([
	'core/runners/logRunner',
	'core/module/module',
	'core/routes',
	],function(logRunner, module, Route){
		var coreModule = module;

		require([
			'core/directiveReferences'
			], function(references){
				require(references, function(){
					// angular.bootstrap(document, ['coreModule']);
				});
			});
		
		require([
			'core/controllerReferences'
			], function(references){
				require(references, function(){
					angular.bootstrap(document, ['coreModule']);
				});
			});

		// require([
		// 	'core/directiveReferences'
		// 	], function(references){
		// 		require(references, function(){
		// 			// angular.bootstrap(document, ['coreModule']);
		// 		});
		// 	});

		// coreModule.directive('mainContent', function() {
		// 	return {
		// 		restrict: 'ACEM',
		// 		templateUrl: 'public/js/app/core/views/directives/mainContent.html',
		// 		replace: true,
		// 		scope: true
		// 	}
		// });
		// console.log(logRunner);
	// check init 
	// coreModule.run(['$log', function($log){
	// 	$log.info('Initialized the core Module');
	// }]);
});