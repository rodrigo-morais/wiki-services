describe("Integration Test: Data - Services", function () {
    'use strict';
    
    var services = require('../../../app/data/services');
    
    describe("get all services", function (){

        it("should return five items", function (done) {
            services.getServices(function (error, services) {
                services.should.have.length(5);
                done();
            });
        });

        it("should return in first position the service with id 211", function (done) {
            services.getServices(function (error, services) {
                services[0]._id.should.equal(211);
                done();
            });
        });

        it("should return in last position the service with id 215", function (done) {
            services.getServices(function (error, services) {
                services[4]._id.should.equal(215);
                done();
            });
        });

        it("should return service with five verbs HTTP", function (done) {
            services.getServices(function (error, services) {
                services[0].httpVerbs.should.have.length(5);
                done();
            });
        });

    });

    describe("get a service", function () {
        
        it("by name 'Communications Test' should return the same with id 213", function (done) {
            services.getService('Communications Test', function (error, service) {
                service._id.should.have.equal(213);
                done();
            });
        });

        it("by name 'Communications Test' should return the same with tree verbs HTTP", function (done) {
            services.getService('Communications Test', function (error, service) {
                service.httpVerbs.should.have.length(3);
                done();
            });
        });
        
        it("by name 'Not Exist' shouldn't return a service but a error message", function (done) {
            services.getService('Not Exist', function (error, service) {
                error.error.should.equal("Service 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("get verbs HTTP of the service", function () {
        
        it("by name 'Communications Test' should return three verbs HTTP", function (done) {
            services.getHttpVerbs('Communications Test', function (error, httpVerbs) {
                httpVerbs.should.have.length(3);
                done();
            });
        });
        
        it("by name 'Carros Test' shouldn't return verbs HTTP", function (done) {
            services.getHttpVerbs('Carros Test', function (error, httpVerbs) {
                httpVerbs.should.have.length(0);
                done();
            });
        });
        
        it("by name 'Not Exist' shouldn't return verbs HTTP but a error message", function (done) {
            services.getHttpVerbs('Not Exist', function (error, httpVerbs) {
                error.error.should.equal("Service 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("get a verb HTTP", function () {
        
        it("of the service by name 'Communications Test' and verb by id 10 should return a verb with id 10", function (done) {
            services.getHttpVerb('Communications Test', '10', function (error, httpVerb) {
                httpVerb._id.should.equal(10);
                done();
            });
        });

        it("of the service by name 'Communications Test' and verb with incorrect id shouldn't return a verb but a error message", function (done) {
            services.getHttpVerb('Communications Test', '101', function (error, httpVerb) {
                error.error.should.equal("Service 'Communications Test' doesn't have HTTP verb '101'");
                done();
            });
        });

    });
});