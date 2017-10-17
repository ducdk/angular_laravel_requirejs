define([
    'jquery'
    ],function($) {
    var coreModule = angular.module('coreModule');
    coreModule.service('userService',['$http', function($http){

        this.data = [];

        this.setData = function setData(data){
            // console.log(data);
            $.each(data, function(key, value){
                self[key] = value != null ? value:'';
            });
        };

        this.init = function init() {
            var self = this;

            self.getUsers().then(function(successData) {
                $.each(successData.data, function(key, value){
                    self[key] = value != null ? value:'';
                });
            }, function (error) {
                self.status = 'Unable to load fail data: ' + error.message;
            });
        };

        this.getValue = function getValue(key){
            var self = this;
            return self[key];
        };

        this.setValue = function setValue(key, value){
            var self = this;
            self[key] = value;
        };

        this.getUsers = function getUsers() {
            var self = this;
            return $http.get(self.baseUrl + '/api/rest/v1/users');
        };
    }]);
});