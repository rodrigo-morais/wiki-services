import { test, moduleFor } from 'ember-qunit';
import servicesStore from '../../adapters/services-fixture';

moduleFor('route:services', "Unit - ServicesRoute", {
    setup: function () {
        this.subject().set('store', servicesStore.store);    
    },
    teardown: function () {}
});

test("services route exists", function(){
    ok(this.subject());
});