/**
 * Created by izabela on 16/06/16.
 */
'use strict';

angular.module('RacingApp').service('ListServices', function($http, Properties){

    this.getPilots = function(){
        var promise = $http.get(Properties.resourcesDataUrl + "drivers.json").success(function(data) {
            return data;
        });
        return promise;
    };
});