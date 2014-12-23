import DS from "ember-data";

var Socket = DS.Model.extend({
    name: DS.attr('string'),
    messages: DS.hasMany('message')
});

export default Socket;