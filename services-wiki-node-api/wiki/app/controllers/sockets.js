(function (sockets) {
    
    var repo = require("../data/sockets");

    sockets.init = function (app) {
        
        app.get("/sockets", function (req, res) {
            repo.getSockets(function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/sockets/:name", function (req, res) {
            
            var name = req.params.name;
            
            repo.getSocket(name, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });

        app.get("/sockets/:name/messages", function (req, res) {
            
            var socket = req.params.name;
            
            repo.getMessages(socket, function (err, data) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(data);
                }
            });
        });
		
		app.get("/sockets/:name/messages/:id", function (req, res) {
            
            var socket = req.params.name;
            var id = req.params.id;

            repo.getMessage(socket, id, function (err, data) {
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