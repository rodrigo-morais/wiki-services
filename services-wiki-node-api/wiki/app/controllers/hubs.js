(function (hubs) {
    
    var repo = require("../data/hubs");

    hubs.init = function (app) {
        
        app.get("/hubs", function (req, res) {
            repo.getHubs(function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/hubs/:name", function (req, res) {
            
            var name = req.params.name;
            
            repo.getHub(name, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/hubs/:name/invokes", function (req, res) {
            
            var hub = req.params.name;
            
            repo.getInvokes(hub, function (err, data) {
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