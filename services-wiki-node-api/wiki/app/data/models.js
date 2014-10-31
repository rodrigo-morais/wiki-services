var Models = function () {
    var _ = require('underscore'),
        Model = require('./model/model');
    
    var _getModelsByServices = function (next) {
        Model.find({ type: 'service' }, function (err, models) {
            if (err) {
                next(err, null);
            } else {
                if (models) {
                    
                    var _models = [];
                    
                    _models = _.sortBy(models, function (_model) {
                        return _model.name;
                    });
                    next(null, _models);
                }
                else {
                    next({ error: "Models not found for services!" }, null);
                }
            }
        });
    };
    
    var _getModelsByHubs = function (next) {
        Model.find({ type: 'hub' }, function (err, models) {
            if (err) {
                next(err, null);
            } else {
                if (models) {
                    
                    var _models = [];
                    
                    _models = _.sortBy(models, function (_model) {
                        return _model.name;
                    });
                    next(null, _models);
                }
                else {
                    next({ error: "Models not found for hubs!" }, null);
                }
            }
        });
    };
    
    var _getModelByServices = function (name, next) {
        Model.findOne({ type: 'service', name: { $regex: new RegExp(["^",name,"$"].join(""), "i") } }, function (err, model) {
            if (err) {
                next(err, null);
            } else {
                if (model) {
                    next(null, model);
                }
                else {
                    next({ error: "Model '" + name + "' doesn't exist for services." }, null);
                }
            }
        });
    };
    
    var _getModelByHubs = function (name, next) {
        Model.findOne({ type: 'hub', name: { $regex: new RegExp(["^",name,"$"].join(""), "i") } }, function (err, model) {
            if (err) {
                next(err, null);
            } else {
                if (model) {
                    next(null, model);
                }
                else {
                    next({ error: "Model '" + name + "' doesn't exist for hubs." }, null);
                }
            }
        });
    };
    
    return {
        model : Model,
        getModelsByServices : _getModelsByServices,
        getModelByServices : _getModelByServices,
        getModelsByHubs : _getModelsByHubs,
        getModelByHubs : _getModelByHubs
    };
}();

module.exports = Models;