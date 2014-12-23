import DS from "ember-data";

var MessageParameter = DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string'),
    'default': DS.attr('string'),
    message: DS.belongsTo('message')
});

export default MessageParameter;