﻿import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('json-pretty');

test('verify if tag name is DIV', function(){
    var component = this.subject(),
        jsonObj;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    equal(this.$().context.tagName, 'DIV');
});

test('verify first child is PRE', function(){
    var component = this.subject(),
        jsonObj;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    equal(this.$().context.firstElementChild.tagName, 'PRE');
});

test('verify if exist content CODE element', function(){
    var component = this.subject(),
        jsonObj,
        firstElement;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    
    equal(firstElement.context.firstElementChild.tagName, 'CODE');
});

test('verify if exist contents dynamic data into CODE element with SCRIPT element', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, script;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    script = Ember.$(code.context.firstElementChild);
    
    equal(script.context.tagName, 'SCRIPT');
});

test('verify if exist contents dynamic data into CODE element with type X-PLACEHOLDER', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, script;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    script = Ember.$(code.context.firstElementChild);
    
    equal(script.context.type, 'text/x-placeholder');
});

test('verify if JSON was printed', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);

    equal(code.context.textContent.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ''), '{key1:"value1",key2:"value2"}');
});

test('verify if first element in JSON is brace', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, firstSpan;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    firstSpan = Ember.$(code).find('span').first();

    ok(Ember.$(firstSpan).hasClass('json-brace'));
});

test('verify if second element in JSON is a JSON key', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, keySpan;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    keySpan = Ember.$(code).find('span')[1];

    ok(Ember.$(keySpan).hasClass('json-key'));
});

test('verify if fourth element in JSON is a JSON value', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, valueSpan;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    valueSpan = Ember.$(code).find('span')[2];
    
    ok(Ember.$(valueSpan).hasClass('json-string'));
});

test('verify if exist separator between JSON key and value', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, keySpan;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    keySpan = Ember.$(code).find('span')[1];    

    equal(Ember.$(Ember.$(keySpan))[0].nextSibling.textContent.trim(), ':');
});

test('verify if last element in JSON is brace', function(){
    var component = this.subject(),
        jsonObj,
        firstElement, code, lastSpan;

    Ember.run(function(){
        jsonObj = {
            'key1': 'value1',
            'key2': 'value2'
        };
        component
            .set(
                'jsonObj',
                JSON.stringify(jsonObj)
            );
    });

    firstElement = Ember.$(this.$()[0].firstElementChild);
    code = Ember.$(firstElement.context.firstElementChild);
    lastSpan = Ember.$(code).find('span').last();

    ok(Ember.$(lastSpan).hasClass('json-brace'));
});