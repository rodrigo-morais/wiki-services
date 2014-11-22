import Ember from 'ember';

var ItemView = Ember.View.extend({
    templateName: "item",
    tagName: 'li',
    model: {},
    type_parent: '',
    name: function () {
        var model = this.get('model');
        return model.name;
    }.property('name'),
    type: function () {
        var model = this.get('model');
        return model.type;
    }.property('type'),
    submenus: function () {
        var model = this.get('model');
        return model.submenus;
    }.property('submenus'),
    path: function () {
        var model = this.get('model');
        return '#/' + this.get('type_parent') + '/' + model.name;
    }.property('path'),
    uri: function () {
        var model = this.get('model');
        return this.get('type_parent') + '/' + model.type;
    }.property(),
    target: function () {
        var model = this.get('model');
        return this.get('type_parent') + '-' + model.type;
    }.property(),
    hasChilds: function () {
        var model = this.get('model');

        if (model.submenus) {
            return true;
        }
        return false;
    }.property('submenus')
});

export default ItemView;