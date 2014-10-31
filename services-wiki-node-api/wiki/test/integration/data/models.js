describe("Integration Test: Data - Models", function () {
    'use strict';
    
    var models = require('../../../app/data/models');
    
    describe("get all models with type service", function () {

        it("should return nine items", function (done) {
            models.getModelsByServices(function (error, models) {
                models.should.have.length(9);
                done();
            });
        });

        it("should firts model is in correct order", function (done) {
            models.getModelsByServices(function (error, models) {
                models[0].name.should.equal('ActionModel Test');
                done();
            });
        });

        it("should last model is in correct order", function (done) {
            models.getModelsByServices(function (error, models) {
                models[8].name.should.equal('StripeModel Test');
                done();
            });
        });

        it("should last model has seven properties", function (done) {
            models.getModelsByServices(function (error, models) {
                models[8].properties.should.have.length(7);
                done();
            });
        });

    });

    describe("get all models with type service and name", function () {

        it("'ActionModel Test' should return model", function (done) {
            models.getModelByServices('ActionModel Test', function (error, model) {
                model.name.should.equal('ActionModel Test');
                done();
            });
        });

        it("'Not Exist' shouldn't return model but a message", function (done) {
            models.getModelByServices('Not Exist', function (error, model) {
                error.error.should.equal("Model 'Not Exist' doesn't exist for services.");
                done();
            });
        });

    });

    describe("get all models with type hub", function () {

        it("should return four items", function (done) {
            models.getModelsByHubs(function (error, models) {
                models.should.have.length(4);
                done();
            });
        });

        it("should firts model is in correct order", function (done) {
            models.getModelsByHubs(function (error, models) {
                models[0].name.should.equal('ChatMessage Test');
                done();
            });
        });

        it("should last model is in correct order", function (done) {
            models.getModelsByHubs(function (error, models) {
                models[3].name.should.equal('People Test');
                done();
            });
        });

        it("should last model has three properties", function (done) {
            models.getModelsByHubs(function (error, models) {
                models[3].properties.should.have.length(3);
                done();
            });
        });

    });

    describe("get all models with type hub and name", function () {

        it("'Group Test' should return model", function (done) {
            models.getModelByHubs('Group Test', function (error, model) {
                model.name.should.equal('Group Test');
                done();
            });
        });

        it("'Not Exist' shouldn't return model but a message", function (done) {
            models.getModelByHubs('Not Exist', function (error, model) {
                error.error.should.equal("Model 'Not Exist' doesn't exist for hubs.");
                done();
            });
        });

    });
    
});