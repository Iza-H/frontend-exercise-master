var racingApp = angular.module('RacingApp', ['ngRoute']);

racingApp.config(['$routeProvider', function($routeProvider, ListServices){
    $routeProvider.
        //route to the part which presents all information:
        when('/list', {
            templateUrl : 'static/views/List.html',
            controller: 'ListCtr',
            resolve: {
                Pilots : ['ListServices', function(ListServices){
                    return ListServices.getPilots();
                }]


            }

        }).

        when('/details/:idTeam',{
            templateUrl: 'static/views/Details.html',
            controller: "TeamInfoCtrl",
            resolve:{
                //Albums: ['AlbumsProvider', function(AlbumsProvider){
                //    return AlbumsProvider.getAlbums();
                //}],
                Id:[ "$route", function($route){
                    return $route.current.params.idTeam;
                }
                ]
            }

        }).

        otherwise({
            redirectTo:'/list',
        });




}]);