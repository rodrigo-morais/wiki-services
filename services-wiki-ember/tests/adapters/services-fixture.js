import Ember from "ember";

var servicesStore = (function(){
    var _fixture = [
    ];
    
    var _store = {
        findAll: function(type){
            return resolve(_fixture);
        }
    };
    
    return {
        store: _store
    };
})();

export default servicesStore;