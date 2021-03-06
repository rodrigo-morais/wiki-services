﻿import DS from "ember-data";

export default  DS.Model.extend({
    name: DS.attr('string'),
    type: DS.attr('string'),
    parameters: DS.attr('string'),
    message: DS.belongsTo('message')
});