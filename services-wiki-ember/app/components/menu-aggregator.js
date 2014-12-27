import Ember from 'ember';

var MenuAggregatorView = Ember.Component.extend({
    text: "",
    dataTarget: function () {
        return '#' + this.get('target');
    }.property('target'),
    isOpen: false,
    actions: {
        toggleBody: function () {
            this.toggleProperty('isOpen');
        }
    }
});

export default MenuAggregatorView;