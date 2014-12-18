import { test, moduleFor } from 'ember-qunit';
import servicesModelsStore from '../../adapters/services-models-fixture';

moduleFor('route:services-models', "Unit - ServicesModelsRoute", {
    setup: function () {
        this.subject().set('store', servicesModelsStore.store);    
    },
    teardown: function () {}
});

test("servicesModels route exists", function(){
    ok(this.subject());
});
