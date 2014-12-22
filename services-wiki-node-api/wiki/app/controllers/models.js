(function (models) {
    
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

        app.get("/sockets/models", function (req, res) {
            repo.getModelsBySockets(function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/sockets/models/:model", function (req, res) {

            var model = req.params.model;

            repo.getModelBySockets(model, function (err, data) {
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