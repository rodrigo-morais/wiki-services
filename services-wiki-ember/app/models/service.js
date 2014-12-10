import DS from "ember-data";

var Service = DS.Model.extend({
    name: DS.attr('string'),
    routePrefix: DS.attr('string'),
    httpVerbs: DS.hasMany('httpVerb', { async: true })
});

export default Service;