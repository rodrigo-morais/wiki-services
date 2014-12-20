import Ember from 'ember';

var HubsModelsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('model', 'hubs-' + params.model_id);
    },
    serialize: function (model) {
        return {
            model_id: model.get('name')
        };
    }
});

export default HubsModelsRoute;