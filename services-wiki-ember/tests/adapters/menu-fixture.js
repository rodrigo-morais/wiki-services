import Ember from "ember";

var menuStore = (function(){
    var _fixture = [
        {
            "id":"1",
            "name":"Serviços",
            "type":"services",
            "submenus":[
                {"id":"2","name":"Chat Messages"},
                {"id":"3","name":"Communication"},
                {"id":"1","name":"Conversations"},
                {"id":"4","name":"People"},
                {
                    "id":"2","name":"Modelos",
                    "type":"models",
                    "submenus":[
                        {"id":"545392031546bcbc01f6ad92","name":"ActionModel"},
                        {"id":"545392031546bcbc01f6ad8a","name":"ChatMessageModel"},
                        {"id":"545392031546bcbc01f6ad8b","name":"ChatMessagesModel"},
                        {"id":"545392031546bcbc01f6ad8c","name":"CommunicationModel"},
                        {"id":"545392031546bcbc01f6ad89","name":"ConversationModel"},
                        {"id":"545392031546bcbc01f6ad90","name":"DeviceModel"},
                        {"id":"545392031546bcbc01f6ad8d","name":"NewsModel"},
                        {"id":"545392031546bcbc01f6ad8f","name":"OriginModel"},
                        {"id":"545392031546bcbc01f6ad8e","name":"StripeModel"}
                    ]
                }
            ]
        },
        {
            "id":"3",
            "name":"Hubs",
            "type":"hubs",
            "submenus":[
                {"id":"545392031546bcbc01f6ad97","name":"Chat Messages"},
                {"id":"545392031546bcbc01f6ad98","name":"Communication"},
                {
                    "id":"4",
                    "name":"Modelos",
                    "type":"models",
                    "submenus":[
                        {"id":"545392031546bcbc01f6ad93","name":"ChatMessage"},
                        {"id":"545392031546bcbc01f6ad94","name":"Error"},
                        {"id":"545392031546bcbc01f6ad95","name":"Group"},
                        {"id":"545392031546bcbc01f6ad96","name":"People"}
                    ]
                }
            ]
        }
    ];
    
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