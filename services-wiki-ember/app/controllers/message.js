import Ember from 'ember';

var MessageController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default MessageController;