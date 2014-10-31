(function (menus) {
    
    var repo = require("../data/menus"),
        _ = require('underscore');

    menus.init = function (app) {
        
        app.get("/menus", function (req, res) {
            var menu = [];
            
            repo.getMenus(function (err, data) {
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