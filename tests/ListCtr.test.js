'use strict';


describe('Testing ListCtr Controller', function() {
    var ctrl, scope, location;
    beforeEach(module('RacingApp'));

    beforeEach(inject(function($controller, $rootScope, _$location_, _$httpBackend_){
        scope = $rootScope.$new();
        location = _$location_;
        httpBackend = _$httpBackend_;
        var pilot = {data : 'Pilot'};

        ctrl = $controller('ListCtr', {$scope : scope, Pilots: pilot, $location : location});
    }));

    it('should have a ListCtr controlled', function(){
        expect(ctrl).toBeDefined();
    });

    it('should have a Pilot list with the example element', function(){
        expect(scope.pilots).toBeDefined();
        expect(scope.pilots).toEqual('Pilot');
    });

    it('should change location when setting it via show function', inject(function() {
        spyOn(location, 'path');
        scope.showTeamDetails(1);
        expect(location.path).toHaveBeenCalledWith('/details/1');

        scope.showTeamDetails(5);
        expect(location.path).toHaveBeenCalledWith('/details/5');
    }));



});