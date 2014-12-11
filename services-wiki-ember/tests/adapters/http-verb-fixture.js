import Ember from "ember";

var httpVerbStore = (function(){
    var _fixture = {
        "verb": "Get",
        "route": "{idConversation}",
        "service": 1,
        "returns": [
          {
              "code": "200",
              "name": "OK",
              "type": "success",
              "message": "",
              "id": 1
          },
          {
              "code": "404",
              "name": "Not Found",
              "type": "fail",
              "id": 2
          },
          {
              "code": "200",
              "name": "OK",
              "type": "success",
              "message": "",
              "id": 3
          },
          {
              "code": "404",
              "name": "Not Found",
              "type": "fail",
              "id": 4
          }
        ],
        "parameters": [
          {
              "name": "idPeople",
              "type": "int",
              "id": 1
          },
          {
              "name": "idEnvironment",
              "type": "int",
              "id": 2
          }
        ],
        "id": 1
    };
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = [], data;

                fixtures.push(_fixture);
                data = fixtures.filter(function(verb){
                    return verb.id === params.split('-')[1];
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

export default httpVerbStore;