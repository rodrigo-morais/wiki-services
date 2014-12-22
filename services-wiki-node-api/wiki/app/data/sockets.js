var Sockets = function () {
    var _ = require('underscore'),
        Socket = require('./model/socket');
    
    var _getSockets = function (next) {
        Socket.find({}, null, {sort: {name: 1}}, function (error, sockets) {
            if (error) {
                next(error, null);
            } else {
                
                /*var _sockets = [];

                _sockets = _.sortBy(sockets, function (_socket) {
                    return _sockets.name;
                });*/
                
                next(null, sockets);
            }
        });
    };
    
    var _getSocket = function (name, next) {
        var query = { "_id": name };
        
        if (isNaN(name)) {
            query = { name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } };
        }
        Socket.findOne(query, function (err, socket) {
            if (err) {
                next(err, null);
            } else {
                if (socket) {
                    next(null, socket);
                }
                else {
                    next({ error: "Socket '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };
    
    var _getMessages = function (name, next) {
        Socket.findOne({ name: { $regex: new RegExp(["^",name,"$"].join(""), "i") } }, function (err, socket) {
            if (err) {
                next(err, null);
            } else {
                
                if (socket) {
                    var messages = _.map(socket.messages, function (message) {
                        return {
                            id: message.id,
                            name: message.name,
                            parameters: message.parameters,
                            events: message.events,
                            socket: socket.id
                        };
                    });
                    
                    next(null, messages);
                }
                else {
                    next({ error: "Socket '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };
	
	var _getMessage = function (name, id, next) {
        Socket.findOne({ name: { $regex : new RegExp(["^",name,"$"].join(""), "i") } }, function (error, socket) {
            if (error) {
                next(error, null);
            } else {
                if (socket) {
                    var _message = _.find(socket.messages, function (message) {
                        if (message === undefined || message.id === undefined) {
                            return false;
                        }
                        return message.id.toString() === id;
                    });

                    if (_message) {
                        next(null, _message);
                    }
                    else {
                        next({ error: "Socket '" + name + "' doesn't have message '" + id + "'" }, null);
                    }
                }
                else {
                    next({ error: "Socket '" + name + "' doesn't exist" }, null);
                }
            }
        });
    };

    return {
        model : Socket,
        getSockets : _getSockets,
        getSocket : _getSocket,
        getMessages : _getMessages,
        getMessage : _getMessage
    };
}();

module.exports = Sockets;