import DS from "ember-data";

var Menu = DS.Model.extend({
    name: DS.attr('string'),
    submenus: DS.attr('array'),
    type: DS.attr('string')
});

export default Menu;