import DS from "ember-data";

var On = DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string'),
    parameters: DS.attr('string'),
    invoke: DS.belongsTo('invoke')
});

export default On;