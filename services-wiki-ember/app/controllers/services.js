import Ember from 'ember';

var ServicesController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default ServicesController;