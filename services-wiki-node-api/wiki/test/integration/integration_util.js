(function () {
    'use strict';
    
    process.env.NODE_ENV = 'test';
    
    var mongoose = require('mongoose'),
        config = require('../../app/config'),
        dbUri = 'mongodb://' + config.mongo.uri + '/' + config.mongo.db,
        services = require('../../app/data/services'),
        sockets = require('../../app/data/sockets'),
        models = require('../../app/data/models'),
        _ = require("underscore"),
        cjson = require('cjson'),
        fakeServices = cjson.load('./test/integration/fakes/services.json'),
        fakeSockets = cjson.load('./test/integration/fakes/sockets.json'),
        fakeModels = cjson.load('./test/integration/fakes/models.json'),
        should = require('should');
    
    before(function (done) {
        
        mongoose.connect(dbUri);
        
        _.forEach(fakeServices, function (_fakeService) {
            
            var service = new services.model(_fakeService);
            
            service.save(function (err, service) {
                if (err) {
                    console.log('-- ---------- err service ----------- --');
                    console.log(err);
                    console.log('-- ---------- err service ----------- --');
                }
            });

        });
        
        _.forEach(fakeSockets, function (_fakeSocket) {
            
            var socket = new sockets.model(_fakeSocket);
            
            socket.save(function (err, socket) {
                if (err) {
                    console.log('-- ---------- err socket ----------- --');
                    console.log(err);
                    console.log('-- ---------- err socket ----------- --');
                }
            });

        });
        
        _.forEach(fakeModels, function (_fakeModel) {
            
            var model = new models.model(_fakeModel);
            
            model.save(function (err, model) {
                if (err) {
                    console.log('-- ---------- err model ----------- --');
                    console.log(err);
                    console.log('-- ---------- err model ----------- --');
                }
            });

        });
        
        done();
    });
    
    after(function (done) {
        mongoose.connection.db.dropDatabase();
        done();
    });
})();