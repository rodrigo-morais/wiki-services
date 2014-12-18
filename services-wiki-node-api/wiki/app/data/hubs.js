var Hubs = function () {
    var _ = require('underscore'),
        Hub = require('./model/hub');
    
    var _getHubs = function (next) {
        Hub.find({}, function (error, hubs) {
            if (error) {
                next(error, null);
            } else {
                
                var _hubs = [];

                _hubs = _.sortBy(hubs, function (_hub) {
                    return _hub._id;
                });
                
                next(null, _hubs);
            }
        });
    };
    
    var _getHub = function (name, next) {
        var query = { "_id": name };
        
        if (isNaN(name)) {
            query = { name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } };
        }
        Hub.findOne(query, function (err, hub) {
            if (err) {
                next(err, null);
            } else {
                if (hub) {
                    next(null, hub);
                }
                else {
                    next({ error: "Hub '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };
    
    var _getInvokes = function (name, next) {
        Hub.findOne({ name: { $regex: new RegExp(["^",name,"$"].join(""), "i") } }, function (err, hub) {
            if (err) {
                next(err, null);
            } else {
                
                if (hub) {
                    var invokes = _.map(hub.invokes, function (invoke) {
                        return {
                            id: invoke.id,
                            name: invoke.name,
                            parameters: invoke.parameters,
                            ons: invoke.ons,
                            hub: hub.id
                        };
                    });
                    
                    next(null, invokes);
                }
                else {
                    next({ error: "Hub '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };
	
	var _getInvoke = function (name, id, next) {
        Hub.findOne({ name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } }, function (error, hub) {
            if (error) {
                next(error, null);
            } else {
                if (hub) {
                    var _invoke = _.find(hub.invokes, function (invoke) {
                        if (invoke === undefined || invoke.id === undefined) {
                            return false;
                        }
                        return invoke.id.toString() === id;
                    });

                    if (_invoke) {
                        next(null, _invoke);
                    }
                    else {
                        next({ error: "Hub '" + name + "' doesn't have invoke '" + id + "'" }, null);
                    }
                }
                else {
                    next({ error: "Hub '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };

    return {
        model : Hub,
        getHubs : _getHubs,
        getHub : _getHub,
        getInvokes : _getInvokes,
        getInvoke : _getInvoke
    };
}();

module.exports = Hubs;