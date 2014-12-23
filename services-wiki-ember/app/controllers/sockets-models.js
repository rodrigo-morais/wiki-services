import Ember from 'ember';

var SocketsModelsController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default SocketsModelsController;