import DS from "ember-data";

var Model = DS.Model.extend({
    name: DS.attr('string'),
    json: DS.attr('string'),
    properties: DS.hasMany('property')
});

export default Model;