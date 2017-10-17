define([
	'jquery'
	],function($){
	var buildUrl = {

        token: "",
        baseUrl: window.location.pathname,
        guard: "api",
        method: "rest",
        version: "v1",

        bindParams: function(url) {
            var self = this;
            var params = {};
            params.baseUrl = self.baseUrl;
            params.guard = self.guard;
            params.method = self.method;
            params.version = self.version;
            params.url = url;
            var part = '';
            $.each(params, function(key, value){
                part += value;
                if(value != undefined && key != 'guard') {
                    part+="/";
                }
            });
            part +="?token="+this.token;
            return part;
        },
        
    }
    return buildUrl;
});