import DS from "ember-data";

var Return = DS.Model.extend({
    code: DS.attr('string'),
    name: DS.attr('string'),
    type: DS.attr('string'),
    message: DS.attr('string'),
    object: DS.attr('string'),
    httpVerb: DS.belongsTo('httpVerb')
});

export default Return;