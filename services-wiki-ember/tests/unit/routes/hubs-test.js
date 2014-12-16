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