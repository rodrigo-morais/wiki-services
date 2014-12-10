import Ember from "ember";

var servicesStore = (function(){
    var _fixture = [
        {
            "id": "1",
            "name": "Serviços",
            "type": "services",
            "submenus": [
              {
                  "id": "2",
                  "name": "Chat Messages"
              },
              {
                  "id": "3",
                  "name": "Communication"
              },
              {
                  "id": "1",
                  "name": "Conversations"
              },
              {
                  "id": "4",
                  "name": "People"
              },
              {
                  "id": "2",
                  "name": "Modelos",
                  "type": "models",
                  "submenus": [
                    {
                        "id": "545392031546bcbc01f6ad92",
                        "name": "ActionModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad8a",
                        "name": "ChatMessageModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad8b",
                        "name": "ChatMessagesModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad8c",
                        "name": "CommunicationModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad89",
                        "name": "ConversationModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad90",
                        "name": "DeviceModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad8d",
                        "name": "NewsModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad8f",
                        "name": "OriginModel"
                    },
                    {
                        "id": "545392031546bcbc01f6ad8e",
                        "name": "StripeModel"
                    }
                  ]
              }
            ]
        }
    ];
    
    var _store = {
        findAll: function(){
            return _fixture;
        }
    };
    
    return {
        store: _store
    };
})();

export default servicesStore;