define([
	'jquery',
    'jquery-slimscroll'
	],function($, slimScroll){
       console.log(slimScroll);
	var App = {

        quickSideBar: "",
        _token: "",


        init: function() {
        	var self = this;
        	self.quickSideBar = 'false';
        	return self;
        },

        openQuickSidebar: function() {
        	var self = this;
        	// console.log(self.quickSideBar);
        	if(self.quickSideBar == 'true'){
        		$('.page-quick-sidebar-wrapper').css({'right': 0});
				$('.over-back').show();
                // $('#quick-sidebar-slim').slimScroll({
                //     height: '100vh'
                // });
        	}
        	
        },
        closeQuickSidebar: function() {
        	var self = this;
        	// console.log(self.quickSideBar);
        	if(self.quickSideBar == 'false'){
	        	$('.page-quick-sidebar-wrapper').css({'right': -320});
				$('.over-back').hide();
			}
        },
        openNavItem: function(target) {
        	var par = $(target).parent();
        	par.children('.sub-menu').toggle();
        	$(target).children('.arrow').toggleClass('open');
        }
    }
    return App.init();
});