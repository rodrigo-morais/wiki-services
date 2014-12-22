(function (data) {
    
    var _seed = require("./seed"),
        _database = require("./database"),
        _db = null,
        mongoose = require('mongoose');
    
    data.getDB = function () {
        return _db;
    };
    
    function seedDatabase() {
        mongoose.connect(_database.url, function (err) {
            if (err) {
                console.log('Error to connect a database: ' + err);
            }
            
            _db = mongoose.connection.db;
            
            _db.collection("services").count(function (err, count) {
                if (err) {
                    console.log("Failed to retrieve services count: " + err);
                } else {
                    if (count === 0) {
                        console.log("Seeding services the Database...");
                        _seed.initialServices.forEach(function (item) {
                            _db.collection("services").insert(item, function (err) {
                                if (err) console.log("Failed to insert services into database");
                            });
                        });
                    } else {
                        console.log("Services already seeded");
                    }
                }
            });

            _db.collection("models").count(function (err, count) {
                if (err) {
                    console.log("Failed to retrieve models count: " + err);
                } else {
                    if (count === 0) {
                        console.log("Seeding models the Database...");
                        _seed.initialModels.forEach(function (item) {
                            _db.collection("models").insert(item, function (err) {
                                if (err) console.log("Failed to insert model into database");
                            });
                        });
                    } else {
                        console.log("Models already seeded");
                    }
                }
            });
            
            _db.collection("sockets").count(function (err, count) {
                if (err) {
                    console.log("Failed to retrieve sockets count: " + err);
                } else {
                    if (count === 0) {
                        console.log("Seeding sockets the Database...");
                        _seed.initialSockets.forEach(function (item) {
                            _db.collection("sockets").insert(item, function (err) {
                                if (err) console.log("Failed to insert socket into database");
                            });
                        });
                    } else {
                        console.log("Sockets already seeded");
                    }
                }
            });
        });

    }

    seedDatabase();

})(module.exports);