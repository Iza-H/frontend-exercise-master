describe('Testing TeamInfoCtrl Controller', function() {
    var ctrl, scope;
    beforeEach(module('RacingApp'));

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        var team = {data : [{'teamTest':'Team'}]};
        ctrl = $controller('TeamInfoCtrl', {$scope : scope, Team: team });
    }));

    it('should have a TeamInfoCtrl controlled', function(){
        expect(ctrl).toBeDefined();
    });

    it('should have a Team list with the example value', function(){
        expect(scope.team).toBeDefined();
        expect(scope.team).toEqual({'teamTest':'Team'});
    });



});