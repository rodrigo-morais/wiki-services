import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';
import HttpVerbModel from "services-wiki-ember/models/http-verb";

moduleForComponent('bread-crumb');

test('verify if tag name is DIV', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services, Conversation'
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
                'Services,Conversation'
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
                'Services,Conversation'
            );
    });

    equal(component.get('path')[0], 'Services');
});

test('verify if second item of path property is "Conversation"', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services,Conversation'
            );
    });

    equal(component.get('path')[1], 'Conversation');
});

test('verify if first item in bread crumb be "Services"', function(){
    var component = this.subject(),
        jsonObj,
        firstElement;

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services,Conversation'
            ).set(
                'page',
                'Get'
            );
    });

    firstElement = Ember.$(this.$().find('ol').find('li')[0]);
    
    equal(firstElement.text(), 'Services');
});

test('verify if second item in bread crumb be "Conversation"', function(){
    var component = this.subject(),
        jsonObj,
        secondElement;

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services,Conversation'
            ).set(
                'page',
                'Get'
            );
    });

    secondElement = Ember.$(this.$().find('ol').find('li')[1]);
    
    equal(secondElement.text(), 'Conversation');
});

test('verify if third item in bread crumb be "Conversation"', function(){
    var component = this.subject(),
        jsonObj,
        thirdElement;

    Ember.run(function(){
        component
            .set(
                'paths',
                'Services,Conversation'
            ).set(
                'page',
                'Get'
            );
    });

    thirdElement = Ember.$(this.$().find('ol').find('li')[2]);
    
    equal(thirdElement.text(), 'Get');
});