describe("Unit Test: Hubs", function () {
    'use strict';
    
    var hubs = require('../../../app/data/hubs');
    var util = require('../unit_util');

    describe("get all hubs", function () {
        
        it("should return two items", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs.should.have.length(2);
                done();
            });
        });

        it("should firts hub is in correct order", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs[0]._id.should.equal(88881);
                done();
            });
        });

        it("should last hub is in correct order", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs[1]._id.should.equal(88882);
                done();
            });
        });

        it("should last hub has two invokes", function (done) {
            hubs.getHubs(function (error, hubs) {
                hubs[1].invokes.should.have.length(2);
                done();
            });
        });

    });

    describe("get hub with name ", function () {

        it("'Hub Test' should return hub with id 99995", function (done) {
            hubs.getHub('Hub Test', function (error, hub) {
                hub._id.should.equal(99995);
                done();
            });
        });

        it("'Hub with Invokes Test' should return two invokes", function (done) {
            hubs.getHub('Hub with Invokes Test', function (error, hub) {
                hub.invokes.should.have.length(2);
                done();
            });
        });

        it("'Not Exist' shouldn't return hubs", function (done) {
            hubs.getHub('Not Exist', function (error, hub) {
                error.error.should.equal("Hub 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("get invokes of service with name", function () {

        it("'Hub with Invokes Test' should return two invokes", function (done) {
            hubs.getInvokes('Hub with Invokes Test', function (error, invokes) {
                invokes.should.have.length(2);
                done();
            });
        });

        it("'Hub Test' should return two invokes", function (done) {
            hubs.getInvokes('Hub Test', function (error, invokes) {
                invokes.should.have.length(0);
                done();
            });
        });

        it("'Not Exist' shouldn't return invokes", function (done) {
            hubs.getInvokes('Not Exist', function (error, invokes) {
                error.error.should.equal("Hub 'Not Exist' doesn't exist");
                done();
            });
        });

    });

});