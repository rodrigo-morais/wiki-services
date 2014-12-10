import Ember from 'ember';

var HttpVerbRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('httpVerb');
    },
    serialize: function (model) {
        return {
            httpVerb_id: model.id,
            service_id: model.get('service.name')
        };
    }
});

export default HttpVerbRoute;