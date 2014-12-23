import { test, moduleFor } from 'ember-qunit';
import socketsStore from '../../adapters/sockets-fixture';

moduleFor('route:sockets', "Unit - SocketsRoute", {
    setup: function () {
        this.subject().set('store', socketsStore.store);    
    },
    teardown: function () {}
});

test("sockets route exists", function(){
    ok(this.subject());
});

test("return socket data", function(){
    this.subject().model({'socket_id': 'Communication'}).then(function(result){
        equal(Object.keys(result)[0], 'socket');
    });
});

test("verify socket name", function(){
    this.subject().model({'socket_id': 'Communication'}).then(function(result){
        equal(result['socket'].name, 'Communication');
    });
});


test("verify if socket contains messages", function(){
    this.subject().model({'socket_id': 'Communication'}).then(function(result){
        ok(result['socket'].messages.length > 0);
    });
});

test("verify if exist three messages in socket", function(){
    this.subject().model({'socket_id': 'Communication'}).then(function(result){
        equal(result['socket'].messages.length, 3);
    });
});