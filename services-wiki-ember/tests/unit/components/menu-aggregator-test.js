import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('menu-aggregator');

test('verify if tag name is DIV', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    equal(this.$().context.tagName, 'DIV');
});

test('verify if state is close', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    ok(!component.get('isOpen'));
});

test('verify if icon displayed is pointing to right', function(){
    var component = this.subject(),
        icon;

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    icon = Ember.$(this.$().context).find('i');

    ok(icon.hasClass('glyphicon-chevron-right'));
});

test('verify if text was filled', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    equal(component.get('text'), 'Service');
});

test('verify if data target was filled', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'target',
                'service'
            );
    });

    equal(component.get('dataTarget'), '#service');
});

test('verify if state is open after click in component', function(){
    var component = this.subject(),
        firstAggregator;

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    firstAggregator = Ember.$(this.$().context).find('a');
    firstAggregator.trigger('click');

    ok(component.get('isOpen'));
});

test('verify if icon displayed is pointing to down after click in component', function(){
    var component = this.subject(),
        icon, firstAggregator;

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    firstAggregator = Ember.$(this.$().context).find('a');
    firstAggregator.trigger('click');
    icon = Ember.$(this.$().context).find('i');

    ok(icon.hasClass('glyphicon-chevron-down'));
});

test('verify if state is close after two clicks in component', function(){
    var component = this.subject(),
        firstAggregator;

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    firstAggregator = Ember.$(this.$().context).find('a');
    firstAggregator.trigger('click');
    firstAggregator.trigger('click');

    ok(!component.get('isOpen'));
});

test('verify if icon displayed is pointing to down after two clicks in component', function(){
    var component = this.subject(),
        icon, firstAggregator;

    Ember.run(function(){
        component
            .set(
                'text',
                'Service'
            );
    });

    firstAggregator = Ember.$(this.$().context).find('a');
    firstAggregator.trigger('click');
    firstAggregator.trigger('click');
    icon = Ember.$(this.$().context).find('i');

    ok(icon.hasClass('glyphicon-chevron-right'));
});