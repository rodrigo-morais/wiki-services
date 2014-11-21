import Ember from 'ember';

var LinkNavHeaderView = Ember.View.extend({
    templateName: "linkNavHeader",
    text: "",
    dataTarget: function () {
        return '#' + this.get('target');
    }.property('target'),
    click: function (event) {
        event.preventDefault();
        /*
        $(event.target)
        .find("i")
        .toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
        */
    }
});

export default LinkNavHeaderView;