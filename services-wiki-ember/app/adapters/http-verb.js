import DS from "ember-data";
import config from "../config/environment";

var HttpVerbAdapter = DS.RESTAdapter.extend({
    buildURL: function(type, id){
        var url = config.APP.host + '/services/' + id.split('-')[0] + '/httpverbs/' + id.split('-')[1];
        
        return url;
    }
});

export default HttpVerbAdapter;