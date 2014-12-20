import Ember from 'ember';

var LinkView = Ember.View.extend({
    templateName: "link",
    text: "",
    dataTarget: function () {
        return '#' + this.get('target');
    }.property('target'),
    click: function (event) {
        event.preventDefault();
        var element;

        if(Ember.$(event.target).is('i')){
            element = Ember.$(event.target);
        }
        else{
            element = Ember.$(event.target).find('i');
        }

        element
        .toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
        
    }
});

export default LinkView;