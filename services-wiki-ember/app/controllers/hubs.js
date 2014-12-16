import Ember from 'ember';

var HubsController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default HubsController;