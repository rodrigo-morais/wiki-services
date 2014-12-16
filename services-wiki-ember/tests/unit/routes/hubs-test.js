import { test, moduleFor } from 'ember-qunit';
import hubsStore from '../../adapters/hubs-fixture';

moduleFor('route:hubs', "Unit - HubsRoute", {
    setup: function () {
        this.subject().set('store', hubsStore.store);    
    },
    teardown: function () {}
});

test("hubs route exists", function(){
    ok(this.subject());
});

test("return hub data", function(){
    this.subject().model({'hub_id': 'Communication'}).then(function(result){
        equal(Object.keys(result)[0], 'hub');
    });
});

test("verify hub name", function(){
    this.subject().model({'hub_id': 'Communication'}).then(function(result){
        equal(result['hub'].name, 'Communication');
    });
});


test("verify if hub contains invokes", function(){
    this.subject().model({'hub_id': 'Communication'}).then(function(result){
        ok(result['hub'].invokes.length > 0);
    });
});

test("verify if exist three invokes in hub", function(){
    this.subject().model({'hub_id': 'Communication'}).then(function(result){
        equal(result['hub'].invokes.length, 3);
    });
});