import DS from "ember-data";

var Message = DS.Model.extend({
    name: DS.attr('string'),
    parameters: DS.hasMany('message-parameter'),
    events: DS.hasMany('event'),
    socket: DS.belongsTo('socket', { async: true })
});

export default Message;