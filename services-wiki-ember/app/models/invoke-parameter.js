import DS from "ember-data";

var InvokeParameter = DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string'),
    'default': DS.attr('string'),
    invoke: DS.belongsTo('invoke')
});

export default InvokeParameter;