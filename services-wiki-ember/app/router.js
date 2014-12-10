import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource("service", { path: "/service/:service_id" });
});

Router.reopen({
    rootURL: '/'
});

export default Router;
