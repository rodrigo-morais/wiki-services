import DS from "ember-data";

var HttpVerb = DS.Model.extend({
    verb: DS.attr('string'),
    route: DS.attr('string'),
    /*parameters: DS.hasMany('parameter', { async: true }),
    returns: DS.hasMany('return', { async: true }),*/
    service: DS.belongsTo('service')
});

export default HttpVerb;