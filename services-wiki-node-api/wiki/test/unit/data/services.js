describe("Unit Test: Services", function () {
    'use strict';
    
    var services = require('../../../app/data/services');
    var util = require('../unit_util');
    
    describe("getServices", function () {
        
        it("verify quantity of services return", function (done) {
            services.getServices(function (error, services) {
                services.should.have.length(3);
                done();
            });
        });

        it("verify if first service is in correct order", function (done) {
            services.getServices(function (error, services) {
                services[0].id.should.equal(99991);
                done();
            });
        });
        
        it("verify if last service is in correct order", function (done) {
            services.getServices(function (error, services) {
                services[2].id.should.equal(99993);
                done();
            });
        });
        
        it("verify if service has verbs Http", function (done) {
            services.getServices(function (error, services) {
                services[0].httpVerbs.should.have.length(2);
                done();
            });
        });

    });

    describe("getService", function () {
        
        it("find service by name", function (done) {
            services.getService('Test', function (error, service) {
                service._id.should.equal(99991);
                done();
            });
        });
        
        it("find service by id", function (done) {
            services.getService(99992, function (error, service) {
                service._id.should.equal(99992);
                done();
            });
        });
        
        it("find service with verbs HTTP by name", function (done) {
            services.getService('Test', function (error, service) {
                service.httpVerbs.should.have.length(3);
                done();
            });
        });
        
        it("find service with verbs HTTP by id", function (done) {
            services.getService(99991, function (error, service) {
                service.httpVerbs.should.have.length(3);
                done();
            });
        });

        it("not exist service with name 'Not Exist'", function (done) {
            services.getService('Not Exist', function(error, service) {
                error.error.should.equal("Service 'Not Exist' doesn't exist");
                done();
            });
        });

        it("not exist service with id 99993", function (done) {
            services.getService(99993, function (error, service) {
                error.error.should.equal("Service '99993' doesn't exist");
                done();
            });
        });

    });

    describe("getHttpServices", function () {
        
        it("find verbs HTTP for service by name", function (done) {
            services.getHttpVerbs('Verbs', function (error, httpVerbs) {
                httpVerbs.should.have.length(3);
                done();
            });
        });

        it("not exist verbs HTTP for service with name 'Not Verbs'", function (done) {
            services.getHttpVerbs('Not Verbs', function (error, httpVerbs) {
                httpVerbs.should.have.length(0);
                done();
            });
        });

        it("not exist service with name 'Not Exist'", function (done) {
            services.getHttpVerbs('Not Exist', function (error, httpVerbs) {
                error.error.should.equal("Service 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("getHttpService", function () {
        
        it("find verb HTTP for service by name and id", function (done) {
            services.getHttpVerb('Verbs', '3', function (error, httpVerb) {
                httpVerb.id.should.equal(3);
                done();
            });
        });
        
        it("when id incorrect verb HTTP doesn't exist for service by name and id", function (done) {
            services.getHttpVerb('Verbs', '101', function (error, httpVerb) {
                error.error.should.equal("Service 'Verbs' doesn't have HTTP verb '101'");
                done();
            });
        });

    });
});