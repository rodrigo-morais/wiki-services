import Ember from 'ember';

var ServicesModelsController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default ServicesModelsController;