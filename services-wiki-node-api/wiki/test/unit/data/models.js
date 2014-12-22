describe("Unit Test: Models", function () {
    'use strict';
    
    var models = require('../../../app/data/models');
    var util = require('../unit_util');

    describe("get all models with type service", function () {
        
        it("should return two items", function (done) {
            models.getModelsByServices(function (error, models) {
                models.should.have.length(2);
                done();
            });
        });
        
        it("should firts model is in correct order", function (done) {
            models.getModelsByServices(function (error, models) {
                models[0].name.should.equal('Communication');
                done();
            });
        });
        
        it("should last model is in correct order", function (done) {
            models.getModelsByServices(function (error, models) {
                models[1].name.should.equal('Integration');
                done();
            });
        });
        
        it("should last model has two properties", function (done) {
            models.getModelsByServices(function (error, models) {
                models[1].properties.should.have.length(2);
                done();
            });
        });
        
    });

    describe("get all models with type service and name", function () {

        it("'Communication' should return model", function (done) {
            models.getModelByServices('Communication', function (error, model) {
                model.name.should.equal('Communication');
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

    describe("get all models with type socket", function () {

        it("should return four items", function (done) {
            models.getModelsBySockets(function (error, models) {
                models.should.have.length(4);
                done();
            });
        });

        it("should firts model is in correct order", function (done) {
            models.getModelsBySockets(function (error, models) {
                models[0].name.should.equal('A model');
                done();
            });
        });

        it("should last model is in correct order", function (done) {
            models.getModelsBySockets(function (error, models) {
                models[3].name.should.equal('Z model');
                done();
            });
        });

        it("should last model has two properties", function (done) {
            models.getModelsBySockets(function (error, models) {
                models[2].properties.should.have.length(2);
                done();
            });
        });

    });

    describe("get all models with type socket and name", function () {

        it("'B model' should return model", function (done) {
            models.getModelBySockets('B model', function (error, model) {
                model.name.should.equal('B model');
                done();
            });
        });

        it("'Not Exist' shouldn't return model but a message", function (done) {
            models.getModelBySockets('Not Exist', function (error, model) {
                error.error.should.equal("Model 'Not Exist' doesn't exist for sockets.");
                done();
            });
        });

    });

});