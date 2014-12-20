import { test, moduleFor } from 'ember-qunit';
import modelsStore from '../../adapters/models-fixture';

moduleFor('route:hubs-models', "Unit - HubsModelsRoute", {
    setup: function () {
        this.subject().set('store', modelsStore.store);    
    },
    teardown: function () {}
});

test("HubsModels route exists", function(){
    ok(this.subject());
});