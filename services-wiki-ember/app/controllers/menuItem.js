import Ember from 'ember';

var MenuItemController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default MenuItemController;