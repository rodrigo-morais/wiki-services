import DS from "ember-data";

var Parameter = DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string'),
    'default': DS.attr('string'),
    httpVerb: DS.belongsTo('httpVerb')
});

export default Parameter;