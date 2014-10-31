(function (services) {
    
    var repo = require("../data/services");

    services.init = function (app) {
        
        app.get("/services", function (req, res) {
            repo.getServices(function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(200, data);
                }
            });
        });

        app.get("/services/:name", function (req, res) {
            
            var name = req.params.name;
            
            repo.getService(name, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(200, data);
                }
            });
        });
        
        app.get("/services/:name/httpVerbs", function (req, res) {
            
            var service = req.params.name;
            
            repo.getHttpVerbs(service, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(200, data);
                }
            });
        });

        app.get("/services/:name/httpVerbs/:id", function (req, res) {
            
            var service = req.params.name;
            var id = req.params.id;

            repo.getHttpVerb(service, id, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(200, data);
                }
            });
        });
    };

})(module.exports);