import { test, moduleFor } from 'ember-qunit';
import serviceStore from '../../adapters/services-fixture';

moduleFor('route:service', "Unit - ServiceRoute", {
    setup: function () {
        this.subject().set('store', serviceStore.store);    
    },
    teardown: function () {}
});

test("service route exists", function(){
    ok(this.subject());
});

test("return service data", function(){
    this.subject().model({'service_id': 'Services'}).then(function(result){
        equal(Object.keys(result)[0], 'service');
    });
});