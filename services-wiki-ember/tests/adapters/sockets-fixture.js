import Ember from "ember";

var socketsStore = (function(){
    var _fixture = [
        {
            "name": "Chat Messages",
            "messages": [
            {
                "name": "sendMessage",
                "events": [
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
                "events": [
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
                "events": [
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
                "events": [
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
                "events": [
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
                "events": [],
                "parameters": [],
                "id": 6
            }
            ],
            "id": "545392031546bcbc01f6ad97"
        },
        {
            "name": "Communication",
            "messages": [
            {
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
            },
            {
                "name": "connectedCommunication",
                "events": [
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
                "events": [
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

                data = fixtures.filter(function(socket){
                    return socket.name === params;
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

export default socketsStore;