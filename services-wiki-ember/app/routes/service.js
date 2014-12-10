import Ember from 'ember';

var ServiceRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('service', params.service_id);
    },
    serialize: function (model, params) {
        return {
            service_id: model.get('name')
        };
    }/*,
    actions: {
        goToHttpVerb: function (httpVerb) {
            this.transitionTo('httpVerb', httpVerb);
        }
    }*/
});

export default ServiceRoute;