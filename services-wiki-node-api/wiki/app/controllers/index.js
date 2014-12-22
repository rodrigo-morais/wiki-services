(function (controllers) {
    
        var models = require("./models"),
            services = require("./services"),
            sockets = require("./sockets"),
            menus = require("./menus"),
            errors = require('./errors');
        
    
    controllers.init = function (app) {
        models.init(app);
        services.init(app);
        sockets.init(app);
        menus.init(app);
        errors(app);
    };

})(module.exports);