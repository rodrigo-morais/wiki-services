import DS from "ember-data";
import config from "../config/environment";

var ModelAdapter = DS.RESTAdapter.extend({
    buildURL: function(type, id){
        var url = config.APP.host + '/services/models/' + id;
        
        return url;
    }
});

export default ModelAdapter;