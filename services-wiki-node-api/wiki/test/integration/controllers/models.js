describe("Integration Test: Controllers - Models", function () {
    'use strict';
    
    var request = require('supertest'),
        express = require('express'),
        app = express(),
        models = require("../../../app/controllers/models");
    
    before(function (done) {
        models.init(app);
        done();
    });

    describe("get all models", function () {
        
        it("by services should return status code 200", function (done) {
            request(app)
            .get('/services/models')
            .expect(200, done);
        });

        it("by services should return nine models", function (done) {
            request(app)
            .get('/services/models')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result.should.have.length(9);

                done();
            });
        });
        
        it("by sockets should return status code 200", function (done) {
            request(app)
            .get('/sockets/models')
            .expect(200, done);
        });

        it("by sockets should return four models", function (done) {
            request(app)
            .get('/sockets/models')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result.should.have.length(4);

                done();
            });
        });

    });

    describe("get models of service by name", function () {

        it("'ConversationModel Test' should return status code 200", function (done) {
            request(app)
            .get('/services/models/ConversationModel Test')
            .expect(200, done);
        });

        it("'ConversationModel Test' should return the same", function (done) {
            request(app)
            .get('/services/models/ConversationModel Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result.name.should.equal('ConversationModel Test');

                done();
            });
        });

        it("'Incorrect Test' should return status code 400", function (done) {
            request(app)
            .get('/services/models/Incorrect Test')
            .expect(400, done);
        });

    });

    describe("get models of socket by name", function () {

        it("'ChatMessage Test' should return status code 200", function (done) {
            request(app)
            .get('/sockets/models/ChatMessage Test')
            .expect(200, done);
        });

        it("'ChatMessage Test' should return the same", function (done) {
            request(app)
            .get('/sockets/models/ChatMessage Test')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result.name.should.equal('ChatMessage Test');

                done();
            });
        });

        it("'Incorrect Test' should return status code 400", function (done) {
            request(app)
            .get('/sockets/models/Incorrect Test')
            .expect(400, done);
        });

    });
    
});