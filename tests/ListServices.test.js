/**
 * Created by izabela on 16/06/16.
 */
'use strict';


describe('Testing ListService service', function(){
    var ListServices;


    beforeEach(module('RacingApp'));

    beforeEach(inject(function ( _ListServices_) {
        ListServices= _ListServices_;

    }));

    it ('should have ListService service be defined', function(){
        expect(ListServices).toBeDefined();
    });

    it ('should have a function getPilots', function(){
        expect(angular.isFunction(ListServices.getPilots)).toBe(true);
    });
    it('should getPilots return a promise', function () {
        expect(ListServices.getPilots().then).toBeDefined();
    });


});
