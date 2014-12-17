﻿import DS from "ember-data";

var Invoke = DS.Model.extend({
    name: DS.attr('string'),
    //parameters: DS.hasMany('invokeParameter'),
    //ons: DS.hasMany('on'),
    hub: DS.belongsTo('hub', { async: true })
});

export default Invoke;