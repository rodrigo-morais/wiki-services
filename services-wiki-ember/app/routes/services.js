import Ember from 'ember';

var ServicesRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('service', params.service_id);
    },
    serialize: function (model) {
        return {
            service_id: model.get('name')
        };
    },
    _goToHttpVerb: function (httpVerb) {
        this.transitionTo('httpVerb', httpVerb);
    },
    actions: {
        goToHttpVerb: function (httpVerb) {
            this._goToHttpVerb(httpVerb);
        }
    }
});

export default ServicesRoute;