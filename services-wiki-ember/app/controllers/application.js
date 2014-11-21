import Ember from 'ember';

var ApplicationController = Ember.ObjectController.extend({
    needs: ["admin", "menu"]
});

export default ApplicationController;