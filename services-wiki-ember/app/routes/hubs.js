import Ember from 'ember';

var HubsRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('hub', params.service_id);
    }
});

export default HubsRoute;