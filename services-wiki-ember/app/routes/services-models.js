﻿import Ember from 'ember';

var ServicesModelsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('model', 'services-' + params.model_id);
    },
    serialize: function (model) {
        return {
            model_id: model.get('name')
        };
    }
});

export default ServicesModelsRoute;