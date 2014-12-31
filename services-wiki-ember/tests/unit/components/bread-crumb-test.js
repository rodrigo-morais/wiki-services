import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('bread-crumb');

test('verify if tag name is DIV', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {}
            );
    });

    equal(this.$().context.tagName, 'DIV');
});

test('verify if path contains two items', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services, Conversation'
            );
    });

    equal(component.get('path').length, 2);
});

test('verify if first item of path property is "Service"', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services, Conversation'
            );
    });

    equal(component.get('path')[0], 'Service');
});

test('verify if second item of path property is "Conversation"', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services, Conversation'
            );
    });

    equal(component.get('path')[1], 'Conversation');
});

test('verify if path with model data contains two items', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Conversation'
                }    
            )
            .set(
                'paths',
                'Services, service.name'
            );
    });

    equal(component.get('path').length, 2);
});

test('verify if first item of path property is "Service"', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Conversation'
                }    
            )
            .set(
                'paths',
                'Services, service.name'
            );
    });

    equal(component.get('path')[0], 'Service');
});

test('verify if second item of path property is "Conversation"', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Conversation'
                }    
            )
            .set(
                'paths',
                'Services, service.name'
            );
    });

    equal(component.get('path')[1], 'Conversation');
});