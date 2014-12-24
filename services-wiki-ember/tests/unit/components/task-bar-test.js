import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('task-bar');

test('verify if tag name is DIV', function(){
    equal(this.$().context.tagName, 'DIV');
});