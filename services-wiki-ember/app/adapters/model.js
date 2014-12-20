import DS from "ember-data";
import config from "../config/environment";

var ModelAdapter = DS.RESTAdapter.extend({
    buildURL: function(type, id){
        var url = config.APP.host + '/' + id.split('-')[0] + '/models/' + id.split('-')[1];
        
        return url;
    }
});

export default ModelAdapter;