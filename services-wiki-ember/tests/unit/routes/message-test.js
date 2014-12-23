import { test, moduleFor } from 'ember-qunit';
import messageStore from '../../adapters/message-fixture';

moduleFor('route:message', "Unit - MessageRoute", {
    setup: function () {
        this.subject().set('store', messageStore.store);    
    },
    teardown: function () {}
});

test("message route exists", function(){
    ok(this.subject());
});

test("return message data", function(){
    this.subject().model({'socket_id': 'Communication', 'message_id': 7}).then(function(result){
        equal(Object.keys(result)[0], 'message');
    });
});

test("verify message", function(){
    this.subject().model({'socket_id': 'Communication', 'message_id': 7}).then(function(result){
        equal(result['message'].name, 'sendCommunication');
    });
});


test("verify events exist in message", function(){
    this.subject().model({'socket_id': 'Communication', 'message_id': 7}).then(function(result){
        ok(result['message'].events.length > 0);
    });
});

test("verify message contains two events", function(){
    this.subject().model({'socket_id': 'Communication', 'message_id': 7}).then(function(result){
        equal(result['message'].events.length, 2);
    });
});

test("verify parameters exist in invoke", function(){
    this.subject().model({'hub_id': 'Communication', 'invoke_id': 7}).then(function(result){
        ok(result['message'].parameters.length > 0);
    });
});

test("verify message contains one parameter", function(){
    this.subject().model({'socket_id': 'Communication', 'message_id': 7}).then(function(result){
        equal(result['message'].parameters.length, 1);
    });
});
