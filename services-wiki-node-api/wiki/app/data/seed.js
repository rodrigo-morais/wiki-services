﻿(function (seed) {
    seed.initialServices = [{
        _id: '1',
        name: 'Conversations',
        routePrefix: 'peoples/{idPeople}/conversations',
        httpVerbs: [{
            _id: '1',
            verb: 'Get',
            route: '{idConversation}',
            service: 1,
            parameters: [{
                _id: '1',
                name: 'idPeople',
                type: 'int'
            },
            {
                _id: '2',
                name: 'idEnvironment',
                type: 'int'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'OK',
                type: 'success',
                message: ''
            },
            {
                _id: '2',
                code: '404',
                name: 'Not Found',
                type: 'fail'
            },
            {
                _id: '3',
                code: '200',
                name: 'OK',
                type: 'success',
                message: ''
            },
            {
                _id: '4',
                code: '404',
                name: 'Not Found',
                type: 'fail'
            }]
        },
        {
            _id: '2',
            verb: 'Get',
            route: 'environment/{idEnvironment}',
            service: 1,
            parameters: [{
                _id: '1',
                name: 'idConversation',
                type: 'int'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'OK',
                type: 'success',
                message: ''
            },
            {
                _id: '2',
                code: '404',
                name: 'Not Found',
                type: 'fail'
            }]
        },
        {
            _id: '3',
            verb: 'Post',
            route: '',
            service: 1,
            parameters: [{
                _id: '1',
                name: 'ConversationModel',
                type: 'ConversationModel'
            }],
            returns: [{
                _id: '1',
                code: '201',
                name: 'Createed',
                type: 'success',
                message: ''
            },
            {
                _id: '2',
                code: '400',
                name: 'Bad Request',
                type: 'fail'
            }]
        },
        {
            _id: '4',
            verb: 'Put',
            route: '{idConversation}'
        },
        {
            _id: '5',
            verb: 'Patch',
            route: ''
        }]
    },
    {
        _id: '2',
        name: 'Chat Messages',
        routePrefix: 'peoples/{idPeople}/conversations/{idConversation}/messages',
        httpVerbs: [{
            _id: '6',
            verb: 'Get',
            route: '',
            service: 2,
            parameters: [{
                _id: '1',
                name: 'idPeople',
                type: 'int'
            },
            {
                _id: '2',
                name: 'idConversation',
                type: 'int'
            },
            {
                _id: '3',
                name: 'page',
                type: 'int',
                'default': '1'
            },
            {
                _id: '4',
                name: 'pageSize',
                type: 'int',
                'default': '10'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'OK',
                type: 'success',
                object: 'ChatMessagesModel'
            }]
        },
        {
            _id: '7',
            verb: 'Patch',
            route: '',
            service: 2,
            parameters: [{
                _id: '1',
                name: 'idPeople',
                type: 'int'
            },
            {
                _id: '2',
                name: 'chatMessage',
                type: 'ChatMessageModel'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'OK',
                type: 'success',
                object: 'ChatMessageModel'
            },
            {
                _id: '2',
                code: '400',
                name: 'Bad Request',
                type: 'fail',
                message: 'Error to read message: ...'
            }]
        },
        {
            _id: '8',
            verb: 'Post',
            route: '',
            service: 2,
            parameters: [{
                _id: '1',
                name: 'idConversation',
                type: 'int'
            },
            {
                _id: '2',
                name: 'chatMessage',
                type: 'ChatMessageModel'
            }],
            returns: [{
                _id: '1',
                code: '201',
                name: 'Created',
                type: 'success',
                object: 'ChatMessageModel'
            },
            {
                _id: '2',
                code: '400',
                name: 'Bad Request',
                type: 'fail',
                message: 'Error to create new chat message: ...'
            }]
        }]
    },
    {
        _id: '3',
        name: 'Communication',
        routePrefix: 'peoples/{idPeople}/communications',
        httpVerbs: [{
            _id: '9',
            verb: 'Get',
            route: '',
            service: 3,
            parameters: [{
                _id: '1',
                name: 'idPeople',
                type: 'int'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'Ok',
                type: 'success',
                object: 'CommunicationModel'
            },
            {
                _id: '2',
                code: '400',
                name: 'Bad Request',
                type: 'fail',
                message: 'Error, communication doesn\'t exist.'
            },
            {
                _id: '3',
                code: '400',
                name: 'Bad Request',
                type: 'fail',
                message: 'Error to find communications: ...'
            }]
        },
        {
            _id: '10',
            verb: 'Get',
            route: '{id}',
            service: 3,
            parameters: [{
                _id: '1',
                name: 'idPeople',
                type: 'int'
            },
            {
                _id: '2',
                name: 'id',
                type: 'int'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'Ok',
                type: 'success',
                object: 'CommunicationModel'
            },
            {
                _id: '2',
                code: '400',
                name: 'Bad Request',
                type: 'fail',
                message: 'Error, communication doesn\'t exist.'
            },
            {
                _id: '3',
                code: '400',
                name: 'Bad Request',
                type: 'fail',
                message: 'Error to find communications: ...'
            }]
        }]
    },
    {
        _id: 4,
        name: 'People',
        routePrefix: 'peoples',
        httpVerbs: [{
            _id: '11',
            verb: 'Get',
            route: '{id}',
            service: 4,
            parameters: [{
                _id: '1',
                name: 'id',
                type: 'int'
            }],
            returns: [{
                _id: '1',
                code: '200',
                name: 'Ok',
                type: 'success',
                object: 'PeopleModel'
            }]
        }]
    }];
    
    seed.initialModels = [{
        name: 'ConversationModel',
        type: 'service',
        json: { 'Id': 2, 'Participants': [{ 'Id': 791, 'Name': 'Rodrigo Brown', 'Image': 'http://localhost:28803/uploads/people/Cort20121203451914photo.JPG', 'Conversations': { 'Href': 'http://localhost:28803/peoples/791/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, { 'Id': 2, 'Name': 'Mike With', 'Image': 'http://localhost:28803/uploads/people/20120612480016186466_100001519200469_508547232_q.jpg', 'Conversations': { 'Href': 'http://localhost:28803/peoples/2/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }], 'QuantityNotRead': 3, 'Date': '2014-07-16T14:13:12.737', 'Messages': { 'Href': 'http://localhost:28803/peoples/2/conversations/2/messages?page=1', 'Rel': 'listMessages', 'Method': 'GET' }, 'Url': { 'Href': 'http://localhost:28803/peoples/2/conversations/2', 'Rel': 'self', 'Method': 'GET' }, 'LastMessage': { 'Id': 3, 'Text': 'Teste', 'Audio': null, 'AudioTime': null, 'Date': '2013-03-21T23:07:58.85', 'Author': { 'Id': 0, 'Name': null, 'Image': null, 'Conversations': null }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/2/conversations/3/messages', 'Rel': 'self', 'Method': 'GET' } } },
        properties: [{
            name: 'Id',
            type: 'Number'
        },
        {
            name: 'Participants',
            type: 'Array(PeopleModel)'
        },
        {
            name: 'QuantityNotRead',
            type: 'Number'
        },
        {
            name: 'Date',
            type: 'String'
        },
        {
            name: 'Messages',
            type: 'LinkModel'
        },
        {
            name: 'Url',
            type: 'LinkModel'
        },
        {
            name: 'LastMessage',
            type: 'ChatMessageModel'
        }]
    },
    {
        name: 'ChatMessageModel',
        type: 'service',
        json: { 'Id': 10715, 'Text': 'Again', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T20:20:15.58', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10715/messages', 'Rel': 'self', 'Method': 'GET' } },
        properties: [{
            name: 'Id',
            type: 'String'
        },
        {
            name: 'Text',
            type: 'String'
        },
        {
            name: 'Audio',
            type: 'String'
        },
        {
            name: 'AudioTime',
            type: 'String'
        },
        {
            name: 'Date',
            type: 'String'
        },
        {
            name: 'Author',
            type: 'PeopleModel'
        },
        {
            name: 'Read',
            type: 'Boolean'
        },
        {
            name: 'Device',
            type: 'Number'
        },
        {
            name: 'Url',
            type: 'LinkModel'
        }]
    },
    {
        name: 'ChatMessagesModel',
        type: 'service',
        json: [{ 'Id': 10715, 'Text': 'Again', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T20:20:15.58', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10715/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10709, 'Text': 'Ok', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T20:10:54.83', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10709/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10653, 'Text': 'Tive que repousar aqui agora', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:16:22.67', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10653/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10651, 'Text': 'Blá mas aqui ta zendando', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:15:55.123', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10651/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10649, 'Text': 'Eu tbm', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:15:45.31', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10649/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10647, 'Text': 'Eu vi', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:15:31.64', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10647/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10645, 'Text': 'B', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:13:14.657', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10645/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10643, 'Text': 'A', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:09:20.483', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10643/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10641, 'Text': 'Uol', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:09:15.42', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10641/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10639, 'Text': 'Vazou', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:09:05.42', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10639/messages', 'Rel': 'self', 'Method': 'GET' } }],
        properties: [{
            name: 'Links',
            type: 'Array(LinkModel)'
        },
        {
            name: 'TotalCount',
            type: 'Number'
        },
        {
            name: 'TotalPages',
            type: 'Number'
        },
        {
            name: 'ChatMessages',
            type: 'Array(ChatMessage)'
        }]
    },
    {
        name: 'CommunicationModel',
        type: 'service',
        json: { "Id": 271868, "LatestNews": [{ "Id": 271868, "Path": "History > History > History", "ActionClass": null, "CreateAt": "14/07/2014 16:47:22", "Author": { "Id": 0, "Name": null, "Image": null, "Conversations": null }, "Origin": { "Id": "29", "Description": "" }, "Action": { "Id": 8594, "Acronym": "informou falta" }, "About": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } }, "Teacher": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } } }], "LatestAlerts": [], "LatestStripes": [], "TotalNews": 1, "TotalAlerts": 0, "TotalStripes": 0 },
        properties: [{
            name: 'Id',
            type: 'Number'
        },
        {
            name: 'LatestNews',
            type: 'Array(News)'
        },
        {
            name: 'LatestAlerts',
            type: 'Array(Alert)'
        },
        {
            name: 'LatestStripes',
            type: 'Array(Stripe)'
        },
        {
            name: 'TotalAlerts',
            type: 'Number'
        },
        {
            name: 'TotalNews',
            type: 'Number'
        },
        {
            name: 'TotalNews',
            type: 'Number'
        },
        {
            name: 'TotalNews',
            type: 'Number'
        },
        {
            name: 'TotalStripes',
            type: 'Number'
        }]
    },
    {
        name: 'NewsModel',
        type: 'service',
        json: { "Id": 271868, "Path": "History > History > History", "ActionClass": null, "CreateAt": "14/07/2014 16:47:22", "Author": { "Id": 0, "Name": null, "Image": null, "Conversations": null }, "Origin": { "Id": "29", "Description": "" }, "Action": { "Id": 8594, "Acronym": "informou falta" }, "About": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } }, "Teacher": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } } },
        properties: [{
            name: 'Id',
            type: 'Number'
        },
        {
            name: 'Path',
            type: 'String'
        },
        {
            name: 'ActionClass',
            type: 'ActionModel'
        },
        {
            name: 'CreateAt',
            type: 'String'
        },
        {
            name: 'Author',
            type: 'PeopleModel'
        },
        {
            name: 'Origin',
            type: 'OriginModel'
        },
        {
            name: 'Action',
            type: 'ActionModel'
        },
        {
            name: 'About',
            type: 'PeopleModel'
        },
        {
            name: 'Teacher',
            type: 'PeopleModel'
        }]
    },
    {
        name: 'StripeModel',
        type: 'service',
        json: {
            "Id": 31623,
            "Description": "",
            "Origin": {
                "Id": "16",
                "Description": ""
            },
            "Observation": null,
            "CreateAt": "2013-01-31T23:01:42.35",
            "Author": {
                "Id": 2,
                "Name": "Mike With",
                "Image": "http://localhost:28803/uploads/people/20120612480016186466_100001519200469_508547232_q.jpg",
                "Conversations": {
                    "Href": "http://localhost:28803/peoples/2/conversations/environment/6",
                    "Rel": "listConversations",
                    "Method": "GET"
                }
            },
            "Action": "Tax payment"
        },
        properties: [{
            name: 'Id',
            type: 'Number'
        },
        {
            name: 'Description',
            type: 'String'
        },
        {
            name: 'Origin',
            type: 'OriginModel'
        },
        {
            name: 'Observation',
            type: 'String'
        },
        {
            name: 'CreateAt',
            type: 'DateTime'
        },
        {
            name: 'Author',
            type: 'PeopleModel'
        },
        {
            name: 'Action',
            type: 'String'
        }]
    },
    {
        name: 'OriginModel',
        type: 'service',
        json: {
            "Id": "16",
            "Description": ""
        },
        properties: [{
            name: 'Id',
            type: 'Number'
        },
        {
            name: 'Description',
            type: 'String'
        }]
    },
    {
        name: 'DeviceModel',
        type: 'service',
        json: {
            "Name": "Web"
        },
        properties: [{
            name: 'Name',
            type: 'String'
        }]
    },
    {
        name: 'LinkModel',
        json: { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' },
        properties: [{
            name: 'Href',
            type: 'String'
        },
        {
            name: 'Rel',
            type: 'String'
        },
        {
            name: 'Method',
            type: 'String'
        }]
    },
    {
        name: 'ActionModel',
        type: 'service',
        json: { "Id": 8594, "Acronym": "informou falta" },
        properties: [{
            name: 'Id',
            type: 'Number'
        },
        {
            name: 'Acronym',
            type: 'String'
        }]
    },
    {
        name: 'ChatMessage',
        type: 'hub',
        properties: [{
            name: 'User',
            type: 'People'
        },
        {
            name: 'Message',
            type: 'String'
        },
        {
            name: 'Audio',
            type: 'String'
        },
        {
            name: 'Creation',
            type: 'String'
        }]
    },
    {
        name: 'Error',
        type: 'hub',
        properties: [{
            name: 'Hub',
            type: 'String'
        },
        {
            name: 'Method',
            type: 'String'
        },
        {
            name: 'Message',
            type: 'String'
        }]
    },
    {
        name: 'Group',
        type: 'hub',
        properties: [{
            name: 'Name',
            type: 'String'
        },
        {
            name: 'Peoples',
            type: 'Array(People)'
        },
        {
            name: 'Type',
            type: 'String'
        }]
    },
    {
        name: 'People',
        type: 'hub',
        properties: [{
            name: 'Id',
            type: 'String'
        },
        {
            name: 'ConnectedId',
            type: 'String'
        },
        {
            name: 'Name',
            type: 'String'
        }]
    }];

    seed.initialHubs = [{
        name: 'Chat Messages',
        invokes: [{
            _id: 1,
            name: 'sendMessage',
            parameters: [{
                name: 'message',
                type: 'ChatMessage'
            },
            {
                name: 'group',
                type: 'Group'
            }],
            ons: [{
                name: 'newMessage',
                type: 'success',
                parameters: 'ChatMessage, Group'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 2,
            name: 'joinConversation',
            parameters: [{
                name: 'group',
                type: 'Group'
            },
            {
                name: 'people',
                type: 'People'
            }],
            ons: [{
                name: 'joined',
                type: 'success',
                parameters: 'Group, People'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 3,
            name: 'createConversation',
            parameters: [{
                name: 'group',
                type: 'Group'
            },
            {
                name: 'owner',
                type: 'People'
            },
            {
                name: 'guest',
                type: 'People'
            }],
            ons: [{
                name: 'newConversation',
                type: 'success',
                parameters: 'Group, People, People'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 4,
            name: 'connectChat',
            ons: [{
                name: 'onConnected',
                type: 'success',
                parameters: 'People'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 5,
            name: 'connectedInfo',
            parameters: [{
                name: 'people',
                type: 'People'
            }],
            ons: [{
                name: 'connectedInfo',
                type: 'success',
                parameters: 'People'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            },
            {
                name: 'disconnectedInfo',
                type: 'success',
                parameters: 'People, Group'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 6,
            name: 'disconnectChat'
        }]
    },
    {
        name: 'Communication',
        invokes: [{
            _id: 7,
            name: 'sendCommunication',
            parameters: [{
                name: 'toIds',
                type: 'Array(String)'
            }],
            ons: [{
                name: 'receiveCommunication',
                type: 'success',
                parameters: 'People, Number'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 8,
            name: 'connectedCommunication',
            parameters: [{
                name: 'people',
                type: 'People'
            }],
            ons: [{
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 9,
            name: 'disconnectChat',
            ons: [{
                name: 'disconnectedInfo',
                type: 'success',
                parameters: 'People, Group'
            },
            {
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        }]
    }];

})(module.exports);