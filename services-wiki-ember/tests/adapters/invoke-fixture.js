import Ember from "ember";

var invokeStore = (function(){
    var _fixture = {
    };
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = [], data;
                
                fixtures.push(_fixture);
                data = fixtures.filter(function(invoke){
                    return invoke.id.toString() === params.split('-')[1];
                });

                object[type] = data[0];
                resolve(object);
            });
        }
    };
    
    return {
        store: _store
    };
})();

export default invokeStore;