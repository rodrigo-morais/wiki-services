import { test, moduleFor } from 'ember-qunit';
import modelsStore from '../../adapters/models-fixture';

moduleFor('route:hubs-models', "Unit - HubsModelsRoute", {
    setup: function () {
        this.subject().set('store', modelsStore.store);    
    },
    teardown: function () {}
});

test("HubsModels route exists", function(){
    ok(this.subject());
});

test("return hubModel data", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(Object.keys(result)[0], 'model');
    });
});

test("verify hubModel name", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(result['model'].name, 'ChatMessage');
    });
});

test("verify hubModel type", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(result['model'].type, 'hub');
    });
});

test("verify if hubModel contains properties", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        ok(result['model'].properties.length > 0);
    });
});

test("verify if exist two properties in hubModel", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(result['model'].properties.length, 4);
    });
});