import Ember from "ember";

var menuStore = (function(){
    var _fixture = ['Services', 'Hubs'];
    
    var _store = {
        findAll: function(type){
            return new Ember.RSVP.Promise(function(resolve){
                resolve(_fixture);
            });
        }
    };
    
    return {
        store: _store
    };
})();

export default menuStore;