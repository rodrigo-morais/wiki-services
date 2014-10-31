﻿describe("Integration Test: Controllers - Menus", function () {
    'use strict';
    
    var request = require('supertest'),
        express = require('express'),
        app = express(),
        hubs = require("../../../app/controllers/menus");
    
    before(function (done) {
        hubs.init(app);
        done();
    });

    describe("get menus", function () {
        
        it("should return status code 200", function (done) {
            request(app)
            .get('/menus')
            .expect(200, done);
        });
        
        it("should return two items", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                
                var result = JSON.parse(res.text);

                result.should.have.length(2); 

                done();
            });
        });

        it("should return two items", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result.should.have.length(2);

                done();
            });
        });

        it("should return five services in tree", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus.should.have.length(6);

                done();
            });
        });

        it("should return services orderned in tree of menus where first menus is 'Carros Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus[0].name.should.equal('Carros Test');

                done();
            });
        });

        it("should return services orderned in tree of menus where last menus is 'Pessoas Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus[4].name.should.equal('Pessoas Test');

                done();
            });
        });

        it("should return four hubs in tree", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus.should.have.length(5);

                done();
            });
        });
        
        it("should return hubs orderned in tree of menus where first menus is 'Chat Messages Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus[0].name.should.equal('Chat Messages Test');

                done();
            });
        });

        it("should return hubs orderned in tree of menus where last menus is 'Fake 2 Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus[3].name.should.equal('Fake 2 Test');

                done();
            });
        });
        
        it("should return services models in tree of menus", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus[5].type.should.equal('models');

                done();
            });
        });

        it("should return nine services models in tree", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus[5].submenus.should.have.length(9);

                done();
            });
        });

        it("should return services models orderned in tree of menus where first menus is 'ActionModel Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus[5].submenus[0].name.should.equal('ActionModel Test');

                done();
            });
        });

        it("should return services models orderned in tree of menus where last menus is 'StripeModel Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[0].submenus[5].submenus[8].name.should.equal('StripeModel Test');

                done();
            });
        });
        
        it("should return hubs models in tree of menus", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus[4].type.should.equal('models');

                done();
            });
        });

        it("should return four hubs models in tree", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus[4].submenus.should.have.length(4);

                done();
            });
        });

        it("should return hubs models orderned in tree of menus where first menus is 'ChatMessage Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus[4].submenus[0].name.should.equal('ChatMessage Test');

                done();
            });
        });

        it("should return hubs models orderned in tree of menus where last menus is 'People Test'", function (done) {
            request(app)
            .get('/menus')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = JSON.parse(res.text);

                result[1].submenus[4].submenus[3].name.should.equal('People Test');

                done();
            });
        });
        
    });

});