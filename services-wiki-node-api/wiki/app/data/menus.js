var Menus = function () {

    var _ = require('underscore'),
        Menu = require('./model/menu'),
        Service = require('./model/service'),
        Model = require('./model/model'),
        Socket = require('./model/socket');
    
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
                        name: 'Services',
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
                    
                    next(addSockets, final, _menus);
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
            
            next(addModelsSockets, final, _menus);
        });
    };
    
    addSockets = function (next, final, _menus) {
        Socket.find({}, null, {sort: {name: 1}}, function (err, sockets) {
            if (err) {
                final(err, null);
            } else {
                if (sockets) {
                    _menus.push({
                        id: "3",
                        name: 'Sockets',
                        type: 'sockets',
                        submenus: []
                    });
                    
                    _.forEach(sockets, function (_socket) {
                        var submenu = {
                            id: _socket.id,
                            name: _socket.name
                        };
                        
                        _menus[1].submenus.push(submenu);
                    });
                    /*
                    _menus[1].submenus = _.sortBy(_menus[1].submenus, function (_submenu) {
                        return _submenu.name;
                    });
                    */
                    next(null, final, _menus);
                }
                else {
                    next({ error: "Sockets doen't exist!" }, null);
                }
            }
        });
    };
    
    addModelsSockets = function (next, final, _menus) {
        Model.find({ type: 'socket' }, function (err, models) {
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