(function (seed) {
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
                message: 'Error to find communicatievents: ...'
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
                message: 'Error to find communicatievents: ...'
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
            _id: '1',
            name: 'Id',
            type: 'Number'
        },
        {
            _id: '2',
            name: 'Participants',
            type: 'Array(PeopleModel)'
        },
        {
            _id: '3',
            name: 'QuantityNotRead',
            type: 'Number'
        },
        {
            _id: '4',
            name: 'Date',
            type: 'String'
        },
        {
            _id: '5',
            name: 'Messages',
            type: 'LinkModel'
        },
        {
            _id: '6',
            name: 'Url',
            type: 'LinkModel'
        },
        {
            _id: '7',
            name: 'LastMessage',
            type: 'ChatMessageModel'
        }]
    },
    {
        name: 'ChatMessageModel',
        type: 'service',
        json: { 'Id': 10715, 'Text': 'Again', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T20:20:15.58', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10715/messages', 'Rel': 'self', 'Method': 'GET' } },
        properties: [{
            _id: '8',
            name: 'Id',
            type: 'String'
        },
        {
            _id: '9',
            name: 'Text',
            type: 'String'
        },
        {
            _id: '10',
            name: 'Audio',
            type: 'String'
        },
        {
            _id: '11',
            name: 'AudioTime',
            type: 'String'
        },
        {
            _id: '12',
            name: 'Date',
            type: 'String'
        },
        {
            _id: '13',
            name: 'Author',
            type: 'PeopleModel'
        },
        {
            _id: '14',
            name: 'Read',
            type: 'Boolean'
        },
        {
            _id: '15',
            name: 'Device',
            type: 'Number'
        },
        {
            _id: '16',
            name: 'Url',
            type: 'LinkModel'
        }]
    },
    {
        name: 'ChatMessagesModel',
        type: 'service',
        json: [{ 'Id': 10715, 'Text': 'Again', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T20:20:15.58', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10715/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10709, 'Text': 'Ok', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T20:10:54.83', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10709/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10653, 'Text': 'Tive que repousar aqui agora', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:16:22.67', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10653/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10651, 'Text': 'Blá mas aqui ta zendando', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:15:55.123', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10651/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10649, 'Text': 'Eu tbm', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:15:45.31', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10649/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10647, 'Text': 'Eu vi', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:15:31.64', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10647/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10645, 'Text': 'B', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:13:14.657', 'Author': { 'Id': 1390, 'Name': 'Fernando', 'Image': 'http://localhost:28803/uploads/people/14-35-35-307-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10645/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10643, 'Text': 'A', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:09:20.483', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10643/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10641, 'Text': 'Uol', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:09:15.42', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10641/messages', 'Rel': 'self', 'Method': 'GET' } }, { 'Id': 10639, 'Text': 'Vazou', 'Audio': 'null', 'AudioTime': 'null', 'Date': '2014-07-15T18:09:05.42', 'Author': { 'Id': 1383, 'Name': 'Danilo', 'Image': 'http://localhost:28803/uploads/people/20-45-32-225-0.png', 'Conversations': { 'Href': 'http://localhost:28803/peoples/1383/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' } }, 'Read': true, 'Device': 6, 'Url': { 'Href': 'http://localhost:28803/peoples/1390/conversations/10639/messages', 'Rel': 'self', 'Method': 'GET' } }],
        properties: [{
            _id: '17',
            name: 'Links',
            type: 'Array(LinkModel)'
        },
        {
            _id: '18',
            name: 'TotalCount',
            type: 'Number'
        },
        {
            _id: '19',
            name: 'TotalPages',
            type: 'Number'
        },
        {
            _id: '20',
            name: 'ChatMessages',
            type: 'Array(ChatMessage)'
        }]
    },
    {
        name: 'CommunicationModel',
        type: 'service',
        json: { "Id": 271868, "LatestNews": [{ "Id": 271868, "Path": "History > History > History", "ActionClass": null, "CreateAt": "14/07/2014 16:47:22", "Author": { "Id": 0, "Name": null, "Image": null, "Conversations": null }, "Origin": { "Id": "29", "Description": "" }, "Action": { "Id": 8594, "Acronym": "informou falta" }, "About": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } }, "Teacher": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } } }], "LatestAlerts": [], "LatestStripes": [], "TotalNews": 1, "TotalAlerts": 0, "TotalStripes": 0 },
        properties: [{
            _id: '21',
            name: 'Id',
            type: 'Number'
        },
        {
            _id: '22',
            name: 'LatestNews',
            type: 'Array(News)'
        },
        {
            _id: '23',
            name: 'LatestAlerts',
            type: 'Array(Alert)'
        },
        {
            _id: '24',
            name: 'LatestStripes',
            type: 'Array(Stripe)'
        },
        {
            _id: '25',
            name: 'TotalAlerts',
            type: 'Number'
        },
        {
            _id: '26',
            name: 'TotalNews',
            type: 'Number'
        },
        {
            _id: '27',
            name: 'TotalNews',
            type: 'Number'
        },
        {
            _id: '28',
            name: 'TotalNews',
            type: 'Number'
        },
        {
            _id: '29',
            name: 'TotalStripes',
            type: 'Number'
        }]
    },
    {
        name: 'NewsModel',
        type: 'service',
        json: { "Id": 271868, "Path": "History > History > History", "ActionClass": null, "CreateAt": "14/07/2014 16:47:22", "Author": { "Id": 0, "Name": null, "Image": null, "Conversations": null }, "Origin": { "Id": "29", "Description": "" }, "Action": { "Id": 8594, "Acronym": "informou falta" }, "About": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } }, "Teacher": { "Id": 1793, "Name": "Luana", "Image": "http://localhost:28803/uploads/people/15-55-10-897-1793.png", "Conversations": { "Href": "http://localhost:28803/peoples/1793/conversations/environment/6", "Rel": "listConversations", "Method": "GET" } } },
        properties: [{
            _id: '30',
            name: 'Id',
            type: 'Number'
        },
        {
            _id: '31',
            name: 'Path',
            type: 'String'
        },
        {
            _id: '32',
            name: 'ActionClass',
            type: 'ActionModel'
        },
        {
            _id: '32',
            name: 'CreateAt',
            type: 'String'
        },
        {
            _id: '33',
            name: 'Author',
            type: 'PeopleModel'
        },
        {
            _id: '34',
            name: 'Origin',
            type: 'OriginModel'
        },
        {
            _id: '35',
            name: 'Action',
            type: 'ActionModel'
        },
        {
            _id: '36',
            name: 'About',
            type: 'PeopleModel'
        },
        {
            _id: '37',
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
            _id: '38',
            name: 'Id',
            type: 'Number'
        },
        {
            _id: '39',
            name: 'Description',
            type: 'String'
        },
        {
            _id: '40',
            name: 'Origin',
            type: 'OriginModel'
        },
        {
            _id: '41',
            name: 'Observation',
            type: 'String'
        },
        {
            _id: '42',
            name: 'CreateAt',
            type: 'DateTime'
        },
        {
            _id: '43',
            name: 'Author',
            type: 'PeopleModel'
        },
        {
            _id: '44',
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
            _id: '45',
            name: 'Id',
            type: 'Number'
        },
        {
            _id: '46',
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
            _id: '47',
            name: 'Name',
            type: 'String'
        }]
    },
    {
        name: 'LinkModel',
        json: { 'Href': 'http://localhost:28803/peoples/1390/conversations/environment/6', 'Rel': 'listConversations', 'Method': 'GET' },
        properties: [{
            _id: '48',
            name: 'Href',
            type: 'String'
        },
        {
            _id: '49',
            name: 'Rel',
            type: 'String'
        },
        {
            _id: '50',
            name: 'Method',
            type: 'String'
        }]
    },
    {
        name: 'ActionModel',
        type: 'service',
        json: { "Id": 8594, "Acronym": "informou falta" },
        properties: [{
            _id: '51',
            name: 'Id',
            type: 'Number'
        },
        {
            _id: '52',
            name: 'Acronym',
            type: 'String'
        }]
    },
    {
        name: 'ChatMessage',
        type: 'socket',
        properties: [{
            _id: '53',
            name: 'User',
            type: 'People'
        },
        {
            _id: '54',
            name: 'Message',
            type: 'String'
        },
        {
            _id: '55',
            name: 'Audio',
            type: 'String'
        },
        {
            _id: '56',
            name: 'Creation',
            type: 'String'
        }]
    },
    {
        name: 'Error',
        type: 'socket',
        properties: [{
            _id: '57',
            name: 'Socket',
            type: 'String'
        },
        {
            _id: '58',
            name: 'Method',
            type: 'String'
        },
        {
            _id: '59',
            name: 'Message',
            type: 'String'
        }]
    },
    {
        name: 'Group',
        type: 'socket',
        properties: [{
            _id: '60',
            name: 'Name',
            type: 'String'
        },
        {
            _id: '61',
            name: 'Peoples',
            type: 'Array(People)'
        },
        {
            _id: '62',
            name: 'Type',
            type: 'String'
        }]
    },
    {
        name: 'People',
        type: 'socket',
        properties: [{
            _id: '63',
            name: 'Id',
            type: 'String'
        },
        {
            _id: '64',
            name: 'ConnectedId',
            type: 'String'
        },
        {
            _id: '65',
            name: 'Name',
            type: 'String'
        }]
    }];

    seed.initialSockets = [{
        _id: '1',
        name: 'Chat Messages',
        messages: [{
            _id: 1,
            name: 'sendMessage',
            socket: '1',
            parameters: [{
                _id: '1',
                name: 'message',
                type: 'ChatMessage'
            },
            {
                _id: '2',
                name: 'group',
                type: 'Group'
            }],
            events: [{
                _id: '1',
                name: 'newMessage',
                type: 'success',
                parameters: 'ChatMessage, Group'
            },
            {
                _id: '2',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 2,
            name: 'joinConversation',
            socket: '1',
            parameters: [{
                _id: '3',
                name: 'group',
                type: 'Group'
            },
            {
                _id: '4',
                name: 'people',
                type: 'People'
            }],
            events: [{
                _id: '3',
                name: 'joined',
                type: 'success',
                parameters: 'Group, People'
            },
            {
                _id: '4',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 3,
            name: 'createConversation',
            socket: '1',
            parameters: [{
                _id: '5',
                name: 'group',
                type: 'Group'
            },
            {
                _id: '6',
                name: 'owner',
                type: 'People'
            },
            {
                _id: '7',
                name: 'guest',
                type: 'People'
            }],
            events: [{
                _id: '5',
                name: 'newConversation',
                type: 'success',
                parameters: 'Group, People, People'
            },
            {
                _id: '6',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 4,
            name: 'connectChat',
            socket: '1',
            events: [{
                _id: '7',
                name: 'onConnected',
                type: 'success',
                parameters: 'People'
            },
            {
                _id: '8',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 5,
            name: 'connectedInfo',
            socket: '1',
            parameters: [{
                _id: '8',
                name: 'people',
                type: 'People'
            }],
            events: [{
                _id: '9',
                name: 'connectedInfo',
                type: 'success',
                parameters: 'People'
            },
            {
                _id: '10',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            },
            {
                _id: '11',
                name: 'disconnectedInfo',
                type: 'success',
                parameters: 'People, Group'
            },
            {
                _id: '12',
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
        _id: '2',
        name: 'Communication',
        messages: [{
            _id: 7,
            name: 'sendCommunication',
            socket: '2',
            parameters: [{
                _id: '9',
                name: 'toIds',
                type: 'Array(String)'
            }],
            events: [{
                _id: '13',
                name: 'receiveCommunication',
                type: 'success',
                parameters: 'People, Number'
            },
            {
                _id: '14',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 8,
            name: 'connectedCommunication',
            socket: '2',
            parameters: [{
                _id: '10',
                name: 'people',
                type: 'People'
            }],
            events: [{
                _id: '15',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        },
        {
            _id: 9,
            name: 'disconnectChat',
            socket: '2',
            events: [{
                _id: '16',
                name: 'disconnectedInfo',
                type: 'success',
                parameters: 'People, Group'
            },
            {
                _id: '17',
                name: 'onError',
                type: 'fail',
                parameters: 'Error'
            }]
        }]
    }];

})(module.exports);