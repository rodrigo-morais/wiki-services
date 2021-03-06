﻿import DS from "ember-data";

var HttpVerb = DS.Model.extend({
    verb: DS.attr('string'),
    route: DS.attr('string'),
    parameters: DS.hasMany('parameter'),
    returns: DS.hasMany('return'),
    service: DS.belongsTo('service', { async: true })
});

export default HttpVerb;