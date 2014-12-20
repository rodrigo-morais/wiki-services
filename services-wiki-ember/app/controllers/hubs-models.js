import Ember from 'ember';

var HubsModelsController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default HubsModelsController;