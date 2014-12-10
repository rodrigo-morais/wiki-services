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
        return '/' + this.get('type_parent') + '/' + model.name;
    }.property('path'),
    hasTypeParent: function () {
        return this.get('type_parent') !== undefined && this.get('type_parent') !== null && this.get('type_parent') !== '';
    }.property('hasTypeParent'),
    uri: function () {
        var model = this.get('model');
        return this.get('type_parent') + model.type.charAt(0).toUpperCase() + model.type.slice(1).toLowerCase();
    }.property('uri'),
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