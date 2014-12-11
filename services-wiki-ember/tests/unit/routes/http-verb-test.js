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