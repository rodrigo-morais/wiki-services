import DS from "ember-data";
import config from "../config/environment";

var MessageAdapter = DS.RESTAdapter.extend({
    buildURL: function(type, id){
        var url = config.APP.host + '/sockets/' + id.split('-')[0] + '/messages/' + id.split('-')[1];
        
        return url;
    }
});

export default MessageAdapter;