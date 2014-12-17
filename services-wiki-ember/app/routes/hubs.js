import Ember from 'ember';

var HubsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('hub', params.hub_id);
    },
    serialize: function (model) {
        return {
            hub_id: model.get('name')
        };
    },
    actions: {
        goToInvoke: function (invoke) {
            this.transitionTo('invoke', invoke);
        }
    }
});

export default HubsRoute;