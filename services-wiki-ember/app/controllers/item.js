import Ember from 'ember';

var ItemController = Ember.ObjectController.extend({
    needs: ["admin"]
});

export default ItemController;