var Menus = function () {

    var _ = require('underscore'),
        Menu = require('./model/menu'),
        Service = require('./model/service'),
        Model = require('./model/model'),
        Hub = require('./model/hub');
    
    var _getMenus = function (next) {
        var _menus = [];
        
        addServices(addModelsServices, next, _menus);
    };
    
    addServices = function (next, final, _menus) {
        Service.find({}, function (err, services) {
            if (err) {
                final(err, null);
            } else {
                if (services) {
                    var _services = [];
                    
                    _menus.push({
                        id: "1",
                        name: 'Serviços',
                        type: 'services',
                        submenus: []
                    });
                    
                    _.forEach(services, function (_service) {
                        var submenu = {
                            id: _service.id,
                            name: _service.name
                        };

                        _services.push(submenu);
                    });
                    
                    _services = _.sortBy(_services, function (_submenu) {
                        return _submenu.name;
                    });
                    
                    _menus[0].submenus = _services;
                    
                    next(addHubs, final, _menus);
                }
                else {
                    next({ error: "Services doen't exist!" }, null);
                }
            }
        });
    };
    
    addModelsServices = function (next, final, _menus) {
        Model.find({ type: 'service' }, function (err, models) {
            if (err) {
                final(err, null);
            } else {
                if (models) {
                    var _menuModel = {
                        id: "2",
                        name: 'Modelos',
                        type: 'models',
                        submenus: []
                    };
                    
                    _.forEach(models, function (_model) {
                        var submenu = {
                            id: _model.id,
                            name: _model.name
                        };
                        
                        _menuModel.submenus.push(submenu);
                    });
                    
                    _menuModel.submenus = _.sortBy(_menuModel.submenus, function (_submenu) {
                        return _submenu.name;
                    });
                    
                    _menus[0].submenus.push(_menuModel);
                }
                else {
                    next({ error: "Models doen't exist!" }, null);
                }
            }
            
            next(addModelsHubs, final, _menus);
        });
    };
    
    addHubs = function (next, final, _menus) {
        Hub.find({}, function (err, hubs) {
            if (err) {
                final(err, null);
            } else {
                if (hubs) {
                    _menus.push({
                        id: "3",
                        name: 'Hubs',
                        type: 'hubs',
                        submenus: []
                    });
                    
                    _.forEach(hubs, function (_hub) {
                        var submenu = {
                            id: _hub.id,
                            name: _hub.name
                        };
                        
                        _menus[1].submenus.push(submenu);
                    });
                    
                    _menus[1].submenus = _.sortBy(_menus[1].submenus, function (_submenu) {
                        return _submenu.name;
                    });
                    
                    next(null, final, _menus);
                }
                else {
                    next({ error: "Hubs doen't exist!" }, null);
                }
            }
        });
    };
    
    addModelsHubs = function (next, final, _menus) {
        Model.find({ type: 'hub' }, function (err, models) {
            if (err) {
                final(err, null);
            } else {
                if (models) {
                    var _menuModel = {
                        id: "4",
                        name: 'Modelos',
                        type: 'models',
                        submenus: []
                    };
                    
                    _.forEach(models, function (_model) {
                        var submenu = {
                            id: _model.id,
                            name: _model.name
                        };
                        
                        _menuModel.submenus.push(submenu);
                    });
                    
                    _menuModel.submenus = _.sortBy(_menuModel.submenus, function (_submenu) {
                        return _submenu.name;
                    });
                    
                    _menus[1].submenus.push(_menuModel);
                }
            }
            
            final(null, _menus);
        });
    };
    
    return {
        model : Menu,
        getMenus : _getMenus
    };
}();

module.exports = Menus;