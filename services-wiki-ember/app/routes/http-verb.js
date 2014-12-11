import Ember from 'ember';
import config from "../config/environment";

var HttpVerbRoute = Ember.Route.extend({
    model: function (params) {
        return Ember.$.getJSON(config.APP.host + "/services/" + params.service_id + "/httpverbs/" + params.httpVerb_id);
    },
    serialize: function (model) {
        return {
            httpVerb_id: model.id,
            service_id: model.get('service.name')
        };
    }
});

export default HttpVerbRoute;