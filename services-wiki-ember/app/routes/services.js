import Ember from 'ember';

var ServicesRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('service');
    }
});

export default ServicesRoute;