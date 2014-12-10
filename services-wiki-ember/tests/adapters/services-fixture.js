import Ember from "ember";

var servicesStore = (function(){
    var _fixture = {
        "id": "1",
        "name": "Conversations",
        "routePrefix": "peoples/{idPeople}/conversations",
        "httpVerbs": [
          {
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
          },
          {
              "verb": "Get",
              "route": "environment/{idEnvironment}",
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
                }
              ],
              "parameters": [
                {
                    "name": "idConversation",
                    "type": "int",
                    "id": 1
                }
              ],
              "id": 2
          },
          {
              "verb": "Post",
              "route": "",
              "service": 1,
              "returns": [
                {
                    "code": "201",
                    "name": "Createed",
                    "type": "success",
                    "message": "",
                    "id": 1
                },
                {
                    "code": "400",
                    "name": "Bad Request",
                    "type": "fail",
                    "id": 2
                }
              ],
              "parameters": [
                {
                    "name": "ConversationModel",
                    "type": "ConversationModel",
                    "id": 1
                }
              ],
              "id": 3
          },
          {
              "verb": "Put",
              "route": "{idConversation}",
              "returns": [],
              "parameters": [],
              "id": 4
          },
          {
              "verb": "Patch",
              "route": "",
              "returns": [],
              "parameters": [],
              "id": 5
          }
        ]
    };
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = [], data;

                fixtures.push(_fixture);
                data = fixtures.filter(function(service){
                    return service.name === params;
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

export default servicesStore;