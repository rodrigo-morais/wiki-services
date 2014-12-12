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
        Hub.findOne({ name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } }, function (err, hub) {
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

    return {
        model : Hub,
        getHubs : _getHubs,
        getHub : _getHub,
        getInvokes : _getInvokes
    };
}();

module.exports = Hubs;