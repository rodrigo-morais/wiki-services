import DS from "ember-data";
import config from "../config/environment";

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: config.APP.host
});

export default ApplicationAdapter;