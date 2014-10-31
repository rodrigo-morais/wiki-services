﻿(function (models) {
    
    var repo = require("../data/models"),
        _ = require('underscore');

    models.init = function (app) {
        
        app.get("/services/models", function (req, res) {
            repo.getModelsByServices(function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    
                    res.send(data);
                }
            });
        });

        app.get("/services/models/:model", function (req, res) {
            
            var model = req.params.model;

            repo.getModelByServices(model, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/hubs/models", function (req, res) {
            repo.getModelsByHubs(function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/hubs/models/:model", function (req, res) {

            var model = req.params.model;

            repo.getModelByHubs(model, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });
    };

})(module.exports);