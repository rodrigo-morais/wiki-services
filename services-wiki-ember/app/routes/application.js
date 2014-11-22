import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({
    model: function () {
        console.log('ApplicationRoute');
        return Ember.RSVP.hash({
            menus: this.store.findAll('menu')
        });
    }
});

export default ApplicationRoute;