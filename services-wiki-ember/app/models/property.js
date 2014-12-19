import DS from "ember-data";

var Property = DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string')
});

export default Property;