/**
 * Created by izabela on 16/06/16.
 */
angular.module('RacingApp').directive('pilotElement', function(){
    return{
        restrict : 'EA',
        templateUrl : 'static/views/TeamInfo.html',
        scope:{
            pilot : '=',
            onDriverClick : '&'
        },
        link: function(scope){
            scope.driverClick = function(){
                scope.onDriverClick({idTeam:scope.pilot.team});
            };
        }
    };
});