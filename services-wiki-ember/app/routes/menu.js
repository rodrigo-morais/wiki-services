import Ember from 'ember';

var MenuRoute = Ember.Route.extend({
    model: function () {
        console.log('MenuRoute');
        return this.store.findAll('menu');
    }
});

export default MenuRoute;