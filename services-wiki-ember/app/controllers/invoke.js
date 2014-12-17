import Ember from 'ember';

var InvokeController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default InvokeController;