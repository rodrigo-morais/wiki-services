import { test, moduleFor } from 'ember-qunit';
import modelsStore from '../../adapters/models-fixture';

moduleFor('route:services-models', "Unit - ServicesModelsRoute", {
    setup: function () {
        this.subject().set('store', modelsStore.store);    
    },
    teardown: function () {}
});

test("ServicesModels route exists", function(){
    ok(this.subject());
});

test("return serviceModel data", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(Object.keys(result)[0], 'model');
    });
});

test("verify serviceModel name", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(result['model'].name, 'ActionModel');
    });
});

test("verify serviceModel type", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(result['model'].type, 'service');
    });
});

test("verify if serviceModel contains properties", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        ok(result['model'].properties.length > 0);
    });
});

test("verify if exist two properties in serviceModel", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(result['model'].properties.length, 2);
    });
});

test("verify if serviceModel contain json property", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        ok(result['model'].json.length > 0);
    });
});

test("verify if serviceModel contain json property as object", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        var jsonObj = JSON.parse(result['model'].json);
        equal(typeof jsonObj, 'object');
    });
});