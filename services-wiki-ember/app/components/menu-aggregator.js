import Ember from 'ember';

var MenuAggregatorView = Ember.Component.extend({
    text: "",
    dataTarget: function () {
        return '#' + this.get('target');
    }.property('target'),
    iconRight: 'glyphicon glyphicon-chevron-right',
    iconDown: 'glyphicon glyphicon-chevron-right',
    isOpen: false,
    actions: {
        toggleBody: function (event) {
            this.toggleProperty('isOpen');
            console.log(this.isOpen);
        }
    }
});

export default MenuAggregatorView;