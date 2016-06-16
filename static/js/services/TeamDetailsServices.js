/**
 * Created by izabela on 16/06/16.
 */
'use strict';

angular.module('RacingApp').service('TeamDetailsServices', function($http, Properties){

    this.getTeamDetails = function(id){
        var promise = $http.get( Properties.apiTeamUrl + id + ".json").success(function(data) {
            debugger;
            return data;
        });
        return promise;
    };
});
