import { test, moduleFor } from 'ember-qunit';
import servicesModelsStore from '../../adapters/services-models-fixture';

moduleFor('route:services-models', "Unit - ServicesModelsRoute", {
    setup: function () {
        this.subject().set('store', servicesModelsStore.store);    
    },
    teardown: function () {}
});

test("servicesModels route exists", function(){
    ok(this.subject());
});

test("return serviceModel data", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(Object.keys(result)[0], 'serviceModel');
    });
});

test("verify serviceModel name", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(result['serviceModel'].name, 'ActionModel');
    });
});

test("verify serviceModel type", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(result['serviceModel'].type, 'service');
    });
});

test("verify if serviceModel contains properties", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        ok(result['serviceModel'].properties.length > 0);
    });
});

test("verify if exist two properties in serviceModel", function(){
    this.subject().model({'model_id': 'ActionModel'}).then(function(result){
        equal(result['serviceModel'].properties.length, 2);
    });
});
