import { test, moduleFor } from 'ember-qunit';
import menuStore from '../../adapters/menu-fixture';

moduleFor('route:application', "Unit - ApplicationRoute", {
    setup: function () {
        this.subject().set('store', menuStore.store);    
    },
    teardown: function () {}
});

test("application route exists", function(){
    ok(this.subject());
});

test("return menu data", function(){
    this.subject().model().then(function(result){
        equal(Object.keys(result)[0], 'menus');
    });
});

test("return two menus", function(){
    this.subject().model().then(function(result){
        equal(result['menus'].length, 2);
    });
});

test("verify if first menu is Services", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][0], 'Services');
    });
});

test("verify if last menu is Hubs", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][1], 'Hubs');
    });
});