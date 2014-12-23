import Ember from 'ember';

var SocketsModelsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('model', 'sockets-' + params.model_id);
    },
    serialize: function (model) {
        return {
            model_id: model.get('name')
        };
    }
});

export default SocketsModelsRoute;