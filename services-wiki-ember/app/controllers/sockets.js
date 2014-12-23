import Ember from 'ember';

var SocketsController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default SocketsController;