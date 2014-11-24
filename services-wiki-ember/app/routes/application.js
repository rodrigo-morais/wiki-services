import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
    model: function () {
        return Ember.RSVP.hash({
            menus: this.store.findAll('menu')
        });
    }
});

export default ApplicationRoute;