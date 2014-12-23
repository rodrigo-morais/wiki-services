import { test, moduleFor } from 'ember-qunit';
import modelsStore from '../../adapters/models-fixture';

moduleFor('route:sockets-models', "Unit - SocketsModelsRoute", {
    setup: function () {
        this.subject().set('store', modelsStore.store);    
    },
    teardown: function () {}
});

test("SocketsModels route exists", function(){
    ok(this.subject());
});

test("return socketModel data", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(Object.keys(result)[0], 'model');
    });
});

test("verify socketModel name", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(result['model'].name, 'ChatMessage');
    });
});

test("verify socketModel type", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(result['model'].type, 'socket');
    });
});

test("verify if socketModel contains properties", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        ok(result['model'].properties.length > 0);
    });
});

test("verify if exist two properties in socketModel", function(){
    this.subject().model({'model_id': 'ChatMessage'}).then(function(result){
        equal(result['model'].properties.length, 4);
    });
});