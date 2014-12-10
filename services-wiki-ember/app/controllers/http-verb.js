import Ember from 'ember';

var HttpVerbController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default HttpVerbController;