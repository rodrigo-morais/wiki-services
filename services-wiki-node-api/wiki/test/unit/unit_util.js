var services = require('../../app/data/services'),
    sockets = require('../../app/data/sockets'),
    models = require('../../app/data/models'),
    should = require('should'),
    sinon = require('sinon');

before(function () {
    var filter = {};
    sinon.stub(services.model, 'find', function (filter, callback) {
        var results = [{
            id: 99993,
            name: 'Service 3',
            httpVerbs: []
        },
                {
            id: 99991,
            name: 'Service 1',
            httpVerbs: [{ _id: 1 }, { _id: 2 }]
        },
                {
            id: 99992,
            name: 'Service 2',
            httpVerbs: []
        }];
        
        callback(null, results);
    });

    
    sinon.stub(services.model, 'findOne', function (name, callback) {
        var result = null;

        if (isFinite(name._id) && name._id === 99991) {
            result = {
                _id: 99991,
                httpVerbs: [{ id: 1 }, { id: 2 }, { id: 3 }]
            };
        }
        else if (isFinite(name._id) && name._id === 99992) {
            result = {
                _id: 99992,
                httpVerbs: []
            };
        }
        else if (name.name !== undefined && name.name.$regex.toString().indexOf('Not Verbs') > -1) {
            result = {
                _id: 99991,
                httpVerbs: []
            };
        }
        else if ((name.name !== undefined) && (name.name.$regex.toString().indexOf('Test') > -1 ||
            name.name.$regex.toString().indexOf('Verbs') > -1)) {
            result = {
                _id: 99991,
                httpVerbs: [{ id: 1 }, { id: 2 }, { id: 3 }]
            };
        }
        
        callback(null, result);
    });

    sinon.stub(sockets.model, 'find', function (filter, blank, sort, callback) {
        var results = [{
            _id: 88881,
            name: 'First Socket',
            messages: []
        },
		{
            _id: 88882,
            name: 'Second Socket',
            messages: [{ _id: 1 }, { _id: 2 }]
        }];
        
        callback(null, results);
    });

    sinon.stub(sockets.model, 'findOne', function (name, callback) {
        var result = null;
        
        if (name.name.$regex.toString().indexOf('Socket with Messages Test') > -1) {
            result = {
                _id: 99995,
                messages: [{ _id: 1, }, {_id: 2}]
            };
        }
        else if (name.name.$regex.toString().indexOf('Socket Test') > -1) {
            result = {
                _id: 99995,
                messages: []
            };
        }
        else {
            result = null;
        }
        
        callback(null, result);
    });


    sinon.stub(models.model, 'find', function (filter, callback) {
        var results = [];
        if (filter.type === 'service') {
            results = [{
                name: 'Integration',
                type: 'service',
                properties: [{ _id: 1 }, { _id: 2 }]
            },
            {
                name: 'Communication',
                type: 'service',
                properties: []
            }];
        }
        else {
            results = [{
                name: 'C model',
                type: 'socket',
                properties: [{ _id: 1 }, { _id: 2 }]
            },
            {
                name: 'A model',
                type: 'socket',
                properties: []
            },
            {
                name: 'Z model',
                type: 'socket',
                properties: []
            },
            {
                name: 'B model',
                type: 'socket',
                properties: []
            }];
        }
        
        callback(null, results);
    });

    sinon.stub(models.model, 'findOne', function (name, callback) {
        var result = null;
        
        if (name.name.$regex.toString().indexOf('Communication') > -1) {
            result = {
                name: 'Communication',
                type: 'service',
                properties: []
            };
        }
        else if (name.name.$regex.toString().indexOf('B model') > -1) {
            result = {
                name: 'B model',
                type: 'socket',
                properties: []
            };
        }
        else {
            result = null;
        }
        
        callback(null, result);
    });
});