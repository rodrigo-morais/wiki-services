import Ember from 'ember';

var HttpVerbRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('httpVerb', params.service_id + '-' + params.httpVerb_id);
    },
    serialize: function (model) {
        return {
            httpVerb_id: model.id,
            service_id: model.get('service.name')
        };
    }
});

export default HttpVerbRoute;