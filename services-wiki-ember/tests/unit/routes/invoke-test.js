import { test, moduleFor } from 'ember-qunit';
import invokeStore from '../../adapters/invoke-fixture';

moduleFor('route:invoke', "Unit - InvokeRoute", {
    setup: function () {
        this.subject().set('store', invokeStore.store);    
    },
    teardown: function () {}
});

test("invoke route exists", function(){
    ok(this.subject());
});

test("return invoke data", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        equal(Object.keys(result)[0], 'invoke');
    });
});

test("verify invoke", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        equal(result['invoke'].name, 'sendCommunication');
    });
});


test("verify ons exist in invoke", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        ok(result['invoke'].ons.length > 0);
    });
});

test("verify invoke contains two ons", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        equal(result['invoke'].ons.length, 2);
    });
});

test("verify parameters exist in invoke", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        ok(result['invoke'].parameters.length > 0);
    });
});

test("verify invoke contains one parameter", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        equal(result['invoke'].parameters.length, 1);
    });
});
