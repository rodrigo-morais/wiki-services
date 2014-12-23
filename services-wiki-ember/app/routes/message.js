import Ember from 'ember';

var MessageRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('message', params.socket_id + '-' + params.message_id);
    },
    serialize: function (model) {
        return {
            message_id: model.id,
            socket_id: model.get('socket.name')
        };
    }
});

export default MessageRoute;