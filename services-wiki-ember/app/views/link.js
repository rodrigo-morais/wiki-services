import Ember from 'ember';

var LinkView = Ember.View.extend({
    templateName: "link",
    text: "",
    dataTarget: function () {
        return '#' + this.get('target');
    }.property('target'),
    click: function (event) {
        event.preventDefault();
        
        Ember.$(event.target)
        .toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
        
    }
});

export default LinkView;