import DS from "ember-data";
import config from "../config/environment";

var InvokeAdapter = DS.RESTAdapter.extend({
    buildURL: function(type, id){
        var url = config.APP.host + '/hubs/' + id.split('-')[0] + '/invokes/' + id.split('-')[1];
        
        return url;
    }
});

export default InvokeAdapter;