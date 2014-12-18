import Ember from "ember";

var servicesModelsStore = (function(){
    var _fixture = {
        "name": "ActionModel",
        "type": "service",
        "json": "[object Object]",
        "properties": [
          {
              "name": "Id",
              "type": "Number"
          },
          {
              "name": "Acronym",
              "type": "String"
          }
        ],
        "id": "54931aed4348ac501aad302a"
    };
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = [], data;

                fixtures.push(_fixture);
                data = fixtures.filter(function(serviceModel){
                    return serviceModel.name === params;
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

export default servicesModelsStore;