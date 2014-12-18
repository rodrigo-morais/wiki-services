import Ember from 'ember';

var ServicesModelsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('serviceModel', params.service_id);
    },
    serialize: function (model) {
        return {
            servicesModels_id: model.get('name')
        };
    }
});

export default ServicesModelsRoute;