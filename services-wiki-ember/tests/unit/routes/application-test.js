import Ember from "ember";
import { test, moduleFor } from 'ember-qunit';
 
var route;

moduleFor('route:application', "Unit - ApplicationRoute", {
    setup: function () {
        var store = {
            findAll: function(type){
                return new Ember.RSVP.Promise(function(resolve){
                    resolve(['Services', 'Hubs']);
                });
            }
        };

        this.subject().set('store', store);
    
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