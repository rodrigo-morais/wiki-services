import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource("services", { path: "/services/:service_id" });
    this.resource("servicesModels", { path: "/services/models/:model_id" });
    this.resource("socketsModels", { path: "/sockets/models/:model_id" });
    this.resource("sockets", { path: "/sockets/:socket_id" });
    this.resource("socketsModels", { path: "/sockets/models/:model_id" });
    this.resource("httpVerb", { path: "/services/:service_id/httpVerbs/:httpVerb_id" });
    this.resource("message", { path: "sockets/:socket_id/messages/:message_id" });
});

Router.reopen({
    rootURL: '/'
});

export default Router;
