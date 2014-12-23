import Ember from "ember";

var modelsStore = (function(){
    var _fixture = [
        {
            "name": "ChatMessage",
            "type": "socket",
            "properties": [
              {
                  "name": "User",
                  "type": "People"
              },
              {
                  "name": "Message",
                  "type": "String"
              },
              {
                  "name": "Audio",
                  "type": "String"
              },
              {
                  "name": "Creation",
                  "type": "String"
              }
            ],
            "id": "54931aed4348ac501aad302b"
        },
        {
            "name": "ActionModel",
            "type": "service",
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
            "id": "54931aed4348ac501aad302a",
            "json": "{\n  \"Acronym\": \"informou falta\",\n  \"Id\": 8594\n}"
        }
    ];
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = _fixture, data;

                data = fixtures.filter(function(Model){
                    return Model.name === params.split('-')[1];
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

export default modelsStore;