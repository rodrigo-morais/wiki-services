import DS from "ember-data";

var Hub = DS.Model.extend({
    name: DS.attr('string'),
    invokes: DS.hasMany('invoke')
});

export default Hub;