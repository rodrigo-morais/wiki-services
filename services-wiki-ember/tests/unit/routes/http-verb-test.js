import { test, moduleFor } from 'ember-qunit';
import httpVerbStore from '../../adapters/http-verb-fixture';

moduleFor('route:http-verb', "Unit - HttpVerbRoute", {
    setup: function () {
        this.subject().set('store', httpVerbStore.store);    
    },
    teardown: function () {}
});

test("verb HTTP route exists", function(){
    ok(this.subject());
});

test("return verb HTTP data", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        equal(Object.keys(result)[0], 'httpVerb');
    });
});

test("verify http verb", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        equal(result['httpVerb'].verb, 'Get');
    });
});

test("verify route of verb http", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        equal(result['httpVerb'].route, '{idConversation}');
    });
});

test("verify returns exist in verb http", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        ok(result['httpVerb'].returns.length);
    });
});

test("verify verb http contains four returns", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        equal(result['httpVerb'].returns.length, 4);
    });
});

test("verify parameters exist in verb http", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        ok(result['httpVerb'].parameters.length);
    });
});

test("verify verb http contains two parameters", function(){
    this.subject().model({'service_id': 'Conversations', 'httpVerb_id': 1}).then(function(result){
        equal(result['httpVerb'].parameters.length, 2);
    });
});