describe("Integration Test: Data - Hubs", function () {
    'use strict';
    
    var hubs = require('../../../app/data/hubs');
    
    describe("get all hubs", function (){

        it("should return two items", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs.should.have.length(4);
                done();
            });
        });

        it("should return in first position the hub with id 88882", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs[0]._id.should.equal('88882');
                done();
            });
        });

        it("should return in last position the hub with id 88885", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs[3]._id.should.equal('88885');
                done();
            });
        });

        it("should return hub with three invokes", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs[1].invokes.should.have.length(3);
                done();
            });
        });

    });

    describe("get a hub", function () {

        it("by name 'Communications Test' should return the same with id 88883", function (done) {
            hubs.getHub('Communications Test', function (error, hub) {
                hub._id.should.have.equal('88883');
                done();
            });
        });

        it("by name 'Communications Test' should return the same with three invokes", function (done) {
            hubs.getHub('Communications Test', function (error, hub) {
                hub.invokes.should.have.length(3);
                done();
            });
        });

        it("by name 'Not Exist' shouldn't return a hub but a error message", function (done) {
            hubs.getHub('Not Exist', function (error, hub) {
                error.error.should.equal("Hub 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("get invokes of the hub", function () {

        it("by name 'Communications Test' should return three invokes", function (done) {
            hubs.getInvokes('Communications Test', function (error, invokes) {
                invokes.should.have.length(3);
                done();
            });
        });

        it("by name 'Fake 1 Test' shouldn't return verbs HTTP", function (done) {
            hubs.getInvokes('Fake 1 Test', function (error, invokes) {
                invokes.should.have.length(0);
                done();
            });
        });

        it("by name 'Not Exist' shouldn't return verbs HTTP but a error message", function (done) {
            hubs.getInvokes('Not Exist', function (error, invokes) {
                error.error.should.equal("Hub 'Not Exist' doesn't exist");
                done();
            });
        });

    });
    
});