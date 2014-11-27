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
        equal(result['menus'][0].type, 'services');
    });
});

test("verify if service menu has five submenus", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][0].submenus.length, 5);
    });
});

test("verify if submenus are sorted by name and first submenu of service menu is 'Chat Messages'", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][0].submenus[0].name, 'Chat Messages');
    });
});

test("verify if last submenu of service menu is a model menu", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][0].submenus[4].type, 'models');
    });
});

test("verify if model submenu of service menu has others nine submenus", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][0].submenus[4].submenus.length, 9);
    });
});

test("verify if last menu is Sockets", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][1].type, 'sockets');
    });
});

test("verify if socket menu has three submenus", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][1].submenus.length, 3);
    });
});

test("verify if submenus are sorted by name and first submenu of socket menu is 'Chat Messages'", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][1].submenus[0].name, 'Chat Messages');
    });
});

test("verify if last submenu of socket menu is a model menu", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][1].submenus[2].type, 'models');
    });
});

test("verify if model submenu of socket menu has others four submenus", function(){
    this.subject().model().then(function(result){
        equal(result['menus'][1].submenus[2].submenus.length, 4);
    });
});