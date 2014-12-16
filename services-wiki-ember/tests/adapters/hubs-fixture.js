import Ember from "ember";

var hubsStore = (function(){
    var _fixture = [
        {
            "name": "Chat Messages",
            "invokes": [
            {
                "name": "sendMessage",
                "ons": [
                    {
                        "name": "newMessage",
                        "type": "success",
                        "parameters": "ChatMessage, Group"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [
                    {
                        "name": "message",
                        "type": "ChatMessage"
                    },
                    {
                        "name": "group",
                        "type": "Group"
                    }
                ],
                "id": 1
            },
            {
                "name": "joinConversation",
                "ons": [
                    {
                        "name": "joined",
                        "type": "success",
                        "parameters": "Group, People"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [
                    {
                        "name": "group",
                        "type": "Group"
                    },
                    {
                        "name": "people",
                        "type": "People"
                    }
                ],
                "id": 2
            },
            {
                "name": "createConversation",
                "ons": [
                    {
                        "name": "newConversation",
                        "type": "success",
                        "parameters": "Group, People, People"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [
                    {
                        "name": "group",
                        "type": "Group"
                    },
                    {
                        "name": "owner",
                        "type": "People"
                    },
                    {
                        "name": "guest",
                        "type": "People"
                    }
                ],
                "id": 3
            },
            {
                "name": "connectChat",
                "ons": [
                    {
                        "name": "onConnected",
                        "type": "success",
                        "parameters": "People"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [],
                "id": 4
            },
            {
                "name": "connectedInfo",
                "ons": [
                    {
                        "name": "connectedInfo",
                        "type": "success",
                        "parameters": "People"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    },
                    {
                        "name": "disconnectedInfo",
                        "type": "success",
                        "parameters": "People, Group"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [
                    {
                        "name": "people",
                        "type": "People"
                    }
                ],
                "id": 5
            },
            {
                "name": "disconnectChat",
                "ons": [],
                "parameters": [],
                "id": 6
            }
            ],
            "id": "545392031546bcbc01f6ad97"
        },
        {
            "name": "Communication",
            "invokes": [
            {
                "name": "sendCommunication",
                "ons": [
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
            },
            {
                "name": "connectedCommunication",
                "ons": [
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [
                    {
                        "name": "people",
                        "type": "People"
                    }
                ],
                "id": 8
            },
            {
                "name": "disconnectChat",
                "ons": [
                    {
                        "name": "disconnectedInfo",
                        "type": "success",
                        "parameters": "People, Group"
                    },
                    {
                        "name": "onError",
                        "type": "fail",
                        "parameters": "Error"
                    }
                ],
                "parameters": [],
                "id": 9
            }
            ],
            "id": "545392031546bcbc01f6ad98"
        }
    ];
    
    var _store = {
        find: function(type, params){
            return new Ember.RSVP.Promise(function(resolve){
                var object = JSON.parse('{"' + type + '": {}}'),
                    fixtures = _fixture, data;

                data = fixtures.filter(function(hub){
                    return hub.name === params;
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

export default hubsStore;