/**
 * Created by izabela on 16/06/16.
 */
angular.module('RacingApp').controller('ListCtr',['$scope', 'Pilots','$location', 'ListServices','$interval',  function($scope, Pilots, $location,ListServices, $interval){
    $scope.pilots = Pilots.data;

    //Change the location:
    $scope.showTeamDetails = function(idTeam){
        $location.path('/details/' + idTeam);
    };

    //Refresh of the data:
    $interval( function(){  ListServices.getPilots().success(function(data) {
        $scope.pilots = data;
    }); }, 3000);

}]);