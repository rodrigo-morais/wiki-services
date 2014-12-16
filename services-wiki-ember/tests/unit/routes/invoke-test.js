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