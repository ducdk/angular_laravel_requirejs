define([
    'jquery',
    'core/model/resource/buildUrl',
    ],function($, buildUrl) {
    var coreModule = angular.module('coreModule');
    coreModule.service('jokeService',['$http', function($http){

        this.total = "1";
        this.current_page = "";
        this.last_page = "";
        this.per_page = "";
        this.next_page_url = "";
        this.prev_page_url = "";
        this.from = "";
        this.to = "";
        this.status = "";
        this.data = [];

        this.setData = function setData(data){
            // console.log(data);
            $.each(data, function(key, value){
                self[key] = value != null ? value:'';
            });
        };

        this.init = function init() {
            var self = this;

            self.getJokes().then(function(successData) {
                $.each(successData.data, function(key, value){
                    self[key] = value != null ? value:'';
                });
            }, function (error) {
                self.status = 'Unable to load fail data: ' + error.message;
            });
        };

        this.getValue = function getValue(key){
            var self = this;
            console.log(self[key]);
            console.log(self);
            return self[key];
        };

        this.setValue = function setValue(key, value){
            var self = this;
            self[key] = value;
        };

        this.getJokes = function getJokes() {
            var self = this;
            console.log(buildUrl.bindParams('jokes'));
            return $http.get(self.baseUrl + '/api/rest/v1/jokes');
        };

        this.nextPage = function nextPage() {
            var self = this;

            $http.get(self.next_page_url).then(function(successData) {
                $.each(successData.data, function(key, value){
                    self[key] = value != null ? value:'';
                });
            }, function (error) {
                self.status = 'Unable to load fail data: ' + error.message;
            });
        };

        this.prevPage = function prevPage() {
            var self = this;

            $http.get(self.prev_page_url).then(function(successData) {
                $.each(successData.data, function(key, value){
                    self[key] = value != null ? value:'';
                });
            }, function (error) {
                self.status = 'Unable to load fail data: ' + error.message;
            });
        };
    }]);
});