/**
 * Created by izabela on 16/06/16.
 */
angular.module('RacingApp').controller('TeamInfoCtrl',['$scope','Team', function($scope, Team){
    $scope.team = Team.data[0];

}]);

