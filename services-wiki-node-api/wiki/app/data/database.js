(function (database) {
    
    var config = require("../config"),
        mongoUrl = "mongodb://" + config.mongo.uri + "/" + config.mongo.db,
        db = null;
    
    database.getDb = function (next) {
        if (!db) {
            // connect to the database
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    next(null, db);
                }
            });
        } else {
            next(null, db);
        }
    };

    database.url = mongoUrl;

})(module.exports);