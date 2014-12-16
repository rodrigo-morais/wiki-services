import Ember from 'ember';

var InvokeRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('invoke', params.hub_id + '-' + params.invoke_id);
    },
    serialize: function (model) {
        return {
            invoke_id: model.id,
            hub_id: model.get('hub.name')
        };
    }
});

export default InvokeRoute;