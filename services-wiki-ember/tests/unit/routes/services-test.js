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

test("return service data", function(){
    this.subject().model({'service_id': 'Conversations'}).then(function(result){
        equal(Object.keys(result)[0], 'service');
    });
});

test("verify service name", function(){
    this.subject().model({'service_id': 'Conversations'}).then(function(result){
        equal(result['service'].name, 'Conversations');
    });
});

test("verify service route", function(){
    this.subject().model({'service_id': 'Conversations'}).then(function(result){
        equal(result['service'].routePrefix, 'peoples/{idPeople}/conversations');
    });
});

test("verify if service contains verbs HTTP", function(){
    this.subject().model({'service_id': 'Conversations'}).then(function(result){
        ok(result['service'].httpVerbs.length > 0);
    });
});

test("verify if exist five verbs HTTP in service", function(){
    this.subject().model({'service_id': 'Conversations'}).then(function(result){
        equal(result['service'].httpVerbs.length, 5);
    });
});