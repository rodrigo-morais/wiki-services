(function (controllers) {
    
        var models = require("./models"),
            services = require("./services"),
            hubs = require("./hubs"),
            menus = require("./menus"),
            errors = require('./errors');
        
    
    controllers.init = function (app) {
        models.init(app);
        services.init(app);
        hubs.init(app);
        menus.init(app);
        errors(app);
    };

})(module.exports);