describe("Integration Test: Controllers - Sockets", function () {
    
    'use strict';    
    
    var request = require('supertest'),
        express = require('express'),
        app = express(),
        sockets = require("../../../app/controllers/sockets");
    
    before(function (done) {
        sockets.init(app);
        done();
    });

    describe("get all sockets", function () {
        
        it("should return status code 200", function (done) {
            request(app)
            .get('/sockets')
            .expect(200, done);
        });
        
        it("should return four items", function (done) {
            request(app)
            .get('/sockets')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);

                result.should.have.length(4); 

                done();
            });
        });
        
    });
    
    describe("get a socket", function () {

        it("by name 'Communications Test' should return status code 200", function (done) {
            request(app)
            .get('/sockets/Communications Test')
            .expect(200, done);
        });
        
        it("by name 'Communications Test' should return service with id 88883", function (done) {
            request(app)
            .get('/sockets/Communications Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.id.should.equal('88883');
                
                done();
            });
        });
        
        it("by name 'Communications Test' should return service with three messages", function (done) {
            request(app)
            .get('/sockets/Communications Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.messages.should.have.length(3);
                
                done();
            });
        });
        
        it("with incorrect name should return status code 400", function (done) {
            request(app)
            .get('/sockets/Incorrect')
            .expect(400, done);
        });
        
    });
    
    describe("get messages of the service", function () {
        
        it("by name 'Communications Test' should return status code 200", function (done) {
            request(app)
            .get('/sockets/Communications Test/messages')
            .expect(200, done);
        });
        
        it("by name 'Chat Messages Test' should return six messages", function (done) {
            request(app)
            .get('/sockets/Chat Messages Test/messages')
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
            .get('/sockets/Incorrect/messages')
            .expect(400, done);
        });
        
    });

    describe("get Message", function () {
        
        it("of the socket by name 'Communications Test' and message with id 7 should return status code 200", function (done) {
            request(app)
            .get('/sockets/Communications Test/messages/7')
            .expect(200, done);
        });
        
        it("of the socket by name 'Communications Test' and message with id 7 should return message with id 7", function (done) {
            request(app)
            .get('/sockets/Communications Test/messages/7')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);
                
                result.id.should.equal(7);
                
                done();
            });
        });

        it("of the socket by name 'Communications Test' and message with id incorrect should return status code 400", function (done) {
            request(app)
            .get('/sockets/Communications Test/messages/9999')
            .expect(400, done);
        });

    });

});