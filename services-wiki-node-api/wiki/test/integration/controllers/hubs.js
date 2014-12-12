describe("Integration Test: Controllers - Hubs", function () {
    
    'use strict';    
    
    var request = require('supertest'),
        express = require('express'),
        app = express(),
        hubs = require("../../../app/controllers/hubs");
    
    before(function (done) {
        hubs.init(app);
        done();
    });

    describe("get all hubs", function () {
        
        it("should return status code 200", function (done) {
            request(app)
            .get('/hubs')
            .expect(200, done);
        });
        
        it("should return four items", function (done) {
            request(app)
            .get('/hubs')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);

                result.should.have.length(4); 

                done();
            });
        });
        
    });
    
    describe("get a hub", function () {

        it("by name 'Communications Test' should return status code 200", function (done) {
            request(app)
            .get('/hubs/Communications Test')
            .expect(200, done);
        });
        
        it("by name 'Communications Test' should return service with id 88883", function (done) {
            request(app)
            .get('/hubs/Communications Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.id.should.equal('88883');
                
                done();
            });
        });
        
        it("by name 'Communications Test' should return service with three invokes", function (done) {
            request(app)
            .get('/hubs/Communications Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.invokes.should.have.length(3);
                
                done();
            });
        });
        
        it("with incorrect name should return status code 400", function (done) {
            request(app)
            .get('/hubs/Incorrect')
            .expect(400, done);
        });
        
    });
    
    describe("get invokes of the service", function () {
        
        it("by name 'Communications Test' should return status code 200", function (done) {
            request(app)
            .get('/hubs/Communications Test/invokes')
            .expect(200, done);
        });
        
        it("by name 'Chat Messages Test' should return six invokes", function (done) {
            request(app)
            .get('/hubs/Chat Messages Test/invokes')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.should.have.length(6);
                
                done();
            });
        });
        
        it("with incorrect name should return status code 400", function (done) {
            request(app)
            .get('/hubs/Incorrect/invokes')
            .expect(400, done);
        });
        
    });

});