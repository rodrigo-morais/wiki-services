import DS from "ember-data";

var HttpVerb = DS.Model.extend({
    verb: DS.attr('string'),
    route: DS.attr('string'),
    parameters: DS.hasMany('parameter'),
    returns: DS.hasMany('return')
});

export default HttpVerb;