import Ember from 'ember';

var HubsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('socket', params.socket_id);
    },
    serialize: function (model) {
        return {
            socket_id: model.get('name')
        };
    },
    actions: {
        goToInvoke: function (message) {
            this.transitionTo('message', message);
        }
    }
});

export default HubsRoute;