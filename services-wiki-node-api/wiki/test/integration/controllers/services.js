describe("Integration Test: Controllers - Services", function () {
    'use strict';    
    
    var request = require('supertest'),
        express = require('express'),
        app = express(),
        services = require("../../../app/controllers/services");
    
    before(function (done) {
        services.init(app);
        done();
    });

    describe("get all services", function () {
        
        it("should return status code 200", function (done) {
            request(app)
            .get('/services')
            .expect(200, done);
        });

        it("should return five items", function (done) {
            request(app)
            .get('/services')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);

                result.should.have.length(5); 

                done();
            });
        });

    });

    describe("get a service", function () {
        
        it("by name 'Conversas Test' should return status code 200", function (done) {
            request(app)
            .get('/services/Conversas Test')
            .expect(200, done);
        });

        it("by name 'Conversas Test' should return service with id 10", function (done) {
            request(app)
            .get('/services/Conversas Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.id.should.equal('211');
                
                done();
            });
        });

        it("by name 'Conversas Test' should return service with five verbs HTTP", function (done) {
            request(app)
            .get('/services/Conversas Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.httpVerbs.should.have.length(5);
                
                done();
            });
        });

        it("with incorrect name should return status code 400", function (done) {
            request(app)
            .get('/services/Incorrect')
            .expect(400, done);
        });

    });

    describe("get HTTP verbs of the service", function () {
        
        it("by name 'Conversas Test' should return status code 200", function (done) {
            request(app)
            .get('/services/Conversas Test/httpVerbs')
            .expect(200, done);
        });

        it("by name 'Conversas Test' should return five verbs HTTP", function (done) {
            request(app)
            .get('/services/Conversas Test/httpVerbs')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.should.have.length(5);
                
                done();
            });
        });

        it("with incorrect name should return status code 400", function (done) {
            request(app)
            .get('/services/Incorrect/httpVerbs')
            .expect(400, done);
        });

    });

    describe("get HTTP verb", function () {
        
        it("of the service by name 'Conversas Test' and HTTP verb with id 4 should return status code 200", function (done) {
            request(app)
            .get('/services/Conversas Test/httpVerbs/4')
            .expect(200, done);
        });
        
        it("by name 'Conversas Test' and HTTP verb with id 4 should return HTTP verb with id 4", function (done) {
            request(app)
            .get('/services/Conversas Test/httpVerbs/4')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.id.should.equal(4);
                
                done();
            });
        });

        it("of the service by name 'Conversas Test' and HTTP verb with id incorrect should return status code 400", function (done) {
            request(app)
            .get('/services/Conversas Test/httpVerbs/9999')
            .expect(400, done);
        });

    });

});