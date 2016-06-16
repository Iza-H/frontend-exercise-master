/**
 * Created by izabela on 16/06/16.
 */
angular.module('RacingApp').controller('ListCtr',['$scope', 'Pilots','$location',  function($scope, Pilots, $location){
    $scope.pilots = Pilots.data;

    $scope.showTeamDetails = function(idTeam){
        $location.path("/details/" + idTeam);
    }
}]);