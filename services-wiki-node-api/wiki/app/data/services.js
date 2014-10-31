var Services = function () {
    var _ = require('underscore'),
        Service = require('./model/service');

    var _getServices = function (next) {
        Service.find({}, function (error, services) {
            if (error) {
                next(error, null);
            } else {
                
                var _services = [];
                
                _.forEach(services, function (_service) {
                    var service = {
                        _id: _service._id,
                        name: _service.name,
                        routePrefix: _service.routePrefix,
                        httpVerbs: _service.httpVerbs
                    };
                    _services.push(service);
                });
                
                _services = _.sortBy(_services, function (_service) {
                    return _service._id;
                });
                
                next(null, _services);
            }
        });
    };

    var _getService = function (name, next) {
        Service.findOne({ name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } }, function (error, service) {
            if (error) {
                next(error, null);
            } else {
                    
                if (service) {
                    next(null, service);
                }
                else {
                    next({ error: "Service '" + name + "' doesn't exist" }, null);
                } 
            }
        });
    };
    
    var _getHttpVerbs = function (name, next) {
        Service.findOne({ name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } }, function (error, service) {
            if (error) {
                next(error, null);
            } else {
                
                if (service) {
                    var _httpVerbs = _.map(service.httpVerbs, function (verb) {
                        return {
                            _id: verb._id,
                            verb: verb.verb,
                            route: verb.route,
                            parameters: verb.parameters,
                            returns: verb.returns,
                            service: verb.service
                        };
                    });

                    next(null, _httpVerbs);
                }
                else {
                    next({ error: "Service '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };
    
    var _getHttpVerb = function (name, id, next) {
        Service.findOne({ name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } }, function (error, service) {
            if (error) {
                next(error, null);
            } else {
                if (service) {
                    var _httpVerb = _.find(service.httpVerbs, function (httpVerb) {
                        if (httpVerb === undefined || httpVerb._id === undefined) {
                            return false;
                        }
                        return httpVerb._id.toString() === id;
                    });
                    if (_httpVerb) {
                        next(null, _httpVerb);
                    }
                    else {
                        next({ error: "Service '" + name + "' doesn't have HTTP verb '" + id + "'" }, null);
                    }
                }
                else {
                    next({ error: "Service '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };

    return {
        model : Service,
        getServices : _getServices,
        getService : _getService,
        getHttpVerbs : _getHttpVerbs,
        getHttpVerb : _getHttpVerb
    };
}();

module.exports = Services;