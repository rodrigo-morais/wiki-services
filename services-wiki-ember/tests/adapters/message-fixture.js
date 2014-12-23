import Ember from "ember";

var messageStore = (function(){
    var _fixture = {
        "name": "sendCommunication",
        "events": [
          {
              "name": "receiveCommunication",
              "type": "success",
              "parameters": "People, Number"
          },
          {
              "name": "onError",
              "type": "fail",
              "parameters": "Error"
          }
        ],
        "parameters": [
          {
              "name": "toIds",
              "type": "Array(String)"
          }
        ],
        "id": 7
    };
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = [], data;
                
                fixtures.push(_fixture);
                data = fixtures.filter(function(message){
                    return message.id.toString() === params.split('-')[1];
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

export default messageStore;