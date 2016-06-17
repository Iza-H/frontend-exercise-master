/**
 * Created by izabela on 16/06/16.
 */
'use strict';

angular.module('RacingApp').service('ListServices', function($http, Properties){

    this.getPilots = function(){
        //console.log("Read data");

        var promise = $http.get(Properties.resourcesDataUrl + 'drivers.json', {cache:false}).success(function(data) {
            return data;
        });
        return promise;
    };






});