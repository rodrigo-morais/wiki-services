import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource("services", { path: "/services/:service_id" });
    this.resource("servicesModels", { path: "/services/models/:model_id" });
    this.resource("hubsModels", { path: "/hubs/models/:model_id" });
    this.resource("hubs", { path: "/hubs/:hub_id" });
    this.resource("hubsModels", { path: "/hubs/models/:model_id" });
    this.resource("httpVerb", { path: "/services/:service_id/httpVerbs/:httpVerb_id" });
    this.resource("invoke", { path: "hubs/:hub_id/invoke/:invoke_id" });
});

Router.reopen({
    rootURL: '/'
});

export default Router;
